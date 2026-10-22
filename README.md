# chiji.tech

Shingo Chijiiwa / CHIJI TECH のサイト。Astro で全ページを静的に書き出し、Cloudflare Workers の Static Assets で配信する。

## 開発

```bash
bun install
bun run dev
```

- `bun run build`：`dist/` に書き出す（画像はビルド時に表示サイズの WebP にする）
- `bun run preview`：書き出したものを `wrangler dev` で本番と同じ配信の仕方で見る
- `bun run typecheck`：`astro check`
- `bun x ultracite fix`：lint と整形（コミット時に lefthook も走らせる）

## デプロイ

main へのマージで Workers Builds が `bun run build` と `bunx wrangler deploy` を走らせる。手でデプロイはしない。
