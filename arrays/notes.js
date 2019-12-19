const notes = [{

}, {

}, {

}]

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift());
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

notes[2] = 'This is the new note 3'

notes.forEach(function(item, index) {
    console.log(index);
    console.log(item);
})

console.log(notes.length);
console.log(notes)

console.log(notes.indexOf('note 2'))

// Counting.. 1

for (let count = 0; count <= 2; count++) {
    console.log(count);

}

// Counting... 1
// for (let count = 0; count <= 2; count++) {
//     console.log(count);
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }


// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])

// }