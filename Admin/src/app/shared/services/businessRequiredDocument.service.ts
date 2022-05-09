import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { BusinessRequiredDocument } from '@app-models/business-required-document.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessRequiredDocumentService extends BaseService<BusinessRequiredDocument> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, BusinessRequiredDocument, 'businessRequiredDocuments', 'businessRequiredDocument');
  }
  updateReject(item: BusinessRequiredDocument): Observable<BusinessRequiredDocument> {
    return this.httpService.put(`businessRequiredDocument/${item.id}/reject`, item.prepareForSending());
  }
  updateApprouve(id: string): Observable<BusinessRequiredDocument> {
    return this.httpService.put(`businessRequiredDocument/${id}/approve`);
  }
}
