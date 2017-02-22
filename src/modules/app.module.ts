import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing } from '../app.routing';

import { AppComponent } from './components/home/app.component';
import { AboutComponent } from './components/about/about.component';
import { DropdownComponent } from './components/dropdown/dropdown.component'

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    DropdownComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

