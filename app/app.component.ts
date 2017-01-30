import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
    <search-box placeholder="Custom Placeholder"></search-box>
    <color-picker #picker (colors)="previewer.color = $event"></color-picker>
    <color-previewer collapse-on-click #previewer></color-previewer>
    <button (click)="picker.reset()">Reset</button>
    <router-outlet></router-outlet>
   `
})

export class AppComponent {
    title = 'Angular2 App';

}