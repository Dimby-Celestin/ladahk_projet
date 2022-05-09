import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Observable } from 'rxjs';
import { BusinessTransfer } from '@app-models/business-transfer.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessTransferService extends BaseService<BusinessTransfer> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, BusinessTransfer, 'businessTransferts', 'businessTransfert');
  }
  updateReject(item: BusinessTransfer): Observable<BusinessTransfer> {
    return this.httpService.put(`businessTransfert/${item.id}/reject`, item.prepareForSending());
  }
  updateApprouve(id: string): Observable<BusinessTransfer> {
    return this.httpService.put(`businessTransfert/${id}/approve`);
  }
}
