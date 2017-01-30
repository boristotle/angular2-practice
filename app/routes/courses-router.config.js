"use strict";
var courses_component_1 = require('../courses/courses.component');
var course_detail_component_1 = require('../course-detail/course-detail.component');
exports.coursesRouterConfig = [{
        path: 'courses',
        children: [
            {
                path: '',
                component: courses_component_1.CoursesComponent
            },
            {
                path: ':id',
                component: course_detail_component_1.CourseDetailComponent
            }
        ]
    }];
//# sourceMappingURL=courses-router.config.js.map