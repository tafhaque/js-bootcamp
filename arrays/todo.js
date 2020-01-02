// Array of strings
//const todos = ['Finish js bootcamp', 'Find a software job', 'Move to London', 'Live life', 'Try new things']

// 1. Convert array of strings to array of objects -> properties are - text, completed (true or false)
// 2. Create function to remove a todo by text value

const todos = [{
    text: 'Finish js bootcamp',
    completed: false
}, {
    text: 'Find a software job',
    completed: false
}, {
    text: 'Move to London',
    completed: false
}, {
    text: 'Live life',
    completed: true
}, {
    text: 'Try new things',
    completed: true
}]


const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }

    })

}


const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

// Filter
const getThingsToDo = function(todos) {
    return todos.filter(function(todo, index) {
        // return todo.completed === false
        return !todo.completed
    })

}


sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos));

// const note = findNote(notes, 'Some other office modification')
// console.log(note);

// deleteTodo(todos, 'live life')
// console.log(todos);




// todos.splice(2, 1);
// todos.push('Exercise');
// todos.shift();

// // console.log(todos.splice(2, 1))
// // todos.push('Exercise')
// // console.log(todos.shift())


// console.log(`You have ${todos.length} todos`);

// todos.forEach(function(todo, index) {
//     console.log(`${index + 1}. ${todo}`);
// })


// console.log(todos);
// console.log(`You have ` + todo.length + ' todos');

// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

// console.log('\n');

// for (count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`);
// }

// for (let count = 0; count < todos.length; count++) {
//     const num = count + 1;
//     const todo = todos[count];
//     console.log(`${num}. ${todo}`);
// }