import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Business } from '../../../../shared/models/business.model';
import { BusinessCategory } from '@app-models/business-category.model';
import { RequiredDocument } from '@app-models/required-document.model';
import { BusinessService } from '../../../../shared/services/business.service';
import { ActivatedRoute } from '@angular/router';
import { BusinessCategoryService } from '@app-services/businessCategory.service';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { UtilsService } from '../../../../shared/providers/utils.service';
import { Router } from '@angular/router';
export interface DialogData {
  ttle: string;
  message: string;
}
@Component({
  selector: 'app-modal-required-document',
  templateUrl: './modal-required-document.component.html',
  styleUrls: ['./modal-required-document.component.scss']
})
export class ModalRequiredDocumentComponent implements OnInit {
  business: Business = new Business();
  dataBusn = new BusinessCategory();
  dataRequiredDoc = new RequiredDocument();
  id: string;
  public form: FormGroup;
  isLoading: boolean;
  rows: RequiredDocument[];
  requiredDocument: RequiredDocument = new RequiredDocument();
  constructor(
    private businessService: BusinessService,
    private businessCategoryService: BusinessCategoryService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formHelperService: FormHelperService,
    private _fb: FormBuilder,
    private _toasterService: ToasterService,
    private utils: UtilsService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalRequiredDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    async ngOnInit() {
      this.isLoading = true;
      console.log(this.data);
      if (this.data) {
        this.dataRequiredDoc = new RequiredDocument(this.data);
      }
      this.isLoading = true;
      this.form = this._fb.group({
        name: [this.data ? this.dataRequiredDoc.name : '', Validators.required],
        ownership: [this.data ? this.dataRequiredDoc.ownership : ''],
      });
      this.isLoading = false;
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
    onNoClick(): void {
      this.dialogRef.close(false);
    }
    submit() {
      if (!this.form.valid) {
        this._toasterService.error('Please fill all inputs');
        this._formHelperService.validateAllFormFields(this.form);
        return;
      }
      let d;
      if (this.dataRequiredDoc && this.dataRequiredDoc.id) {
        d = new RequiredDocument({
          ...this.form.value,
          id: this.dataRequiredDoc.id
        });
      } else {
        d = new RequiredDocument({
          ...this.form.value,
          business_category_id: this.dataRequiredDoc.business_category_id
        });
      }
      this.dialogRef.close(d);
    }
}
