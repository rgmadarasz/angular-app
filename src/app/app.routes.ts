import { Routes } from '@angular/router';

import { BookComponent} from './books.component'
import { ContactComponent} from './contact.component'

export const appRoutes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'contact', pathMatch: 'full' }
];