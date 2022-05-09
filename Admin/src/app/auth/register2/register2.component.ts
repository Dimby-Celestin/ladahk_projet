import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/providers/session.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterService } from 'app/shared/providers/toaster.service';
import { User } from 'app/shared/models/user.model';
import { FormHelperService } from 'app/shared/providers/form-helper.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BusinessTypeValues } from '@app-models/required-document.model';
import { Business } from '@app-models/business.model';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  public form: FormGroup;
  public isSubmitting: boolean;
  date: Date = new Date();
  data:  Business;
  registers = BusinessTypeValues;
  constructor(
    public session: SessionService,
    private _formHelperService: FormHelperService,
    private _router: Router
  ) { }

  selectedregister: number;

  ngOnInit() {
    this.load();
  }
 

  /**
   * [Description] Load data
   */
  async load() {
    try {
      // Get session Status
      const status = await this.session.getSessionStatus().toPromise();
      // this.data = this.session.user;
      if (status) {
        console.log('status', status)
      }
    } catch (e) { }
  }
  /**
   *
   *
   * @returns
   * @memberof Register2Component
   */
  async submit() {
    this.isSubmitting = true;
    await this.session.updatePro(this.data).toPromise();
    this._router.navigate(['/accounts', 'upload']);
    this.isSubmitting = false;
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

}
