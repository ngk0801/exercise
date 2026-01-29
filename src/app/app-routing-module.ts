import { Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { Ex18 } from './ex18/ex18';
import { Ex19 } from './ex19/ex19';

export const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: 'ex18', component: Ex18 },
  { path: 'ex19', component: Ex19 },
  { path: '', redirectTo: '/ex19', pathMatch: 'full' },
];

export const RoutingComponent = [
  ServiceProductImageEventComponent,
  ServiceProductImageEventDetailComponent,
  Ex18,
  Ex19
];
