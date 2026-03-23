/** サイドバーの各リンクアイテムの型 */
export type NavItem = {
  title: string // 表示名
  href: string  // リンク先パス
}

/** サイドバーのセクション（グループ）の型 */
export type NavSection = {
  title: string    // セクション見出し（例: "イントロダクション"）
  items: NavItem[] // そのセクションに属するリンク一覧
}

/**
 * サイドバーのナビゲーション定義
 * ドキュメントを追加した際は items に対応するエントリを追加する
 * href は /reference/<カテゴリ>/<ファイル名（拡張子なし）> の形式
 */
export const navigation: NavSection[] = [
  {
    title: 'イントロダクション',
    items: [
      { title: 'イントロダクション', href: '/reference/hooks/Chapter0' },
      { title: '0.1 Haskellって何なの？', href: '/reference/hooks/Chapter0#haskellって何なの' },
      { title: '0.2 世界に飛び込むのに必要なもの', href: '/reference/hooks/Chapter0#haskellの世界に飛び込むのに必要なもの' },
    ],
  },
  {
    title: '第1章 はじめの第一歩',
    items: [
      { title: '1.1 関数呼び出し', href: '/reference/hooks/useEffect#11-関数呼び出し' },
      { title: '1.2 赤ちゃんの最初の関数', href: '/reference/hooks/useEffect#12-赤ちゃんの最初の関数' },
      { title: '1.3 リスト入門', href: '/reference/hooks/useEffect#13-リスト入門' },
      { title: '1.4 レンジでチン!', href: '/reference/hooks/useEffect#14-レンジでチン' },
      { title: '1.5 リスト内包表記', href: '/reference/hooks/useEffect#15-リスト内包表記' },
      { title: '1.6 タプル', href: '/reference/hooks/useEffect#16-タプル' },
    ],
  },
  {
    title: '第2章 型を信じろ!',
    items: [
      { title: '2.1 明示的な型宣言', href: '/reference/hooks/useEffect#21-明示的な型宣言' },
      { title: '2.2 一般的なHaskellの型', href: '/reference/hooks/useEffect#22-一般的なhaskellの型' },
      { title: '2.3 型変数', href: '/reference/hooks/useEffect#23-型変数' },
      { title: '2.4 型クラス初級講座', href: '/reference/hooks/useEffect#24-型クラス初級講座' },
    ],
  },
  {
    title: '第3章 関数の構文',
    items: [
      { title: '3.1 パターンマッチ', href: '/reference/hooks/useEffect#31-パターンマッチ' },
      { title: '3.2 場合分けしてガード!', href: '/reference/hooks/useEffect#32-場合分けしてきっちりガード' },
      { title: '3.3 where ?!', href: '/reference/hooks/useEffect#33-where' },
      { title: '3.4 let It Be', href: '/reference/hooks/useEffect#34-let-it-be' },
      { title: '3.5 case 式', href: '/reference/hooks/useEffect#35-case-式' },
    ],
  },
  {
    title: '第4章 Hello再帰!',
    items: [
      { title: '4.1 最高に最高!', href: '/reference/hooks/useEffect#41-最高に最高' },
      { title: '4.2 さらにいくつかの再帰関数', href: '/reference/hooks/useEffect#42-さらにいくつかの再帰関数' },
      { title: '4.3 クイックソート!', href: '/reference/hooks/useEffect#43-クイックソート' },
      { title: '4.4 再帰的に考える', href: '/reference/hooks/useEffect#44-再帰的に考える' },
    ],
  },
  {
    title: '第5章 高階関数',
    items: [
      { title: '5.1 カリー化関数', href: '/reference/hooks/useEffect#51-カリー化関数' },
      { title: '5.2 高階実演', href: '/reference/hooks/useEffect#52-高階実演' },
      { title: '5.3 関数プログラマの道具箱', href: '/reference/hooks/useEffect#53-関数プログラマの道具箱' },
      { title: '5.4 ラムダ式', href: '/reference/hooks/useEffect#54-ラムダ式' },
      { title: '5.5 畳み込み、見込みアリ!', href: '/reference/hooks/useEffect#55-畳み込み見込みアリ' },
      { title: '5.6 $を使った関数適用', href: '/reference/hooks/useEffect#56-を使った関数適用' },
      { title: '5.7 関数合成', href: '/reference/hooks/useEffect#57-関数合成' },
    ],
  },
  {
    title: '第6章 モジュール',
    items: [
      { title: '6.1 モジュールをインポートする', href: '/reference/hooks/useEffect#61-モジュールをインポートする' },
      { title: '6.2 標準モジュールの関数で問題を解く', href: '/reference/hooks/useEffect#62-標準モジュールの関数で問題を解く' },
      { title: '6.3 キーから値へのマッピング', href: '/reference/hooks/useEffect#63-キーから値へのマッピング' },
      { title: '6.4 モジュールを作ってみよう', href: '/reference/hooks/useEffect#64-モジュールを作ってみよう' },
    ],
  },
  {
    title: '第7章 型・型クラスを作ろう',
    items: [
      { title: '7.1 新しいデータ型を定義する', href: '/reference/hooks/useEffect#71-新しいデータ型を定義する' },
      { title: '7.2 形づくる', href: '/reference/hooks/useEffect#72-形づくる' },
      { title: '7.3 レコード構文', href: '/reference/hooks/useEffect#73-レコード構文' },
      { title: '7.4 型引数', href: '/reference/hooks/useEffect#74-型引数' },
      { title: '7.5 インスタンスの自動導出', href: '/reference/hooks/useEffect#75-インスタンスの自動導出' },
      { title: '7.6 型シノニム', href: '/reference/hooks/useEffect#76-型シノニム' },
      { title: '7.7 再帰的なデータ構造', href: '/reference/hooks/useEffect#77-再帰的なデータ構造' },
      { title: '7.8 型クラス中級講座', href: '/reference/hooks/useEffect#78-型クラス中級講座' },
      { title: '7.9 YesとNoの型クラス', href: '/reference/hooks/useEffect#79-yesとnoの型クラス' },
      { title: '7.10 Functor 型クラス', href: '/reference/hooks/useEffect#710-functor-型クラス' },
      { title: '7.11 型を司るもの、種類', href: '/reference/hooks/useEffect#711-型を司るもの種類' },
    ],
  },
  {
    title: '第8章 入出力',
    items: [
      { title: '8.1 不純なものと純粋なものを分離する', href: '/reference/hooks/useEffect#81-不純なものと純粋なものを分離する' },
      { title: '8.2 Hello, World!', href: '/reference/hooks/useEffect#82-hello-world' },
      { title: '8.3 I/Oアクションどうしをまとめる', href: '/reference/hooks/useEffect#83-ioアクションどうしをまとめる' },
      { title: '8.4 便利なI/O関数', href: '/reference/hooks/useEffect#84-いくつかの便利なio関数' },
      { title: '8.5 I/Oアクションおさらい', href: '/reference/hooks/useEffect#85-ioアクションおさらい' },
    ],
  },
  {
    title: '第9章 もっと入出力',
    items: [
      { title: '9.1 ファイルとストリーム', href: '/reference/hooks/useEffect#91-ファイルとストリーム' },
      { title: '9.2 ファイルの読み書き', href: '/reference/hooks/useEffect#92-ファイルの読み書き' },
      { title: '9.3 ToDoリスト', href: '/reference/hooks/useEffect#93-todoリスト' },
      { title: '9.4 コマンドライン引数', href: '/reference/hooks/useEffect#94-コマンドライン引数' },
      { title: '9.5 ToDoリストをもっと楽しむ', href: '/reference/hooks/useEffect#95-todoリストをもっと楽しむ' },
      { title: '9.6 ランダム性', href: '/reference/hooks/useEffect#96-ランダム性' },
      { title: '9.7 bytestring', href: '/reference/hooks/useEffect#97-bytestring' },
    ],
  },
  {
    title: '第10章 関数型問題解決法',
    items: [
      { title: '10.1 逆ポーランド記法電卓', href: '/reference/hooks/useEffect#101-逆ポーランド記法電卓' },
      { title: '10.2 ヒースロー空港からロンドンへ', href: '/reference/hooks/useEffect#102-ヒースロー空港からロンドンへ' },
    ],
  },
  {
    title: '第11章 ファンクターへ',
    items: [
      { title: '11.1 帰ってきたファンクター', href: '/reference/hooks/useEffect#111-帰ってきたファンクター' },
      { title: '11.2 ファンクター則', href: '/reference/hooks/useEffect#112-ファンクター則' },
      { title: '11.3 アプリカティブファンクター', href: '/reference/hooks/useEffect#113-アプリカティブファンクターを使おう' },
      { title: '11.4 アプリカティブの便利な関数', href: '/reference/hooks/useEffect#114-アプリカティブの便利な関数' },
    ],
  },
  {
    title: '第12章 モノイド',
    items: [
      { title: '12.1 既存の型を新しい型にくるむ', href: '/reference/hooks/useEffect#121-既存の型を新しい型にくるむ' },
      { title: '12.2 Monoid 大集合', href: '/reference/hooks/useEffect#122-monoid-大集合' },
      { title: '12.3 モノイドとの遭遇', href: '/reference/hooks/useEffect#123-モノイドとの遭遇' },
      { title: '12.4 モノイドで畳み込む', href: '/reference/hooks/useEffect#124-モノイドで畳み込む' },
    ],
  },
  {
    title: '第13章 モナドがいっぱい',
    items: [
      { title: '13.1 アプリカティブファンクターを強化する', href: '/reference/hooks/useEffect#131-アプリカティブファンクターを強化する' },
      { title: '13.2 MaybeからはじめるMonad', href: '/reference/hooks/useEffect#132-maybeから始めるモナド' },
      { title: '13.3 Monad 型クラス', href: '/reference/hooks/useEffect#133-monad型クラス' },
      { title: '13.4 綱渡り', href: '/reference/hooks/useEffect#134-綱渡り' },
      { title: '13.5 do 記法', href: '/reference/hooks/useEffect#135-do記法' },
      { title: '13.6 リストモナド', href: '/reference/hooks/useEffect#136-リストモナド' },
      { title: '13.7 モナド則', href: '/reference/hooks/useEffect#137-モナド則' },
    ],
  },
  {
    title: '第14章 もうちょっとだけモナド',
    items: [
      { title: '14.1 Writer', href: '/reference/hooks/useEffect#141-writer中の人なんていません' },
      { title: '14.2 Reader', href: '/reference/hooks/useEffect#142-readerそれはあなたです' },
      { title: '14.3 計算の状態の正体', href: '/reference/hooks/useEffect#143-計算の状態の正体' },
      { title: '14.4 Errorを壁に', href: '/reference/hooks/useEffect#144-errorを壁に' },
      { title: '14.5 便利なモナディック関数特集', href: '/reference/hooks/useEffect#145-便利なモナディック関数特集' },
      { title: '14.6 安全な逆ポーランド記法電卓', href: '/reference/hooks/useEffect#146-安全な逆ポーランド記法電卓を作ろう' },
      { title: '14.7 モナディック関数の合成', href: '/reference/hooks/useEffect#147-モナディック関数の合成' },
      { title: '14.8 モナドを作る', href: '/reference/hooks/useEffect#148-モナドを作る' },
    ],
  },
  {
    title: '第15章 Zipper',
    items: [
      { title: '15.1 歩こう', href: '/reference/hooks/useEffect#151-歩こう' },
      { title: '15.2 リストに注目する', href: '/reference/hooks/useEffect#152-リストに注目する' },
      { title: '15.3 超シンプルなファイルシステム', href: '/reference/hooks/useEffect#153-超シンプルなファイルシステム' },
      { title: '15.4 足下にご注意', href: '/reference/hooks/useEffect#154-足下にご注意' },
      { title: '15.5 読んでくれてありがとう!', href: '/reference/hooks/useEffect#155-読んでくれてありがとう' },
    ],
  },
  {
    title: '付録',
    items: [
      { title: 'A.1 文字コードとtext', href: '/reference/hooks/useEffect#a1-文字コードとtext' },
      { title: 'A.2 OverloadedStrings 拡張', href: '/reference/hooks/useEffect#a2-overloadedstrings拡張' },
      { title: 'A.3 ViewPatterns 拡張', href: '/reference/hooks/useEffect#a3-viewpatterns拡張' },
    ],
  },
]

