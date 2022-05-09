import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { BusinessStatusUnderChoice, BusinessStatusNew, BusinessStatusRegistering } from '../../../shared/models/business.model';
import { ModalApproveComponent } from './../modal-approve/modal-approve.component';
import { BusinessService } from '@app-services/business.service';
import { ToasterService } from '@app-providers/toaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Business, BusinessStatusEnum, BusinessStatus, DocumentStatus } from '@app-models/business.model';
import { RequiredDocument } from '@app-models/required-document.model';
import { BusinessCategory } from '@app-models/business-category.model';
import { RequiredDocumentService } from '@app-services/requiredDocument.service';
import { BusinessRequiredDocumentService } from '@app-services/businessRequiredDocument.service';
import { BusinessRequiredDocument } from '@app-models/business-required-document.model';
import { ModalRequiredDocumentComponent } from '../details-transfer/modal-required-document/modal-required-document.component';
@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss']
})
export class ModalViewComponent implements OnInit {

  email: string;
  isLoading: boolean;
  business: Business = new Business();
  businesses: Business[];
  id: string;
  comment: string;
  rowsRq: RequiredDocument[];
  rowsBrq: BusinessRequiredDocument[];
  dataBusn = new BusinessCategory();
  statusArrayAll = BusinessStatus;
  statusArray = BusinessStatus;
  filter: any = {};
  businessAll: Business[];
  documentStatus = DocumentStatus;
  oldStatus: string;
 
  constructor(
    private _businessService: BusinessService,
    public dialog: MatDialog,
    private _toasterService: ToasterService,
    private _route: ActivatedRoute,
    private _router: Router,
    private requiredDocumentService: RequiredDocumentService,
    private businessRequiredDocumentService: BusinessRequiredDocumentService,
    private businessService: BusinessService,
    public dialogRef: MatDialogRef<ModalViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Business) {}

  ngOnInit() {
    this.isLoading = true;
    this.oldStatus = this.data.status;
    if(this.data && this.data.status === 'new') {
      this.statusArray = BusinessStatusNew;
    } else if(this.data && this.data.status === 'registering') {
      this.statusArray = BusinessStatusRegistering;
    } else if(this.data && this.data.status === 'under_review') {
      this.statusArray = BusinessStatusUnderChoice;
    }
    this.loadData(this.data.id);
  }
  async loadData(id) {
    try {
      this.isLoading = true;
      this.data = await this.businessService.load(this.data.id).toPromise();
      const search = {
        searchValue: this.data.business_category_id,
        searchFields: [
          'business_category_id',
        ],
      }

      this.rowsRq = await this.requiredDocumentService.list(1, 100 , search ).toPromise();
      this.rowsBrq = await this.businessRequiredDocumentService.list(1, 100 , {businessId: id} ).toPromise();
      console.log(this.rowsBrq , this.rowsRq)
      for (let rq of this.rowsRq)  {
        const found = this.rowsBrq.find(brq => rq.id == brq.requiredDocumentId)
        if (found)  {
          rq.doc = found;
        }
      }
      this.isLoading = false;
  } catch (e) {
      console.error(e);
      this.isLoading = false;
  }
  }


  getBusinessRequDoc(id: string) {
    const resp =  this.rowsRq.find(item => item.id == id);
    if (resp) {
      return resp.name;
    }
  }
  /********** */
  onNoClick(): void {
    this.dialogRef.close(true);
  }
  navigToTransfer() {
    this.dialogRef.close();
    this._router.navigate(['/home/edit/' + this.data.id]);
  }
  async statusOnChange(e) {
    this.filter.status = e;  
  }
  getLabelStatus(status) {
    const t = this.statusArrayAll.find( item => item._id === status);
    if (t) {
      return  t.label;
    }
    return '';
  }
  async update() {
    if (!this.filter.status) {
      this._toasterService.error('Choose a status please');
      return;
    }
    this.data.status = this.filter.status._id;
    this.data.comment = this.comment;
    await this._businessService.update(this.data).toPromise();
    this.isLoading = false;
    if(this.oldStatus === 'new' || this.oldStatus === 'registering') {
      this.onNoClick();
    }    
    this._toasterService.success('Success ');    
  }
  async statusOnChangeDocs(e) {
    this.data.documentStatus = e;  
  }
  async statusOnChangeDisplay(e) {
    this.data.displayStatus = e;  
  }
  async updateDocs() {
    this.data.comment = this.comment;
    await this._businessService.update(this.data).toPromise();
    this.isLoading = false;
    this._toasterService.success('Success ');
  }
  async updateDisplay() {
    this.data.comment = this.comment;
    await this._businessService.update(this.data).toPromise();
    this.isLoading = false;
    this._toasterService.success('Success ');
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
