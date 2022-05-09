import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Observable } from 'rxjs';
import { Roadtoladakh } from '@app-models/roadtoladakh.model';

@Injectable({
  providedIn: 'root'
})
export class RoadtoladakhService extends BaseService<Roadtoladakh> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, Roadtoladakh, 'roadtoladakh', 'roadtoladakh');
  }
}
