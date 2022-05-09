import { Component, OnInit } from '@angular/core';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { Router } from '@angular/router';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { UtilsService } from '@app-providers/utils.service';
//import { ModalAddComponent } from '../modal-add/modal-add.component';
import { MatDialog } from '@angular/material/dialog';
import { ToasterService } from '@app-providers/toaster.service';
import { GalleryService } from '@app-services/gallery.service';
import { Gallery } from '@app-models/gallery.model';
import { GalleryCategoryService } from '@app-services/galleryCategory.service';
import { GalleryCategory } from '@app-models/galleryCategory.model';
import { environment } from 'environments/environment';

import { UserService } from '@app-services/user.service';
import { User } from '@app-models/user.model';
import { ModalPhotographerComponent } from './modal-photographer/modal-photographer.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  pageSize = 10;
  searchString: string = '';
  rows: any = new User();
  id: string;
  rowsGal: Gallery[];

  constructor(
    private _galleryService: GalleryService,
    private _userService: UserService,
    private _router: Router,
    private _utils: UtilsService,
    public dialog: MatDialog,
    private _toasterService: ToasterService,
    private _galleryCategoryService: GalleryCategoryService,
  ) {
    super();
    this.searchUpdated$
      .debounceTime(600)
      .distinctUntilChanged()
      .subscribe(data => {
        this.loadData();
      });
  }

  async ngOnInit( ) {
    this.isLoading = true;
    this._galleryService.totalCount$.subscribe(count => {
      this.pageLength = count;
    });
    await this.loadData(this.page, this.pageSize);
    this.isLoading = false;
  }
  async loadData(pageNumber?: number, pageSize?: number) {
    this.isLoading = true;
    if (pageNumber) {
      this.page = pageNumber;
    }
    let queryString: any = { role: 'photographer' };
    if (this.searchString) {
      queryString.searchValue = this.searchString;
    }
    try {
      this.rows = await this._userService.list(pageNumber, pageSize, queryString).toPromise();
      this.rowsGal = await this._galleryService.list(pageNumber, pageSize).toPromise();
      this.isLoading = false;
      console.log('this.rows' , this.rows);
      console.log(' this.rowsGal',  this.rowsGal );
      this._router.navigate([], {
        queryParams: {
          page: this.page || undefined,
          q: this.searchString || undefined
        }
      });
    } catch (e) {
      this.isLoading = false;
      console.error(e);
    }
  }
  async photo(item) {
    const dialogRef = this.dialog.open(ModalPhotographerComponent, {
      width: '1000px',
      height:'400px',
      data: item
    });
    dialogRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        //await this._businessService.updateApprouve(item.id).toPromise();
        this.isLoading = false;
        this.ngOnInit();
        //this._toasterService.success('Success ');
      }
    });
  }
  
}
