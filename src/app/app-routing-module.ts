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
  { path: '', redirectTo: '/list-books', pathMatch: 'full' },
];

export const RoutingComponent = [];
