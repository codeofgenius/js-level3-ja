/*
最終問題07

以下のようにオブジェクトlocationとオブジェクトpersonが定義されています。

スプレッド演算子を利用して、オブジェクトlocationとオブジェクトpersonを結合する処理を行ってください。
結合したオブジェクトを実行結果のように表示する処理を作成してください。

ただし、オブジェクトlocationとオブジェクトpersonの定義を変更してはいけません。

実行結果
{ nations: 'Japan', address: 'Tokyo', name: 'Alice', age: 17 }
*/

const location = {
    nations: 'Japan',
    address: 'Tokyo',
};

const person = {
    name: 'Alice',
    age: 17,
};

const user = { ...location, ...person };
console.log(user);
