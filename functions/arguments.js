// Multiple arguments
let add = function(a, b, c) {
    return a + b + c;
}

let results = add(10, 1, 5);
console.log(results);

// Default arguments
let getScoreText = function(name = 'Annonymous', score = 0) {
    return `Name: ${name} -\nScore: ${score}`
        // return 'Name:  ' + name + '\nScore: ' + score
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge 
// A 25% tip on $40 would be $10

let getTip = function(total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
        // return total * tipPercent;

}

let tip = getTip(60);
console.log(tip);

// let name = 'Vikram';
// let age = 12;
// console.log(`Hey, my name is ${name}! I am ${age} years old.`);