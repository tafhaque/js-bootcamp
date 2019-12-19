const toDos = ['Finish js bootcamp', 'Find a software job', 'Move to London', 'Live life', 'Try new things']

// console.log(toDos.splice(2, 1))
// toDos.push('Exercise')
// console.log(toDos.shift())


console.log(`You have ${toDos.length} todos`);

toDos.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`);
})

// console.log(toDos);
// console.log(`You have ` + toDo.length + ' todos');

// console.log(`Todo: ${toDos[0]}`);
// console.log(`Todo: ${toDos[toDos.length - 2]}`);

// console.log('\n');

// for (count = 0; count < toDos.length; count++) {
//     console.log(`${count + 1}. ${toDos[count]}`);
// }