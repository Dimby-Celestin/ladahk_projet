import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { UtilsService } from "../../shared/providers/utils.service";
import { ToasterService } from "../../shared/providers/toaster.service";
import { FormHelperService } from "../../shared/providers/form-helper.service";
import { SessionService } from "../../shared/providers/session.service";
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  isLoading: boolean;
  data: User = new User();
  form: FormGroup;
  id: string;
  constructor(
    private fb: FormBuilder,
    private _utils: UtilsService,
    private _toasterService: ToasterService,
    private _formHelperService: FormHelperService,
    private _sessionService: SessionService,
    private userService: UserService
  ) {
    this.isLoading = false;
  }
  async ngOnInit() {
    try {
    setTimeout(() => {
      this.form = this.fb.group({
        password: ["", [Validators.required,Validators.minLength(6)]],
        repeatPassword: ['', Validators.required]
      }, {validators: this._formHelperService.passwordMatchValidator});
    });
    } catch (e) {}
  }

  /**
   *  submit the form
   *  @param model form's values
   *  @param isValid form's validatoin
   */
  async submit() {
    if (!this.form.valid) {
      this._toasterService.error("Veuillez vérifier le formulaire");
      this._formHelperService.validateAllFormFields(this.form);
      return;
    }
    try {
      const p = {...this.form.value};
      this.isLoading = true;
      const user = new User(p);
      await this.userService.updateProfile(user).toPromise();
      this._toasterService.success('Votre mot de passe est maintenat à jour');
      this.isLoading = false;
      this.form.reset();
    } catch (e) {
      this.isLoading = false;
    }
  }
  isFieldValid(field: any) {
    return this._formHelperService.isFieldValid(this.form, field);
  }
  displayFieldCss(field: string) {
    return {
      "has-error": this.isFieldValid(field),
      "has-feedback": this.isFieldValid(field)
    };
  }
  reset() {
    this.form.reset();
  }
  goBack() {
    this._utils.back();
  }

}
