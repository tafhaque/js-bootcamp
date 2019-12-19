let temp = 55;

// Logical And operator - true if both sides are true. false otherwise
// Logical OR operator - true if at least side is true. false otherwise

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out');

}


if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside');

} else {
    console.log('Do what you want');
}


// Challenge

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only print vegan options');

} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Print at least one vegan option');

} else {
    console.log('Print any option');

}