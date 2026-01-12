import { formReader } from './modules/form-reader.js';
import { updateRow, updateTotalAmount } from './modules/dom.js';
const form = document.getElementById('expense-form');

let expenseData = [];

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Read form data
    const formData = formReader(form);
    if (!formData) {
        return;
    }
    expenseData.unshift(formData);
    // Create a new row in expense table
    updateRow(expenseData);
    // Update total amount
    updateTotalAmount(expenseData);

});

// Handle delete button click
document.querySelector('#expense-table-body').addEventListener('click', function(event) {
    const nodeId = event.target.getAttribute('node-id');

    if (event.target.tagName === 'BUTTON') {
        expenseData = expenseData.filter(expense => expense.id !== +nodeId);
        updateTotalAmount(expenseData);
        updateRow(expenseData);
    }
});