import { HomeComponent } from '../home/home.component';
import { Route } from '@angular/router';
import { coursesRouterConfig } from '../routes/courses-router.config';

const fallbackRoute: Route = {
    path: '**',
    component: HomeComponent
}
export const routeConfig = [
    {
        path: '',
        component: HomeComponent
    },
        ...coursesRouterConfig,
    fallbackRoute
];