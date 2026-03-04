import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: 'list-books', loadComponent: () => import('./books/books.component').then(m => m.BooksComponent) },
  { path: 'ex50', loadComponent: () => import('./ex50/ex50.component').then(m => m.Ex50Component) },
  { path: 'ex50/add', loadComponent: () => import('./ex50/ex50-add.component').then(m => m.Ex50AddComponent) },
  { path: 'ex50/edit/:id', loadComponent: () => import('./ex50/ex50-edit.component').then(m => m.Ex50EditComponent) },
  { path: 'ex50/detail/:id', loadComponent: () => import('./ex50/ex50-detail.component').then(m => m.Ex50DetailComponent) },
  { path: 'ex49', loadComponent: () => import('./file-upload/file-upload.component').then(m => m.FileUploadComponent) },
  { path: 'ex41', loadComponent: () => import('./book-detail/book-detail.component').then(m => m.BookDetailComponent) },
  { path: 'ex43', loadComponent: () => import('./book-new/book-new.component').then(m => m.BookNewComponent) },
  { path: 'ex45', loadComponent: () => import('./book-update/book-update.component').then(m => m.BookUpdateComponent) },
  { path: 'ex47', loadComponent: () => import('./book-delete/book-delete.component').then(m => m.BookDeleteComponent) },
  { path: 'fashion-new', loadComponent: () => import('./fashion-new/fashion-new').then(m => m.FashionNew) },
  { path: 'fashion-detail/:id', loadComponent: () => import('./fashion-detail/fashion-detail').then(m => m.FashionDetail) },
  { path: 'ex53', loadComponent: () => import('./ex53/ex53').then(m => m.Ex53) },
  { path: 'ex-momo', loadComponent: () => import('./ex-momo/ex-momo').then(m => m.ExMomoComponent) },
  { path: '', redirectTo: '/list-books', pathMatch: 'full' },
];

export const RoutingComponent = [];
