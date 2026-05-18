import { verifyInviteToken } from "@/lib/nurse-shift/invites";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const invite = verifyInviteToken(token);

  if (!invite) {
    return Response.json({ error: "Invite not found" }, { status: 404 });
  }

  return Response.json({
    expiresAt: invite.expiresAt,
    groupId: invite.groupId,
    groupName: invite.groupName,
  });
}
