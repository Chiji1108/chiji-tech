import type { ImageMetadata } from "astro";
import drivecostIcon from "@/assets/drivecost.png";
import paylogIcon from "@/assets/paylog.png";
import pochicalIcon from "@/assets/pochical.png";

export interface App {
  badges: string[];
  href: string;
  icon: ImageMetadata;
  name: string;
  summary: string;
}

export const paylog = {
  name: "PayLog",
  summary:
    "サブスク・クレジットカード・銀行口座などの支払い情報を整理・記録できるiOSアプリです。",
  href: "/paylog",
  icon: paylogIcon,
  badges: [
    "SwiftUI",
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
  summary:
    "給油記録から実燃費を計算し、ドライブ時のガソリン代を見積もれるシンプルなAndroidアプリです。",
  href: "/drivecost",
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
  summary:
    "勤務を選んで、日付をポチポチ。家族や友だちとも共有できるシフトカレンダーアプリです。",
  href: "https://pochical.app",
  icon: pochicalIcon,
  badges: [
    "SwiftUI",
    "Jetpack Compose",
    "Cloudflare Workers",
    "Durable Objects",
    "Connect",
    "Protocol Buffers",
    "Astro",
  ],
} satisfies App;

export const apps: App[] = [paylog, drivecost, pochical];
