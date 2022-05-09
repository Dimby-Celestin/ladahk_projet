import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { UtilsService } from "../../shared/providers/utils.service";
import { FormHelperService } from "../../shared/providers/form-helper.service";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"]
})
export class AccountsComponent implements OnInit {
  isLoading: boolean;
  form: FormGroup;
  id: string;
  types = [
    {label: 'type 1'},
    {label: 'type 2'},
  ];

  rows = [
    {id: '1', nom: 'Tsewang Namgyal', phone: '+91 8976565776', email: 'mail@mail.com'},
    {id: '2', nom: 'Tsewang Namgyal', phone: '+91 8976565776', email: 'mail@mail.com'},
    {id: '3', nom: 'Tsewang Namgyal', phone: '+91 8976565776', email: 'mail@mail.com'},
    {id: '4', nom: 'Tsewang Namgyal', phone: '+91 8976565776', email: 'mail@mail.com'},
    {id: '5', nom: 'Tsewang Namgyal', phone: '+91 8976565776', email: 'mail@mail.com'},
  ];

  constructor(
    private _utils: UtilsService,
    private _formHelperService: FormHelperService,
  ) {
    this.isLoading = false;
  }
  async ngOnInit() {
  }

  /**
   *  submit the form
   *  @param model form's values
   *  @param isValid form's validatoin
   */
  async submit() {
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
