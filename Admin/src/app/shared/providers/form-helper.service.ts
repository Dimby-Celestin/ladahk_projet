import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

/**
 * Form Helper
 *
 * @export
 * @class FormHelperService
 */
@Injectable({providedIn: 'root'})
export class FormHelperService {

  /**
   * Validate a field in formGroup
   *
   * @param {FormGroup} form FormGroup instance
   * @param {string} field Field to validate
   * @returns
   * @memberof FormHelperService
   */
  public isFieldValid(form: FormGroup, field: any) {
    return !form.get(field).valid && form.get(field).touched;
  }

  /**
   * Validate form for each item in formGroup
   *
   * @param {FormGroup} form FormGroup instance
   * @memberof FormHelperService
   */
  public validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  /**
   * Validator for password match
   *
   * @private
   * @param {FormGroup} form FormGroup instance
   * @returns {*}
   * @memberof SettingProfilePasswordComponent
   */
  public passwordMatchValidator(form: FormGroup): any {
    if (form) {
      if (form.get('password').value !== form.get('repeatPassword').value) {
        return { notMatching: true };
      }
    }
    return null;
  }
}
