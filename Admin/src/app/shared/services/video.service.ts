import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Video } from '@app-models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends BaseService<Video> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, Video, 'videos', 'video');
  }
}
