import { Component, OnInit, ViewChild } from '@angular/core';
import { CategorieService } from '../../../shared/services/categorie.service';
import { Categorie } from '../../../shared/models/categorie.model';
import { FileUploaderComponent } from 'app/components/file-uploader/file-uploader.component';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@app-models/article.model';
import { ArticleService } from '@app-services/article.service';
import { UtilsService } from '@app-providers/utils.service';
import { Fichier } from '@app-models/fichier.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  isLoading: boolean;
  fileExist: boolean;
  edition: boolean;
  categories: Categorie[];
  public form: FormGroup;
  data: Article;
  existingImages: Fichier[] = [];
  id: string;
  lastId: number;

  @ViewChild('uploaderBanner', { static: false }) uploaderBanner: FileUploaderComponent;
  @ViewChild('uploaderDoc', { static: false }) uploaderDoc: FileUploaderComponent;
  @ViewChild('uploader', { static: false }) uploader: FileUploaderComponent;

  constructor(
    private _categorieService: CategorieService,
    private _articleService: ArticleService,
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
    this.categories = await this.loadCategories();

    this.isLoading = true;
    this.form = this._fb.group({
      title: [this.data ? this.data.title : '', Validators.required],
      content: [this.data ? this.data.content : '', Validators.required],
      categories: [this.data ? this.data.categories : '', Validators.required]
    });

    this.isLoading = false;
  }
  async loadData() {
    if (this.id !== 'new') {
      this.data = await this._articleService.load(this.id).toPromise();
      this.data.sliders = this.data.sliders || [];
      this.existingImages = this.data.images ? [...this.data.images, ...this.data.sliders] : [];      
    } else {
      this.data = new Article();
      const resp = await this._articleService.list(1, 1, {sortField: 'order=desc'}).toPromise();
      this.lastId = resp[0].order + 1;
      console.log('this.lastId ', this.lastId)
    }
  }
  loadCategories(): Promise<Categorie[]> {
    return new Promise(async (resolve, reject) => {
      const categories = await this._categorieService.list(1, 100).toPromise();
      resolve(categories);
    });
  }
  end(event) {
    if (event) {
      if (!this.existingImages) {
        this.existingImages = [];
      }
      this.existingImages = this.existingImages.concat(event);
    }
    // this.data.images = [...this.data.images];
    this.uploaderDoc.uploadFileNow();
  }
  async endBanner(event) {
    if (event) {
      if (!this.existingImages) {
        this.existingImages = [];
      }
      this.existingImages = this.existingImages.concat(event);
    }
    // now upload gallery
    await this.uploader.uploadFileNow();
  }
  onAllDone() {
    const article = new Article({
      ...this.data, ...this.form.value
    });

    if (this.data.id) {
      article.id = this.data.id;
    } else {
      article.order = this.lastId;
      article.slug = this._utilsService.slugify(this.form.value.title);
    }
    this.data = article;

    if (!this.data.images) {
      this.data.images = [];
    }

    this.data.images = [...this.existingImages];
    const obs$ = (this.data.id) ?
      this._articleService.update(this.data) : this._articleService.add(this.data);
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
      this._toasterService.error('Please fill all inputs');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
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
  async removeGalleryImg(img) {
    try {
      const yes = await this._utilsService.confirm('Do you really want to remove this pic?');
      if (yes) {
        const mainindex = this.existingImages.findIndex(i => i.id === img.id)
        this.existingImages.splice(mainindex, 1);
        const index = this.data.images.findIndex(i => i.id === img.id)
        this.data.images.splice(index, 1);
      }
    } catch (e) {

    }
  }
  async removeBannerImg(img) {
    try {
      const yes = await this._utilsService.confirm('Do you really want to remove this pic?');
      if (yes) {
        const mainindex = this.existingImages.findIndex(i => i.id === img.id)
        this.existingImages.splice(mainindex, 1);
        const index = this.data.images.findIndex(i => i.id === img.id)
        this.data.images.splice(index, 1);
      }
    } catch (e) {

    }
  }
  endDoc(event) {
    if (event && event.document) {
      this.data.thumbnail = event.document;
    }
    this.onAllDone();
  }
}
