// グローバルスコープの変数
const name = 'John';

// 当然利用できる
console.log(name);

function showName() {
    // 関数内でもグローバルスコープの変数は利用可能
    console.log(name);
}

// 関数呼び出し
showName();
