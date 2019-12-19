// Function - input (argument), code, output

let greetUser = function() {
    console.log('Welcome user!');
}

greetUser();
greetUser();
greetUser();

let square = function(num) {
    let result = num * num;
    return result;
}

let numOne = 3;
let numTwo = 10;

let value = square(numOne);
let otherValue = square(numTwo);

console.log(value);
console.log(otherValue);

// Challenge


let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius;
}

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);