import { Routes } from '@angular/router';

import { BookComponent} from './books.component'

export const appRoutes: Routes = [
  { path: 'books', component: BookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];