import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {Index} from './app.component';
import { BookComponent} from './books.component'
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [Index, BookComponent],
  declarations: [Index, BookComponent],
  bootstrap: [Index],
  providers: []
})

export class AppModule {}