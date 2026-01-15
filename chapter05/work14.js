/*
ワーク14_練習問題

以下のようにオブジェクトpersonが定義されています。for-of文を利用して、
オブジェクトのキーを取得して、実行結果のように表示する処理を
作成してください。

実行結果
name
age
address
*/

const person = {
    name: 'Tom',
    age: 17,
    address: 'London',
};

for (const key of Object.keys(person)) {
    console.log(key);
}
