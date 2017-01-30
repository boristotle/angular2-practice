import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { routeConfig } from './routes/router.config';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPreviewerComponent } from './color-previewer/color-previewer.component';
import { CollapseOnClickDirective } from './directives/collapse-on-click/collapse-on-click.directive';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routeConfig), ReactiveFormsModule],
    declarations: [AppComponent, HomeComponent, CoursesComponent, CourseDetailComponent, ReactiveFormComponent, SearchBoxComponent, ColorPickerComponent, ColorPreviewerComponent, CollapseOnClickDirective],
    bootstrap: [AppComponent]
})

export class AppModule { }