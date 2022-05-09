import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Categorie } from '../models/categorie.model';
import { HttpService } from '../providers/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService extends BaseService<Categorie> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, Categorie, 'categories', 'category');
  }
}
