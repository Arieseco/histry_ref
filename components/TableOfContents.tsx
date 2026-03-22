/**
 * ページ右側に表示する目次コンポーネント
 * xl 以上の画面幅でのみ表示される
 * 現在は見出しのみでリンクは未実装（TODO: MDX の見出しを動的に抽出する）
 */
export function TableOfContents() {
  return (
    // xl 以上の画面幅でのみ表示（タブレット・モバイルでは非表示）
    <aside className="w-56 shrink-0 hidden xl:block pl-8">
      {/* sticky: スクロールしても画面上部に固定 */}
      <div className="sticky top-8">
        <h5 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          このページの内容
        </h5>
        {/* 動的なTOC実装は別途追加 */}
      </div>
    </aside>
  )
}
