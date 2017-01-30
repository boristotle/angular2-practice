"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var reactive_form_validators_1 = require("./reactive-form-validators");
var ReactiveFormComponent = (function () {
    function ReactiveFormComponent(_formBuilder) {
        this.description = 'where the red fern grows';
        this.myForm = _formBuilder.group({
            title: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), reactive_form_validators_1.validateTitle]],
            duration: [null, [forms_1.Validators.required]],
            description: ['', [forms_1.Validators.required]]
        });
    }
    ReactiveFormComponent.prototype.log = function (form) {
        console.log(form);
        console.log(form._status);
        this.myForm.reset();
    };
    ReactiveFormComponent.prototype.resetForm = function () {
        this.myForm.reset();
    };
    ReactiveFormComponent = __decorate([
        core_1.Component({
            selector: 'my-form',
            moduleId: module.id,
            templateUrl: 'reactive-form.component.html',
            styles: [
                ".form-field-error {\n            color: red;\n            font-weight:  bold;\n            font-size: 12px;\n        "
            ]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());
exports.ReactiveFormComponent = ReactiveFormComponent;
//# sourceMappingURL=reactive-form.component.js.map