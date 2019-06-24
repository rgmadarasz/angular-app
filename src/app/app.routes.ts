import { RouterModule, Routes } from '@angular/router';



import {Index} from './app.component';
import { BookComponent} from './books.component'
import { ContactComponent} from './contact.component'
import { HistoryComponent } from './history.component'
import { SendComponent } from './send.component'

export const appRoutes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'send', component: SendComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];