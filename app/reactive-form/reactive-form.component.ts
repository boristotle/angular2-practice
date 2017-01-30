import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {validateTitle} from "./reactive-form-validators";

declare const module;

@Component({
    selector: 'my-form',
    moduleId: module.id,
    templateUrl: 'reactive-form.component.html',
    styles: [
        `.form-field-error {
            color: red;
            font-weight:  bold;
            font-size: 12px;
        `
    ]
})

export class ReactiveFormComponent {
    myForm: FormGroup;
    description = 'where the red fern grows';

    constructor(_formBuilder: FormBuilder) {

        this.myForm = _formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(5), validateTitle]],
            duration: [null, [Validators.required]],
            description: ['', [Validators.required]]
        });


    }

    log(form) {
        console.log(form);
        console.log(form._status);
        this.myForm.reset();
    }

    resetForm() {
        this.myForm.reset();
    }

}