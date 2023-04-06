import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/Day3/components/home/home.component';
import { LoginComponent } from './components/Day3/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
