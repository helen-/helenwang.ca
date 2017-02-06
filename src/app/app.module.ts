import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header.component';
import { TravelComponent } from './travel.component';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TravelComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
