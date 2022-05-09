import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';

const AuthRoutes: Routes = [
  {
    path: '',
     children: [
       {
         path: 'login',
         component: LoginComponent
       },
       {
         path: 'forgot',
         component: ForgotComponent
       },
       {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'register2',
        component: Register2Component
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
