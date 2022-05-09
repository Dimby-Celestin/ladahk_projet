import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Business } from '../../../../shared/models/business.model';
import { BusinessCategory } from '@app-models/business-category.model';
import { BusinessService } from '../../../../shared/services/business.service';
import { ActivatedRoute } from '@angular/router';
import { BusinessCategoryService } from '@app-services/businessCategory.service';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { UtilsService } from '../../../../shared/providers/utils.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  business: Business = new Business();
  dataBusn = new BusinessCategory();
  id: string;
  parent_id: string;
  public form: FormGroup;
  isLoading: boolean;
  rows: BusinessCategory[];
  dt: BusinessCategory;
  
  //categories: BusinessCategory[];
  businessCategory: BusinessCategory = new BusinessCategory();
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
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BusinessCategory) {
      this.id = this.data.id;

      console.log(this.data.id);
      this.parent_id = this.data.parent_id;
    }

  async ngOnInit() {
    this.isLoading = true;
    if (this.id  && this.id !== '') {
      await this.loadData(this.id);
    }
    await this.loadDataRows();
    this.isLoading = true;
    if (this.data) {
      this.dataBusn = new BusinessCategory(this.data);
    }
    this.isLoading = true;
    this.form = this._fb.group({
      name: [this.data ? this.dataBusn.name : '', Validators.required],
      register_fee: [this.data ? this.dataBusn.register_fee : '', Validators.required],
      renewal_fee: [this.data ? this.dataBusn.renewal_fee : '', Validators.required],
    });
    this.isLoading = false;
  }
  async loadData(id) {
    try {
      this.isLoading = true;
      this.dt = await this.businessCategoryService.load(this.id).toPromise();
      this.isLoading = false;
    } catch (e) {
        console.error(e);
        this.isLoading = false;
    }
  }
  async loadDataRows() {
    try {
      this.isLoading = true;
      const search = {
        searchValue: this.parent_id,
        searchFields: [
          'parent_id'
        ],
      };
      this.rows = await this.businessCategoryService.list(1, 100 , search).toPromise();
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
    if (this.dataBusn && this.dataBusn.id) {
      d = new BusinessCategory({
        ...this.form.value,
        id: this.dataBusn.id
      });
    } else {
      d = new BusinessCategory({
        ...this.form.value,
        parent_id: this.dataBusn.parent_id
      });
    }
    this.dialogRef.close(d);
  }
}
