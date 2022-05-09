import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';

import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
     children: [
       {
         path: 'home',
         component: HomeComponent
       },
       {
        path: 'upload',
        component: UploadfileComponent
      },
      {
        path: 'edit',
        component: EditComponent
      }
]
}
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
