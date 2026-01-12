import { calculateTotal } from "./calculator.js";

// Create new row in expense table
export function updateRow(expenseData) {
 const expenseTableBody = document.getElementById('expense-table-body');
    expenseTableBody.innerHTML = '';

    if (!expenseData || expenseData.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `td colspan="4" style="color: blueviolet;">No expenses added yet.</td>`;
        expenseTableBody.appendChild(row);
        return;
    }

    expenseData.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.description}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>${expense.date}</td>
            <td>
                <button class="delete" node-id="${expense.id}">
                    Delete
                </button>
            </td>
        `;
        expenseTableBody.appendChild(row);
    });
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
