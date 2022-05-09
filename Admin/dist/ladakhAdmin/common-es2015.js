(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/models/article.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/article.model.ts ***!
  \************************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./src/app/shared/models/base.model.ts");
/* harmony import */ var _fichier_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fichier.model */ "./src/app/shared/models/fichier.model.ts");


class Article extends _base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"] {
    constructor(arg) {
        super(arg);
        if (arg) {
            for (const key in arg) {
                if (key === 'banner') {
                    this.banner = new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](arg.banner);
                }
                else if (key === 'images') {
                    this.images = arg.images.map(i => new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](i));
                }
                else if (key === 'thumbnail') {
                    this.thumbnail = new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](arg.thumbnail);
                }
                else if (Object.prototype.hasOwnProperty.call(arg, key)) {
                    this[key] = arg[key];
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/app/shared/models/categorie.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/categorie.model.ts ***!
  \**************************************************/
/*! exports provided: Categorie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categorie", function() { return Categorie; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./src/app/shared/models/base.model.ts");
/* harmony import */ var _fichier_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fichier.model */ "./src/app/shared/models/fichier.model.ts");


class Categorie extends _base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"] {
    constructor(arg) {
        super(arg);
        if (arg) {
            for (const key in arg) {
                if (key === 'image') {
                    this.image = new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](arg.image);
                }
                else if (Object.prototype.hasOwnProperty.call(arg, key)) {
                    this[key] = arg[key];
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/app/shared/services/article.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/article.service.ts ***!
  \****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _app_models_article_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-models/article.model */ "./src/app/shared/models/article.model.ts");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/http.service */ "./src/app/shared/providers/http.service.ts");





class ArticleService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(_httpService) {
        super(_httpService, _app_models_article_model__WEBPACK_IMPORTED_MODULE_2__["Article"], 'articles', 'article');
        this._httpService = _httpService;
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/categorie.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/categorie.service.ts ***!
  \******************************************************/
/*! exports provided: CategorieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieService", function() { return CategorieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _models_categorie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/categorie.model */ "./src/app/shared/models/categorie.model.ts");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/http.service */ "./src/app/shared/providers/http.service.ts");





class CategorieService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(_httpService) {
        super(_httpService, _models_categorie_model__WEBPACK_IMPORTED_MODULE_2__["Categorie"], 'categories', 'category');
        this._httpService = _httpService;
    }
}
CategorieService.ɵfac = function CategorieService_Factory(t) { return new (t || CategorieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
CategorieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategorieService, factory: CategorieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategorieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map