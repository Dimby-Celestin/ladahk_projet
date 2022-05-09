import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/providers/session.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToasterService } from 'app/shared/providers/toaster.service';
import { User } from 'app/shared/models/user.model';
import { FormHelperService } from 'app/shared/providers/form-helper.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public isSubmitting: boolean;
  date: Date = new Date();

  constructor(
    private _toasterService: ToasterService,
    private _sessionService: SessionService,
    private _formHelperService: FormHelperService,
    private sanitizer: DomSanitizer,
    private _router: Router,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      passwords: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordConfirming }),
    });
    this.load();
  }
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return { invalid: true };
    }
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
   * @memberof RegisterComponent
   */
  submit() {
    this.isSubmitting = true;
    if (this.form.valid) {
      this._sessionService.logout();
      console.log(this.form.value)
      const data = {...this.form.value};
      data.password = this.form.get('passwords').get('password').value;
      this._sessionService.registerPro(data).subscribe(_ => {
        this._router.navigate(['/auth', 'register2']);
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
  displayFieldCss(form: FormGroup, field: any) {
    return {
      'has-error': this._formHelperService.isFieldValid(form, field),
      'has-feedback': this._formHelperService.isFieldValid(form, field)
    };
  }

}

