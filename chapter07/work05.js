/*
最終問題05

オブジェクトmovieが定義されています。オブジェクトmovieのキーが「title」の値と
キーが「director」の値を、分割代入によって2個の変数で取り出してください。
そのうえで、2個の変数を表示して、実行結果のように表示する処理を作成してください。

実行結果
Great Adventure of Bob
Tom Brothers
*/

const movie = {
    title: 'Great Adventure of Bob',
    genre: 'SF',
    director: 'Tom Brothers',
    price: 15,
};

const { title, director } = movie;

console.log(title);
console.log(director);
