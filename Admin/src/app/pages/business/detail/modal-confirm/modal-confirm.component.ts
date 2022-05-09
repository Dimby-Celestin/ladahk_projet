import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Business } from '../../../../shared/models/business.model';
export interface DialogData {
  ttle: string;
  message: string;
}

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  title: string;
  message: string;
  email: string;
  business: Business = new Business();
  isLoading: boolean;
  constructor(
    public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmiReject() {
    if (!this.message) {
      return;
    }
    this.dialogRef.close(this.message);
  }
}