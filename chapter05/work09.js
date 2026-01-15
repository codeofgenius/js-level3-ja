// for-of文3
const magician = {
    name: 'Alice',
    age: 17,
    hobby: 'magic',
    address: 'Wonderland',
};

for (const value of Object.values(magician)) {
    console.log(value);
}
