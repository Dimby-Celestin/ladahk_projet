import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { GalleryCategory } from '@app-models/galleryCategory.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryCategoryService extends BaseService<GalleryCategory> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, GalleryCategory, 'galleryCategories', 'galleryCategory');
  }
}
