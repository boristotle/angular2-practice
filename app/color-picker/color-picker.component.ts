import { Component, Input, Output, EventEmitter } from '@angular/core';
declare const module;

@Component({
    selector: 'color-picker',
    moduleId: module.id,
    templateUrl: 'color-picker.component.html',
    styleUrls: ['color-picker.component.css']
})

export class ColorPickerComponent {
    @Input()
    color:string

    @Output("colors")
    colorOutput = new EventEmitter();

    choose(color:string) {
        this.color = color;
        this.colorOutput.emit(color);
    }

    reset() {
        this.choose('black');
    }



}