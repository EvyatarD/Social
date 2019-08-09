import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/log-reg-forgot/login/login.component';
import { RegisterComponent } from './components/log-reg-forgot/register/register.component';
import { ForgotPassComponent } from './components/log-reg-forgot/forgot-pass/forgot-pass.component';
import { MainComponent } from './components/main/main.component';
import {HeaderComponent } from './components/Header/Header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
