import { Routes } from '@angular/router';

import { BooksComponent} from './books.component'

export const appRoutes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];