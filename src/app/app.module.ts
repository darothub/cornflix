import { CountClicks } from './landing-page/counter.directive';
import { HttpClient } from '@angular/common/http';
import { LandingPageModule } from './landing-page/landing.module';
import { LandingPageComponent } from './landing-page/landing.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule, NavbarModule } from "angular-bootstrap-md";
// import { NavBarModule } from './navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
import { WebStorageModule } from "ngx-web-storage";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    CountClicks
  ],
  imports: [
    NavbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    WebStorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
