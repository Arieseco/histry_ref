/**
 * トップページ（/）
 * サイトの概要とナビゲーションへの誘導を表示する
 */
export default function Home() {
  return (
    // Tailwind Typography でリッチなテキストスタイルを適用
    <div className="prose prose-slate max-w-none">
      <h1>React リファレンス</h1>
      <p>
        React公式ドキュメント（
        {/* 外部リンクは新しいタブで開き、rel="noreferrer" でリファラー情報を送信しない */}
        <a
          href="https://ja.react.dev/reference/react"
          target="_blank"
          rel="noreferrer"
        >
          ja.react.dev
        </a>
        ）と同様のMDXベースのドキュメントサイトです。
      </p>
      <p>左のサイドバーからドキュメントを選択してください。</p>
    </div>
  )
}
