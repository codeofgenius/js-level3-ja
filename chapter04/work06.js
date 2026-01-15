// 分割代入で値の交換

let name1 = 'Bob';
let name2 = 'Tom';

console.log(`name1 is ${name1}`); // Bob
console.log(`name2 is ${name2}`); // Tom

console.log('=====');

// 分割代入で値の交換
[name2, name1] = [name1, name2];

console.log(`name1 is ${name1}`); // Tom
console.log(`name2 is ${name2}`); // Bob
