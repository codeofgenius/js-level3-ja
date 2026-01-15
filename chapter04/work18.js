/*
ワーク18_練習問題

以下のようにオブジェクトschoolとオブジェクトpersonが定義されています。

スプレッド演算子を利用して、オブジェクトschoolとオブジェクトpersonを結合する処理を行ってください。
結合したオブジェクトを実行結果のように表示する処理を作成してください。

ただし、オブジェクトschoolとオブジェクトpersonの定義を変更してはいけません。

実行結果
{
  school: 'Seatle High School',
  address: 'Seatle',
  name: 'Alice',
  age: 17,
  hobby: 'Tennis'
}
*/

const school = {
    school: 'Seatle High School',
    address: 'Seatle',
};

const person = {
    name: 'Alice',
    age: 17,
    hobby: 'Tennis',
};

const student = { ...school, ...person };
console.log(student);
