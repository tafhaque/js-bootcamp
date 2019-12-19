let myAccount = {
    name: 'Taf Haque',
    expenses: 0,
    income: 0
}

// let otherAccount = myAccount;
// otherAccount.income = 1000;

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
}

let addIncome = function(account, amount) {
    account.income = account.income + amount;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

// addIncome
// resetAccount
// getAccountSummary
// Account for Taf Haque has $900. $1000 in income. $100 in expenses


// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));