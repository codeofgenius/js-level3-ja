// ブロックスコープの変数
{
    // ブロックスコープの変数
    const name = 'Bob';
    console.log(name);
}

// ブロックスコープの変数はブロック外では利用不可
console.log(name); // これはエラー
