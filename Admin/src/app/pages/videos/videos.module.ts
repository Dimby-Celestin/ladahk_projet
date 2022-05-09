import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import localeFr from '@angular/common/locales/fr';
import { AddComponent } from './add/add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadModule } from 'ng2-file-upload';
import { ComponentsModule } from 'app/components/components.module';
import { QuillModule } from 'ngx-quill'
import { VideosRoutingModule } from './videos-routing.module';
registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    VideosRoutingModule,
    MatDialogModule,
    FileUploadModule,
    ComponentsModule,
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
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class  VideosModule { }
