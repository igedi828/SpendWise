
// SpendWise Budget Information

// Collect user input
let monthlyBudget = Number(prompt("Enter your monthly budget in KSh:"));

let foodExpense = Number(prompt("Enter food expenses:"));

let transportExpense = Number(prompt("Enter transport expenses:"));

let rentExpense = Number(prompt("Enter rent expenses:"));

// Function to calculate total expenses
function calculateTotalExpenses(food, transport, rent) {
    return food + transport + rent;
}

// Function to calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Perform calculations
let totalExpenses = calculateTotalExpenses(
    foodExpense,
    transportExpense,
    rentExpense
);

let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);

// Display results
console.log("===== SPENDWISE BUDGET SUMMARY =====");
console.log("Monthly Budget: KSh", monthlyBudget);
console.log("Food Expenses: KSh", foodExpense);
console.log("Transport Expenses: KSh", transportExpense);
console.log("Rent Expenses: KSh", rentExpense);
console.log("Total Expenses: KSh", totalExpenses);
console.log("Remaining Balance: KSh", remainingBalance);
