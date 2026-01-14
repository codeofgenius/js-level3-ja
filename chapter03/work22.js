/*
ワーク22_練習問題
以下のようなプログラムがあります。変数nameにSuzyが代入されています。

三項演算子を利用して、変数nameを判定してください。
変数nameがMegと等しい場合、「I am Meg」を返します。
そうでない場合、「I am Suzy」を返します。
三項演算子の処理結果を変数messageに代入します。
変数messageを表示します。

実行結果のように表示するプログラムを作成してください。
その他の処理を変更してはいけません。

実行結果
I am Suzy
*/

const name = 'Suzy';
const message = name === 'Meg' ? 'I am Meg' : 'I am Suzy';
console.log(message);
