import { Form } from "Utils/types";

interface Rules {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    minDate?: Date;
    emailComplexity?: boolean;
    passwordComplexity?: boolean;
}

/* Input data validation 
  @param {value} - input value
  @param {rules} - object with validation rules
*/
export const validation = (value: string, rules?: Rules) => {
    let isValid: boolean | null = true;
    if (!rules) {
        return true;
    }
    if (rules.required) {
        isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
        isValid = value.trim().length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
        isValid = value.trim().length <= rules.maxLength && isValid;
    }

    if (rules.minDate) {
        isValid = new Date(value) >= rules.minDate && isValid;
    }

    if (rules.passwordComplexity) {
        isValid = value.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/) && isValid;
    }

    if (rules.emailComplexity) {
        isValid = value.match(/\S+@\S+\.\S+/) && isValid;
    }

    return isValid === null ? false : isValid;
};

/* Check if every input is valid
  @param {fields} - object with all form fields
*/
export const wholeFormValidity = (fields: Form) => {
    let key: keyof typeof fields;
    for (key in fields) {
        if (fields[key].valid === false) {
            return false;
        }
    }
    return true;
};