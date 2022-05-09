import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Slider } from '../models/slider.model';
import { HttpService } from '../providers/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService extends BaseService<Slider> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, Slider, 'sliders', 'slider');
  }
}
