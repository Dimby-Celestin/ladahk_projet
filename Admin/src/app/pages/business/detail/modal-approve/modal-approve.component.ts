import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Business } from '../../../../shared/models/business.model';
export interface DialogData {
  ttle: string;
  message: string;
}

@Component({
  selector: 'app-modal-approve',
  templateUrl: './modal-approve.component.html',
  styleUrls: ['./modal-approve.component.scss']
})
export class ModalApproveComponent implements OnInit {

  title: string;
  message: string;
  email: string;
  business: Business = new Business();
  constructor(
    public dialogRef: MatDialogRef<ModalApproveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onSubmiApproved() {
    this.dialogRef.close(true);
  }

}
