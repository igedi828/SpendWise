
// SpendWise Budget Tracker

// Store monthly income and expenses
let monthlyIncome = 50000;
let expenses = [];

// Get HTML elements
const budgetInput = document.getElementById("budget");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

const totalIncomeDisplay = document.getElementById("total-income");
const totalExpensesDisplay = document.getElementById("total-expenses");
const balanceDisplay = document.getElementById("balance");
const budgetMessage = document.getElementById("budget-message");

// Function to update the dashboard
function updateDashboard() {

    let totalExpenses = 0;

    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    let balance = monthlyIncome - totalExpenses;
    let monthlyBudget = Number(budgetInput.value);

    // Update summary cards
    totalIncomeDisplay.textContent = "KSh " + monthlyIncome.toLocaleString();
    totalExpensesDisplay.textContent = "KSh " + totalExpenses.toLocaleString();
    balanceDisplay.textContent = "KSh " + balance.toLocaleString();

    // Conditional statements for budget feedback
    if (totalExpenses > monthlyBudget) {
        budgetMessage.textContent = "Warning! You have exceeded your monthly budget.";
    } else if (totalExpenses === monthlyBudget) {
        budgetMessage.textContent = "You have reached your monthly budget.";
    } else {
        budgetMessage.textContent = "Good job! You are within your monthly budget.";
    }

    // Display expenses on the webpage
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.textContent = "No expenses added yet.";
    } else {

        for (let i = 0; i < expenses.length; i++) {

            const expenseItem = document.createElement("p");

            expenseItem.textContent =
                expenses[i].name + " - KSh " +
                expenses[i].amount.toLocaleString() +
                " - " + expenses[i].category;

            expenseList.appendChild(expenseItem);
        }
    }
}

// Handle adding new expenses
expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const expenseName = document.getElementById("expense-name").value.trim();
    const expenseAmount = Number(document.getElementById("expense-amount").value);
    const expenseCategory = document.getElementById("expense-category").value;

    if (expenseName === "" || expenseAmount <= 0 || expenseCategory === "") {
        alert("Please enter valid expense information.");
        return;
    }

    // Store expense in the array
    expenses.push({
        name: expenseName,
        amount: expenseAmount,
        category: expenseCategory
    });

    // Update dashboard
    updateDashboard();

    // Clear form
    expenseForm.reset();
});

// Update budget when user changes it
budgetInput.addEventListener("input", updateDashboard);

// Display initial dashboard
updateDashboard();

