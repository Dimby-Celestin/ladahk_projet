import { Component, OnInit, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { CategorieService } from '../../../shared/services/categorie.service';
import { Categorie } from '../../../shared/models/categorie.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileUploaderComponent } from 'app/components/file-uploader/file-uploader.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { FormHelperService } from '@app-providers/form-helper.service';
import { UtilsService } from '@app-providers/utils.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements AfterViewInit {
  isLoading: boolean;
  fileExist: boolean;
  edition: boolean;
  public form: FormGroup;
  @ViewChild(FileUploaderComponent, { static: false })
  uploader: FileUploaderComponent;

  constructor(
    private _categorieService: CategorieService,
    private _formHelperService: FormHelperService,
    private _fb: FormBuilder,
    private _toasterService: ToasterService,
    private _utils: UtilsService,
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Categorie,
  ) {
  }

  async ngAfterViewInit( ) {
    this.isLoading = true;
    this.form = this._fb.group({
      name: [this.data ? this.data.name : '', Validators.required],
      //slug: [this.data ? this.data.slug : '', Validators.required]
    });
    this.isLoading = false;
  }

  end(event) {
    if (this.form.valid) {
      const categorie = new Categorie({
        ...this.form.value,
        slug: this._utils.slugify(this.form.value.name),
        image: event.document,
      });

      if (this.data.id) {
        categorie.id = this.data.id;
      }
      if (!event.document) {
        delete categorie.image;
      }

      const obs$ = (this.data.id) ?
        this._categorieService.update(categorie) : this._categorieService.add(categorie);
      this.isLoading = true;
      obs$.subscribe(result => {
          this._toasterService.success('Ajout réussie');
          this.isLoading = false;
          this.dialogRef.close(result);
        },
        err => {
          this._toasterService.error(err.message);
          this.isLoading = false;
        }
      );
    } else {
      this._formHelperService.validateAllFormFields(this.form);
    }
  }
  submit() {
    if (!this.form.valid) {
      this._toasterService.error('Veuillez remplir le formulaire');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
    this.uploader.updateHeaders('categorie', this.form.value.name);
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
