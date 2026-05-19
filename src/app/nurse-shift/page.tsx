import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CONTACT_EMAIL = "contact@chiji.tech";

const TECH_BADGES = [
  "Expo",
  "Jazz.tools",
  "local-first",
  "HeroUI",
  "Uniwind",
  "FlashList",
  "Convex",
];

export const metadata: Metadata = {
  title: "ナースシフト | CHIJI TECH",
  description:
    "ナースシフトは、看護師のシフト管理と共有をシンプルにするアプリです。",
  openGraph: {
    description:
      "看護師のシフト管理と共有をシンプルにするアプリです。共有グループを作り、招待リンクから参加できます。",
    images: [{ url: "/nurse-shift.png" }],
    title: "ナースシフト | CHIJI TECH",
    type: "website",
    url: "https://chiji.tech/nurse-shift",
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 font-semibold text-lg text-zinc-900 tracking-tight dark:text-zinc-100">
        {title}
      </h2>
      <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600 leading-relaxed shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
        {children}
      </div>
    </section>
  );
}

function ContactLink() {
  return (
    <a
      className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
      href={`mailto:${CONTACT_EMAIL}`}
    >
      {CONTACT_EMAIL}
    </a>
  );
}

export default function NurseShiftPage() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="w-full max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
        <nav className="mb-12 flex justify-end">
          <Link
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            href="/"
          >
            トップへ
          </Link>
        </nav>

        <header className="flex flex-col items-center py-10 text-center sm:py-14">
          <div className="relative">
            <Image
              alt="ナースシフト"
              className="rounded-3xl shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800"
              height={104}
              priority
              src="/nurse-shift.png"
              width={104}
            />
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-zinc-200 opacity-50 blur-lg dark:bg-zinc-800" />
          </div>

          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
            CHIJI TECH
          </p>
          <h1 className="mt-2 font-semibold text-3xl text-zinc-900 tracking-tight dark:text-zinc-100">
            ナースシフト
          </h1>
          <p className="mt-5 max-w-md text-pretty text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
            看護師のシフト管理と共有をシンプルにするアプリです。
          </p>
          <div className="mt-7 flex max-w-lg flex-wrap justify-center gap-2">
            {TECH_BADGES.map((badge) => (
              <span
                className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 font-mono text-xs text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                key={badge}
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex h-10 items-center rounded-md border border-zinc-200 bg-zinc-100 px-4 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500">
              App Store 近日公開予定
            </span>
            <span className="inline-flex h-10 items-center rounded-md border border-zinc-200 bg-zinc-100 px-4 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500">
              Google Play 近日公開予定
            </span>
          </div>
        </header>

        <Section title="ナースシフト サポート">
          <p>ご質問・不具合報告・ご要望は下記までご連絡ください。</p>
          <p>
            メール: <ContactLink />
          </p>
        </Section>

        <Section title="プライバシーポリシー">
          <p>
            {
              "ナースシフトは、シフト情報をアプリの同期基盤に保存し、共有グループ情報と招待コードをConvexに保存します。招待リンクには参加用の招待コードが含まれます。"
            }
          </p>
          <p>第三者へのデータ提供は行いません。</p>
          <p>
            お問い合わせ: <ContactLink />
          </p>
        </Section>
      </main>
    </div>
  );
}
