'use client'

import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react'

/** <pre> 要素の Props をそのまま受け取る型エイリアス */
type Props = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>

/**
 * コードブロックの表示コンポーネント（コピーボタン付き）
 * MDX内の ``` コードフェンスに対応する <pre> 要素をラップし、
 * 右上にコピーボタンを表示する。コピー後は「✓ コピー済み」に変化する。
 */
export function CodeBlock({ children, ...props }: Props) {
  const preRef = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = preRef.current?.innerText ?? ''
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <pre
        ref={preRef}
        {...props}
        className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm"
      >
        {children}
      </pre>
      <button
        onClick={handleCopy}
        aria-label="コードをコピー"
        className="absolute top-2 right-2 px-2 py-1 text-xs rounded
          bg-gray-700 text-gray-300 opacity-0 group-hover:opacity-100
          hover:bg-gray-600 hover:text-white transition-all duration-150"
      >
        {copied ? '✓ コピー済み' : 'コピー'}
      </button>
    </div>
  )
}
