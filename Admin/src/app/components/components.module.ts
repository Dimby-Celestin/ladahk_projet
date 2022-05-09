import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  declarations:
    [
      ButtonComponent,
      DeleteModalComponent,
      FileUploaderComponent,
      ModalComponent,
      AlertComponent
    ],
  exports:
    [
      ButtonComponent,
      DeleteModalComponent,
      FileUploaderComponent
    ],
  entryComponents: [
    DeleteModalComponent
  ]
})
export class ComponentsModule { }
