import { randomBytes } from "node:crypto";
import { Redis } from "@upstash/redis";

export interface InviteRecord {
  expiresAt: number;
  groupId: string;
  groupName: string;
}

export const INVITE_EXPIRES_IN_MS = 30 * 24 * 60 * 60 * 1000;
export const INVITE_PATH_BASE = "/nurse-shift";

const INVITE_EXPIRES_IN_SECONDS = INVITE_EXPIRES_IN_MS / 1000;
const INVITE_ID_LENGTH = 12;
const MAX_CREATE_INVITE_ATTEMPTS = 3;
const MAX_GROUP_ID_LENGTH = 200;
const MAX_GROUP_NAME_LENGTH = 100;
const TRAILING_SLASH_REGEX = /\/$/;

const redis = Redis.fromEnv();

const getInviteKey = (inviteId: string) => `nurse-shift:invite:${inviteId}`;

const createInviteId = () =>
  randomBytes(12).toString("base64url").slice(0, INVITE_ID_LENGTH);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isValidInviteRecord = (value: unknown): value is InviteRecord => {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.groupId === "string" &&
    value.groupId.trim().length > 0 &&
    value.groupId.length <= MAX_GROUP_ID_LENGTH &&
    typeof value.groupName === "string" &&
    value.groupName.trim().length > 0 &&
    value.groupName.length <= MAX_GROUP_NAME_LENGTH &&
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

export const createInvite = async (input: {
  groupId: string;
  groupName: string;
}) => {
  const invite: InviteRecord = {
    expiresAt: Date.now() + INVITE_EXPIRES_IN_MS,
    groupId: input.groupId,
    groupName: input.groupName,
  };

  for (let attempt = 0; attempt < MAX_CREATE_INVITE_ATTEMPTS; attempt += 1) {
    const inviteId = createInviteId();
    const result = await redis.set(getInviteKey(inviteId), invite, {
      ex: INVITE_EXPIRES_IN_SECONDS,
      nx: true,
    });

    if (result === "OK") {
      return { invite, inviteId };
    }
  }

  throw new Error("Failed to create unique invite id");
};

export const getInvite = async (inviteId: string) => {
  const invite = await redis.get<unknown>(getInviteKey(inviteId));

  if (!isValidInviteRecord(invite) || invite.expiresAt <= Date.now()) {
    return;
  }

  return invite;
};

export const buildInviteBaseUrl = (request: Request) => {
  const configuredBaseUrl = process.env.INVITE_BASE_URL?.trim();

  if (configuredBaseUrl) {
    return configuredBaseUrl.replace(TRAILING_SLASH_REGEX, "");
  }

  const url = new URL(request.url);
  return `${url.protocol}//${url.host}${INVITE_PATH_BASE}`;
};

export const buildInviteUrl = (request: Request, inviteId: string) =>
  `${buildInviteBaseUrl(request)}/invite/${encodeURIComponent(inviteId)}`;
