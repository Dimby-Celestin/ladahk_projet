import { Component, OnInit, ViewChild } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ModalViewComponent } from './modal-view/modal-view.component';

import {FormGroup,FormBuilder, Validators, FormControl} from "@angular/forms";
import { UtilsService } from "../../shared/providers/utils.service";
import { FormHelperService } from "../../shared/providers/form-helper.service";
import { BusinessService } from '@app-services/business.service';
import {  BusinessStatusEnum, BusinessStatus } from '@app-models/business.model';
import { ToasterService } from '@app-providers/toaster.service';
import { Business } from '../../shared/models/business.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { BusinessCategoryService } from '@app-services/businessCategory.service';
import { BusinessCategory } from '@app-models/business-category.model';
import { DatePipe } from '@angular/common';

import { GalleryService } from '@app-services/gallery.service';
import { Gallery } from '@app-models/gallery.model';
import { GalleryCategoryService } from '@app-services/galleryCategory.service';

import { UserService } from '@app-services/user.service';
import { User } from '@app-models/user.model';
import { ModalPhotographerComponent } from './photographer/list/modal-photographer/modal-photographer.component';
import { SessionService } from '@app-providers/session.service';
import { ModalRequiredDocumentComponent } from './details-transfer/modal-required-document/modal-required-document.component';
import { RequiredDocumentService } from '@app-services/requiredDocument.service';
import { RequiredDocument } from '@app-models/required-document.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  form: FormGroup;
  id: string;
  dataBusinnes: Business;
  business: Business = new Business();
  count: any = {};
  region = ['leh', 'test'];
  statusArray = BusinessStatus;
  businessTypes: BusinessCategory[]; // all category
  listType:  BusinessCategory[] = []; // only for list category (parent = null)
  listClass:  BusinessCategory[];  // class only:  parent = parent
  rows: Business[];
  gallery : Gallery;
  countGal: any;
  countPhotographer: any;
  filter: any = {
    status: 'all'
  };
  
  isAllActive: boolean = true;
  
  constructor(
    private _utils: UtilsService,
    private _formHelperService: FormHelperService,
    private _businessService: BusinessService,
    private _businessCategoryService: BusinessCategoryService,
    public dialog: MatDialog,
    private _toasterService: ToasterService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _datePipe: DatePipe,
    private _galleryService: GalleryService,
    private _galleryCategoryService: GalleryCategoryService,
    private _userService: UserService,
    public session: SessionService,
    private requiredDocumentService: RequiredDocumentService,
  ) {
    super();
    this._route.queryParams.subscribe(params => {
      this.page = parseInt(params['page'], 10) || this.page;
      this.searchString = params['q'] || this.searchString;
      this.filter.status = params['status'] || 'all';
      this.filter.created_at = params['created_at'] || undefined;
      this.filter.city = params['city'] || undefined;      
      this.filter.business_category_id = params['business_category_id'] ? parseInt(params['business_category_id'], 10) : undefined;
      this.filter.business_subcategory_id = params['business_subcategory_id'] ? parseInt(params['business_subcategory_id'], 10) : undefined;
      if (!this.filter.status || this.filter.status === 'all') {
        this.isAllActive = true;
      } else {
        this.isAllActive = false;
      }
    });
    this.searchUpdated$
      .debounceTime(600)
      .distinctUntilChanged()
      .subscribe(async data => {
        this._router.navigate([], {
          queryParams: {
            page: this.page || undefined,
            q: this.searchString || undefined,
            status: this.filter.status ? this.filter.status : 'all',
            date: this.filter.created_at ? this.filter.created_at : undefined,
            city: this.filter.city ? this.filter.city : undefined,
            business_category_id: this.filter.business_category_id ? this.filter.business_category_id : undefined,
            business_subcategory_id: this.filter.business_subcategory_id ? this.filter.business_subcategory_id : undefined, 
          }
        });
        await this.loadBusinesses(1, this.pageSize);
      });
    this.id = this._route.snapshot.params['id'];
    this.isLoading = false;
  }
  async ngOnInit() {
    this.isLoading = true;
    this._businessService.totalCount$.subscribe(count => {
      this.pageLength = count;
    });
    await this.session.getSessionStatus().toPromise();
    await this.loadType();
    await this.loadBusinesses(this.page, this.pageSize);
    await this.loadCount();
    await this.loadType();
   
    if (this.filter.business_category_id) {
      this.listTypeOnChange(this.filter.business_category_id);
    }
   this.isLoading = false;
  }

  async loadCount() {
    try {
      const c = await this._businessService.stat().toPromise();
      const SRA = c.new;
      const RA = c.registering;
      const UR = c.under_review;
      const RJ = c.rejected;
      const AL = c.valid;
      const DAT = c.all;
      this.count = {
        //countTotal : c.all,
        countTotal : SRA + RA + UR + RJ + AL,
        countSRA: SRA,
        countRA: RA,
        countUR: UR,
        countRJ: RJ,
        countAL: AL,
        countDAT: DAT,
        photographer: c.photographer
      } ;
    } catch (e) {
      console.error(e);
    }
  }
  async loadType() {
    try {
      this.businessTypes = await this._businessCategoryService.list(1, 1000).toPromise();
      this.listType = this.businessTypes.filter(i => !i.parent_id)
    } catch (e) {
      console.error(e);
    }
  }

  async loadBusinesses(pageNumber?: number, pageSize?: number) {
    if (this.filter.status === 'all') {
      delete this.filter.status;
      this.filter.status = 'new,registering,waiting_form,under_review,valid';
    }
    if (pageNumber) {
      this.page = pageNumber;
    }
    if (this.searchString) {
      this.filter.searchFields = 'name';
      this.filter.searchValue = this.searchString;
    }  
    if(!this.filter.business_category_id) {
      delete this.filter.business_category_id;
    }
    if(!this.filter.business_subcategory_id) {
      delete this.filter.business_subcategory_id;
    }
    if(!this.filter.created_at) {
      delete this.filter.created_at;
    }
    if(!this.filter.city) {
      delete this.filter.city;
    }
    try {
       this.rows = await this._businessService.list(pageNumber, pageSize, this.filter ).toPromise();
    } catch (e) {
      console.error(e);
    }
  }
  isFieldValid(field: any) {
    return this._formHelperService.isFieldValid(this.form, field);
  }
  displayFieldCss(field: string) {
    return {
      "has-error": this.isFieldValid(field),
      "has-feedback": this.isFieldValid(field)
    };
  }
  reset() {
    this.form.reset();
  }
  goBack() {
    this._utils.back();
  }
 async select(status) {
  if (status === 'all') {
    this.isAllActive = true;
  } else {
    this.isAllActive = false;
  }
  this.searchString = '';
  delete this.filter.searchFields;
  delete this.filter.searchValue;
  delete this.filter.business_category_id;
  this.filter.status = status;
  delete this.filter.created_at;
  delete this.filter.city;
  this.updateQueryParams();
  await this.loadBusinesses(1, this.pageSize);
}
  async statusOnChange(e) {
    this.filter.status = e;
    this.updateQueryParams();
    await this.loadBusinesses(1, this.pageSize);
  }
  async listTypeOnChange(e) {
    if (e) {
      this.listClass = this.businessTypes.filter(item => item.parent_id === e );
      this.filter.business_category_id = e;
    } else {
      this.listClass = [];
      this.filter.listingbusiness_subcategory_id = undefined;
    }
    this.updateQueryParams();
    await this.loadBusinesses(1, this.pageSize);
  }
  async view(item) {
    console.log('item ', item)
    const dialogRef = this.dialog.open(ModalViewComponent, {
      width: '100%',
      height:'96%',
      data: item
    });
    dialogRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        this.isLoading = false;
        this.ngOnInit();
      }
    });
  }
 
  async classOnChange(e) {
    this.updateQueryParams();
    await this.loadBusinesses(1, this.pageSize);
  }
  async cityOnChange(e) {
    this.updateQueryParams();
    await this.loadBusinesses(1, this.pageSize);
  }
  
  async dateChanged(e) {
    this.filter.created_at = this._datePipe.transform(e.value, 'yyyy-MM-dd');
    this.updateQueryParams();
    await this.loadBusinesses(1, this.pageSize);
  }

  updateQueryParams() {
    this._router.navigate([], {
      queryParams: {
        page: this.page || undefined,
        q: this.searchString || undefined,
        status: this.filter.status ||  'all',
        created_at: this.filter.created_at ? this.filter.created_at : undefined,
        city: this.filter.city ? this.filter.city : undefined,
        business_category_id: this.filter.business_category_id || undefined,
        business_subcategory_id: this.filter.business_subcategory_id ? this.filter.business_subcategory_id : undefined, 
      }
    });
  }

    async photo(item) {
      const dialogRef = this.dialog.open(ModalPhotographerComponent, {
        width: '1000px',
        height:'400px',
        data: item
      });
      dialogRef.afterClosed().subscribe(async (result: boolean) => {
        if (result) {
          this.isLoading = false;
          this.ngOnInit();
        }
      });
    }
   async isPhoto() {
      this.filter.business_category_id = 9; // photographer
      delete this.filter.status;
      this.isAllActive = false;
      await this.loadBusinesses(1, this.pageSize);
    }
    isImageAll() {
      this.filter.status = 'status';
      this.isAllActive = false;
    }
    pageChangeEvent(event) {
      this.loadBusinesses(event, this.pageSize);
    }

    async edit(item?) {
      let dataItem;
      if (item && item.categoryId) {
        dataItem = item;
      } else {
        dataItem = { ...item, business_category_id: this.id };
      }
      const dialogRef = this.dialog.open(ModalRequiredDocumentComponent, {
        width: '450px',
        data: dataItem
      });
      dialogRef.afterClosed().subscribe(async (result: RequiredDocument) => {
        if (result) {
          try {
            this.isLoading = true;
            let res;
            if (result.id) {
              res = await this.requiredDocumentService.update(result).toPromise();
            } else {
              res = await this.requiredDocumentService.add(result).toPromise();
            }
            if (res) {
              this.ngOnInit();
              this._toasterService.success('Success ');
              this.isLoading = false;
            }
          } catch (e) {
            console.error(e);
            this.isLoading = false;
          }
        }
      });
    }

}

