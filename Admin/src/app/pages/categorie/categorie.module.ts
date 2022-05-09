import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CategorieRoutingModule } from './categorie-routing.module';
import localeFr from '@angular/common/locales/fr';
import { AddComponent } from './add/add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadModule } from 'ng2-file-upload';
import { ComponentsModule } from 'app/components/components.module';
registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CategorieRoutingModule,
    MatDialogModule,
    FileUploadModule,
    ComponentsModule
  ],
  entryComponents: [
    AddComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class  CategorieModule { }
