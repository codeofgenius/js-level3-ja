/*
最終問題04

配列citiesが定義されています。配列citiesのインデックスが「0」の要素と
インデックスが「1」の要素を、分割代入によって2個の変数で取り出してください。
そのうえで、2個の変数を表示して、実行結果のように表示する処理を作成してください。

分割代入した際の2個の変数名は何でも構いません。

実行結果
Tokyo
London
*/

const cities = ['Tokyo', 'London', 'Madrid', 'Paris'];

const [a, b] = cities;
console.log(a);
console.log(b);
