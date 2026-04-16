# 起動方法

## Reactの起動
`MyApp/ToDo/client`で以下のコマンドを実行

    npm run dev

## Nodeの起動
`MyApp/ToDo/server`で以下のコマンドを実行

    node index.js

## React,Nodeを同時に起動
`MyApp/ToDo`で以下のコマンドを実行

    npm run dev

## VSCodeでデバッグ（Node.js側の処理のみ）
1. `Reactの起動`の方法でReact(Vite)を起動する
1. VSCode⇒[実行とデバッグ]タブへ移動
1. `Node Server`を選択し▷をクリック
1. ブレークポイントを置いた処理で止まる