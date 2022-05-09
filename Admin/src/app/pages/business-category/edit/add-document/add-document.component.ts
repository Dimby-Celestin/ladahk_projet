import { Component, OnInit } from '@angular/core';
import { Business } from '../../../../shared/models/business.model';
import { ActivatedRoute } from '@angular/router';
import { BusinessCategoryService } from '@app-services/businessCategory.service';
import { BusinessCategory } from '@app-models/business-category.model';
import { RequiredDocument } from '@app-models/required-document.model';
import { RequiredDocumentService } from '@app-services/requiredDocument.service';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { UtilsService } from '../../../../shared/providers/utils.service';
import { BusinessService } from '../../../../shared/services/business.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  isLoading: boolean;
  data: RequiredDocument;
  id: string;
  categoryId: string;
  public form: FormGroup; 
  rows: RequiredDocument[];
  businessCategory: BusinessCategory = new BusinessCategory();
  requiredDocument: RequiredDocument = new RequiredDocument();
  constructor(
    private businessService: BusinessService,
    private businessCategoryService: BusinessCategoryService,
    private requiredDocumentService: RequiredDocumentService,
    private _route: ActivatedRoute,
    private router: ActivatedRoute,
    private _formHelperService: FormHelperService,
    private _fb: FormBuilder,
    private _toasterService: ToasterService,
    private utils: UtilsService,
    public dialog: MatDialog,
  ) { 
    this.categoryId = this._route.snapshot.params['id'];
    this.id = this._route.snapshot.params['documentId'];
  }
  async ngOnInit( ) {
    this.isLoading = true;
    console.log('categoryId', this.categoryId);
    console.log('id', this.id);
    if (this.id !== 'new') {
      await this.loadData(this.id);
    }
    this.isLoading = true;
    this.form = this._fb.group({
      name: [this.data ? this.data.name : '', Validators.required],
      //price: [this.data ? this.data.price : '', Validators.required],
    });
    this.isLoading = false;
  }
  async loadData(id) {
     /* try {
        this.isLoading = true;
        this.data = await this.requiredDocumentService.load(this.id).toPromise();
        
        this.isLoading = false;
      } catch (e) {
          console.error(e);
          this.isLoading = false;
      }*/
      try {
        //const search = { parent_id: null };
        this.rows = await this.requiredDocumentService.list(1, 100 ).toPromise();
      } catch (e) {
        console.error(e);
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
    console.log(this.form);
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
      console.log('data' , data);
      console.log('res' , res);
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

}
