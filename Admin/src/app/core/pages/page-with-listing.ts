import { Subject,  Subscription, Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

/**
 * Extends every listing page
 *
 * @export
 * @class PageWithListing
 * @implements {OnDestroy}
 */
export class PageWithListing implements OnDestroy {
  public rows: any[] = [];
  public rows$: Observable<any[]>;
  public searchString: string;
  public isLoading: boolean;
  // Paginator Inputs
  public pageLength: number;
  public pageSize: number = 10;
  public pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  public page: number = 1;
  // Search subject
  public searchUpdated$: Subject<string> = new Subject<string>();
  public countSubscription: Subscription;

  /**
   * Handle pagination
   *
   * @param {*} event
   * @memberof PageWithListing
   */
  pageChangeEvent(event) {
    this.loadData(event, this.pageSize);
  }

  loadData(pageNumber?: number, pageSize?: number): void { }

  /**
   * Select all items
   *
   * @param {*} ev
   * @memberof PageWithListing
   */
  checkAll(ev): void {
    this.rows.forEach(x => x.selected = ev.target.checked);
  }

  /**
   * Verify if all items are selected
   *
   * @returns {boolean}
   * @memberof PageWithListing
   */
  isAllChecked(): boolean {
    return this.rows.every(x => x.selected);
  }

  /**
   * Destroy component
   *
   * @memberof PageWithListing
   */
  ngOnDestroy() {
    if (this.countSubscription) {
      this.countSubscription.unsubscribe();
    }
  }
}
