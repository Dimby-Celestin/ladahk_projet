import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from '../providers/http.service';
import { Observable } from 'rxjs';
import { Calendar } from '@app-models/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService extends BaseService<Calendar> {
  constructor(protected _httpService: HttpService) {
    super(_httpService, Calendar, 'calendars', 'calendar');
  }
}
