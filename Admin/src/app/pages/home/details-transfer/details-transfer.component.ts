import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { UtilsService } from '../../../shared/providers/utils.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RequiredDocumentService } from '@app-services/requiredDocument.service';
import { RequiredDocument } from '@app-models/required-document.model';
import { BusinessRequiredDocumentService } from '@app-services/businessRequiredDocument.service';
import { BusinessRequiredDocument } from '@app-models/business-required-document.model';
import { BusinessService } from '../../../shared/services/business.service';
import { Business } from '../../../shared/models/business.model';
import { BusinessCategoryService } from '@app-services/businessCategory.service';
import { BusinessCategory } from '@app-models/business-category.model';
import { BusinessTransferService } from '@app-services/businessTransfer.service';
import { BusinessTransfer } from '@app-models/business-transfer.model';
import { ModalRequiredDocumentComponent } from './modal-required-document/modal-required-document.component';
import { ModalApproveComponent } from './modal-approve/modal-approve.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-details-transfer',
  templateUrl: './details-transfer.component.html',
  styleUrls: ['./details-transfer.component.scss']
})
export class DetailsTransferComponent implements OnInit {

  isLoading: boolean;
  data: Business;
  dataTransfert: BusinessTransfer;
  docs: BusinessRequiredDocument[];
  id: string;
  public form: FormGroup;
  rowsRq: RequiredDocument[];
  dataBusn = new BusinessCategory();
  dt: BusinessCategory[];
  constructor(
    private businessTransferService: BusinessTransferService,
    private businessService: BusinessService,
    private businessCategoryService: BusinessCategoryService,
    private businessRequiredDocumentService: BusinessRequiredDocumentService,
    private requiredDocumentService: RequiredDocumentService,
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
    await this.loadData(this.id);
    await this.loadDataTransfert(this.id);
    this.isLoading = true;
    this.form = this._fb.group({
      oldOwner: [this.dataTransfert ? this.dataTransfert.oldOwner : ''],
      oldEmail: [this.dataTransfert ? this.dataTransfert.oldEmail : ''],
      oldPhone: [this.dataTransfert ? this.dataTransfert.oldPhone : ''],
      newOwner: [this.dataTransfert ? this.dataTransfert.newOwner : ''],
      newEmail: [this.dataTransfert ? this.dataTransfert.newEmail : ''],
      newPhone: [this.dataTransfert ? this.dataTransfert.newPhone : ''],
    });
    this.isLoading = false;
  }
  async loadData(id) {
      try {
        this.isLoading = true;
        this.data = await this.businessService.load(this.id).toPromise();
        this.dt = await this.businessCategoryService.list(1, 200 , { searchValue: this.id,
          searchFields: [
            'parent_id'
          ]}
        ).toPromise();
        const search = {
          searchValue: id,
          searchFields: [
            'business_category_id'
          ],
        }
        const d = await this.requiredDocumentService.list(1, 100 , search ).toPromise();
        //this.rowsRq = d.filter(item => item.ownership === 1);
        this.rowsRq = d;
        this.isLoading = false;
    } catch (e) {
        console.error(e);
        this.isLoading = false;
    }
  }
  async loadDataTransfert(id) {
    try {
      this.isLoading = true;
      const search = {
        searchValue: this.id,
        searchFields: [
          'businessId'
        ],
      }
      const businessTrans = await this.businessTransferService.list(1, 1, search).toPromise();
      this.dataTransfert = businessTrans[0];
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
  async submit() {
    if (!this.form.valid) {
      this._toasterService.error('Please fill all inputs');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
    try {
      this.isLoading = true;
      let res;
      const data = new RequiredDocument(this.form.value);
      res = await this.requiredDocumentService.add(data).toPromise();
      if (res) {
        this.utils.back();
        this.isLoading = false;
      }
    } catch (e) {
      console.error(e);
      this.isLoading = false;
    }
  }
  back() {
    this.utils.back();
  }
  async delete(item: RequiredDocument) {
    try {
      const del = await this.utils.confirm('Are you really want to delete the required document?');
      if (del) {
        this.isLoading = true;
        await this.requiredDocumentService.delete(item).toPromise();
        this.ngOnInit();
        this.isLoading = false;
      }
    } catch (e) {
      this.isLoading = false;
      console.error(e)
    }
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

  async rejeted(row) {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      width: '450px',
      data: row.name
    });
    dialogRef.afterClosed().subscribe(async (result: any) => {
      if (result) {
        await this.businessTransferService.updateReject(
          new BusinessTransfer({ ...this.dataTransfert, refusedReason: result})
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
        await this.businessTransferService.updateApprouve(this.dataTransfert.id).toPromise();

        await this.businessService.update(
          new Business({ 
            ...this.data, 
            name: this.dataTransfert.newOwner,
            phone: this.dataTransfert.newPhone,
            email: this.dataTransfert.newEmail
          })
        ).toPromise();
        this.isLoading = false;
        this.ngOnInit();
        this._toasterService.success('Success ');
      }
    });
  }

}
