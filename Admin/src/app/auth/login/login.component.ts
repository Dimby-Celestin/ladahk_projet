import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/providers/session.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterService } from 'app/shared/providers/toaster.service';
import { User } from 'app/shared/models/user.model';
import { FormHelperService } from 'app/shared/providers/form-helper.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public isSubmitting: boolean;
  date: Date = new Date();
  isLoading: boolean;

  constructor(
    private _toasterService: ToasterService,
    private _sessionService: SessionService,
    private _formHelperService: FormHelperService,
    private sanitizer: DomSanitizer,
    private _router: Router,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.form = this._fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.load();
    this.isLoading = false;
  }

  /**
   * [Description] Load data
   */
  async load() {
    try {
      // Get session Status
      const status = await this._sessionService.getSessionStatus().toPromise();

      if (status) {
        this._router.navigate(['/home']);
        return;
      }
    } catch (e) { }
  }


  /**
   *
   *
   * @returns
   * @memberof LoginComponent
   */
  submit() {
    this.isSubmitting = true;
    if (this.form.valid) {
      this._sessionService.logout();
      this._sessionService.login(this.form.value).subscribe(_ => {
       
        if (_.user.role === 'user') {
          this._router.navigate(['/home']);
          //this._router.navigate(['/auth', 'register2']);
        } else {
          this._router.navigate(['/home']);
        }
        this._formHelperService.validateAllFormFields(this.form);
        this.isSubmitting = false;
      }, err => {
        this._toasterService.error('Wrong credentiels');
        this._formHelperService.validateAllFormFields(this.form);
        this.isSubmitting = false;
      });
    } else {
      this._formHelperService.validateAllFormFields(this.form);
      this.isSubmitting = false;
    }
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

