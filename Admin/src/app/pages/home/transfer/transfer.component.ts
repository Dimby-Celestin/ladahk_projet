import { Component, OnInit } from '@angular/core';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { Router, ActivatedRoute } from '@angular/router';
import { Business } from '@app-models/business.model';
import { BusinessService } from '@app-services/business.service';
import { BusinessTransferService } from '@app-services/businessTransfer.service';
import { BusinessTransfer } from '@app-models/business-transfer.model';
import { UtilsService } from '@app-providers/utils.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  isLoading: boolean;
  pageSize = 10;
  searchString: string = '';
  businessAll: Business[];
  rows: BusinessTransfer[];

  constructor(
    private businessTransferService: BusinessTransferService,
    private businessService: BusinessService,
    private _router: Router,
    private utils: UtilsService,
    private _route: ActivatedRoute,
  ) {
  }

  async ngOnInit( ) {
    this.isLoading = true;
    await this.loadData();
    await this.getBusinessAll();
    this.isLoading = false;
  }
  async loadData() {
    this.isLoading = true;
    try {
      this.rows = await this.businessTransferService.list(1, 100).toPromise();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.error(e);
    }
  }
  back() {
    this.utils.back();
  }
  async getBusinessAll() {
    this.businessAll = await this.businessService.list(1, 250).toPromise();
  }
  getBusiness(id: string) {
    const resp =  this.businessAll.find(item => item.id === id);
    if (resp) {
      return resp.name;
    }
  }

}
