const TRAILING_SLASH_REGEX = /\/$/;

type InvitePreviewResponse =
  | {
      groupEmoji: string;
      groupName: string;
      ok: true;
    }
  | {
      ok: false;
      reason: string;
    };

const getConvexHttpUrl = () => {
  const convexHttpUrl = process.env.NURSE_SHIFT_CONVEX_HTTP_URL?.trim();

  if (!convexHttpUrl) {
    throw new Error("NURSE_SHIFT_CONVEX_HTTP_URL is not configured");
  }

  return convexHttpUrl.replace(TRAILING_SLASH_REGEX, "");
};

export const getInvitePreview = async (inviteCode: string) => {
  const response = await fetch(
    `${getConvexHttpUrl()}/invite-preview?inviteCode=${encodeURIComponent(
      inviteCode
    )}`,
    { next: { revalidate: 30 } }
  );

  if (!response.ok) {
    return;
  }

  const preview = (await response.json()) as InvitePreviewResponse;

  if (!preview.ok) {
    return;
  }

  return {
    groupEmoji: preview.groupEmoji,
    groupName: preview.groupName,
  };
};
