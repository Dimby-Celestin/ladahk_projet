import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { EditComponent } from './edit/edit.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AccountsComponent, UploadfileComponent, EditComponent,
  HomeComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatCheckboxModule,
  ]
})
export class AccountsModule { }