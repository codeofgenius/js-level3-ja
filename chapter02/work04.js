// ブロックスコープの変数
let color = 'red';

if (color == 'red') {
    // ブロックスコープの変数
    let message = 'This is red';
}

// ブロック外なので利用不可
console.log(message); // これはエラー
