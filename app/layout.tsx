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
      <body className={inter.className}>
        {/* サイドバー + メインコンテンツの2カラムレイアウト */}
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8 max-w-4xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
