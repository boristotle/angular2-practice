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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var router_config_1 = require('./routes/router.config');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var courses_component_1 = require('./courses/courses.component');
var course_detail_component_1 = require('./course-detail/course-detail.component');
var reactive_form_component_1 = require('./reactive-form/reactive-form.component');
var search_box_component_1 = require('./search-box/search-box.component');
var color_picker_component_1 = require('./color-picker/color-picker.component');
var color_previewer_component_1 = require('./color-previewer/color-previewer.component');
var collapse_on_click_directive_1 = require('./directives/collapse-on-click/collapse-on-click.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(router_config_1.routeConfig), forms_1.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, courses_component_1.CoursesComponent, course_detail_component_1.CourseDetailComponent, reactive_form_component_1.ReactiveFormComponent, search_box_component_1.SearchBoxComponent, color_picker_component_1.ColorPickerComponent, color_previewer_component_1.ColorPreviewerComponent, collapse_on_click_directive_1.CollapseOnClickDirective],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map