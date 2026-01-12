const form = document.getElementById('expense-form');

const expenseData = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = new FormData(form);
    const amount = data.get('amount');
    const description = data.get('description');
    const date = data.get('date');

    console.log(expenseData);
});