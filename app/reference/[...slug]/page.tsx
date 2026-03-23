import { getMdxContent } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Note, Pitfall, Warning } from '@/components/Callout'
import { CodeBlock } from '@/components/CodeBlock'
import { notFound } from 'next/navigation'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

// MDX内で使用できるカスタムコンポーネントのマッピング
// pre をコピーボタン付き CodeBlock に差し替える
const components = { Note, Pitfall, Warning, pre: CodeBlock }

/**
 * docs/ 以下の MDX ファイルを動的に表示するページ
 * URL例: /reference/hooks/useState → docs/hooks/useState.mdx を読み込む
 */
export default async function Page({
  params,
}: {
  params: { slug: string[] }
}) {
  try {
    // slug からMDXファイルを取得し、ソースとフロントマターを分離
    const { source, frontmatter } = await getMdxContent(params.slug)
    return (
      <article className="prose prose-slate max-w-none">
        {/* フロントマターの title をページ見出しとして表示 */}
        <h1>{frontmatter.title as string}</h1>
        <MDXRemote
          source={source}
          components={components}
          options={{
            mdxOptions: {
              // rehype-pretty-code でコードブロックにシンタックスハイライトを適用
              // rehype-slug が見出しに id を付与し、アンカーリンクでの遷移を可能にする
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              rehypePlugins: [rehypeSlug, [rehypePrettyCode as any, { theme: 'github-dark' }]],
            },
          }}
        />
      </article>
    )
  } catch {
    // MDXファイルが存在しない場合は 404 ページへ
    notFound()
  }
}
