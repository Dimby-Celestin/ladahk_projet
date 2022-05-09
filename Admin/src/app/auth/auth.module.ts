import {  Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from 'app/shared/guards/module-import.guard';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';

import { AuthRoutingModule } from './auth-routing.module';
import { PipesModule } from 'app/shared/pipes/pipes.module';
import { Register2Component } from './register2/register2.component';

import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    Register2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    PipesModule
  ]
})
export class AuthModule {
  constructor(
    @Optional() @SkipSelf() parentModule: AuthModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'AuthModule');
  }
 }
