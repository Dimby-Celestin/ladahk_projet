import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'environments/environment';
import { DeleteModalComponent } from 'app/components/delete-modal/delete-modal.component';

declare var $: any;
declare var swal: any;

@Injectable({providedIn: 'root'})
export class UtilsService {
  constructor(
    private _location: Location,
    private _domSanitizationService: DomSanitizer,
    private dialog: MatDialog
  ) {}

  confirm(text?: string, icon?: string): Promise<boolean> {
    if (!text) {
      text = 'Do you really want to continue?';
    }
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(DeleteModalComponent, {
        width: '450px',
        data: {text, icon}
      });
      dialogRef.afterClosed().subscribe(result => {
        resolve(result);
      });
    });
  }
  popupSuccess(message?) {
    return swal({
      title: 'Succès!',
      text: message || 'Traitement réussi.',
      type: 'success',
      confirmButtonClass: 'btn btn-success',
      buttonsStyling: false
    });
  }
  
  back() {
    return this._location.back();
  }
  slugify(text: String): String {
    return text.toString().toLowerCase().trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-');
  }

  getfile(path, folder?) {
    return this._domSanitizationService.bypassSecurityTrustResourceUrl(
      environment.DATA_ENDPOINT + path + (folder ? '?folder=' + folder : '')
    );
  }
}
