/*
ワーク16_練習問題

以下のようにオブジェクトpersonが定義されています。for-of文を利用して、
オブジェクトのキーと値を取得して、実行結果のように表示する処理を
作成してください。

実行結果
name is Tom
age is 17
address is London
*/

const person = {
    name: 'Tom',
    age: 17,
    address: 'London',
};

for (const [key, value] of Object.entries(person)) {
    console.log(`${key} is ${value}`);
}
