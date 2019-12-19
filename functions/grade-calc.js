// Students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69,  F 0-59

// let total = 100;
// let score = 75;

const getScore = function(total = 100, score) {
    let grade = ''
    const percent = (score / total) * 100;

    if (percent > 0 && percent <= 59) {
        grade = `F`;
    } else if (percent >= 60 && percent <= 69) {
        grade = `D`;
    } else if (percent >= 70 && percent <= 79) {
        grade = `C`;
    } else if (percent >= 80 && percent <= 89) {
        grade = `B`;
    } else if (percent >= 90 && percent <= 100) {
        grade = `A`;
    } else {
        console.log(`Invalid score entered`);
    }
    return `You achieved a ${grade} ${percent}%`;
}

// const callScore = getScore(undefined, 90);
// console.log(callScore);

console.log(getScore(70, 51));
console.log(getScore(undefined, 61));
console.log(getScore(undefined, 71));
console.log(getScore(undefined, 81));
console.log(getScore(undefined, 91));
console.log(getScore(undefined, 100));
console.log(getScore(undefined, 10));