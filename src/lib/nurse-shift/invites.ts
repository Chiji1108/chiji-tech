import { createHmac, timingSafeEqual } from "node:crypto";

export interface InviteTokenPayload {
  expiresAt: number;
  groupId: string;
  groupName: string;
  issuedAt: number;
  version: 1;
}

export const INVITE_EXPIRES_IN_MS = 30 * 24 * 60 * 60 * 1000;
export const INVITE_PATH_BASE = "/nurse-shift";

const TOKEN_VERSION = 1;
const MAX_GROUP_ID_LENGTH = 200;
const MAX_GROUP_NAME_LENGTH = 100;
const TRAILING_SLASH_REGEX = /\/$/;

const getInviteTokenSecret = () => {
  const secret = process.env.INVITE_TOKEN_SECRET?.trim();

  if (!secret) {
    throw new Error("INVITE_TOKEN_SECRET is not configured");
  }

  return secret;
};

const encodeBase64Url = (input: string | Buffer) =>
  Buffer.from(input).toString("base64url");

const decodeBase64Url = (input: string) =>
  Buffer.from(input, "base64url").toString("utf8");

const sign = (encodedPayload: string) =>
  createHmac("sha256", getInviteTokenSecret())
    .update(encodedPayload)
    .digest("base64url");

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isValidPayload = (value: unknown): value is InviteTokenPayload => {
  if (!isRecord(value)) {
    return false;
  }

  return (
    value.version === TOKEN_VERSION &&
    typeof value.groupId === "string" &&
    value.groupId.trim().length > 0 &&
    value.groupId.length <= MAX_GROUP_ID_LENGTH &&
    typeof value.groupName === "string" &&
    value.groupName.trim().length > 0 &&
    value.groupName.length <= MAX_GROUP_NAME_LENGTH &&
    typeof value.issuedAt === "number" &&
    Number.isFinite(value.issuedAt) &&
    typeof value.expiresAt === "number" &&
    Number.isFinite(value.expiresAt)
  );
};

export const normalizeInviteInput = (input: {
  groupId?: unknown;
  groupName?: unknown;
}) => {
  const groupId = typeof input.groupId === "string" ? input.groupId.trim() : "";
  const groupName =
    typeof input.groupName === "string" ? input.groupName.trim() : "";

  if (!groupId || groupId.length > MAX_GROUP_ID_LENGTH) {
    return { error: "groupId is required" };
  }

  if (!groupName || groupName.length > MAX_GROUP_NAME_LENGTH) {
    return { error: "groupName is required" };
  }

  return { groupId, groupName };
};

export const createInviteToken = (input: {
  groupId: string;
  groupName: string;
}) => {
  const issuedAt = Date.now();
  const payload: InviteTokenPayload = {
    expiresAt: issuedAt + INVITE_EXPIRES_IN_MS,
    groupId: input.groupId,
    groupName: input.groupName,
    issuedAt,
    version: TOKEN_VERSION,
  };
  const encodedPayload = encodeBase64Url(JSON.stringify(payload));
  const signature = sign(encodedPayload);

  return {
    payload,
    token: `${encodedPayload}.${signature}`,
  };
};

export const verifyInviteToken = (token: string) => {
  const [encodedPayload, signature, ...extraParts] = token.split(".");

  if (!(encodedPayload && signature) || extraParts.length > 0) {
    return;
  }

  const expectedSignature = sign(encodedPayload);
  const signatureBuffer = Buffer.from(signature, "base64url");
  const expectedSignatureBuffer = Buffer.from(expectedSignature, "base64url");

  if (
    signatureBuffer.length !== expectedSignatureBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedSignatureBuffer)
  ) {
    return;
  }

  try {
    const payload = JSON.parse(decodeBase64Url(encodedPayload)) as unknown;

    if (!isValidPayload(payload) || payload.expiresAt <= Date.now()) {
      return;
    }

    return payload;
  } catch {
    return;
  }
};

export const buildInviteBaseUrl = (request: Request) => {
  const configuredBaseUrl = process.env.INVITE_BASE_URL?.trim();

  if (configuredBaseUrl) {
    return configuredBaseUrl.replace(TRAILING_SLASH_REGEX, "");
  }

  const url = new URL(request.url);
  return `${url.protocol}//${url.host}${INVITE_PATH_BASE}`;
};

export const buildInviteUrl = (request: Request, token: string) =>
  `${buildInviteBaseUrl(request)}/invite/${encodeURIComponent(token)}`;
