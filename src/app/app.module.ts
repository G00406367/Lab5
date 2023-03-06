import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListcomponentsComponent } from './listcomponents/listcomponents.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcomponentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
