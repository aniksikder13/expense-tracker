import { invalidateInput } from "./dom.js";

export function formReader(form) {
    const inputs = form.querySelectorAll('input');
    const result = {};

    for (const input of inputs) {
        if (input.name==='amount') {
            const isValid = invalidateInput(input);
            if (!isValid) {
                return null;
            }
            result[input.name] = +input.value;
        } else{
            result[input.name] = input.value;
        }
        // input.value = '';
    }
    return result;
}