import { Component, OnInit, ViewChild } from '@angular/core';
import { CategorieService } from '../../../shared/services/categorie.service';
import { Categorie } from '../../../shared/models/categorie.model';
import { FileUploaderComponent } from 'app/components/file-uploader/file-uploader.component';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { ActivatedRoute } from '@angular/router';
import { Slider } from '@app-models/slider.model';
import { SliderService } from '@app-services/slider.service';
import { UtilsService } from '@app-providers/utils.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  isLoading: boolean;
  fileExist: boolean;
  edition: boolean;
  public form: FormGroup;
  data: Slider;
  id: string;

  @ViewChild('uploaderBanner', { static: false }) uploaderBanner: FileUploaderComponent;

  constructor(
    private _sliderService: SliderService,
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
      order: [this.data ? this.data.order : '', Validators.required],
      content: [this.data ? this.data.content : '', Validators.required],
    });

    this.isLoading = false;
  }
  async loadData() {
    if (this.id !== 'new') {
      this.data = await this._sliderService.load(this.id).toPromise();
    } else {
      this.data = new Slider();
    }
  }


  async endBanner(event) {
    if (event && event.document) {
      this.data.image = event.document;
    }
    const obs$ = (this.data.id) ?
    this._sliderService.update(this.data) : this._sliderService.add(this.data);
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
  async submit() {
    if (!this.form.valid) {
      this._toasterService.error('Please fill the form');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
    if (this.id === 'new' && this.uploaderBanner.uploader.queue.length === 0) {
      this._toasterService.error('Image is required');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }

    const slider = new Slider({
      ...this.form.value
    });

    if (this.data.id) {
      slider.id = this.data.id;
    }
    this.data = slider;
    await this.uploaderBanner.uploadFileNow();
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
