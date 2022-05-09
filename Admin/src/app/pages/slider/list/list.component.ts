import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../../shared/services/slider.service';
import { Slider } from '../../../shared/models/slider.model';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { environment as ENV } from '../../../../environments/environment';
import { UtilsService } from '@app-providers/utils.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  searchString: string = '';
  pageSize = 10;
  rows: Slider[] = [];

  constructor(
    private _sliderService: SliderService,
    private _utils: UtilsService,
    private dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    super();
    this._route.queryParams.subscribe(params => {
      this.page = parseInt(params['page'], 10) || this.page;
      this.searchString = params['q'] || this.searchString;
    });
  }

  async ngOnInit( ) {
    this.isLoading = true;
    this._sliderService.totalCount$.subscribe(count => {
      this.pageLength = count;
    });
    //await this._sliderService.count().toPromise();
    await this.loadData(this.page, this.pageSize);
    this.isLoading = false;
  }

  async loadData(pageNumber?: number, pageSize?: number) {
    this.isLoading = true;
    if (pageNumber) {
      this.page = pageNumber;
    }
    let queryString: any = {excerpt: true, sortField: 'order=asc'};
    if (this.searchString) {
      queryString.libelle_contains = this.searchString;
    }
    try {
      this.rows = await this._sliderService.list(pageNumber, pageSize, queryString).toPromise();
      this.isLoading = false;
      this._router.navigate([], {
        queryParams: {
          page: this.page || undefined,
          q: this.searchString || undefined
        }
      });
    } catch (e) {
      this.isLoading = false;
      console.error(e);
    }
  }
  add() {}
  async delete(item: Slider) {
    try {
      const del = await this._utils.confirm('Are you really want to delete the slider?');
      if (del) {
        this.isLoading = true;
        await this._sliderService.delete(item).toPromise();
        await this.loadData();
        this.isLoading = false;
      }
    } catch (e) {
      this.isLoading = false;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex, event.currentIndex);
    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
  }
  back() {
    //this._utils.back();
    this._router.navigate(['/post']);
  }

}
