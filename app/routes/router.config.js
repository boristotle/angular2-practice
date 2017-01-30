"use strict";
var home_component_1 = require('../home/home.component');
var courses_router_config_1 = require('../routes/courses-router.config');
var fallbackRoute = {
    path: '**',
    component: home_component_1.HomeComponent
};
exports.routeConfig = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }
].concat(courses_router_config_1.coursesRouterConfig, [
    fallbackRoute
]);
//# sourceMappingURL=router.config.js.map