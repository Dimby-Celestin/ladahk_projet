import { Component, OnInit, ViewChild } from '@angular/core';
import { SliderService } from '../../../shared/services/slider.service';
import { MatDialog , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { environment as ENV } from '../../../../environments/environment';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import {ModalComponent} from './modal/modal.component';

import { Calendar } from '../../../shared/models/calendar.model';
import { CalendarService } from '../../../shared/services/calendar.service';
import { BehaviorSubject } from 'rxjs';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { UtilsService } from '@app-providers/utils.service';

enum CalendarDirectionEnum {
  next = 'next',
  prev = 'prev'
}

export interface DialogData {
  animal: string;
  name: string;
}
interface CalendarDirectionSubject {
  key?: CalendarDirectionEnum;
  value?: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  searchString: string = '';
  pageSize = 10;
  isApiLoading: boolean = false;
  rows: any = new Calendar();
  date: string;
  calendarOptions: CalendarOptions;
  calendarInteraction: BehaviorSubject<CalendarDirectionSubject> = new BehaviorSubject<CalendarDirectionSubject>({});
  public calendarInteraction$: any = this.calendarInteraction.asObservable();
  @ViewChild("calendar", { static: false })
  calendarComponent: FullCalendarComponent;
  subscriptions: any = {};
  constructor(
    private calendarService: CalendarService,
    public dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _utils: UtilsService,
  ) {
    super();
    this.subscriptions['calendar'] = this.calendarInteraction$
    .debounceTime(600)
    .distinctUntilChanged()
    .subscribe(async (i: CalendarDirectionSubject) => {
      if (i && i.key) {
        const calendarApi = this.calendarComponent.getApi();
        console.log(calendarApi, i.key)
        if (i.key === CalendarDirectionEnum.next) {
            console.log('azazaza', 'next')
          calendarApi.next();
        } else {
            console.log('azazaza', 'prev')
          calendarApi.prev();
        }
        await this.loadData();
      }
    });
    this._route.queryParams.subscribe(params => {
      this.page = parseInt(params['page'], 10) || this.page;
      this.searchString = params['q'] || this.searchString;
    });
  }
  async ngOnInit( ) {
    this.isLoading = true;
    this.calendarService.totalCount$.subscribe(count => {
      this.pageLength = count;
    });
    //await this._categorieService.count().toPromise();
    await this.loadCalendar();
    await this.loadData(this.page, this.pageSize);
    this.isLoading = false;
  }
  async loadCalendar() {
    const customButtons = {
      buttonPrev: {
        icon: "fc-icon aiza fc-icon-chevron-left",
        click: () => {
          // this.goDirection('prev');
          console.log('azaza prefv')
          this.calendarInteraction.next({key: CalendarDirectionEnum.prev, value: Date.now()});
        }
      },
      buttonNext: {
        icon: "fc-icon  aiza fc-icon-chevron-right",
        click: () => {
          // this.goDirection('next');
          this.calendarInteraction.next({key: CalendarDirectionEnum.next, value: Date.now()});
        }
      }
    };
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      weekends: false, // initial value
      dateClick: this.handleDateClick.bind(this), // bind is important!
      events: this.rows,
      customButtons,
      headerToolbar: {
        left: '',
        center: 'buttonPrev title buttonNext',
        right: ''
      }
    };
  }
  ngOnDestroy() {
    for (const key in this.subscriptions) {
      this.subscriptions[key].unsubscribe();
    }
  }
  async loadData(pageNumber?: number, pageSize?: number) {
    this.isApiLoading = true;
    if (pageNumber) {
      this.page = pageNumber;
    }
    let queryString: any = {};
    if (this.calendarComponent) {
      const calendarApi = this.calendarComponent.getApi();
      if (!calendarApi || !calendarApi.currentData.dateProfile) {
        return;
      }
      queryString.start = calendarApi.currentData.dateProfile.currentRange.start.toJSON();
      queryString.end = calendarApi.currentData.dateProfile.currentRange.end.toJSON();
    }
    try {
      this.rows = await this.calendarService.list(pageNumber, pageSize, queryString).toPromise();

      this.isApiLoading = false;
      this._router.navigate([], {
        queryParams: {
          page: this.page || undefined,
          q: this.searchString || undefined
        }
      });
     this.calendarOptions['events'] = this.rows;
      
    } catch (e) {
      this.isApiLoading = false;
      console.error(e);
    }
  }
  changeView($event) {
    
  }
  handleDateClick(arg) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: {name: '', date: arg.dateStr}
    });
    dialogRef.afterClosed().subscribe(async result => {
      let obs;
      if (!result) {
        return;
      }
      if (result.id) {
        obs = this.calendarService.update(result);
      } else {
        obs = this.calendarService.add(result);
      }
      try {
        this.isApiLoading = true;
        await obs.toPromise();
        this.loadData();
        this.isApiLoading = false;
      } catch (e) {
        console.error(e);
        this.isApiLoading = false;
      }
    });
    }
    back() {
      //this._utils.back();
      this._router.navigate(['/post']);
    }


}
