// 1.

stringReverse = function(input) {
    var hello = `${input}`;
    var splitLetters = hello.split('');

    var reverseLetters = splitLetters.reverse();
    var joinArray = reverseLetters.join('');

    return joinArray;
};

// Unit tests 

require('./Solution.js');

describe("SolutionTests", function() {


    it("Test1", function() {
        expect(stringReverse("Hello")).toEqual("olleH");
    });

    it("Test2", function() {
        expect(stringReverse("A")).toEqual("A");
    });

    it("Test3", function() {
        expect(stringReverse("")).toEqual("");
    });

});


// 2. Facriol

factorial = function(input) {
    if (input < 0) {
        return -1;
    } else if (input === 0) {
        return 1;
    } else {
        return (input * factorial(input - 1));
    }
};

factorial(1);
factorial(5);
factorial(10);

// Tests

require('./Solution.js');

describe("SolutionTests", function() {


    it("Test1", function() {
        expect(factorial(1)).toEqual(1);
    });

    it("Test2", function() {
        expect(factorial(5)).toEqual(120);
    });

    it("Test3", function() {
        expect(factorial(10)).toEqual(3628800);
    });

});

// 3.