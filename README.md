# SpendWise Budget Tracker

## Project Description
SpendWise is a simple budgeting application that helps users manage their income, track expenses, and monitor their spending.

## Improvements Made This Week
- Added an interactive expense form.
- Added a monthly budget input.
- Added automatic calculation of total expenses and remaining balance.
- Added budget status messages.
- Enabled users to add multiple expense records.
- Displayed expense records directly on the dashboard.

## JavaScript Concepts Used

### 1. Conditional Statements
Conditional statements (`if`, `else if`, and `else`) check spending against the monthly budget and display appropriate feedback.

### 2. Arrays
An array called `expenses` stores multiple expense records, including the expense name, amount, and category.

### 3. Loops
A `for` loop processes expense records to calculate total expenses and display them on the webpage.

### 4. DOM Manipulation
DOM manipulation updates dashboard information, including total expenses, balance, budget status, and expense records.

### 5. Event Listeners
Event listeners respond to user actions. The expense form listens for submissions, while the budget input listens for changes.

## Challenges Encountered and Solutions
- **Challenge:** Displaying expenses dynamically on the webpage.
  **Solution:** Used DOM manipulation and `createElement()` to display expense records.

- **Challenge:** Calculating expenses from multiple records.
  **Solution:** Used arrays and loops to store and process expense information.

- **Challenge:** Providing feedback when the budget is exceeded.
  **Solution:** Used conditional statements to compare expenses with the monthly budget.

- **Challenge:** Updating dashboard information after user actions.
  **Solution:** Created an `updateDashboard()` function to refresh the displayed information.

## Technologies Used
- HTML
- CSS
- JavaScript
- Git and GitHub

## Conclusion
SpendWise demonstrates how JavaScript can make a budgeting application interactive through decision-making, arrays, loops, DOM manipulation, and event handling.
