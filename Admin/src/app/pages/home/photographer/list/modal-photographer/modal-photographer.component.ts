import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Business } from '../../../../../shared/models/business.model';
import { BusinessService } from '@app-services/business.service';
import { ToasterService } from '@app-providers/toaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '@app-services/gallery.service';
import { Gallery } from '@app-models/gallery.model';
import { GalleryCategoryService } from '@app-services/galleryCategory.service';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { environment } from 'environments/environment';
import { User } from '@app-models/user.model';

@Component({
  selector: 'app-modal-photographer',
  templateUrl: './modal-photographer.component.html',
  styleUrls: ['./modal-photographer.component.scss']
})
export class ModalPhotographerComponent extends PageWithListing implements OnInit {

  id: string;
  rowsGal: Gallery[];
  constructor(
    public dialog: MatDialog,
    private _toasterService: ToasterService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _galleryService: GalleryService,
    private _galleryCategoryService: GalleryCategoryService,
    public dialogRef: MatDialogRef<ModalPhotographerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Business ) {
      super();
    }
  async ngOnInit() {
    this.isLoading = true;
    this._galleryService.totalCount$.subscribe(count => {
      this.pageLength = count;
    });
    await this.loadData(this.page, this.pageSize);
    this.isLoading = false;
  }
  async loadData( pageNumber?: number, pageSize?: number) {
    this.isLoading = true;
    if (pageNumber) {
      this.page = pageNumber;
    }
   /* let queryString: any = { searchFields: 'name', author_id: id };
    if (this.searchString) {
      queryString.searchValue = this.searchString;
    }*/
    const search = {
      searchValue: this.data.id,
      searchFields: [
        'author_id'
      ],
    }
    console.log('search' , search);
    try {
      this.rowsGal = await this._galleryService.list(pageNumber, pageSize, search).toPromise();
      //this.rowsGal.filter(item => item.author_id == id);
      console.log('this.rowsGal' , this.rowsGal);
      this.isLoading = false;
     } catch (e) {
      this.isLoading = false;
      console.error(e);
    }
  }
 /********** */
 onNoClick(): void {
  this.dialogRef.close(true);
}
}
