import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginFormComponent } from './login-form/loginform.component';
import { RegisterFormComponent } from './register-form/registerform.component';
import { UserS1Component } from './user-s1/user-s1.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    UserS1Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
