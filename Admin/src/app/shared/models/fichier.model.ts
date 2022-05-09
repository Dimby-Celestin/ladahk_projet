import { BaseModel } from "./base.model";
import { jsonIgnore } from "json-ignore";
import { environment as ENV } from "environments/environment";

export class Fichier extends BaseModel {
  name: string;
  path: string;
  filename: string;
  original_filename: string;
  mime_type: string;
  extension: string;
  type: string;
  @jsonIgnore()
  get realPath(): string {
    if (this.path.startsWith('http')) {
      return this.path;
    }
    return (
      ENV.DATA_ENDPOINT + "/" + this.path
    );
  }

  constructor(arg?: any, folder?) {
    super(arg);
  }
}
