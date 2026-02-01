import { Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';

export const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: 'ex26', loadComponent: () => import('./ex26/ex26.component').then(m => m.Ex26Component) },
  { path: '', redirectTo: '/ex26', pathMatch: 'full' },
];

export const RoutingComponent = [
  ServiceProductImageEventComponent,
  ServiceProductImageEventDetailComponent
];
