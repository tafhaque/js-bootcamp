let name = '  Andrew Mead';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123asdadas098'
console.log(password.includes('password'));

// Trim
console.log(name.trim());

//Challenge

//isValidPassword
// or use 
// return password.length > 8 && !password.includes('password')
let isValidPassword = function(password) {
    if (password.length > 8 && !password.includes('password')) {
        return true;
    } else {
        return false;
    }
}

// or use 
// return password.length > 8 && !password.includes('password')


// true if length is more than 8 - and doesn't contain the word password
console.log(isValidPassword('asdd'));
console.log(isValidPassword('asdasdsdadasdasda452'));
console.log(isValidPassword('asdasd3423password'));