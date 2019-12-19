let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326

};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723

};

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

    // console.log(`${book.title} by ${book.author}`);
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge
// Create function - take fahrenheit in - return object with all three (fahrenheit, celsius, kelvin)




let convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5 / 9,
        celsius: (fahrenheit - 32) * 5 / 9
    }

}

let temps = convertFahrenheit(74);

console.log(temps);