/**
 * トップページ（/）
 * サイトの概要とナビゲーションへの誘導を表示する
 */
export default function Home() {
  return (
    // Tailwind Typography でリッチなテキストスタイルを適用
    <div className="prose prose-slate max-w-none">
      <h1>すごいHaskellたのしく学ぼう！</h1>
      <p>左のサイドバーからドキュメントを選択してください。</p>
    </div>
  )
}
