import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../shared/services/business.service';
import { Business } from '../../../shared/models/business.model';
import { ActivatedRoute } from '@angular/router';
import { BusinessCategoryService } from '@app-services/businessCategory.service';
import { BusinessCategory } from '@app-models/business-category.model';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { UtilsService } from '../../../shared/providers/utils.service';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalApproveComponent } from './modal-approve/modal-approve.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BusinessRequiredDocumentService } from '@app-services/businessRequiredDocument.service';
import { BusinessRequiredDocument } from '@app-models/business-required-document.model';
import { ModalDocumentComponent } from './modal-document/modal-document.component';
import { environment } from 'environments/environment';
import { ModalViewComponent } from './modal-view/modal-view.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  isLoading: boolean;
  data: Business;
  docs: BusinessRequiredDocument[];
  category: BusinessCategory;
  id: string;
  categories: BusinessCategory[];
  public form: FormGroup;
  constructor(
    private businessService: BusinessService,
    private businessCategoryService: BusinessCategoryService,
    private businessRequiredDocumentService: BusinessRequiredDocumentService,
    private _route: ActivatedRoute,
    private _formHelperService: FormHelperService,
    private _fb: FormBuilder,
    private _toasterService: ToasterService,
    private utils: UtilsService,
    public dialog: MatDialog,
    
  ) { 
    this.id = this._route.snapshot.params['id'];
  }
  async ngOnInit( ) {
    this.isLoading = true;
    await this.loadCategories();
    await this.loadData();
    await this.loadDocs();
   // this.categories = await this.loadCategories();
    this.isLoading = true;
    this.form = this._fb.group({
      name: [this.data ? this.data.name : '', Validators.required],
      phone: [this.data ? this.data.phone : '', Validators.required],
      status: [this.data ? this.data.status : '', Validators.required],
      business_category_id: [this.data ? this.data.business_category_id : '', Validators.required],
      comment: [this.data ? this.data.comment : ''],
    });
    this.isLoading = false;
  }
  async loadData() {
      try {
        this.isLoading = true;
        this.data = await this.businessService.load(this.id).toPromise();
        console.log('aaaa', this.data);
        this.isLoading = false;
    } catch (e) {
        console.error(e);
        this.isLoading = false;
    }
  }

  async loadDocs() {
    try {
      this.isLoading = true;
      const query = { searchFields: 'businessId', searchValue: this.id };
      this.docs = await this.businessRequiredDocumentService.list(1, 250, query).toPromise();
      this.isLoading = false;
  } catch (e) {
      console.error(e);
      this.isLoading = false;
  }
}

  async loadCategories() {
    try {
      this.isLoading = true;
      this.categories = await this.businessCategoryService.list(0,100).toPromise();
      this.isLoading = false;
    } catch (e) {
        console.error(e);
        this.isLoading = false;
    }
  }
  /**
   * [Description] Set error class on form based on Form and field validation
   * @param {FormGroup} form
   * @param {string} field
   */
  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this._formHelperService.isFieldValid(form, field),
      'has-feedback': this._formHelperService.isFieldValid(form, field)
    };
  }
  submit() {
    if (!this.form.valid) {
      this._toasterService.error('Please fill all inputs');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
    console.log(this.form.value)
  }
  back() {
    this.utils.back();
  }
  async rejeted(row) {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      width: '450px',
      data: row.name
    });
    dialogRef.afterClosed().subscribe(async (result: any) => {
      console.log('result ', result)
      if (result) {
        await this.businessService.updateReject(
          new Business({ ...this.data, rejectedReason: result})
        ).toPromise();
        this.isLoading = false;
        this.ngOnInit();
        this._toasterService.success('Success ');
      }
    });
  }
  async approve() {
    const dialogRef = this.dialog.open(ModalApproveComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        await this.businessService.updateApprouve(this.id).toPromise();
        this.isLoading = false;
        this.ngOnInit();
        this._toasterService.success('Success ');
      }
    });
  }
  async validDoc(item: BusinessRequiredDocument) {
    const dialogRef = this.dialog.open(ModalApproveComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        await this.businessRequiredDocumentService.updateApprouve(item.id).toPromise();
        this.isLoading = false;
        //this.ngOnInit();
        this.upStatus();
        this._toasterService.success('Success ');
      }
    });
  }
  rejectDoc(item: BusinessRequiredDocument) {
    try {
      const dialogRef = this.dialog.open(ModalConfirmComponent, {
        width: '450px',
        data: item.name
      });
      dialogRef.afterClosed().subscribe(async (result: any) => {
        console.log('result ', result)
        if (result) {
          await this.businessRequiredDocumentService.updateReject(
            new BusinessRequiredDocument({ ...item, refusedReason: result})
          ).toPromise();
          this.isLoading = false;
          //this.ngOnInit();
          this.upStatus();
          this._toasterService.success('Success ');
        }
      });
    } catch (e) {
      this.isLoading = false;
    }
  }
  openDoc(item: BusinessRequiredDocument) {
    const dialogRef = this.dialog.open(ModalDocumentComponent, {
      width: '98%',
      height: '96vh',
      panelClass: 'customModal',
      data: item
    });
    dialogRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
      }
    });
  }
  openViewIframe() {
    const dialogRef = this.dialog.open(ModalViewComponent, {
      width: '98%',
      height: '96vh',
      panelClass: 'customModal',
      //data: `${environment.FILE_ENDPOINT}/staysDetail/2`
      data: `${environment.FILE_ENDPOINT}/staysDetail/${this.data.id}`
    });
    dialogRef.afterClosed().subscribe(async (result: string) => {
      if (result) {
        this.isLoading = true;
        const d = new Business({ ...this.data, displayStatus: result });                
        await this.businessService.update(d).toPromise();
        this.isLoading = false;
        this.ngOnInit();        
        this._toasterService.success('Success ');               
      }
    });
  }

  async upStatus() {
    if (this.docs && this.docs.length) {
      await this.loadDocs();
      const refus = this.docs.find(item => item.status === 'refused');
      /** change status document business */
      if (refus) {
        console.log('refus ::: ', refus)
        if (this.data.documentStatus !== 'refused') {
          this.updateBusinessStatus({ documentStatus: 'refused' });
        }
      } else {
        const pending = this.docs.find(item => item.status === 'pending');
        if (!pending && this.data.documentStatus !== 'valid') {
          this.updateBusinessStatus({ documentStatus: 'valid' }); 
        }
      }
    }
  }
  async updateBusinessStatus(status) {
    try {
      this.isLoading = true;
      const d = new Business({ ...this.data, ...status });              
      await this.businessService.update(d).toPromise();
      this.isLoading = false;
      this.ngOnInit();
    } catch(e) {
      console.error(e)
    }              
  }
  async validTotality() {
    const dialogRef = this.dialog.open(ModalApproveComponent, {
      width: '450px',
      data: { message: 'You valid' }
    });
    dialogRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        this.updateBusinessStatus({ status: 'waiting_payment' }); 
      }
    });    
  }
}
