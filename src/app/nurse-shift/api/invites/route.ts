import {
  buildInviteUrl,
  createInviteToken,
  INVITE_EXPIRES_IN_MS,
  normalizeInviteInput,
} from "@/lib/nurse-shift/invites";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const input = normalizeInviteInput(
    typeof body === "object" && body !== null ? body : {}
  );

  if ("error" in input) {
    return Response.json({ error: input.error }, { status: 400 });
  }

  try {
    const { token } = createInviteToken(input);

    return Response.json({
      expiresInMs: INVITE_EXPIRES_IN_MS,
      token,
      url: buildInviteUrl(request, token),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create invite";

    return Response.json({ error: message }, { status: 500 });
  }
}
