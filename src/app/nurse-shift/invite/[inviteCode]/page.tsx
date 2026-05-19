import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getInvitePreview } from "@/lib/nurse-shift/invites";

interface InvitePageProps {
  params: Promise<{ inviteCode: string }>;
}

const APP_NAME = "ナースシフト";
const APP_SCHEME = "nurse-shift";
const INVALID_INVITE_MESSAGE = "この招待リンクは無効です";

const loadInvite = async (params: InvitePageProps["params"]) => {
  const { inviteCode } = await params;
  const normalizedInviteCode = inviteCode.trim();

  if (!normalizedInviteCode) {
    return { inviteCode: normalizedInviteCode };
  }

  return {
    invite: await getInvitePreview(normalizedInviteCode),
    inviteCode: normalizedInviteCode,
  };
};

export async function generateMetadata({
  params,
}: InvitePageProps): Promise<Metadata> {
  const { invite } = await loadInvite(params);

  if (!invite) {
    return {
      description: INVALID_INVITE_MESSAGE,
      title: `${INVALID_INVITE_MESSAGE} | ${APP_NAME}`,
    };
  }

  const title = `${invite.groupName}への招待 | ${APP_NAME}`;
  const description = `${invite.groupName}に参加できます。`;

  return {
    description,
    openGraph: {
      description,
      images: [{ url: "/nurse-shift.png" }],
      title,
      type: "website",
    },
    title,
  };
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { invite, inviteCode } = await loadInvite(params);
  const appUrl = `${APP_SCHEME}://invite/${encodeURIComponent(inviteCode)}`;

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="flex w-full max-w-2xl flex-col px-6 py-16 sm:px-8 sm:py-24">
        <nav className="mb-12 flex justify-end">
          <Link
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            href="/nurse-shift"
          >
            アプリ紹介へ
          </Link>
        </nav>

        <section className="flex flex-1 flex-col items-center justify-center py-10 text-center sm:py-14">
          <div className="relative">
            <Image
              alt={APP_NAME}
              className="rounded-3xl shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800"
              height={104}
              priority
              src="/nurse-shift.png"
              width={104}
            />
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-zinc-200 opacity-50 blur-lg dark:bg-zinc-800" />
          </div>

          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
            {APP_NAME}
          </p>
          <h1 className="mt-2 font-semibold text-3xl text-zinc-900 tracking-tight dark:text-zinc-100">
            {invite?.groupName ?? "招待"}
          </h1>
          {invite ? (
            <>
              <p className="mt-5 max-w-md text-pretty text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
                このグループへの招待リンクです。アプリを開いて、グループ内で表示する名前を入力すると参加できます。
              </p>

              <a
                className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 font-medium text-sm text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
                href={appUrl}
              >
                アプリで開く
              </a>
            </>
          ) : (
            <p className="mt-5 max-w-md text-pretty text-red-600 text-sm leading-relaxed dark:text-red-400">
              {INVALID_INVITE_MESSAGE}
            </p>
          )}

          <div className="mt-8 w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-5 text-left text-sm text-zinc-600 leading-relaxed shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              アプリをまだお持ちでない場合
            </p>
            <p className="mt-2">
              App Store / Google Play
              の公開準備中です。公開後、このページからインストールできるようになります。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
