import { getInvite } from "@/lib/nurse-shift/invites";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ inviteId: string }> }
) {
  const { inviteId } = await params;
  const invite = await getInvite(inviteId);

  if (!invite) {
    return Response.json({ error: "Invite not found" }, { status: 404 });
  }

  return Response.json({
    expiresAt: invite.expiresAt,
    groupId: invite.groupId,
    groupName: invite.groupName,
  });
}
