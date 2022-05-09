import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileUploaderComponent } from 'app/components/file-uploader/file-uploader.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormHelperService } from '@app-providers/form-helper.service';
import { ToasterService } from '@app-providers/toaster.service';
import { GalleryCategoryService } from '@app-services/galleryCategory.service';
import { GalleryCategory } from '@app-models/galleryCategory.model';
import { Gallery } from '@app-models/gallery.model';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

  categories: GalleryCategory[];
  isLoading: boolean;
  edition: boolean = false;
  public form: FormGroup;
  @ViewChild(FileUploaderComponent, { static: false }) uploader: FileUploaderComponent;
  constructor(
    public dialogRef: MatDialogRef<ModalAddComponent>,
    private _galleryCategoryService: GalleryCategoryService,
    private _formHelperService: FormHelperService,
    private _toasterService: ToasterService,
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Gallery) {}

  async ngOnInit() {
    this.isLoading = true;  
    if (this.data) {
      this.edition = true;
    }  
    this.form = this._fb.group({
      category_id: [this.data ? this.data.category_id : '', Validators.required]
    });
    this.loadCat();
    this.isLoading = false;
  }
  async loadCat() {
    this.isLoading = true;
    try {
      this.categories = await this._galleryCategoryService.list(1, 250).toPromise();
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.error(e);
    }
  }
  onClose(): void {
    this.dialogRef.close();
  }
  end(event) {
    this._toasterService.success('Gallery added successfully');
    this.isLoading = false;
    this.dialogRef.close(true);
  }
  submit() {
    if (!this.form.valid) {
      this._toasterService.error('Please fill form');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
    this.uploader.updateHeaders('galery', `${this.form.value.category_id}_${Date.now()}`, this.form.value.category_id);
    this.uploader.uploadFileNow();
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
}