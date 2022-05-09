import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { User } from "../models/user.model";
import { HttpService } from "../providers/http.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService extends BaseService<User> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, User, 'users', 'user');
  }
  updateProfile(item: User): Observable<User> {
    return this.httpService.patch(
      `updateProfile`,
      item.prepareForSending()
    );
  }
}
