# my-docs

React の Hooks などをまとめた、MDX ベースのリファレンスドキュメントサイトです。  
Next.js App Router と Tailwind CSS を使用し、React 公式ドキュメントに近いスタイルで構築しています。

## 技術スタック

| カテゴリ | 技術 |
|---------|-----|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript 5 |
| コンテンツ | MDX (next-mdx-remote) |
| Frontmatter 解析 | gray-matter |
| 構文ハイライト | Shiki + rehype-pretty-code |
| スタイリング | Tailwind CSS + @tailwindcss/typography |
| コンテナ | Docker / Docker Compose |

## ディレクトリ構成

```
my-docs/
├── app/
│   ├── layout.tsx                # ルートレイアウト
│   ├── page.tsx                  # ホームページ
│   └── reference/[...slug]/
│       └── page.tsx              # ドキュメントページ（動的ルート）
├── components/
│   ├── Callout.tsx               # Note / Pitfall / Warning コンポーネント
│   ├── CodeBlock.tsx             # コードブロック
│   ├── Sidebar.tsx               # サイドバーナビゲーション
│   └── TableOfContents.tsx       # 目次
├── docs/                         # MDX コンテンツ
│   └── hooks/
│       ├── useState.mdx
│       └── useEffect.mdx
├── lib/
│   ├── mdx.ts                    # MDX 読み込み・パース処理
│   └── nav.ts                    # ナビゲーション定義
└── styles/
    └── globals.css
```

## 開発方法

### ローカル（Node.js）

```bash
npm install
npm run dev
```

### Docker

```bash
docker compose up
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## ドキュメントの追加

1. `docs/` 以下に `.mdx` ファイルを作成する
2. ファイル先頭に Frontmatter を記述する

```mdx
---
title: useCallback
description: useCallback の使い方と注意点
---

## 概要
...
```

3. `lib/nav.ts` にナビゲーションエントリを追加する

```ts
{ title: 'useCallback', href: '/reference/hooks/useCallback' }
```

## MDX コンポーネント

| コンポーネント | 用途 |
|-------------|-----|
| `<Note>` | 補足情報（青） |
| `<Pitfall>` | よくある間違い（赤） |
| `<Warning>` | 重要な注意点（黄） |
