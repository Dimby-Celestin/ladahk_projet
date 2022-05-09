import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TransferComponent } from './transfer/transfer.component';
import { DetailsTransferComponent } from './details-transfer/details-transfer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalRequiredDocumentComponent } from './details-transfer/modal-required-document/modal-required-document.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ComponentsModule } from 'app/components/components.module';
import { ModalConfirmComponent } from './details-transfer/modal-confirm/modal-confirm.component';
import { ModalApproveComponent } from './details-transfer/modal-approve/modal-approve.component';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ModalEditComponent } from './payment-details/modal-edit/modal-edit.component';
import { ModalPhotographerComponent } from './photographer/list/modal-photographer/modal-photographer.component';
import { ListComponent } from './photographer/list/list.component';

@NgModule({
  declarations: [
    HomeComponent, 
    TransferComponent, 
    DetailsTransferComponent, 
    ModalRequiredDocumentComponent,
    ModalConfirmComponent, 
    ModalApproveComponent,
    ModalViewComponent,
    PaymentDetailsComponent,
    ModalEditComponent,
    ModalPhotographerComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  entryComponents: [
    ModalRequiredDocumentComponent,
    ModalConfirmComponent, 
    ModalApproveComponent,
    ModalViewComponent,
    ModalPhotographerComponent
  ],
  providers: [
    DatePipe,
    MatDatepickerModule
  ]
})
export class HomeModule { }