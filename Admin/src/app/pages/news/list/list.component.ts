import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../../shared/services/categorie.service';
import { Categorie } from '../../../shared/models/categorie.model';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '@app-services/news.service';
import { News } from '@app-models/news.model';
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
    private _newsService: NewsService,
    private _router: Router,
    private _utils: UtilsService,
    private _route: ActivatedRoute,
  ) {
    super();
  }

  async ngOnInit( ) {
    this.isLoading = true;
    this._newsService.totalCount$.subscribe(count => {
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
    let queryString: any = {excerpt: true};
    if (this.searchString) {
      queryString.libelle_contains = this.searchString;
    }
    try {
      this.rows = await this._newsService.list(pageNumber, pageSize, queryString).toPromise();
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
  async delete(item: News) {
    try {
      const del = await this._utils.confirm('Are you really want to delete the news?');
      if (del) {
        this.isLoading = true;
        await this._newsService.delete(item).toPromise();
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
