import { formReader } from './modules/form-reader.js';
import { createRow, updateTotalAmount } from './modules/dom.js';
const form = document.getElementById('expense-form');


const expenseData = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Read form data
    const formData = formReader(form);
    if (!formData) {
        return;
    }
    expenseData.unshift(formData);
    // Create a new row in expense table
    createRow(formData);
    // Update total amount
    updateTotalAmount(expenseData);
});