import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { EditComponent } from './edit/edit.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatDialogModule} from '@angular/material/dialog';
import { BusinesscategoryRoutingModule } from './business-category-routing.module';
import { ModalEditComponent } from './edit/modal-edit/modal-edit.component';
import { AddDocumentComponent } from './edit/add-document/add-document.component';
import { ListRequiresDocumentComponent } from './edit/list-requires-document/list-requires-document.component';
import { ModalRequiredDocumentComponent } from './edit/list-requires-document/modal-required-document/modal-required-document.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    ListingComponent,
    EditComponent,
    ModalEditComponent,
    AddDocumentComponent,
    ListRequiresDocumentComponent,
    ModalRequiredDocumentComponent,
  ],
  imports: [
    CommonModule,
    BusinesscategoryRoutingModule,
    FormsModule,
    NgSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    NgxPaginationModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }]]
      }
    })
  ]
})
export class BusinesscategoryModule { }
