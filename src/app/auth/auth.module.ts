import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPwdComponent

  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
