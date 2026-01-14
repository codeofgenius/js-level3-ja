// ブロックスコープの変数
for (let i = 0; i < 3; i++) {
    //ブロックスコープの変数
    let message = 'Hello';
}

// ブロック外なので利用不可
console.log(message); // これはエラー
