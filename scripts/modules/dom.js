import { calculateTotal } from "./calculator.js";

const totalAmountElement = document.getElementById('total-amount');

// Create new row in expense table
export function createRow(expenseData) {
    console.log(expenseData);
    const expenseTableBody = document.getElementById('expense-table-body');
    const tr = document.createElement('tr');
    if (!expenseData && expenseData?.length === 0) {
        tr.innerHTML = `<td colspan="4">No expenses added yet.</td>`;
    } else {
        tr.innerHTML += `
            <td>${expenseData?.description}</td>
            <td>${expenseData?.amount.toFixed(2)}</td>
            <td>${expenseData?.date}</td>
            <td><button type="button" class="outline secondary">Delete</button></td>
            `
    }
    expenseTableBody.prepend(tr);
}

// invalidate form input
export function invalidateInput(inputElement) {

    if (isNaN(inputElement.value) || inputElement.value < 0) {
        inputElement.setAttribute('aria-invalid', 'true')
        inputElement.setAttribute('aria-describedby', 'invalid-helper')
        document.getElementById('invalid-helper').style.display = 'block';
        return false;
    } else {
        inputElement.removeAttribute('aria-invalid');
        inputElement.removeAttribute('aria-describedby');
        document.getElementById('invalid-helper').style.display = 'none';
        return true;
    }
}

// Update total amount
export function updateTotalAmount(total) {
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.textContent = calculateTotal(total).toFixed(2);
}