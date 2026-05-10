import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CONTACT_EMAIL = "contact@chiji.tech";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=tech.chiji.drivecost";

const TECH_BADGES = [
  "Jetpack Compose",
  "Material Design 3",
  "Navigation 3",
  "Room",
  "Konfetti",
];

export const metadata: Metadata = {
  title: "DriveCost | CHIJI TECH",
  description:
    "DriveCostのサポート情報とプライバシーポリシーを掲載しています。",
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

export default function DriveCostPage() {
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
              alt="DriveCost"
              className="rounded-3xl shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800"
              height={104}
              priority
              src="/drivecost.png"
              width={104}
            />
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-zinc-200 opacity-50 blur-lg dark:bg-zinc-800" />
          </div>

          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
            CHIJI TECH
          </p>
          <h1 className="mt-2 font-semibold text-3xl text-zinc-900 tracking-tight dark:text-zinc-100">
            DriveCost
          </h1>
          <p className="mt-5 max-w-md text-pretty text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
            給油時に走行距離と料金を記録し、実燃費やドライブ時のガソリン代を計算できるシンプルなアプリです。
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
          <a
            aria-label="DriveCostをGoogle Playで見る"
            className="mt-8 inline-flex transition-opacity hover:opacity-80"
            href={GOOGLE_PLAY_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Google Playで手に入れよう"
              height={40}
              src="/googleplay.svg"
              width={135}
            />
          </a>
        </header>

        <Section title="DriveCost サポート">
          <p>ご質問・不具合報告・ご要望は下記までご連絡ください。</p>
          <p>
            メール: <ContactLink />
          </p>
        </Section>

        <Section title="プライバシーポリシー">
          <p>
            DriveCostは、通信機能を使用しない完全オフラインアプリです。入力された走行距離、給油量、料金などの記録はユーザーの端末内に保存され、外部サーバーへ送信されることはありません。
          </p>
          <p>
            DriveCostは、個人情報を収集しません。第三者へのデータ提供も行いません。
          </p>
          <p>
            お問い合わせ: <ContactLink />
          </p>
        </Section>
      </main>
    </div>
  );
}
