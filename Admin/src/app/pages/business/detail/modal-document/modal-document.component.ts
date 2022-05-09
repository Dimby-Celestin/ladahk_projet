import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Business } from '../../../../shared/models/business.model';
import { BusinessRequiredDocument } from '@app-models/business-required-document.model';
export interface DialogData {
  ttle: string;
  message: string;
}

@Component({
  selector: 'app-modal-document',
  templateUrl: './modal-document.component.html',
  styleUrls: ['./modal-document.component.scss']
})
export class ModalDocumentComponent implements OnInit {
  
  isLoading: boolean;
  constructor(
    public dialogRef: MatDialogRef<ModalDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BusinessRequiredDocument) {}

  ngOnInit() {
    console.log('data ', this.data)
  }
  onClose() {
    this.dialogRef.close();
  }
  onPrint(): void {
    this.dialogRef.close();
  }
  onDownload() {   
  }
}