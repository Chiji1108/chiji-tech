import type { ImageMetadata } from "astro";
import deadlockJimakuIcon from "@/assets/deadlock-jimaku.png";
import deadlockJimakuShare from "@/assets/deadlock-jimaku-share.jpg";
import drivecostIcon from "@/assets/drivecost.png";
import myHomeIcon from "@/assets/my-home.png";
import myHomeShare from "@/assets/my-home-share.png";
import paylogIcon from "@/assets/paylog.png";
import paylogShare from "@/assets/paylog-share.png";
import pochicalIcon from "@/assets/pochical.png";
import pochicalShare from "@/assets/pochical-share.png";
import type { Locale } from "@/i18n";

export interface App {
  badges: string[];
  href: string;
  icon: ImageMetadata;
  // Shown large on the home page; apps without one get the compact card.
  image?: ImageMetadata;
  name: string;
  repo: string;
  summary: Record<Locale, string>;
}

export const paylog = {
  name: "PayLog",
  summary: {
    ja: "サブスク・クレジットカード・銀行口座などの支払い情報を整理・記録できる、iPhone・iPhone Duo・iPad対応のアプリです。",
    en: "An app for iPhone, iPhone Duo and iPad that organizes and records payment details such as subscriptions, credit cards and bank accounts.",
  },
  href: "/paylog",
  repo: "https://github.com/Chiji1108/PayLog",
  icon: paylogIcon,
  image: paylogShare,
  badges: [
    "SwiftUI",
    "NavigationSplitView",
    "SwiftData",
    "Swift Charts",
    "CloudKit",
    "EventKit",
    "TipKit",
    "StoreKit",
  ],
} satisfies App;

export const drivecost = {
  name: "DriveCost",
  summary: {
    ja: "給油記録から実燃費を計算し、ドライブ時のガソリン代を見積もれるシンプルなAndroidアプリです。",
    en: "A simple Android app that works out real fuel economy from fill-up records and estimates the fuel cost of a drive.",
  },
  href: "/drivecost",
  repo: "https://github.com/Chiji1108/DriveCost",
  icon: drivecostIcon,
  badges: [
    "Jetpack Compose",
    "Material Design 3",
    "Navigation 3",
    "Room",
    "Konfetti",
  ],
} satisfies App;

export const pochical = {
  name: "ポチカル",
  summary: {
    ja: "家族や友だちとも共有できるシフトカレンダーアプリです。",
    en: "A shift calendar app you can share with family and friends.",
  },
  href: "https://pochical.app",
  repo: "https://github.com/Chiji1108/pochical",
  icon: pochicalIcon,
  image: pochicalShare,
  badges: [
    "SwiftUI",
    "SQLiteData",
    "WidgetKit",
    "Jetpack Compose",
    "Durable Objects",
    "ConnectRPC",
    "Astro",
  ],
} satisfies App;

export const deadlockJimaku = {
  name: "デドロ字幕",
  summary: {
    ja: "Deadlockの配信に、ふりがな付きの字幕と翻訳を重ねられる配信者向けアプリです。",
    en: "An app for streamers that overlays captions with furigana and translations on Deadlock streams.",
  },
  href: "https://jimaku.deadlock.jp",
  repo: "https://github.com/Chiji1108/deadlock-jimaku",
  icon: deadlockJimakuIcon,
  image: deadlockJimakuShare,
  badges: [
    "Tauri",
    "Rust",
    "Svelte",
    "Astro",
    "Hono",
    "Qwen-Audio",
    "Perplexity Decider",
    "Hy-MT2",
  ],
} satisfies App;

export const myHome = {
  name: "My Home",
  summary: {
    ja: "自宅兼仕事場の間取りを再現した、歩いて回れる3Dモデルルームです。",
    en: "A walk-through 3D model of my home and workplace, recreated from its floor plan.",
  },
  href: "https://home.chiji.tech",
  repo: "https://github.com/Chiji1108/my-home",
  icon: myHomeIcon,
  image: myHomeShare,
  badges: [
    "react-three-fiber",
    "three.js",
    "drei",
    "postprocessing",
    "React",
    "Vite",
  ],
} satisfies App;

export const apps: App[] = [
  pochical,
  deadlockJimaku,
  paylog,
  myHome,
  drivecost,
];
