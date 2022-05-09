import { Component, OnInit } from '@angular/core';
import { Business } from '../../../../shared/models/business.model';
import { ActivatedRoute } from '@angular/router';
import { BusinessCategoryService } from '@app-services/businessCategory.service';
import { BusinessCategory } from '@app-models/business-category.model';
import { RequiredDocument } from '@app-models/required-document.model';
import { RequiredDocumentService } from '@app-services/requiredDocument.service';
import { ModalRequiredDocumentComponent } from './modal-required-document/modal-required-document.component';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { UtilsService } from '../../../../shared/providers/utils.service';
import { BusinessService } from '../../../../shared/services/business.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';
import { PageWithListing } from 'app/core/pages/page-with-listing';
@Component({
  selector: 'app-list-requires-document',
  templateUrl: './list-requires-document.component.html',
  styleUrls: ['./list-requires-document.component.scss']
})
export class ListRequiresDocumentComponent extends PageWithListing implements OnInit {
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
    super();
    this.searchUpdated$
      .debounceTime(600)
      .distinctUntilChanged()
      .subscribe(data => {
        this.loadData(this.id);
      });
    this.categoryId = this._route.snapshot.params['id'];
    //this.id = this._route.snapshot.params['documentId'];
  }
  async ngOnInit( ) {
    this.isLoading = true;
    await this.loadData(this.categoryId);
    this.isLoading = true;
    this.form = this._fb.group({
      name: [this.data ? this.data.name : '', Validators.required],
    });
    this.isLoading = false;
  }
  async loadData(id) {
      try {
        const search = {
          searchValue: id,
          searchFields: [
            'business_category_id'
          ],
        }
        this.rows = await this.requiredDocumentService.list(1, 100 , search ).toPromise();
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
      dataItem = { ...item, business_category_id: this.categoryId };
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



