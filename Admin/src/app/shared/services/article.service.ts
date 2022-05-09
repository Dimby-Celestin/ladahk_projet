import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Observable } from 'rxjs';
import { Article } from '@app-models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseService<Article> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, Article, 'articles', 'article');
  }
  saveOrder(data): Observable<any> {
    return this.httpService.post(
      `reorderListArticle`,
      data
    );
  }
}
