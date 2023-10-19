import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OtpComponent } from './components/otp/otp.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { NewAccComponent } from './components/new-acc/new-acc.component';
import { NewPageComponent } from './components/new-page/new-page.component';

const routes: Routes=[
    {path: 'login', component: LoginComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'otp', component: OtpComponent},
    {path: 'confirm-password', component: ConfirmPasswordComponent},
    {path: 'new-acc', component: NewAccComponent},
    {path: 'index-page', component: IndexPageComponent},
    {path: 'new-page', component: NewPageComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{ }