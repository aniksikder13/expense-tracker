export function calculateTotal(expenses) {
    console.log(expenses);
    return expenses?.reduce((total, expense) => total + expense.amount, 0);
}