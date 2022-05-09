import { jsonIgnore, jsonIgnoreReplacer } from "json-ignore";
import { BaseModel } from "./base.model";

export class User extends BaseModel {
  email: string;
  name: string;
  phone: string;
  password: string;
  approved: boolean;
  role: string;
  @jsonIgnore()
  repeatPassword;
  type: string;
  constructor(arg?: any) {
    super(arg);
  }


  isValidEmail() {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return regex.test(this.email);
  }
  prepareForSending() {
    const copy: any = {};
    if (this.email) {
      const arr = this.email.split('@');
    }
    try {
      const data = JSON.parse(JSON.stringify(this, jsonIgnoreReplacer));
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (data[key] === null) {
          } else {
            if (key === "extra") {
              copy[key] = this[key].prepareForSending();
            } else {
              copy[key] = data[key];
            }
          }
        }
      }
    } catch (e) {}
    return copy;
  }
  get roleLabel(): string {
    switch (this.role) {
      case 'admin':
        return 'Administrator';
      case 'vendor':
        return 'Vendor';
      case 'manager':
        return 'Manager';
      default:
        return 'User';
    }
  }
}
