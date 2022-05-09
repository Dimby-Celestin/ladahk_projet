import { BaseModel } from './base.model';
import { jsonIgnore } from 'json-ignore';
import { environment as ENV } from "environments/environment";

export class BusinessRequiredDocument extends BaseModel {
  name: string;
  requiredDocumentId: string;
  businessId: string;
  path: string;
  filename: string;
  mime_type: string;
  extension: string;
  status: StatutEnum;
  refusedReason: string;

  @jsonIgnore()
  get realPath(): string {
    if (this.path.startsWith('http')) {
      return this.path;
    }
    return (
      ENV.DATA_ENDPOINT + "/" + this.path
    );
  }

  @jsonIgnore()
  get className(): string {
    if (this.status === StatutEnum.valid) {
      return 'btn-success';
    } else if (this.status === StatutEnum.refused) {
      return 'btn-danger';
    } else {
      return 'btn-warning';
    }
  }

  constructor(arg?: any) {
    super(arg);
  }
}

export enum StatutEnum {
  pending = 'pending',
  valid = 'valid',
  refused = 'refused'
}

