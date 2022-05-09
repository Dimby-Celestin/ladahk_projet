import { jsonIgnoreReplacer, jsonIgnore } from "json-ignore";

export interface BaseModelInterface {
  id: string;
  createdAt: string;
  updatedAt: string;
  clone(): any;
  prepareForSending(): any;
}

export abstract class BaseModel {
  id: string;
  //@jsonIgnore()
  createdAt: string;
  @jsonIgnore()
  updatedAt: string;e;

  constructor(arg?: any) {
    if (arg) {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key)) {
          this[key] = arg[key];
        }
      }
    }
  }
  public static initModel(data: any, model: any) {
    if (data && model) {
      if (Array.isArray(data)) {
        return data.map(i => new model(i));
      } else if (typeof data === "object") {
        return new model(data);
      }
    }
    return data;
  }

  /**
   * Generate a version ready for create or update in DB
   */
  prepareForSending() {
    const copy: any = {};

    try {
      const data = JSON.parse(JSON.stringify(this, jsonIgnoreReplacer));

      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (data[key] === null) {
            // copy[key] = 'null';
          } else {
            copy[key] = data[key];
          }
        }
      }
    } catch (e) {}
    return copy;
  }

  hasID() {
    return this.id !== "" && this.id !== null;
  }

  clone(): any {
    const cloneObj = new (<any>this.constructor)();
    const keys = Object.keys(this);
    for (const i in keys) {
      if (i) {
        const property = keys[i];
        if (
          typeof this[property] === "object" &&
          this[property] &&
          typeof this[property] !== "function" &&
          !(this[property] instanceof Array) &&
          typeof this[property].clone === "function"
        ) {
          cloneObj[property] = this[property].clone();
        } else {
          cloneObj[property] = this[property];
        }
      }
    }
    return cloneObj;
  }
}
