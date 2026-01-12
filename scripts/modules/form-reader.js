export function formReader(form) {
    const inputs = form.querySelectorAll('input');
    const result = {};

    for (const input of inputs) {
        if (input.name) {
            result[input.name] = input.value;
        }
    }

    return result;
}