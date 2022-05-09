import { Component, OnInit, ViewChild } from '@angular/core';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '@app-providers/utils.service';
import { Video } from '@app-models/video.model';
import { VideoService } from '@app-services/video.service';
import { FileUploaderComponent } from 'app/components/file-uploader/file-uploader.component';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  isLoading: boolean;
  edition: boolean;
  public form: FormGroup;
  data: Video;
  id: string;

  @ViewChild('uploaderVideo', { static: false }) uploaderVideo: FileUploaderComponent;

  constructor(
    private _videoService: VideoService,
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
      type: [this.data ? this.data.type : '', Validators.required],
      url: [this.data ? this.data.url : '']
    });

    this.isLoading = false;
  }
  async loadData() {
    if (this.id !== 'new') {
      this.data = await this._videoService.load(this.id).toPromise();
    } else {
      this.data = new Video();
    }
  }
  async submit() {
    if (!this.form.valid) {
      this._toasterService.error('Please fill the form');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
    if (this.uploaderVideo.uploader.queue.length === 0) {
      this.endUpload();
    } else {    
      await this.uploaderVideo.uploadFileNow();
    }
  }

  endUpload(event?) {
    const video = new Video({ ...this.form.value });
    if (this.id !== 'new') {
      video.id = this.id;
    }

    if (event && event.document) {
      video.url = `${environment.FILE_ENDPOINT}/${event.document.path}`;
    }
    
    const obs$ = (this.data.id) ?
      this._videoService.update(video) : this._videoService.add(video);
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
