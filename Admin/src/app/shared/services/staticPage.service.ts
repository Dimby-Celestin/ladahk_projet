import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { StaticPage } from '@app-models/staticPage.model';

@Injectable({
  providedIn: 'root'
})
export class StaticPageService extends BaseService<StaticPage> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, StaticPage, 'staticPages', 'staticPage');
  }
}
