/*
ワーク15_練習問題

以下のようにオブジェクトpersonが定義されています。for-of文を利用して、
オブジェクトの値を取得して、実行結果のように表示する処理を
作成してください。

実行結果
Tom
17
London
*/

const person = {
    name: 'Tom',
    age: 17,
    address: 'London',
};

for (const value of Object.values(person)) {
    console.log(value);
}
