import type { Metadata } from "next";
import Link from "next/link";

const CONTACT_EMAIL = "me@chiji.tech";

// NOTE: Fill these in with your actual business information for compliance.
const BUSINESS_INFO = {
  tradeName: "CHIJI TECH",
  operator: "千々岩真吾",
  address: "〒223-0066 神奈川県横浜市港北区高田西1-2-39-505",
  phone: "090-2446-1108",
};

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | CHIJI TECH",
  description:
    "特定商取引法に基づく表記（事業者情報、販売価格、支払い方法、キャンセル等）。",
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

function DefinitionList({
  items,
}: {
  items: Array<{ term: string; description: React.ReactNode }>;
}) {
  return (
    <dl className="grid gap-3 text-sm">
      {items.map((item) => (
        <div
          className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4"
          key={item.term}
        >
          <dt className="text-zinc-500 dark:text-zinc-400">{item.term}</dt>
          <dd className="text-zinc-900 sm:col-span-2 dark:text-zinc-100">
            {item.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function TokushoPage() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="w-full max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
        <header className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              CHIJI TECH
            </p>
            <h1 className="mt-2 font-semibold text-2xl text-zinc-900 tracking-tight dark:text-zinc-100">
              特定商取引法に基づく表記
            </h1>
            <p className="mt-3 text-pretty text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              本ページは、特定商取引法に基づき、提供する役務および取引条件等を表示しています。
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

        <Section title="事業者情報">
          <Card>
            <DefinitionList
              items={[
                { term: "屋号", description: BUSINESS_INFO.tradeName },
                { term: "運営統括責任者", description: BUSINESS_INFO.operator },
                { term: "所在地", description: BUSINESS_INFO.address },
                { term: "電話番号", description: BUSINESS_INFO.phone },
                {
                  term: "メールアドレス",
                  description: (
                    <a
                      className="underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300"
                      href={`mailto:${CONTACT_EMAIL}`}
                    >
                      {CONTACT_EMAIL}
                    </a>
                  ),
                },
              ]}
            />
          </Card>
        </Section>

        <Section title="提供する役務">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              ホームページ制作（要件整理、設計、デザイン、実装、公開作業、必要に応じた保守運用）。
            </p>
          </Card>
        </Section>

        <Section title="販売価格（役務の対価）">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              内容によりお見積りとなります。目安：ライト ¥80,000〜 /
              スタンダード ¥300,000〜。
            </p>
          </Card>
        </Section>

        <Section title="商品代金以外の必要料金">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              銀行振込の場合の振込手数料、ならびに制作に付随して発生する実費（例：有料素材、外部サービス利用料等）がある場合は事前にお知らせします。
            </p>
          </Card>
        </Section>

        <Section title="支払方法">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              クレジットカード決済（Stripe）または銀行振込（ご希望時）。
            </p>
          </Card>
        </Section>

        <Section title="支払時期">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              お見積り時に定める支払期日までにお支払いください（例：着手前の一括、または着手金＋納品時等）。
            </p>
          </Card>
        </Section>

        <Section title="役務の提供時期">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              原則として入金確認後に着手します。納期は内容により異なり、目安は1〜3ヶ月です。
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

        <Section title="表現および役務に関する注意書き">
          <Card>
            <p className="text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
              役務の性質上、制作物・成果はお客様のご要望や素材のご提供状況等により変動します。提供内容・仕様・成果物の範囲はお見積りおよび合意内容に従います。
            </p>
          </Card>
        </Section>

        <footer className="mt-12 border-zinc-200 border-t pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          <p>最終更新日：2025年12月20日</p>
        </footer>
      </main>
    </div>
  );
}
