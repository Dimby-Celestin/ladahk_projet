import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Observable } from 'rxjs';
import { BusinessCategory } from '@app-models/business-category.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessCategoryService extends BaseService<BusinessCategory> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, BusinessCategory, 'businessCategories', 'businessCategory');
  }
}
