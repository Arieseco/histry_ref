import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * slug 配列から対応する MDX ファイルを読み込み、
 * 本文（source）とフロントマター（frontmatter）を返す
 *
 * @param slug - URL の動的パス部分（例: ['hooks', 'useState']）
 * @returns source: MDX 本文, frontmatter: title などのメタデータ
 * @throws ファイルが存在しない場合は例外をスローする（呼び出し側で notFound() に変換）
 */
export async function getMdxContent(slug: string[]) {
  // slug を結合して docs/ 以下のファイルパスを構築（例: docs/hooks/useState.mdx）
  const filePath = path.join(process.cwd(), 'docs', ...slug) + '.mdx'
  const raw = fs.readFileSync(filePath, 'utf-8')
  // gray-matter でフロントマター（---で囲まれた部分）と本文を分離
  const { content, data } = matter(raw)
  return { source: content, frontmatter: data }
}
