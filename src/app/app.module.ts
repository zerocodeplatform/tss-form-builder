import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TssFormModule } from 'projects/tssforms/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    TssFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
