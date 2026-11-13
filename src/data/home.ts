import type { Locale } from "@/i18n";

interface Work {
  badge: string;
  cta?: { href: string; label: string };
  description: string;
  tags?: string[];
  title: string;
}

interface Home {
  appsTitle: string;
  description: string;
  details: string;
  imageAlt: (app: string) => string;
  intro: string[];
  legal: string;
  // The link to the page in the other language.
  other: { href: string; label: string };
  repoLabel: (app: string) => string;
  works: Work[];
  worksTitle: string;
}

const tags = [
  "Next.js",
  "TanStack Start",
  "Astro",
  "EmDash",
  "ElysiaJS",
  "Convex",
  "Turso",
  "Jazz.tools",
  "Upstash",
  "Clerk",
  "PostHog",
  "Vercel",
  "Cloudflare",
  "Expo",
  "SwiftUI",
];

// Where each language's home page lives, for the links between them.
export const homePaths: Record<Locale, string> = { ja: "/", en: "/en" };

export const home: Record<Locale, Home> = {
  ja: {
    description:
      "身近な人の悩みを解決するサービス開発が生き甲斐のソフトウェアエンジニア",
    intro: [
      "身近な人の悩みを解決するサービス開発が生き甲斐です。昔からモノづくりが好きで、それに関連した技術を学ぶことが趣味です。時々アウトプットもします。",
      "あとサウナとシーシャとドライブが好きです。",
    ],
    other: { href: homePaths.en, label: "English" },
    appsTitle: "個人開発",
    worksTitle: "CHIJI TECH 事業",
    details: "詳細を見る",
    imageAlt: (app) => `${app}の紹介画像`,
    repoLabel: (app) => `${app}のGitHubリポジトリ`,
    legal: "特定商取引法に基づく表記",
    works: [
      {
        title: "ソフトウェア開発",
        badge: "本業",
        description:
          "学生の頃から趣味がソフトウェアサービス開発だったので、そのままお仕事になりました。Web系フルスタックエンジニアという形で、新規事業のゼロイチが得意です。ネイティブモバイルアプリ開発もします。個人開発からチーム開発、フロントエンド、バックエンド、インフラは勿論、要件定義からリファクタリング、エンジニア採用まで何でもやってましたが、やっぱり一番好きなのは、最新の技術を使ってみんなで気持ちよく開発することです。推しワードはless is moreとdeveloper experienceです。",
        tags,
      },
      {
        title: "ホームページ制作",
        badge: "副業",
        description:
          "テンプレートを使った小規模から中規模までのホームページ制作をしてます。制作に付随するヒアリングから内容の提案など諸々全てやります。それだけでなくホームページに関連して、アクセス動画の制作や地図制作、はたまたイメージソングの音楽制作など何でもしてます。医療関係の方が多いです。",
        cta: { label: "詳細を見る", href: "/hp" },
      },
      {
        title: "IT何でも屋",
        badge: "非営利",
        description:
          "ITに疎いから自分では出来ないけど、業者に頼むほどでもないな…っていう方々向けに、簡単なDX導入や、ITに関する何でも屋さんをしてます。ドメイン、メールアドレスの取得から、パソコン自体のお掃除やパーツ交換、ソフトのアップデートから新ソフトの使い方のレクチャー、MiniDVテープやVHSテープのダビングなど何でもやります。家族経営の方が多いです。",
      },
    ],
  },
  en: {
    description:
      "A software engineer who lives for building services that solve problems for the people close by",
    intro: [
      "Building services that solve problems for the people around me is what I live for. I have always loved making things, and learning the technology behind them is my hobby. Now and then I write about it too.",
      "I also love saunas, shisha and driving.",
    ],
    other: { href: homePaths.ja, label: "日本語" },
    appsTitle: "Personal projects",
    worksTitle: "What I do as CHIJI TECH",
    details: "View details",
    imageAlt: (app) => `${app} preview image`,
    repoLabel: (app) => `${app} on GitHub`,
    legal: "Legal notice (Japanese)",
    works: [
      {
        title: "Software development",
        badge: "Main work",
        description:
          "Building software services was my hobby as a student, and it simply became my job. I work as a full-stack web engineer and am at my best taking a new product from zero to one. I build native mobile apps too. I have done a bit of everything, from solo projects to team projects, across front end, back end and infrastructure, and from requirements through refactoring to hiring engineers. What I love most, though, is building with the latest technology in a way that feels good for the whole team. My favorite phrases are “less is more” and “developer experience.”",
        tags,
      },
      {
        title: "Website production",
        badge: "Side work",
        description:
          "I build small to mid-sized websites from templates, and handle everything that comes with it, from the first interview to proposing the content. I also take on whatever a site needs around it: directions videos, maps, even a theme song. Many of my clients work in healthcare.",
        cta: { label: "View details (Japanese)", href: "/hp" },
      },
      {
        title: "IT handyman",
        badge: "Non-profit",
        description:
          "This is for people who are not comfortable enough with IT to do it themselves, but for whom hiring a company would be too much. I help them bring in simple digital tools and do IT odd jobs of every kind: getting a domain or an email address, cleaning a PC or swapping its parts, updating software, showing how to use a new app, copying MiniDV and VHS tapes, and so on. Many of my clients are family-run businesses.",
      },
    ],
  },
};
