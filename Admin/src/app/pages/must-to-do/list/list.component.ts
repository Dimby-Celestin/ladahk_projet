import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../shared/services/article.service';
import { Categorie } from '../../../shared/models/categorie.model';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { environment as ENV } from '../../../../environments/environment';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  searchString: string = '';
  pageSize = 250;
  rows: any = new Categorie();

  constructor(
    private _articleService: ArticleService,
    private dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    super();
    this._route.queryParams.subscribe(params => {
      this.page = parseInt(params['page'], 250) || this.page;
      this.searchString = params['q'] || this.searchString;
    });
  }

  async ngOnInit( ) {
    this.isLoading = true;
    this._articleService.totalCount$.subscribe(count => {
      this.pageLength = count;
    });
    //await this._articleService.count().toPromise();
    await this.loadData(this.page, this.pageSize);
    this.isLoading = false;
  }

  async loadData(pageNumber?: number, pageSize?: number) {
    this.isLoading = true;
    if (pageNumber) {
      this.page = pageNumber;
    }
    let queryString: any = {};
    if (this.searchString) {
      queryString.title = this.searchString;
    }
    try {
      this.rows = await this._articleService.list(pageNumber, pageSize, {sortField: 'order=asc'}).toPromise();
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
  getPathImage(path: string) {
    return `${ENV.FILE_ENDPOINT}/${path}`;
  }
  async changeMustToDo(item, event) {
    try {
      this.isLoading = true;
      item.must_to_do = event.target.checked ? 1 : 0;
      await this._articleService.update(item).toPromise();
      await this.loadData(this.page);
      this.isLoading = false;
    } catch (e) {
      console.error(e);
      this.isLoading = false;
    }
  }
  back() {
    this._router.navigate(['/post']);
  }
  drop(event): void {
    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
  }
  async save(): Promise<void> {
    const data = {};
    let i = 1;
    for (const item of this.rows) {
      data[item.id] = i;
      ++i;
    }
    try {
      this.isLoading = true;
      await this._articleService.saveOrder(data).toPromise();
      this.isLoading = false;
      this.loadData();
    } catch (e) {
      console.error(e);
      this.isLoading = false;
    }
  }
}
