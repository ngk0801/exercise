import { Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';

export const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: 'ex26', loadComponent: () => import('./ex26/ex26.component').then(m => m.Ex26Component) },
  { path: 'ex27', loadComponent: () => import('./ex27/ex27.component').then(m => m.Ex27Component) },
  { path: 'ex28', loadComponent: () => import('./ex28/ex28.component').then(m => m.Ex28Component) },
  { path: 'ex21', loadComponent: () => import('./ex21/ex21.component').then(m => m.Ex21Component) },
  { path: 'ex22', loadComponent: () => import('./ex22/ex22.component').then(m => m.Ex22Component) },
  { path: 'ex23', loadComponent: () => import('./ex23/ex23.component').then(m => m.Ex23Component) },
  { path: 'ex24', loadComponent: () => import('./ex24/ex24.component').then(m => m.Ex24Component) },
  { path: '', redirectTo: '/ex21', pathMatch: 'full' },
];

export const RoutingComponent = [
  ServiceProductImageEventComponent,
  ServiceProductImageEventDetailComponent
];
