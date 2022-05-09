import { Component, OnInit, Inject } from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UtilsService } from '@app-providers/utils.service';
import { SessionService } from '@app-providers/session.service';
import { Calendar, CalendarKindValues } from '@app-models/calendar.model';
import { FormHelperService } from '@app-providers/form-helper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '@app-providers/toaster.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  selectedkindtype: number;
  public form: FormGroup;
  kinds = CalendarKindValues ;
  constructor(
    public session: SessionService,
    private utils: UtilsService,
    private fb: FormBuilder,
    private _toasterService : ToasterService,
    private _formHelperService: FormHelperService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Calendar) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.data ? this.data.title : '', Validators.required],
      kind: [this.data ? this.data.kind : '', Validators.required],
      date: [this.data ? this.data.date : '', Validators.required]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
    if (!this.form.valid) {
      this._toasterService.error('Please fill all inputs');
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
    const data = new Calendar({...this.form.value});
    this.dialogRef.close(data);
  }
  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this._formHelperService.isFieldValid(form, field),
      'has-feedback': this._formHelperService.isFieldValid(form, field)
    };
  }
}
