/** サイドバーの各リンクアイテムの型 */
export type NavItem = {
  title: string // 表示名
  href: string  // リンク先パス
}

/** サイドバーのセクション（グループ）の型 */
export type NavSection = {
  title: string    // セクション見出し（例: "Hooks"）
  items: NavItem[] // そのセクションに属するリンク一覧
}

/**
 * サイドバーのナビゲーション定義
 * ドキュメントを追加した際は items に対応するエントリを追加する
 * href は /reference/<カテゴリ>/<ファイル名（拡張子なし）> の形式
 */
export const navigation: NavSection[] = [
  {
    title: 'Hooks',
    items: [
      { title: 'useState', href: '/reference/hooks/useState' },
      { title: 'useEffect', href: '/reference/hooks/useEffect' },
    ],
  },
]
