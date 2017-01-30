import { Component } from '@angular/core';
declare const module;

@Component({
    moduleId: module.id,
    templateUrl: 'courses.component.html'

})

export class CoursesComponent {
    courses = [1,2];
}