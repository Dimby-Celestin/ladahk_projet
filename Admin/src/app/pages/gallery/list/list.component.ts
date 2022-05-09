import { Component, OnInit } from '@angular/core';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { Router } from '@angular/router';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { UtilsService } from '@app-providers/utils.service';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { MatDialog } from '@angular/material/dialog';
import { ToasterService } from '@app-providers/toaster.service';
import { GalleryService } from '@app-services/gallery.service';
import { Gallery } from '@app-models/gallery.model';
import { GalleryCategoryService } from '@app-services/galleryCategory.service';
import { GalleryCategory } from '@app-models/galleryCategory.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  pageSize = 10;
  searchString: string = '';
  //rows: any = new Gallery();
    rows: Gallery[];
  galleryCat: GalleryCategory[];

  constructor(
    private _galleryService: GalleryService,
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
    await this.loadGalleryCat();
    await this.loadDocs();
    await this.loadData(this.page, this.pageSize);
    this.isLoading = false;
  }
  async loadData(pageNumber?: number, pageSize?: number) {
    this.isLoading = true;
    if (pageNumber) {
      this.page = pageNumber;
    }
    let queryString: any = {searchFields: 'type', excerpt: true};
    if (this.searchString) {
      queryString.searchValue = this.searchString;
    }
    try {
      this.rows = await this._galleryService.list(pageNumber, pageSize, queryString).toPromise();
      this.isLoading = false;
      console.log('this.rows' , this.rows);
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
  async loadGalleryCat() {
    this.isLoading = true;
    try {
      this.galleryCat = await this._galleryCategoryService.list(1, 250).toPromise();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.error(e);
    }
  }
  async loadDocs() {
    this.isLoading = true;
    try {
      this.galleryCat = await this._galleryCategoryService.list(1, 250).toPromise();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.error(e);
    }
  }
  getCategory(category_id: string) {
    const galleryCat = this.galleryCat.find(item => item.id === category_id);
    if (galleryCat) {
      return galleryCat.name;
    }
    return '';
  }
  realPath(path): string {
    if (path.startsWith('http')) {
      return path;
    }
    return (environment.DATA_ENDPOINT + "/" + path);
  }
  async delete(item: Gallery) {
    try {
      const del = await this._utils.confirm('Are you really want to delete the gallery ?');
      if (del) {
        this.isLoading = true;
        await this._galleryService.delete(item).toPromise();
        await this.loadData();
        this.isLoading = false;
      } 
    } catch (e) {
      this.isLoading = false;
    }
  }
  add(item?) {
    try {
      const dialogRef = this.dialog.open(ModalAddComponent, {
        width: '650px',
        data: item ? item : ''
      });
      dialogRef.afterClosed().subscribe(async (result: any) => {
        if (result) {
          this.isLoading = false;
          this.ngOnInit();
        }
      });
    } catch (e) {
      this.isLoading = false;
    }
  }
  back() {
    //this._utils.back();
    this._router.navigate(['/post']);
  }
}
