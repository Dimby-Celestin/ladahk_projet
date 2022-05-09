import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { environment } from 'environments/environment';
import { Fichier } from '../../shared/models/fichier.model';
import { UtilsService } from '../../shared/providers/utils.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorageService } from '../../shared/providers/local-storage.service';
@Component({
  selector: "app-file-uploader",
  templateUrl: "./file-uploader.component.html",
  styleUrls: ["./file-uploader.component.scss"]
})
export class FileUploaderComponent implements OnInit {
  public uploader: FileUploader;
  isLoading: boolean;
  @Input() label: string;
  @Input() folder: string = 'article';
  @Input() endpoint: string;
  @Input() fichier: Fichier;
  @Input() edition: boolean;
  @Input() maxWidth: string = '200px';
  @Input() maxHeight: string = '200px';
  @Input() typeImage: string = '';
  @Input() multiple: boolean = false;
  @Input() isVideo: boolean = false;
  @Input() isDoc: boolean = false;
  @Input() objectId: string ;
  @Input() file: Fichier;
  @Input() btnClass: string = 'btn-warning';
  @Input() size: string = '260 X 220';
  @Output() onDone: EventEmitter<Object> = new EventEmitter();
  accept: string = ".png, .jpg, .jpeg, .gif, .mp4";
  private _result = [];
  constructor(
    private utils: UtilsService,
    private sanitizer: DomSanitizer,
    private _localStorageService: LocalStorageService
  ) {
    this.isLoading = false;
  }

  ngOnInit() {
    if (this.isDoc) {
      this.accept = '.pdf, .doc, .docx';
    } else if (this.isVideo) {
      this.accept = '.mp4';
    }
    this.uploader = this.loadFileUploader(this.endpoint, {});
  }
  /**
   * load uploader
   */
  loadFileUploader(endpoint, options?: any): FileUploader {
    const additionalParameter = {};
    for (const key in options) {
      if (options[key]) {
        additionalParameter[key] = options[key];
      }
    }
    const uploader = new FileUploader({
      url: environment.API_URL + endpoint,
      headers: [
        { name: 'generateThumb', value: 'true' },
        { name: 'path', value: this.folder },
        { name: 'name', value: this.typeImage + (this.objectId ? this.objectId : this._objectId()) }
      ],
      // itemAlias: "uploadedFile",
      isHTML5: true
    });
    uploader.setOptions({
      isHTML5: true,
      additionalParameter
    });
    uploader.onBeforeUploadItem = (item: FileItem) => {
      this.isLoading = true;
      item.withCredentials = false;
    };
    uploader.onErrorItem = (
      item: FileItem,
      response: string,
      status: number,
      headers: ParsedResponseHeaders
    ) => {
      // console.log(item, status, headers);
    };

    uploader.onAfterAddingFile = (fileItem: FileItem) => {

      uploader.setOptions({additionalParameter: {
        name: this.typeImage + (this.objectId ? this.objectId : this._objectId()),
        path: this.folder,
        type: this.typeImage
      }});
      if (uploader.queue.length > 1 && !this.multiple) {
        // Remove selement every time a new file is adding to limit to 1 element in queue
        uploader.queue.shift();
      }
    };
    uploader.onCompleteItem = (
      item: FileItem,
      response: string,
      status: number,
      headers: ParsedResponseHeaders
    ) => {
      try {
        const jsonResponse = JSON.parse(response);
        // empty the queue
        if (!this.multiple) {
          uploader.clearQueue();
        } else {
          this._result.push(jsonResponse.document);
          uploader.removeFromQueue(item);
        }
        this.endUploaded(jsonResponse);
      } catch (e) {
        console.log(e);
      }
    };
    return uploader;
  }
  /**
   *  should be fire when upload are done
   */
  public endUploaded(resp) {
    if (this.uploader.queue.length === 0) {
      // todo
      this.isLoading = false;
      if (this.multiple === true) {
        this.onDone.emit(this._result);
      } else {
        this.onDone.emit(resp);
      }
    }
  }
  public uploadFileNow() {
    if (this.uploader.getNotUploadedItems().length > 0) {
      this.uploader.uploadAll();
    } else {
      this.endUploaded(true);
    }
  }
  getFilePath(file: Fichier) {
    return this.utils.getfile(file.path, this.folder);
  }
  previewFileItem(fileItem: FileItem) {
    if (this.isVideo || this.isDoc) {
      return fileItem._file.name;
    }
    return this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
  } 
  updateHeaders(path, name, categoryId?) {
    const headers = [
      { name: 'generateThumb', value: 'true' },
      { name: 'path', value: path },
      { name: 'name', value: name }
    ];
    if (categoryId) {
      headers.push({name: 'categoryId', value: categoryId})
    }
    if (this.endpoint === 'uploadGallery') {
      headers.push({name: 'type', value: this.typeImage})
    }
    this.uploader.setOptions({
      headers,
    });
  }
  private _objectId() {
    // tslint:disable:no-bitwise
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  }
}
