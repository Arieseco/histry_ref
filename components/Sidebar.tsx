'use client' // usePathname はクライアントフックのため必須

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/nav'
import clsx from 'clsx'

/**
 * 左サイドバーのナビゲーションコンポーネント
 * lib/nav.ts で定義したセクション・リンク一覧を表示し、
 * 現在のパスに一致するリンクをハイライトする
 */
export function Sidebar() {
  // 現在の URL パスを取得してアクティブリンクの判定に使用
  const pathname = usePathname()

  return (
    // md 以上の画面幅でのみ表示（モバイルでは非表示）
    <nav className="w-64 border-r border-gray-200 p-6 hidden md:block">
      {/* サイトタイトル（クリックでトップページへ） */}
      <div className="mb-6">
        <Link href="/" className="text-lg font-bold text-gray-900 no-underline">
          すごいHaskellたのしく学ぼう！
        </Link>
      </div>
      {/* nav.ts のセクション一覧をループして表示 */}
      {navigation.map((section, index) => (
        <div key={section.title}>
          {/* 最初のセクション以外は上に区切り線を表示 */}
          {index > 0 && <hr className="border-gray-200 my-3" />}
          <div className="mb-2">
          {/* セクション見出し */}
          <h5 className="mb-2 text-xs font-semibold tracking-wide text-gray-500">
            {section.title}
          </h5>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    'block rounded px-2 py-1 text-sm no-underline',
                    // 現在のページと一致する場合は青くハイライト
                    pathname === item.href
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </nav>
  )
}
