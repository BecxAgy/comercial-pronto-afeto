import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: "",
    canActivate: [],
    loadChildren: () => import("./modules/dashboard/dashboard.routes").then((m) => m.dashboardRoutes),
  }
];
