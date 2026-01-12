import { formReader } from './modules/form-reader.js';
const form = document.getElementById('expense-form');

const expenseData = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = formReader(form);

    expenseData.unshift(formData);

    console.log(expenseData);
});