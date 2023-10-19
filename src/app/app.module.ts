import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { OtpComponent } from './components/otp/otp.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { NewAccComponent } from './components/new-acc/new-acc.component';
import { NewPageComponent } from './components/new-page/new-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    OtpComponent,
    ConfirmPasswordComponent,
    IndexPageComponent,
    NewAccComponent,
    NewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
