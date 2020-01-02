const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Morocco'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

//
// console.log('a' < 'A');

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }

    })

}

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}


// Find filter
const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isbodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isbodyMatch
    })
}

// console.log(findNotes(notes, 'work'));


// const note = findNote(notes, 'Some other office modification')
// console.log(note);

sortNotes(notes);
console.log(notes);


// Using .find()
// const findNote = function(notes, noteTitle) {
//     return notes.find(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }


// Using .findIndex()
// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }



// console.log(notes.length);
// console.log(notes)

// Looks for the first index match
// const index = notes.findIndex(function(note, index) {
//     console.log(note);
//     return note.title === 'Habits to work on'
// });

// console.log(index);


// Array of Strings
//const notes = ['Note 1', 'Note 2', 'NOte 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift());
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is the new note 3'

// notes.forEach(function(item, index) {
//     console.log(index);
//     console.log(item);
// })

// let someObject = {};
// let otherObject = someObject;
// console.log(someObject === otherObject);

// console.log(notes.indexOf({}));



// If output is -1 from indexOf, then item does not exist in the array. 
// If output is greater than -1 including 0, then the item exists somewhere in the array  
// console.log(notes.indexOf('Note 2'))



// Counting... 1
// for (let count = 0; count <= 2; count++) {
//     console.log(count);
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }


// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])

//