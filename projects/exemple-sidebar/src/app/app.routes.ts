import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RandomPageComponent } from './pages/random-page/random-page.component';
import { RouteEnum } from './core/route.enum';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: RouteEnum.HOME,
    redirectTo: RouteEnum.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: RouteEnum.DASHBOARD,
    component: DashboardComponent,
  },
  {
    path: RouteEnum.ABOUT_US,
    component: AboutUsComponent,
  },
    {
    path: RouteEnum.RANDOM_PAGE,
    component: RandomPageComponent,
  },
];
