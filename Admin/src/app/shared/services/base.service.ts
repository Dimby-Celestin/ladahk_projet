import { HttpService } from "../providers/http.service";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseModelInterface, BaseModel } from "../models/base.model";

/**
 * Abstract BaseSevice Class
 *
 * @export
 * @abstract
 * @class BaseService
 * @template T
 */
export abstract class BaseService<T extends BaseModelInterface> {
  /**
   *  Create subjet of items total count
   *
   * @type {BehaviorSubject<number>}
   * @memberof BaseService
   */
  public totalCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  /**
   *  Create observable of items total count
   *
   * @memberof BaseService
   */
  public totalCount$: any = this.totalCount.asObservable();

  constructor(
    protected httpService: HttpService,
    protected TCreator: { new (arg?: any): T },
    protected pathPlural: string,
    protected pathSingular: string
  ) {}

  /**
   * Get one item from API
   *
   * @param {string} id
   * @returns {Observable<T>}
   * @memberof BaseService
   */
  public load(id: string): Observable<T> {
    return this.httpService
      .get(`${this.pathSingular}/${id}`)
      .pipe(map(x => new this.TCreator(x)));
  }

  /**
   * Get items from API
   *
   * @param {number} [page=0]
   * @param {number} [perPage=10]
   * @param {*} [query]
   * @param {string} [order]
   * @param {string} [select]
   * @param {boolean} [isAscendant]
   * @returns {Observable<T[]>}
   * @memberof BaseService
   */
  public list(
    page: number = 1,
    perPage: number = 10,
    query?: any,
    order?: string,
    select?: string,
    isAscendant?: boolean,
    key?: string
  ): Observable<T[]> {
    const $top = perPage.toString();
    let $query: any = { page, limit: $top };
    if (query) {
      $query = {...$query, ...query};
    }
    if (order) {
      $query["_sort"] = order;
    }
    if (select) {
      $query["$select"] = select;
    }
    return this.httpService.get(`${this.pathPlural}`, $query).pipe(
      map(x => {
        let data = x;
        if (key && key !== '') {
          data = x[key];
        }
        this.totalCount.next(x.total);
        return data.rows.map((u: T) => {
          return new this.TCreator(u);
        });
      })
    );
  }

  count() {
    return this.httpService.get(`${this.pathPlural}/count`).pipe(
      map(x => {
        this.totalCount.next(x);
      })
    );
  }
  countFind(arg?: any) {
    if (!arg) {
      arg = {};
    }
    return this.httpService.get(`${this.pathPlural}/count`, arg);
  }

  /**
   * Add item from API
   *
   * @param {T} item
   * @returns {Observable<T>}
   * @memberof BaseService
   */
  public add(item: T): Observable<T> {
    return this.httpService.post(`${this.pathPlural}`, item.prepareForSending());
  }

  /**
   * Update item from API
   *
   * @param {T} item
   * @returns {Observable<T>}
   * @memberof BaseService
   */
  public update(item: T): Observable<T> {
    return this.httpService.put(
      `${this.pathSingular}/${item.id}`,
      item.prepareForSending()
    );
  }

  /**
   * Delete item from API
   *
   * @param {T} item
   * @returns {Observable<T>}
   * @memberof BaseService
   */
  public delete(item: T): Observable<T> {
    return this.httpService.delete(`${this.pathSingular}/${item.id}`);
  }
}
