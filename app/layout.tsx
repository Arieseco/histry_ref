import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Sidebar } from '@/components/Sidebar'

// Google Fonts の Inter を読み込み（ラテン文字サブセット）
const inter = Inter({ subsets: ['latin'] })

// ページ全体に適用されるメタデータ（SEO・OGP用）
export const metadata: Metadata = {
  title: 'React リファレンス',
  description: 'React公式リファレンス風ドキュメントサイト',
}

/**
 * 全ページ共通のルートレイアウト
 * サイドバーとメインコンテンツエリアを横並びに配置する
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* h-screen + overflow-hidden でビューポート全体を固定し、内部でそれぞれスクロール */}
      <body className={`${inter.className} h-screen overflow-hidden`}>
        {/* サイドバー + メインコンテンツの2カラムレイアウト（高さ全体を占有） */}
        <div className="flex h-full">
          {/* サイドバー: 固定高さで独立スクロール */}
          <div className="h-full overflow-y-auto shrink-0">
            <Sidebar />
          </div>
          {/* メインコンテンツ: 残り幅を占有し独立スクロール */}
          <main className="flex-1 h-full overflow-y-auto p-8">
            <div className="max-w-4xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
