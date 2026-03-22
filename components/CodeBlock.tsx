import { DetailedHTMLProps, HTMLAttributes } from 'react'

/** <pre> 要素の Props をそのまま受け取る型エイリアス */
type Props = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>

/**
 * コードブロックの表示コンポーネント
 * MDX内の ``` コードフェンスに対応する <pre> 要素をラップし、
 * スタイルを統一する（ダーク背景・角丸・横スクロール対応）
 */
export function CodeBlock({ children, ...props }: Props) {
  return (
    <pre
      {...props}
      // bg-gray-900: ダーク背景 / overflow-x-auto: 長いコードを横スクロール
      className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm"
    >
      {children}
    </pre>
  )
}
