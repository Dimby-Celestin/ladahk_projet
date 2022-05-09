import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Business } from '@app-models/business.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService extends BaseService<Business> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, Business, 'businesses', 'business');
  }
  updateReject(item: Business): Observable<Business> {
    return this.httpService.put(`business/${item.id}/reject`, item.prepareForSending());
  }
  updateApprouve(id: string): Observable<Business> {
    return this.httpService.put(`business/${id}/approve`);
  }
  stat() {
    return this.httpService.get(`businessStat`);
  }
}
