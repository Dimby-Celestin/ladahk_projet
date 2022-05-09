import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { SliderRoutingModule } from './slider-routing.module';
import localeFr from '@angular/common/locales/fr';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadModule } from 'ng2-file-upload';
import { ComponentsModule } from 'app/components/components.module';
import { AddComponent } from './add/add.component';
import { QuillModule } from 'ngx-quill';
import { DragDropModule} from '@angular/cdk/drag-drop';
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
    SliderRoutingModule,
    MatDialogModule,
    FileUploadModule,
    ComponentsModule,
    DragDropModule,
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
export class  SliderModule { }
