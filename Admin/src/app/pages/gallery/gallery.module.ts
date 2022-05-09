import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryRoutingModule } from './gallery-routing.module';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ComponentsModule } from 'app/components/components.module';
import { ListComponent } from './list/list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    ListComponent,
    ModalAddComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatDialogModule,
    GalleryRoutingModule,
    FileUploadModule,
    NgxPaginationModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }]]
      }
    })
  ],
  entryComponents: [
    ModalAddComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class GalleryModule { }
