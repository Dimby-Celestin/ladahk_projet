import { Component, OnInit } from '@angular/core';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '@app-providers/utils.service';
import { StaticPageService } from '@app-services/staticPage.service';
import { StaticPage } from '@app-models/staticPage.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  isLoading: boolean;
  edition: boolean;
  public form: FormGroup;
  data: StaticPage;
  id: string;
  constructor(
    private _staticPageService: StaticPageService,
    private _formHelperService: FormHelperService,
    private _fb: FormBuilder,
    private _toasterService: ToasterService,
    private _route: ActivatedRoute,
    private _utilsService: UtilsService
  ) {
    this.id = this._route.snapshot.params['id'];
  }

  async ngOnInit( ) {
    this.isLoading = true;
    await this.loadData();

    this.isLoading = true;
    this.form = this._fb.group({
      title: [this.data ? this.data.title : '', Validators.required],
      content: [this.data ? this.data.content : '', Validators.required]
    });

    this.isLoading = false;
  }
  async loadData() {
    if (this.id !== 'new') {
      this.data = await this._staticPageService.load(this.id).toPromise();
    } else {
      this.data = new StaticPage();
    }
  }
  async submit() {
    if (!this.form.valid) {
      this._toasterService.error('Please fill all inputs');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
    const faq = new StaticPage({
      ...this.form.value
    });

    const obs$ = (this.data.id) ?
      this._staticPageService.update(new StaticPage({ ...faq, id: this.data.id })) : this._staticPageService.add(faq);
    this.isLoading = true;
    obs$.subscribe(result => {
        this._toasterService.success('Success');
        this._utilsService.back();
        this.isLoading = false;
      },
      err => {
        this._toasterService.error(err.message);
        this.isLoading = false;
      }
    );
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
  back() {
    this._utilsService.back();
  }
}
