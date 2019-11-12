export function createControl(config: any, validation: object) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: '',
    };
}

export function validate(value: any, validation: any = null) {
    if (!validation) {
        return true;
    }

    let isValid = true;

    if (validation.required) {
        isValid = value.trim() !== '' && isValid;
    }

    return isValid;
}

export function validateForm(formControls: any) {
    let isFormValid = true;

    for (const control in formControls) {
        if (formControls.hasOwnProperty(control)) {
            isFormValid = formControls[control].valid && isFormValid;
        }
    }

    return isFormValid;
}
