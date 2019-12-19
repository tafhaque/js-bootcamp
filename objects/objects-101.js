let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326

};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge
// name, age, location

let user = { name: 'Taf', age: 27, location: 'Belfast' };

console.log(`${user.name} is ${user.age} and lives in ${user.location}.`);

user.age = user.age + 4;

console.log(`${user.name} is ${user.age} and lives in ${user.location}.`);