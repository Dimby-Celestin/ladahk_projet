import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Observable } from 'rxjs';
import { RequiredDocument } from '@app-models/required-document.model';

@Injectable({
  providedIn: 'root'
})
export class RequiredDocumentService extends BaseService<RequiredDocument> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, RequiredDocument, 'requiredDocuments', 'requiredDocument');
  }
}
