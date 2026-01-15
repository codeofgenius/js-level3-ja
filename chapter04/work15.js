/*
ワーク15_練習問題

オブジェクトstudentが定義されています。オブジェクトstudentのキーが「name」の値と
キーが「hobby」の値を、分割代入によって2個の変数で取り出してください。
そのうえで、2個の変数を表示して、実行結果のように表示する処理を作成してください。

実行結果
Bob
Swimming
*/

const student = {
    name: 'Bob',
    age: 17,
    hobby: 'Swimming',
};

const { name, hobby } = student;

console.log(name);
console.log(hobby);
