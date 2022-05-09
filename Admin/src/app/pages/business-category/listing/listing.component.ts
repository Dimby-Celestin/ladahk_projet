import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app-providers/utils.service';
import { FormHelperService } from '@app-providers/form-helper.service';
import { BusinessCategory } from '@app-models/business-category.model';
import { BusinessCategoryService } from '@app-services/businessCategory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageWithListing } from 'app/core/pages/page-with-listing';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent extends PageWithListing implements OnInit {
  isLoading: boolean;
  id: string;
  pageSize = 10;
  searchString: string = '';
  rows: any = new BusinessCategory();
  
  constructor(
    private _utils: UtilsService,
    private _formHelperService: FormHelperService,
    private businessCategoryService: BusinessCategoryService,
    private _router: Router,
    ) {
      super();        
      this.searchUpdated$
        .debounceTime(600)
        .distinctUntilChanged()
        .subscribe(data => {
          this.loadData();
        });
    }
    async ngOnInit() {
      this.isLoading = true;
      this.businessCategoryService.totalCount$.subscribe(count => {
        this.pageLength = count;
        console.log('count::', count)
      });
      await this.loadData(this.page, this.pageSize);
      this.isLoading = false;
    }
   async loadData(pageNumber?: number, pageSize?: number) {
    if (pageNumber) {
      this.page = pageNumber;
    }
    let queryString: any = {searchFields: 'name', parent_id: null};
    if (this.searchString) {
      queryString.searchValue = this.searchString;
    } else {
      queryString = { parent_id: null };
    }
    try {
      this.rows = await this.businessCategoryService.list(pageNumber, pageSize, queryString).toPromise();
      this.isLoading = false;
      this._router.navigate([], {
        queryParams: {
          page: this.page || undefined,
          q: this.searchString || undefined
        }
      });
    } catch (e) {
      console.error(e);
    }
   }
   async delete(item: BusinessCategory) {
    try {
      const del = await this._utils.confirm('Are you really want to delete the business category?');
      if (del) {
        this.isLoading = true;
        await this.businessCategoryService.delete(item).toPromise();
        await this.loadData();
        this.isLoading = false;
      }
    } catch (e) {
      this.isLoading = false;
      console.error(e)
    }
  }
  back() {
    //this._utils.back();
    this._router.navigate(['/post']);
  }
}
