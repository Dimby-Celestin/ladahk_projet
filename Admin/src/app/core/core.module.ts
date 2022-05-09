import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '../shared/guards/module-import.guard';
import { BasicAuthInterceptor } from '../shared/providers/auth.interceptor';
import { CoreRoutingModule } from './core-routing.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { NavbarModule } from './navbar/navbar.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    NavbarModule,
    ComponentsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
