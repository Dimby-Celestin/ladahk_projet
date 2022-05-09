import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { EditComponent } from './edit/edit.component';
import { AddDocumentComponent } from './edit/add-document/add-document.component';
import { ListRequiresDocumentComponent } from './edit/list-requires-document/list-requires-document.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'listing', pathMatch: 'full' },
    { path: 'listing', component: ListingComponent},
    { path: 'edit/:id', component: EditComponent},
    { path: 'edit/:id/docs', component: ListRequiresDocumentComponent},
    { path: 'edit/:id/doc/:documentId', component: AddDocumentComponent},
    { path: 'edit/', component: EditComponent},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class BusinesscategoryRoutingModule {}
