function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-accounts-accounts-module"], {
  /***/
  "./src/app/pages/accounts/accounts-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/accounts/accounts-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AccountsRoutingModule */

  /***/
  function srcAppPagesAccountsAccountsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function () {
      return AccountsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accounts.component */
    "./src/app/pages/accounts/accounts.component.ts");
    /* harmony import */


    var _uploadfile_uploadfile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./uploadfile/uploadfile.component */
    "./src/app/pages/accounts/uploadfile/uploadfile.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/pages/accounts/edit/edit.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'home',
        component: _accounts_component__WEBPACK_IMPORTED_MODULE_2__["AccountsComponent"]
      }, {
        path: 'upload',
        component: _uploadfile_uploadfile_component__WEBPACK_IMPORTED_MODULE_3__["UploadfileComponent"]
      }, {
        path: 'edit',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
      }]
    }];

    var AccountsRoutingModule = function AccountsRoutingModule() {
      _classCallCheck(this, AccountsRoutingModule);
    };

    AccountsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccountsRoutingModule
    });
    AccountsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccountsRoutingModule_Factory(t) {
        return new (t || AccountsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/accounts/accounts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/accounts/accounts.component.ts ***!
    \******************************************************/

  /*! exports provided: AccountsComponent */

  /***/
  function srcAppPagesAccountsAccountsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsComponent", function () {
      return AccountsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_providers_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/providers/utils.service */
    "./src/app/shared/providers/utils.service.ts");
    /* harmony import */


    var _shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/providers/form-helper.service */
    "./src/app/shared/providers/form-helper.service.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AccountsComponent_tr_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "APPROVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var d_r123 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r123.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r123.nom);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r123.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r123.email);
      }
    }

    var AccountsComponent =
    /*#__PURE__*/
    function () {
      function AccountsComponent(_utils, _formHelperService) {
        _classCallCheck(this, AccountsComponent);

        this._utils = _utils;
        this._formHelperService = _formHelperService;
        this.types = [{
          label: 'type 1'
        }, {
          label: 'type 2'
        }];
        this.rows = [{
          id: '1',
          nom: 'Tsewang Namgyal',
          phone: '+91 8976565776',
          email: 'mail@mail.com'
        }, {
          id: '2',
          nom: 'Tsewang Namgyal',
          phone: '+91 8976565776',
          email: 'mail@mail.com'
        }, {
          id: '3',
          nom: 'Tsewang Namgyal',
          phone: '+91 8976565776',
          email: 'mail@mail.com'
        }, {
          id: '4',
          nom: 'Tsewang Namgyal',
          phone: '+91 8976565776',
          email: 'mail@mail.com'
        }, {
          id: '5',
          nom: 'Tsewang Namgyal',
          phone: '+91 8976565776',
          email: 'mail@mail.com'
        }];
        this.isLoading = false;
      }

      _createClass(AccountsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
        /**
         *  submit the form
         *  @param model form's values
         *  @param isValid form's validatoin
         */

      }, {
        key: "submit",
        value: function submit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "isFieldValid",
        value: function isFieldValid(field) {
          return this._formHelperService.isFieldValid(this.form, field);
        }
      }, {
        key: "displayFieldCss",
        value: function displayFieldCss(field) {
          return {
            "has-error": this.isFieldValid(field),
            "has-feedback": this.isFieldValid(field)
          };
        }
      }, {
        key: "reset",
        value: function reset() {
          this.form.reset();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this._utils.back();
        }
      }]);

      return AccountsComponent;
    }();

    AccountsComponent.ɵfac = function AccountsComponent_Factory(t) {
      return new (t || AccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_3__["FormHelperService"]));
    };

    AccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AccountsComponent,
      selectors: [["app-accounts"]],
      decls: 93,
      vars: 16,
      consts: [["id", "admin", 1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "title"], [1, "col-md-12", "d-flex", "mt-5"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-outline-warning"], [1, "nbr", "active", "mb-0", "ml-2"], [1, "d-flex", "align-items-center", "ml-4"], [1, "btn", "btn-outline-dark"], [1, "nbr", "mb-0", "ml-2"], [1, "col-md-12", "mt-2"], [1, "col-md-12", "d-flex", "mt-2"], ["placeholder", "Type", 1, "btn-outline-dark", 3, "items", "searchable", "clearable"], ["placeholder", "DATE REGISTERED", 1, "btn-outline-dark", 3, "items", "searchable", "clearable"], ["placeholder", "SEARCH", 1, "form-control", "search"], ["placeholder", "REGION", 1, "btn-outline-dark", 3, "items", "searchable", "clearable"], ["placeholder", "LISTING TYPE", 1, "btn-outline-dark", 3, "items", "searchable", "clearable"], ["placeholder", "LISTING CLASS TYPE", 1, "btn-outline-dark", 3, "items", "searchable", "clearable"], [1, "col-xs-12", "col-md-10", "content", "table-responsive", "mt-5"], [1, "table", "table-hover", "mt-5"], [1, "text-left", "border-top-0"], [1, "pt-3"], [4, "ngFor", "ngForOf"], [1, "col-lg-12", "pb-4", "mt-5", "mb-4", "footer-pager", "text-center"], [1, "mx-auto"], [1, "pagination", "mx-auto"], [1, "page-item"], ["href", "#", "aria-label", "Previous", 1, "page-link", "prev"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", 1, "page-link", "active"], ["href", "#", 1, "page-link"], ["href", "#", "aria-label", "Next", 1, "page-link", "next"], [1, "text-center"], [1, "text-left"], [1, "td-actions", "text-right", "border-top-0"], [1, "btn", "btn", "btn-outline-dark", "btn-link", "btn-xs"]],
      template: function AccountsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Welcome.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "913");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " FORMS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "324");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " REJECTED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "23");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " REVISED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "13");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " APPROVED LISTINGS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "97");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " PHOTOGRAPHER ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "06");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "ng-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "ng-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "ng-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "ng-select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "ng-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "S.No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Listing Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tbody", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, AccountsComponent_tr_66_Template, 12, 4, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "nav", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\xAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h4", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "1 to 20 of 913 new accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.types)("searchable", false)("clearable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.types)("searchable", false)("clearable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.types)("searchable", false)("clearable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.types)("searchable", false)("clearable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.types)("searchable", false)("clearable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
        }
      },
      directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnRzL2FjY291bnRzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-accounts",
          templateUrl: "./accounts.component.html",
          styleUrls: ["./accounts.component.scss"]
        }]
      }], function () {
        return [{
          type: _shared_providers_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]
        }, {
          type: _shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_3__["FormHelperService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/accounts/accounts.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/accounts/accounts.module.ts ***!
    \***************************************************/

  /*! exports provided: AccountsModule */

  /***/
  function srcAppPagesAccountsAccountsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsModule", function () {
      return AccountsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _accounts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accounts.component */
    "./src/app/pages/accounts/accounts.component.ts");
    /* harmony import */


    var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accounts-routing.module */
    "./src/app/pages/accounts/accounts-routing.module.ts");
    /* harmony import */


    var _uploadfile_uploadfile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./uploadfile/uploadfile.component */
    "./src/app/pages/accounts/uploadfile/uploadfile.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/pages/accounts/edit/edit.component.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var AccountsModule = function AccountsModule() {
      _classCallCheck(this, AccountsModule);
    };

    AccountsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccountsModule
    });
    AccountsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccountsModule_Factory(t) {
        return new (t || AccountsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _accounts_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountsRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsModule, {
        declarations: [_accounts_component__WEBPACK_IMPORTED_MODULE_5__["AccountsComponent"], _uploadfile_uploadfile_component__WEBPACK_IMPORTED_MODULE_7__["UploadfileComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _accounts_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountsRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_accounts_component__WEBPACK_IMPORTED_MODULE_5__["AccountsComponent"], _uploadfile_uploadfile_component__WEBPACK_IMPORTED_MODULE_7__["UploadfileComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _accounts_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountsRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/accounts/edit/edit.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/accounts/edit/edit.component.ts ***!
    \*******************************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppPagesAccountsEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var EditComponent =
    /*#__PURE__*/
    function () {
      function EditComponent() {
        _classCallCheck(this, EditComponent);

        this.checked = true;
        this.statusEs = [{
          id: 1,
          name: 'STATUS'
        }, {
          id: 2,
          name: 'VIDE'
        }];
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditComponent;
    }();

    EditComponent.ɵfac = function EditComponent_Factory(t) {
      return new (t || EditComponent)();
    };

    EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditComponent,
      selectors: [["app-edit"]],
      decls: 141,
      vars: 4,
      consts: [["id", "admin", 1, "main-content", "container"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "title"], [1, "title-2"], [1, "col-md-12", "mt-2"], [1, "modal-title"], [1, "btn", "btn-success", "mt-2"], [1, "d-flex", "justify-content-start", "mb-3"], [1, "p-2"], ["name", "status", "placeholder", "LISTING CLASS TYPE", "bindLabel", "name", "bindValue", "id", 1, "classtype", 3, "items", "ngModel", "ngModelChange"], ["type", "text", "id", "comment", "placeholder", "COMMENT", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary"], [1, "col-md-12", "mt-4"], [1, ""], [1, "col-sm-6"], [1, "col-sm-4"], ["type", "submit", 1, "btn", "btn-success", "bt-view"], [1, "row", "mt-3"], [1, "ml-3"], ["type", "submit", 1, "btn", "btn-outline-dark"], [1, "form-group"], ["id", "role", 1, "", 3, "ngModel", "checked", "ngModelChange"]],
      template: function EditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome Admin.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SITE MEMBERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nromada Hote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "APPROVED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_ng_select_ngModelChange_17_listener($event) {
            return ctx.selectedstatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "UPDATE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LISTING CLASS TYPE: CLASS A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ownership papers of Land");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lease deed/Rent deed/Partnership deed of the premises where the applicant proprietor desire to start the Hotel/Camp/Resort.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Drawing/Site Plan duly approved by the competent authority.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sophisticated Accommodation (for hotels it should be Minimum 12 rooms i.e 24 Beds capacity) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "a. 1. Heating System Single Bed Room = 160 sqft.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2. Non-Heating Double Bed Room = 140 sqft.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "b. 1. Heating System Single Bed Room = 220 sqft.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2. Non-Heating Double Bed Room = 180 sqft.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "c. Bath Rooms = 40 sqft. (If fitted with shower & 50 sqft. with tub)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Character Certificate of applicant proprietor from the Police Department.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Self-attested copy of Schedule Tribe Certificate of the applicant proprietor under UT Ladakh.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Two passport size self attested photos of the applicant proprietor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Press cutting regarding the No Objection from general public (within two weeks from the date of publication).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Self attested copy of PAN Card/Aadhar Card/Election Card of applicant/proprietor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Consent order from UT Ladakh Pollution Control Board for Hotels (Hotels with upto Six (6) rooms are exempted from consent from the pollution board.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "NOC from UT Ladakh Fire Service Department.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "NOC from PHE Department, UT Ladakh/Electric Department UT Ladakh.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Building permission from NAC Department.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Photograph of the team undertaking the inspection of premises should also be done to establish physical presence of the official from the Tourism Department.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Minimum 10 vehicle parking capacity.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_mat_checkbox_ngModelChange_140_listener($event) {
            return ctx.checked = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.statusEs)("ngModel", ctx.selectedstatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked)("checked", ctx.checked);
        }
      },
      directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"]],
      styles: [".margin-body[_ngcontent-%COMP%] {\n  margin: 101px 3px 44px 80px;\n}\n\n.bt-approved[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 10px;\n  background-color: #17dd3d;\n}\n\n.bt-view[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #17dd3d;\n}\n\n.bt-view-white[_ngcontent-%COMP%] {\n  color: #000000;\n  background-color: white;\n}\n\n.bt-update[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border-radius: 10px;\n  background-color: #707070;\n}\n\n.mg-modal[_ngcontent-%COMP%] {\n  margin-top: 319px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmlqYS93b3Jrc3BhY2UvbGFkYWtoL0xhZGFraCUyMFRvdXJpc20lMjBBbmd1bGFyL3NyYy9hcHAvcGFnZXMvYWNjb3VudHMvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50cy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBRENBO0VBRUksWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnRzL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tYm9keXtcbiAgICBtYXJnaW46IDEwMXB4IDNweCA0NHB4IDgwcHg7XG59XG4uYnQtYXBwcm92ZWR7XG4gICAgLy9tYXJnaW46IDEwMXB4IDNweCA0NHB4IDgwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdkZDNkO1xufVxuLmJ0LXZpZXd7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3ZGQzZDtcbn1cbi5idC12aWV3LXdoaXRle1xuICAgIGNvbG9yOiMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnQtdXBkYXRle1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbn1cbi5tZy1tb2RhbHtcbiAgICBtYXJnaW4tdG9wOiAzMTlweDtcbn0iLCIubWFyZ2luLWJvZHkge1xuICBtYXJnaW46IDEwMXB4IDNweCA0NHB4IDgwcHg7XG59XG5cbi5idC1hcHByb3ZlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3ZGQzZDtcbn1cblxuLmJ0LXZpZXcge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2RkM2Q7XG59XG5cbi5idC12aWV3LXdoaXRlIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYnQtdXBkYXRlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG59XG5cbi5tZy1tb2RhbCB7XG4gIG1hcmdpbi10b3A6IDMxOXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit',
          templateUrl: './edit.component.html',
          styleUrls: ['./edit.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/accounts/uploadfile/uploadfile.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/accounts/uploadfile/uploadfile.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UploadfileComponent */

  /***/
  function srcAppPagesAccountsUploadfileUploadfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadfileComponent", function () {
      return UploadfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UploadfileComponent =
    /*#__PURE__*/
    function () {
      function UploadfileComponent() {
        _classCallCheck(this, UploadfileComponent);

        this.types = [{
          id: 1,
          name: 'LISTING CLASS TYPE'
        }, {
          id: 2,
          name: 'VIDE'
        }];
      }

      _createClass(UploadfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UploadfileComponent;
    }();

    UploadfileComponent.ɵfac = function UploadfileComponent_Factory(t) {
      return new (t || UploadfileComponent)();
    };

    UploadfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UploadfileComponent,
      selectors: [["app-uploadfile"]],
      decls: 71,
      vars: 2,
      consts: [["id", "admin", 1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "title-upload"], [1, "p-t"], [1, "lb-p"], ["type", "submit", 1, "btn", "btn-secondary"], ["name", "listingclasstype", "placeholder", "LISTING CLASS TYPE", "bindLabel", "name", "bindValue", "id", 1, "classtype", 3, "items", "ngModel", "ngModelChange"], [1, "lb-p", "d-flex", "justify-content-between", "mb-3"], [1, "p-2"], ["type", "submit", 1, "bt-up"], ["type", "submit", 1, "bt-upload"], ["type", "button", "aria-label", "Close", 1, "bt-close"], ["aria-hidden", "true"], ["type", "submit", 1, "bt-sub"], [1, "p-2", "txt-end"], [1, "col-md-4"], ["type", "submit", 1, "bt-logout"], [1, "table", "table-borderless", "tb"], ["type", "submit", 1, "bt-list"]],
      template: function UploadfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Registration of Excursion Agent/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Travel Agent under UT of Ladakh..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " LADAKH sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(Charged annually)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MAKE PAYMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit documents for review.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ng-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadfileComponent_Template_ng_select_ngModelChange_20_listener($event) {
            return ctx.selectedclasstype = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ownership papers of Land ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Ownership papers of Land ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Rent deed.pdf ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "SUBMIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Make sure you\u2019ve submitted all the required forms before submitting, failing to do so will result in rejection of the form.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "DOCUMENTS VERIFICATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "PENDING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "DISPLAY VERIFICATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "PENDING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.types)("ngModel", ctx.selectedclasstype);
        }
      },
      directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: [".title-upload[_ngcontent-%COMP%] {\n  height: 80px;\n  margin: 104px 28px 54.5px 80px;\n  font-family: SourceSansPro;\n  font-size: 36px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n  text-align: left;\n  color: #212020;\n}\n\n.bt-logout[_ngcontent-%COMP%] {\n  margin: 104px 27px 40px 60px;\n  padding: 3px 141px 9px 47px;\n  border-radius: 10px;\n  background-color: #f2f2f2;\n}\n\n.tb[_ngcontent-%COMP%] {\n  padding: 13px 33.5px 161px 34px;\n  border-radius: 10px;\n  background-color: #f2f2f2;\n}\n\n.bt-list[_ngcontent-%COMP%] {\n  width: 133px;\n  height: 31px;\n  margin: 3px 0 24px 32px;\n  padding: 6px 30px 6px 31px;\n  border-radius: 11px;\n  background-color: #e63f0d;\n  color: #ffffff;\n}\n\n.p-t[_ngcontent-%COMP%] {\n  width: 700px;\n  margin: 26.5px 108.5px 53.5px 80.5px;\n  -webkit-text-stroke: 1px #707070;\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  \n  letter-spacing: normal;\n  \n  color: #212020;\n}\n\n.lb-p[_ngcontent-%COMP%] {\n  margin: 0px 21px 54.5px 80px;\n}\n\n.classtype[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.bt-upload[_ngcontent-%COMP%] {\n  \n  border-radius: 10px;\n  background-color: #17dd3d;\n  color: white;\n}\n\n.bt-up[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.bt-sub[_ngcontent-%COMP%] {\n  font-family: Futura;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.32;\n  letter-spacing: normal;\n  text-align: left;\n  color: #ffffff;\n  border-radius: 10px;\n  background-color: #707070;\n}\n\n.txt-end[_ngcontent-%COMP%] {\n  font-family: Futura;\n  font-size: 15px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.35;\n  letter-spacing: normal;\n  text-align: left;\n  color: #e63f0d;\n}\n\n.bt-close[_ngcontent-%COMP%] {\n  border-radius: 22px;\n  margin: 0px 0px 0px 6.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmlqYS93b3Jrc3BhY2UvbGFkYWtoL0xhZGFraCUyMFRvdXJpc20lMjBBbmd1bGFyL3NyYy9hcHAvcGFnZXMvYWNjb3VudHMvdXBsb2FkZmlsZS91cGxvYWRmaWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50cy91cGxvYWRmaWxlL3VwbG9hZGZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFBO0VBQ0ksK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0lGOztBREZBO0VBQ0ksWUFBQTtFQUVBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksNEJBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTtFQUNJOzs7Z0NBQUE7RUFJQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBO0VBQ0ksbUJBQUE7QUNRSjs7QUROQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDU0o7O0FETkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDU0o7O0FEUEE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50cy91cGxvYWRmaWxlL3VwbG9hZGZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtdXBsb2Fke1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW46IDEwNHB4IDI4cHggNTQuNXB4IDgwcHg7XG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm87XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMyMTIwMjA7XG59XG4uYnQtbG9nb3V0e1xuICAgIG1hcmdpbjogMTA0cHggMjdweCA0MHB4IDYwcHg7XG4gICAgcGFkZGluZzogM3B4IDE0MXB4IDlweCA0N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbi50YntcbiAgICBwYWRkaW5nOiAxM3B4IDMzLjVweCAxNjFweCAzNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbi5idC1saXN0e1xuICB3aWR0aDogMTMzcHg7XG4gIGhlaWdodDogMzFweDtcbiAgbWFyZ2luOiAzcHggMCAyNHB4IDMycHg7XG4gIHBhZGRpbmc6IDZweCAzMHB4IDZweCAzMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzZjBkO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wLXR7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIC8vbWFyZ2luOiA1NC41cHggMTI2LjVweCAxMTYuNXB4IDgwLjVweDtcbiAgICBtYXJnaW46IDI2LjVweCAxMDguNXB4IDUzLjVweCA4MC41cHg7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIC8qIGxpbmUtaGVpZ2h0OiAxLjI3OyAqL1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgLyogbGluZS1oZWlnaHQ6IDEuMjc7ICovXG4gICAgY29sb3I6ICMyMTIwMjA7XG59XG4ubGItcHtcbiAgICBtYXJnaW46IDBweCAyMXB4IDU0LjVweCA4MHB4O1xufVxuLmNsYXNzdHlwZXtcbiAgICB3aWR0aDogMjAwcHg7XG59XG4uYnQtdXBsb2Fke1xuICAgIC8qd2lkdGg6IDEyNXB4O1xuICAgIGhlaWdodDogNDdweDtcbiAgICBtYXJnaW46IDc5cHggNDhweCAxOHB4IDU1LjVweDtcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHggMTNweCAyNHB4OyovXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdkZDNkO1xuICAgIGNvbG9yOndoaXRlO1xufVxuLmJ0LXVwe1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYnQtc3Vie1xuICAgIGZvbnQtZmFtaWx5OiBGdXR1cmE7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4zMjtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xufVxuXG4udHh0LWVuZHtcbiAgICBmb250LWZhbWlseTogRnV0dXJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICNlNjNmMGQ7XG59XG4uYnQtY2xvc2V7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDYuNXB4O1xufSIsIi50aXRsZS11cGxvYWQge1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMTA0cHggMjhweCA1NC41cHggODBweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm87XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIxMjAyMDtcbn1cblxuLmJ0LWxvZ291dCB7XG4gIG1hcmdpbjogMTA0cHggMjdweCA0MHB4IDYwcHg7XG4gIHBhZGRpbmc6IDNweCAxNDFweCA5cHggNDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLnRiIHtcbiAgcGFkZGluZzogMTNweCAzMy41cHggMTYxcHggMzRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmJ0LWxpc3Qge1xuICB3aWR0aDogMTMzcHg7XG4gIGhlaWdodDogMzFweDtcbiAgbWFyZ2luOiAzcHggMCAyNHB4IDMycHg7XG4gIHBhZGRpbmc6IDZweCAzMHB4IDZweCAzMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzZjBkO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnAtdCB7XG4gIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAyNi41cHggMTA4LjVweCA1My41cHggODAuNXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAvKiBsaW5lLWhlaWdodDogMS4yNzsgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgLyogbGluZS1oZWlnaHQ6IDEuMjc7ICovXG4gIGNvbG9yOiAjMjEyMDIwO1xufVxuXG4ubGItcCB7XG4gIG1hcmdpbjogMHB4IDIxcHggNTQuNXB4IDgwcHg7XG59XG5cbi5jbGFzc3R5cGUge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5idC11cGxvYWQge1xuICAvKndpZHRoOiAxMjVweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW46IDc5cHggNDhweCAxOHB4IDU1LjVweDtcbiAgcGFkZGluZzogMTJweCAyNXB4IDEzcHggMjRweDsqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdkZDNkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idC11cCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idC1zdWIge1xuICBmb250LWZhbWlseTogRnV0dXJhO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG59XG5cbi50eHQtZW5kIHtcbiAgZm9udC1mYW1pbHk6IEZ1dHVyYTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNlNjNmMGQ7XG59XG5cbi5idC1jbG9zZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNi41cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-uploadfile',
          templateUrl: './uploadfile.component.html',
          styleUrls: ['./uploadfile.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/providers/form-helper.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/providers/form-helper.service.ts ***!
    \*********************************************************/

  /*! exports provided: FormHelperService */

  /***/
  function srcAppSharedProvidersFormHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormHelperService", function () {
      return FormHelperService;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Form Helper
     *
     * @export
     * @class FormHelperService
     */


    var FormHelperService =
    /*#__PURE__*/
    function () {
      function FormHelperService() {
        _classCallCheck(this, FormHelperService);
      }

      _createClass(FormHelperService, [{
        key: "isFieldValid",

        /**
         * Validate a field in formGroup
         *
         * @param {FormGroup} form FormGroup instance
         * @param {string} field Field to validate
         * @returns
         * @memberof FormHelperService
         */
        value: function isFieldValid(form, field) {
          return !form.get(field).valid && form.get(field).touched;
        }
        /**
         * Validate form for each item in formGroup
         *
         * @param {FormGroup} form FormGroup instance
         * @memberof FormHelperService
         */

      }, {
        key: "validateAllFormFields",
        value: function validateAllFormFields(form) {
          var _this = this;

          Object.keys(form.controls).forEach(function (field) {
            var control = form.get(field);

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
              control.markAsTouched({
                onlySelf: true
              });
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
              _this.validateAllFormFields(control);
            }
          });
        }
        /**
         * Validator for password match
         *
         * @private
         * @param {FormGroup} form FormGroup instance
         * @returns {*}
         * @memberof SettingProfilePasswordComponent
         */

      }, {
        key: "passwordMatchValidator",
        value: function passwordMatchValidator(form) {
          if (form) {
            if (form.get('password').value !== form.get('repeatPassword').value) {
              return {
                notMatching: true
              };
            }
          }

          return null;
        }
      }]);

      return FormHelperService;
    }();

    FormHelperService.ɵfac = function FormHelperService_Factory(t) {
      return new (t || FormHelperService)();
    };

    FormHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FormHelperService,
      factory: FormHelperService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-accounts-accounts-module-es5.js.map