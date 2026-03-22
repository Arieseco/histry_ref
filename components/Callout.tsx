import { ReactNode } from 'react'

/** Callout コンポーネント共通の Props */
type CalloutProps = { children: ReactNode }

/**
 * 補足情報を表示するコールアウト（青）
 * MDX内で <Note> タグとして使用する
 */
export function Note({ children }: CalloutProps) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4 text-blue-900">
      {/* ラベル: 小文字大文字混在を避けるため uppercase で統一 */}
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-600">
        Note
      </p>
      <div className="prose-sm">{children}</div>
    </div>
  )
}

/**
 * よくある間違いや落とし穴を表示するコールアウト（赤）
 * MDX内で <Pitfall> タグとして使用する
 */
export function Pitfall({ children }: CalloutProps) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-red-400 bg-red-50 p-4 text-red-900">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-red-600">
        Pitfall
      </p>
      <div className="prose-sm">{children}</div>
    </div>
  )
}

/**
 * 重要な注意点を表示するコールアウト（黄）
 * MDX内で <Warning> タグとして使用する
 */
export function Warning({ children }: CalloutProps) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-yellow-900">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-yellow-600">
        Warning
      </p>
      <div className="prose-sm">{children}</div>
    </div>
  )
}
