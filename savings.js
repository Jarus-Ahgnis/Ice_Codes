// Sample data for transactions and balance
let balance = 1000; // Starting balance
let transactions = []; // Array to store transactions

// DOM Elements
const balanceInfo = document.querySelector('.balance-info p');
const incomeInput = document.querySelector('.income-expense-section input[name="income"]');
const expenseInput = document.querySelector('.income-expense-section input[name="expense"]');
const incomeButton = document.querySelector('.income-expense-section button[name="addIncome"]');
const expenseButton = document.querySelector('.income-expense-section button[name="addExpense"]');
const transactionHistoryTable = document.querySelector('.transaction-history tbody');
const clearHistoryButton = document.querySelector('.clear-history-btn');

// Function to update balance info on the page
function updateBalance() {
  balanceInfo.textContent = `$${balance.toFixed(2)}`;
}

// Function to add income
function addIncome() {
  const incomeAmount = parseFloat(incomeInput.value);
  if (isNaN(incomeAmount) || incomeAmount <= 0) {
    alert("Please enter a valid income amount.");
    return;
  }

  // Add income to balance
  balance += incomeAmount;

  // Save transaction
  transactions.push({ type: 'Income', amount: incomeAmount });

  // Update balance and transaction history
  updateBalance();
  updateTransactionHistory();

  // Clear input field
  incomeInput.value = '';
}

// Function to add expense
function addExpense() {
  const expenseAmount = parseFloat(expenseInput.value);
  if (isNaN(expenseAmount) || expenseAmount <= 0) {
    alert("Please enter a valid expense amount.");
    return;
  }

  // Check if balance is sufficient
  if (expenseAmount > balance) {
    alert("Insufficient balance!");
    return;
  }

  // Subtract expense from balance
  balance -= expenseAmount;

  // Save transaction
  transactions.push({ type: 'Expense', amount: expenseAmount });

  // Update balance and transaction history
  updateBalance();
  updateTransactionHistory();

  // Clear input field
  expenseInput.value = '';
}

// Function to update the transaction history table
function updateTransactionHistory() {
  // Clear the current table
  transactionHistoryTable.innerHTML = '';

  // Loop through transactions and display them in the table
  transactions.forEach(transaction => {
    const row = document.createElement('tr');
    const typeCell = document.createElement('td');
    const amountCell = document.createElement('td');

    typeCell.textContent = transaction.type;
    amountCell.textContent = `$${transaction.amount.toFixed(2)}`;

    row.appendChild(typeCell);
    row.appendChild(amountCell);

    transactionHistoryTable.appendChild(row);
  });
}

// Function to show a modal for confirming the clearing of history
function showClearHistoryModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = `
    <h2>Are you sure you want to clear the transaction history?</h2>
    <div class="modal-buttons">
      <button class="modal-button cancel-btn" onclick="closeModal()">Cancel</button>
      <button class="modal-button confirm-btn" onclick="clearHistory()">Clear</button>
    </div>`;
  modalOverlay.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  modalOverlay.style.display = 'none';
}

// Function to clear the transaction history
function clearHistory() {
  transactions = []; // Clear the transactions array
  balance = 1000; // Reset the balance to the initial value
  updateBalance(); // Update the balance on the page
  updateTransactionHistory(); // Update the transaction history table

  // Close the modal
  closeModal();
}

// Event listeners for the income and expense buttons
incomeButton.addEventListener('click', addIncome);
expenseButton.addEventListener('click', addExpense);

// Event listener for the "Clear Transaction History" button
clearHistoryButton.addEventListener('click', showClearHistoryModal);

// Initialize the page
updateBalance(); // Display initial balance
updateTransactionHistory(); // Update the transaction history (initially empty)
