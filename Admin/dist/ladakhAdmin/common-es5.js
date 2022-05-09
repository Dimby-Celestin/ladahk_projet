function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/models/article.model.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/models/article.model.ts ***!
    \************************************************/

  /*! exports provided: Article */

  /***/
  function srcAppSharedModelsArticleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Article", function () {
      return Article;
    });
    /* harmony import */


    var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./base.model */
    "./src/app/shared/models/base.model.ts");
    /* harmony import */


    var _fichier_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fichier.model */
    "./src/app/shared/models/fichier.model.ts");

    var Article =
    /*#__PURE__*/
    function (_base_model__WEBPACK_) {
      _inherits(Article, _base_model__WEBPACK_);

      var _super = _createSuper(Article);

      function Article(arg) {
        var _this;

        _classCallCheck(this, Article);

        _this = _super.call(this, arg);

        if (arg) {
          for (var key in arg) {
            if (key === 'banner') {
              _this.banner = new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](arg.banner);
            } else if (key === 'images') {
              _this.images = arg.images.map(function (i) {
                return new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](i);
              });
            } else if (key === 'thumbnail') {
              _this.thumbnail = new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](arg.thumbnail);
            } else if (Object.prototype.hasOwnProperty.call(arg, key)) {
              _this[key] = arg[key];
            }
          }
        }

        return _this;
      }

      return Article;
    }(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]);
    /***/

  },

  /***/
  "./src/app/shared/models/categorie.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/models/categorie.model.ts ***!
    \**************************************************/

  /*! exports provided: Categorie */

  /***/
  function srcAppSharedModelsCategorieModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Categorie", function () {
      return Categorie;
    });
    /* harmony import */


    var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./base.model */
    "./src/app/shared/models/base.model.ts");
    /* harmony import */


    var _fichier_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fichier.model */
    "./src/app/shared/models/fichier.model.ts");

    var Categorie =
    /*#__PURE__*/
    function (_base_model__WEBPACK_2) {
      _inherits(Categorie, _base_model__WEBPACK_2);

      var _super2 = _createSuper(Categorie);

      function Categorie(arg) {
        var _this2;

        _classCallCheck(this, Categorie);

        _this2 = _super2.call(this, arg);

        if (arg) {
          for (var key in arg) {
            if (key === 'image') {
              _this2.image = new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](arg.image);
            } else if (Object.prototype.hasOwnProperty.call(arg, key)) {
              _this2[key] = arg[key];
            }
          }
        }

        return _this2;
      }

      return Categorie;
    }(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]);
    /***/

  },

  /***/
  "./src/app/shared/services/article.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/article.service.ts ***!
    \****************************************************/

  /*! exports provided: ArticleService */

  /***/
  function srcAppSharedServicesArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleService", function () {
      return ArticleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/shared/services/base.service.ts");
    /* harmony import */


    var _app_models_article_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app-models/article.model */
    "./src/app/shared/models/article.model.ts");
    /* harmony import */


    var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../providers/http.service */
    "./src/app/shared/providers/http.service.ts");

    var ArticleService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(ArticleService, _base_service__WEBPAC);

      var _super3 = _createSuper(ArticleService);

      function ArticleService(_httpService) {
        var _this3;

        _classCallCheck(this, ArticleService);

        _this3 = _super3.call(this, _httpService, _app_models_article_model__WEBPACK_IMPORTED_MODULE_2__["Article"], 'articles', 'article');
        _this3._httpService = _httpService;
        return _this3;
      }

      return ArticleService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]);

    ArticleService.ɵfac = function ArticleService_Factory(t) {
      return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
    };

    ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArticleService,
      factory: ArticleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/categorie.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/categorie.service.ts ***!
    \******************************************************/

  /*! exports provided: CategorieService */

  /***/
  function srcAppSharedServicesCategorieServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieService", function () {
      return CategorieService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/shared/services/base.service.ts");
    /* harmony import */


    var _models_categorie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/categorie.model */
    "./src/app/shared/models/categorie.model.ts");
    /* harmony import */


    var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../providers/http.service */
    "./src/app/shared/providers/http.service.ts");

    var CategorieService =
    /*#__PURE__*/
    function (_base_service__WEBPAC2) {
      _inherits(CategorieService, _base_service__WEBPAC2);

      var _super4 = _createSuper(CategorieService);

      function CategorieService(_httpService) {
        var _this4;

        _classCallCheck(this, CategorieService);

        _this4 = _super4.call(this, _httpService, _models_categorie_model__WEBPACK_IMPORTED_MODULE_2__["Categorie"], 'categories', 'category');
        _this4._httpService = _httpService;
        return _this4;
      }

      return CategorieService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]);

    CategorieService.ɵfac = function CategorieService_Factory(t) {
      return new (t || CategorieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
    };

    CategorieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategorieService,
      factory: CategorieService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategorieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map