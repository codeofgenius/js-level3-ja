// for-of文4
const magician = {
    name: 'Alice',
    age: 17,
    hobby: 'magic',
    address: 'Wonderland',
};

for (const [key, value] of Object.entries(magician)) {
    console.log(`${key} is ${value}`);
}
