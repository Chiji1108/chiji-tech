import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

function ZennIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-labelledby="zenn-icon-title"
      className={className}
      fill="currentColor"
      viewBox="0 0 88.3 88.3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="zenn-icon-title">Zenn</title>
      <path d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9C2.8,82.5,3.2,83.3,3.9,83.3z" />
      <path d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1h16.3C61.3,83.3,62.1,82.9,62.5,82.1z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chiji1108/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/chiji1108",
    icon: Github,
  },
  {
    name: "Zenn",
    href: "https://zenn.dev/chiji",
    icon: ZennIcon,
  },
];

const workItems = [
  {
    title: "ソフトウェア開発",
    badge: "本業",
    description:
      "学生の頃から趣味がソフトウェアサービス開発だったので、そのままお仕事になりました。Web系フルスタックエンジニアという形で、新規事業のゼロイチが得意です。ネイティブモバイルアプリ開発もします。個人開発からチーム開発、フロントエンド、バックエンド、インフラは勿論、要件定義からリファクタリング、エンジニア採用まで何でもやってましたが、やっぱり一番好きなのは、最新の技術を使ってみんなで気持ちよく開発することです。推しワードはless is moreとdeveloper experienceです。",
    tags: [
      ["Next.js", "TanStack Start", "ElysiaJS"],
      ["Convex", "Turso", "Jazz.tools"],
      ["Upstash", "Clerk", "PostHog"],
      ["Vercel", "Cloudflare"],
      ["Expo", "SwiftUI"],
    ],
  },
  {
    title: "ホームページ制作",
    badge: "副業",
    description:
      "テンプレートを使った小規模から中規模までのホームページ制作をしてます。制作に付随するヒアリングから内容の提案など諸々全てやります。それだけでなくホームページに関連して、アクセス動画の制作や地図制作、はたまたイメージソングの音楽制作など何でもしてます。医療関係の方が多いです。",
  },
  {
    title: "IT何でも屋",
    badge: "非営利",
    description:
      "ITに疎いから自分では出来ないけど、業者に頼むほどでもないな…っていう方々向けに、簡単なDX導入や、ITに関する何でも屋さんをしてます。ドメイン、メールアドレスの取得から、パソコン自体のお掃除やパーツ交換、ソフトのアップデートから新ソフトの使い方のレクチャー、MiniDVテープやVHSテープのダビングなど何でもやります。家族経営の方が多いです。",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="w-full max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Profile Section */}
        <section className="flex flex-col items-center gap-6">
          <div className="relative">
            <Image
              alt="Shingo Chijiiwa"
              className="rounded-full ring-4 ring-zinc-100 dark:ring-zinc-800"
              height={120}
              priority
              src="/me.jpg"
              width={120}
            />
            <div className="absolute -inset-1 -z-10 rounded-full bg-linear-to-br from-zinc-200 to-zinc-300 opacity-50 blur-lg dark:from-zinc-700 dark:to-zinc-800" />
          </div>

          <h1 className="font-semibold text-2xl tracking-tight">
            Shingo Chijiiwa
          </h1>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                aria-label={link.name}
                className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                href={link.href}
                key={link.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </section>

        {/* Bio Section */}
        <section className="mt-12">
          <p className="text-pretty text-center text-zinc-600 leading-relaxed dark:text-zinc-400">
            身近な人の悩みを解決するサービス開発が生き甲斐です。昔からモノづくりが好きで、それに関連した技術を学ぶことが趣味です。時々アウトプットもします。
          </p>
          <p className="text-pretty text-center text-zinc-600 leading-relaxed dark:text-zinc-400">
            あとサウナとシーシャとドライブが好きです。
          </p>
        </section>

        {/* Work Section */}
        <section className="mt-16">
          <h2 className="mb-8 text-center font-semibold text-lg text-zinc-900 tracking-tight dark:text-zinc-100">
            CHIJI TECH 事業
          </h2>

          <div className="space-y-8">
            {workItems.map((item) => (
              <article
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                key={item.title}
              >
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 font-medium text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {item.badge}
                  </span>
                </div>

                <p className="text-pretty text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
                  {item.description}
                </p>

                {item.tags !== undefined && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.flat().map((tag) => (
                      <span
                        className="rounded-md bg-zinc-50 px-2 py-1 font-mono text-xs text-zinc-500 dark:bg-zinc-800/50 dark:text-zinc-500"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
