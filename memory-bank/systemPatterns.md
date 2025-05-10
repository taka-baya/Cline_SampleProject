# システム設計パターン

## アーキテクチャ概要
```mermaid
flowchart LR
    A[クライアント] --> B[Next.jsアプリ]
    B --> C[API Routes]
    C --> D[外部サービス]
```

## 主要コンポーネント
1. レイアウトシステム:
   - App Layout (全ページ共通)
   - Page Layout (ページ固有)
   - Component Layout (UI部品)

2. 状態管理:
   - React Context (グローバル状態)
   - useState/useReducer (ローカル状態)
   - SWR (データフェッチ)

3. ルーティング:
   - Next.jsファイルシステムルーティング
   - 動的ルート [/services/[id]]
   - ミドルウェアによる認証

## 設計原則
- Atomic Designに準拠
- コンポーネントの責務分離
- テスト容易性を考慮
- パフォーマンス最適化優先
