import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/providers/session.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterService } from 'app/shared/providers/toaster.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormHelperService } from 'app/shared/providers/form-helper.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public form: FormGroup;
  isSubmitting: boolean;
  date: Date = new Date();

  constructor(
    private _toasterService: ToasterService,
    private _session: SessionService,
    private _router: Router,
    private _fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private _formHelperService: FormHelperService
  ) {

  }

  ngOnInit() {
    this.form = this._fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
    this.load();
  }

  async load() {
    try {
      // Get session Status
      const status = await this._session.getSessionStatus().toPromise();

      if (status) {
        this._router.navigate(['/dashboard']);
        return;
      }
    } catch (e) { }
  }

  submit() {
    if (!this.form.valid) {
      return this._toasterService.warning('Merci d\'entrer un email valide');
    }

    this._session.forgotPassword({ email: this.form.value.email, sousdomaine: this.form.value.sousdomaine }).subscribe(isSuccess => {
      if (isSuccess) {
        this._toasterService.success(
          'Un email a été envoyé à ' + this.form.value.email + ', veuillez suivre les instructions pour un nouveau mot de passe.'
        );
        this._router.navigate(['/auth', 'login']);
      } else {
        this._toasterService.error('Mauvais détails de connexion.');
      }
    });
  }

  loginNavigation() {
    this._router.navigate(['/auth', 'login']);
  }
  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this._formHelperService.isFieldValid(form, field),
      'has-feedback': this._formHelperService.isFieldValid(form, field)
    };
  }
}

