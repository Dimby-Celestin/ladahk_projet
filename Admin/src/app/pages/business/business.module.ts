import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {BusinessRoutingModule} from './business-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmComponent } from './detail/modal-confirm/modal-confirm.component';
import { ModalApproveComponent } from './detail/modal-approve/modal-approve.component';

@NgModule({
  declarations: [DetailComponent, ModalConfirmComponent, ModalApproveComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ]
})
export class BusinessModule { }
