import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { MustToDoRoutingModule } from './must-to-do-routing.module';
import localeFr from '@angular/common/locales/fr';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadModule } from 'ng2-file-upload';
import { ComponentsModule } from 'app/components/components.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MustToDoRoutingModule,
    MatDialogModule,
    FileUploadModule,
    ComponentsModule,
    DragDropModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class  MustToDoModule { }
