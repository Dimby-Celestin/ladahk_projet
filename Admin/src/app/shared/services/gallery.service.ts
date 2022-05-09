import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Gallery } from '@app-models/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService extends BaseService<Gallery> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, Gallery, 'galleries', 'gallery');
  }
}
