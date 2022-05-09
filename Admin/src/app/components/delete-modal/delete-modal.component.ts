import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
interface IData {
  text: string;
  icon: string;
}
@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  private formValue: string;
  public text: string;
  public iconClass: string = 'fa-trash'
  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string|IData,
  ) {
    if (typeof this.data === 'string') {
      this.text = (this.data) ? this.data : 'Do you really want to delete this element?';
    } else {
      if (this.data.icon) {
        this.iconClass = this.data.icon;
      }
      this.text = this.data.text ? this.data.text : 'Do you really want to delete this element?';
    }
  }

  delete(): void {
    this.dialogRef.close(true);
  }
  close(): void {
    this.dialogRef.close(false);
  }

}
