import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header.component';
import { PhotographyComponent } from './photography.component';
import { TravelComponent } from './travel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PhotographyComponent,
    TravelComponent
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
