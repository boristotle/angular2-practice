"use strict";
function validateTitle(ctrl) {
    var valid = ctrl.value == 'title';
    console.log(valid);
    return valid ? null : {
        validateTitle: {
            valid: false
        }
    };
}
exports.validateTitle = validateTitle;
//# sourceMappingURL=reactive-form-validators.js.map