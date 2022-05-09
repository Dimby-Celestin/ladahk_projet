import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../../shared/services/categorie.service';
import { Categorie } from '../../../shared/models/categorie.model';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { Router, ActivatedRoute } from '@angular/router';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import { environment as ENV } from '../../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  searchString: string = '';
  pageSize = 10;
  rows: any = new Categorie();

  constructor(
    private _categorieService: CategorieService,
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
    this._categorieService.totalCount$.subscribe(count => {
      this.pageLength = count;
    });
    //await this._categorieService.count().toPromise();
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
      queryString.libelle_contains = this.searchString;
    }
    try {
      this.rows = await this._categorieService.list(pageNumber, pageSize, queryString).toPromise();
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
  add(p?: any) {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '50%',
      data: p || ''
    });
    dialogRef.afterClosed().subscribe(async () => {
      await this.loadData(this.page, this.pageSize);
    });
  }
  getPathImage(path: string) {
    return `${ENV.FILE_ENDPOINT}/${path}`;
  }
  back() {
    //this._utils.back();
    this._router.navigate(['/post']);
  }
}
