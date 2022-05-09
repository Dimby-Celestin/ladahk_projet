import { Business } from '@app-models/business.model';
import { BusinessService } from '@app-services/business.service';
import { BusinessTransferService } from '@app-services/businessTransfer.service';
import { BusinessTransfer } from '@app-models/business-transfer.model';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app-providers/utils.service';
import { FormHelperService } from '@app-providers/form-helper.service';
import { BusinessCategory } from '@app-models/business-category.model';
import { BusinessCategoryService } from '@app-services/businessCategory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { ToasterService } from '@app-providers/toaster.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Location } from '@angular/common';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  pageSize = 10;
  searchString: string = '';
  businessAll: Business[];
  rows: any = new BusinessCategory();
  id: string;
  data: BusinessCategory;
  listType:  BusinessCategory[];
  listClass:  BusinessCategory[]; 
  filter: any = {
    status: 'all'
  };
  constructor(
    private _utils: UtilsService,
    private businessCategoryService: BusinessCategoryService,
    private _router: Router,
    private _toasterService: ToasterService,
    public dialog: MatDialog,
    public location: Location
  ) {
    super();
    this.searchUpdated$
      .debounceTime(600)
      .distinctUntilChanged()
      .subscribe(data => {
        this.loadData();
      });
  }
  async ngOnInit() {
    this.isLoading = true;
    this.businessCategoryService.totalCount$.subscribe(count => {
      this.pageLength = count;
      console.log('count::', count);
    });
    await this.loadData(this.page, this.pageSize);
  }
 async loadData(pageNumber?: number, pageSize?: number) {
  if (pageNumber) {
    this.page = pageNumber;
  }
  let queryString: any = {searchFields: 'name', parent_id: 'notnull'};
  if (this.searchString) {
    queryString.searchValue = this.searchString;
  } else {
    queryString = { parent_id: 'notnull' };
  }
  try {
    this.rows = await this.businessCategoryService.list(pageNumber, pageSize, queryString).toPromise();
    this.isLoading = false;
    this._router.navigate([], {
      queryParams: {
        page: this.page || undefined,
        q: this.searchString || undefined
      }
    });
  } catch (e) {
    console.error(e);
  }
 }

async delete(item: BusinessCategory) {
  try {
    const del = await this._utils.confirm('Are you really want to delete the business category?');
    if (del) {
      this.isLoading = true;
      await this.businessCategoryService.delete(item).toPromise();
      await this.loadData();
      this.isLoading = false;
    }
  } catch (e) {
    this.isLoading = false;
    console.error(e);
  }
}
async edit(item?: BusinessCategory) {
  let dataItem;
  if (item && item.id) {
    dataItem = item;
  } else {
    dataItem = new BusinessCategory({ ...item, parent_id: this.id });
  }
  console.log('dataItem ', dataItem)
  const dialogRef = this.dialog.open(ModalEditComponent, {
    width: '450px',
    data: dataItem
  });
  dialogRef.afterClosed().subscribe(async (result: BusinessCategory) => {
    if (result) {
      try {
        this.isLoading = true;
        let res;
        if (result.id) {
          res = await this.businessCategoryService.update(result).toPromise();
        } else {
          res = await this.businessCategoryService.add(result).toPromise();
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
back() {
  //this.location.back();
  this._router.navigate(['/home']);
}
}
