import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Business } from '../../../../shared/models/business.model';
import { BusinessRequiredDocument } from '@app-models/business-required-document.model';
import { DomSanitizer } from '@angular/platform-browser';
export interface DialogData {
  ttle: string;
  message: string;
}

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss']
})
export class ModalViewComponent implements OnInit {
  
  isLoading: boolean;
  previewUrl;
  constructor(
    public dialogRef: MatDialogRef<ModalViewComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public url: string) {}

  ngOnInit() {
    this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  
  onClose() {
    this.dialogRef.close();
  }
  approve(): void {
    this.dialogRef.close('valid');
  }
  refused() {  
    this.dialogRef.close('refused'); 
  }
}