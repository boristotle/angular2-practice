import { Component, Input} from '@angular/core';
declare const module;

@Component({
    selector: 'color-previewer',
    moduleId: module.id,
    templateUrl: 'color-previewer.component.html'
})

export class ColorPreviewerComponent {
    @Input()
    color:string;
}