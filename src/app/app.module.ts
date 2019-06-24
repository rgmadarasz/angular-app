import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {MatTableModule} from '@angular/material/table';


import {Index} from './app.component';
import { BookComponent } from './books.component'
import { ContactComponent } from './contact.component'
import { HistoryComponent } from './history.component'
import { SendComponent } from './send.component'
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule
    
  ],
  entryComponents: [Index, BookComponent, ContactComponent, HistoryComponent, SendComponent],
  declarations: [Index, BookComponent, ContactComponent, HistoryComponent, SendComponent],
  bootstrap: [Index],
  providers: []
})

export class AppModule {}