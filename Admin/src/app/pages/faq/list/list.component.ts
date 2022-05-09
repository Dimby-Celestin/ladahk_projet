import { Component, OnInit } from '@angular/core';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { Router, ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { UtilsService } from '@app-providers/utils.service';
import { StaticPage, KindEnum } from '@app-models/staticPage.model';
import { StaticPageService } from '@app-services/staticPage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  pageSize = 10;
  searchString: string = '';
  rows: any = new StaticPage();

  constructor(
    private _staticPageService: StaticPageService,
    private _router: Router,
    private _utils: UtilsService,
    private _route: ActivatedRoute,
  ) {
    super();
    this.searchUpdated$
      .debounceTime(600)
      .distinctUntilChanged()
      .subscribe(data => {
        this.loadData();
      });
  }

  async ngOnInit( ) {
    this.isLoading = true;
    this._staticPageService.totalCount$.subscribe(count => {
      this.pageLength = count;
    });
    await this.loadData(this.page, this.pageSize);
    this.isLoading = false;
  }
  async loadData(pageNumber?: number, pageSize?: number) {
    this.isLoading = true;
    if (pageNumber) {
      this.page = pageNumber;
    }
    let queryString: any = { kind: KindEnum.faq };
    if (this.searchString) {
      queryString.searchValue = this.searchString;
      queryString.searchFields = 'title';
    }
    try {
      this.rows = await this._staticPageService.list(pageNumber, pageSize, queryString).toPromise();
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
  async delete(item: StaticPage) {
    try {
      const del = await this._utils.confirm('Are you really want to delete the faq ?');
      if (del) {
        this.isLoading = true;
        await this._staticPageService.delete(item).toPromise();
        await this.loadData();
        this.isLoading = false;
      }
    } catch (e) {
      this.isLoading = false;
    }
  }
  back() {
    //this._utils.back();
    this._router.navigate(['/post']);
  }
}
