// 再代入できない変数だが要素の変更は可能
// 配列作成
const colors = ['red', 'blue', 'green'];
console.log(colors);

// 再代入ではなく要素の変更は可能
colors[0] = 'white';
console.log(colors);

// オブジェクト作成
const person = { name: 'Bob', age: 16 };
console.log(person);

// 再代入ではなくオブジェクトの値の変更は可能
person.name = 'Tom';
console.log(person);
