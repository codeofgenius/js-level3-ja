// オブジェクトのスプレッド演算子1
const person1 = {
    name: 'Alice',
    age: 17,
};

const person2 = {
    hobby: 'Cooking',
    address: 'Tokyo',
};

// オブジェクトの要素を展開して、結合する
const person3 = { ...person1, ...person2 };
// { name: 'Alice', age: 17, hobby: 'Cooking', address: 'Tokyo' }
console.log(person3);
