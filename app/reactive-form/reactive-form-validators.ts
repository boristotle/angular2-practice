import { FormControl } from '@angular/forms';

export function validateTitle(ctrl: FormControl) {

    const valid = ctrl.value == 'title';

    console.log(valid);
    return valid ? null: {
        validateTitle: {
            valid: false
        }
    };
}