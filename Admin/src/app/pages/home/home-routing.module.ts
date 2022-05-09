import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TransferComponent } from './transfer/transfer.component';
import { DetailsTransferComponent } from './details-transfer/details-transfer.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ListComponent } from './photographer/list/list.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'list', component: TransferComponent},
  { path: 'edit/:id', component: DetailsTransferComponent},
  { path: 'edit', component: DetailsTransferComponent},
  { path: 'payement-details', component: PaymentDetailsComponent},
  { path: 'list-photographer', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
