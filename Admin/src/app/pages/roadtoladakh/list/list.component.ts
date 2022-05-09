import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../shared/models/categorie.model';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { Router, ActivatedRoute } from '@angular/router';
import { RoadtoladakhService } from '@app-services/roadtoladakh.service';
import { Roadtoladakh } from '@app-models/roadtoladakh.model';
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
    private _roadtoladakhService: RoadtoladakhService,
    private _utils: UtilsService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    super();
  }

  async ngOnInit( ) {
    this.isLoading = true;
    this._roadtoladakhService.totalCount$.subscribe(count => {
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
      this.rows = await this._roadtoladakhService.list(pageNumber, pageSize, queryString).toPromise();
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
  async delete(item: Roadtoladakh) {
    try {
      const del = await this._utils.confirm('Are you really want to delete the artice?');
      if (del) {
        this.isLoading = true;
        await this._roadtoladakhService.delete(item).toPromise();
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
