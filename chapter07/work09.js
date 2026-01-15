/*
最終問題09

以下のようにオブジェクトmovieが定義されています。for-of文を利用して、
オブジェクトのキーと値を取得して、実行結果のように表示する処理を
作成してください。

実行結果
title is Great Adventure of Bob
genre is SF
director is Tom Brothers
*/

const movie = {
    title: 'Great Adventure of Bob',
    genre: 'SF',
    director: 'Tom Brothers',
};

for (const [key, value] of Object.entries(movie)) {
    console.log(`${key} is ${value}`);
}
