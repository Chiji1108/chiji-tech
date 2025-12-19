import type { Metadata } from "next";
import Link from "next/link";

const CONTACT_EMAIL = "contact@chiji.tech";

export const metadata: Metadata = {
  title: "ホームページ制作 | CHIJI TECH",
  description:
    "CHIJI TECHのホームページ制作サービス。制作の流れ、料金目安、納期、制作事例（青木内科クリニック様）をご紹介します。",
};

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="mt-10" id={id}>
      <h2 className="mb-4 font-semibold text-lg text-zinc-900 tracking-tight dark:text-zinc-100">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {children}
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function HomePageProductionPage() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="w-full max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
        <header className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              CHIJI TECH
            </p>
            <h1 className="mt-2 font-semibold text-2xl text-zinc-900 tracking-tight dark:text-zinc-100">
              ホームページ制作
            </h1>
            <p className="mt-3 text-pretty text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              小〜中規模のホームページ制作を、ヒアリングから公開まで一貫して対応します。医療関係の制作も多く、必要に応じて更新運用まで含めてご提案します。
            </p>
          </div>

          <nav className="shrink-0">
            <Link
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              href="/"
            >
              トップへ
            </Link>
          </nav>
        </header>

        <Section title="提供内容">
          <Card>
            <ul className="space-y-2 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              <li>
                -
                事前ヒアリング（目的・ターゲット・掲載内容の整理、参考サイト共有）
              </li>
              <li>- デザイン/構成案の作成（ページ構成・導線設計）</li>
              <li>- 実装（レスポンシブ対応、基本的なSEO配慮）</li>
              <li>- 公開（ドメイン/ホスティング設定のサポート）</li>
              <li>- 更新運用（必要に応じて保守・軽微改修）</li>
            </ul>
          </Card>
        </Section>

        <Section title="制作事例（埼玉県）">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                青木内科クリニック様
              </span>
              のホームページ制作を担当しました。
            </p>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              サイト：
              <ExternalLink href="https://aoki-naika-clinic.jp/">
                aoki-naika-clinic.jp
              </ExternalLink>
            </p>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed dark:text-zinc-500">
              ※掲載内容は許可を得た範囲で紹介しています。ロゴ・写真等の権利は各権利者に帰属します。
            </p>
          </Card>
        </Section>

        <Section title="料金目安">
          <div className="grid gap-4">
            <Card>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                ライト
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
                1ページ（LP）相当。既存素材（文章・画像）が揃っている方向け。
              </p>
              <p className="mt-3 font-medium text-sm text-zinc-900 dark:text-zinc-100">
                目安：¥80,000〜
              </p>
            </Card>

            <Card>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                スタンダード
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
                複数ページ構成（例：トップ/診療案内/アクセス/お知らせ等）。
              </p>
              <p className="mt-3 font-medium text-sm text-zinc-900 dark:text-zinc-100">
                目安：¥300,000〜
              </p>
            </Card>

            <Card>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                保守・更新
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
                月額プラン内に軽微な修正（文言更新・画像差し替えなど）が含まれます。ページ追加などの大規模な修正は都度見積もりです。
              </p>
              <p className="mt-3 font-medium text-sm text-zinc-900 dark:text-zinc-100">
                目安：月額（軽微修正込み） +
                大規模修正は¥10,000/回〜（都度見積）
              </p>
            </Card>
          </div>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed dark:text-zinc-500">
            ※上記は目安です。ページ数・素材の有無・機能要件（予約導線、ブログ、お問い合わせ等）により変動します。
          </p>
        </Section>

        <Section title="納期目安">
          <Card>
            <ul className="space-y-2 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              <li>- ライト：1ヶ月</li>
              <li>- スタンダード：2〜3ヶ月</li>
              <li>- 素材未確定/撮影/文章作成が必要な場合：要相談</li>
            </ul>
          </Card>
        </Section>

        <Section title="お支払い">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              クレジットカード決済（Stripe）に対応します。請求タイミングや分割（着手金+検収後など）は案件によりご相談ください。
            </p>
          </Card>
        </Section>

        <Section title="キャンセル・返金">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              着手前のキャンセルは原則可能です。着手後は、進行状況に応じて実費・工数分をご請求させていただく場合があります。詳細はお見積もり時に明記します。
            </p>
          </Card>
        </Section>

        <Section title="事業者情報">
          <Card>
            <dl className="grid gap-3 text-sm">
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
                <dt className="text-zinc-500 dark:text-zinc-400">屋号</dt>
                <dd className="text-zinc-900 sm:col-span-2 dark:text-zinc-100">
                  CHIJI TECH
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
                <dt className="text-zinc-500 dark:text-zinc-400">
                  お問い合わせ
                </dt>
                <dd className="text-zinc-900 sm:col-span-2 dark:text-zinc-100">
                  <a
                    className="underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
            </dl>
          </Card>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed dark:text-zinc-500">
            ※住所・電話番号等は、必要に応じて個別にご案内します。
          </p>
        </Section>

        <Section id="contact" title="お問い合わせ">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              ご相談はメールでお送りください。2〜3営業日を目安にご返信します。
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 font-medium text-sm text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "ホームページ制作のご相談"
                )}`}
              >
                メールで相談する
              </a>
              {/* <ExternalLink href="https://www.linkedin.com/in/chiji1108/">
                LinkedInでも可
              </ExternalLink> */}
            </div>
          </Card>
        </Section>
      </main>
    </div>
  );
}
