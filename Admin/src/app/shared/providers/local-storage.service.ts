import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';

@Injectable({ providedIn: "root" })
export class LocalStorageService {
  public localStorage: any;

  constructor() {
    if (!localStorage) {
      throw new Error("Le navigateur actuel ne supporte pas le Local Storage");
    }
    this.localStorage = localStorage;
  }

  public set(key: string, value: string): void {
    this.localStorage.setItem(
      environment.LOCAL_STORAGE_PREFIX + "_" + key,
      value
    );
  }

  public get(key: string): string {
    return (
      this.localStorage.getItem(environment.LOCAL_STORAGE_PREFIX + "_" + key) ||
      false
    );
  }

  public setObject(key: string, value: any): void {
    this.localStorage.setItem(
      environment.LOCAL_STORAGE_PREFIX + "_" + key,
      JSON.stringify(value)
    );
  }

  public getObject(key: string): any {
    return JSON.parse(
      this.localStorage.getItem(environment.LOCAL_STORAGE_PREFIX + "_" + key) ||
        false
    );
  }

  public remove(key: string): any {
    this.localStorage.removeItem(environment.LOCAL_STORAGE_PREFIX + "_" + key);
  }

  public removeAll(): any {
    this.localStorage.clear();
  }
}
