import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Observable } from 'rxjs';
import { News } from '@app-models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseService<News> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, News, 'news', 'news');
  }
}
