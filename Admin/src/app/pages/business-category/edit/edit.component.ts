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
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PageWithListing } from 'app/core/pages/page-with-listing';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent extends PageWithListing implements OnInit {

  isLoading: boolean;
  data: BusinessCategory;
  id: string;
  public form: FormGroup;
 
  rows: BusinessCategory[];
  businessCategory: BusinessCategory = new BusinessCategory();
  constructor(
    private businessService: BusinessService,
    private businessCategoryService: BusinessCategoryService,
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
      this.loadData();
      });
  this.id = this._route.snapshot.params['id'];
  }
  async ngOnInit() {
          this.isLoading = true;
          if (this.id !== 'new') {
            await this.loadData();
          }
          this.isLoading = true;
          this.form = this._fb.group({
          name: [this.data ? this.data.name : '', Validators.required],
              //price: [this.data ? this.data.price : '', Validators.required],
            });
          this.businessCategoryService.totalCount$.subscribe(count => {
              this.pageLength = count;
              console.log('count::', count)
            });
          await this.loadData(this.page, this.pageSize);
          this.isLoading = false;
         /* this.isLoading = true;
          if (this.id !== 'new') {
              await this.loadData(this.id);
            }
          this.isLoading = true;
          this.form = this._fb.group({
          name: [this.data ? this.data.name : '', Validators.required],
              //price: [this.data ? this.data.price : '', Validators.required],
            });
          this.isLoading = false;*/
          }
  async loadData(pageNumber?: number, pageSize?: number) {
    if (pageNumber) {
      this.page = pageNumber;
    }
    let queryString: any = { 
      searchValue: this.id, searchFields: ['parent_id']
    };

    try {
        this.isLoading = true;
        this.data = await this.businessCategoryService.load(this.id).toPromise();
        const search = {
          searchValue: this.id,
          searchFields: [
            'parent_id'
          ],
        }
        //this.rows = await this.businessCategoryService.list(1, 100 , search).toPromise();
        this.rows = await this.businessCategoryService.list(pageNumber, pageSize, search).toPromise();
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
    console.log(this.form)
    if (!this.form.valid) {
      this._toasterService.error('Please fill all inputs');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }

    try {
      this.isLoading = true;
      let res;
      if (this.id !== 'new') {
        const data = new BusinessCategory({
          ...this.form.value,
          id: this.id
        });
        res = await this.businessCategoryService.update(data).toPromise();
      } else {
        const data = new BusinessCategory(this.form.value);
        res = await this.businessCategoryService.add(data).toPromise();
      }
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
  async delete(item: BusinessCategory) {
    try {
      const del = await this.utils.confirm('Are you really want to delete the business category?');
      if (del) {
        this.isLoading = true;
        await this.businessCategoryService.delete(item).toPromise();
        await this.loadData();
        this.isLoading = false;
      }
    } catch (e) {
      this.isLoading = false;
      console.error(e)
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
}

