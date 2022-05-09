import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../shared/models/categorie.model';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '@app-services/article.service';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { Article } from '@app-models/article.model';
import { UtilsService } from '@app-providers/utils.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  pageSize = 10;
  searchString: string = '';
  rows: any = new Categorie();

  constructor(
    private _artcileService: ArticleService,
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
    this._artcileService.totalCount$.subscribe(count => {
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
    let queryString: any = {searchFields: 'title', excerpt: true};
    if (this.searchString) {
      queryString.searchValue = this.searchString;
    }
    try {
      this.rows = await this._artcileService.list(pageNumber, pageSize, queryString).toPromise();
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
  async delete(item: Article) {
    try {
      const del = await this._utils.confirm('Are you really want to delete the article?');
      if (del) {
        this.isLoading = true;
        await this._artcileService.delete(item).toPromise();
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
