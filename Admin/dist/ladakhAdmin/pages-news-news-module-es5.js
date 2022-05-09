function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"], {
  /***/
  "./src/app/pages/news/add/add.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/news/add/add.component.ts ***!
    \*************************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppPagesNewsAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_models_news_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app-models/news.model */
    "./src/app/shared/models/news.model.ts");
    /* harmony import */


    var _shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/categorie.service */
    "./src/app/shared/services/categorie.service.ts");
    /* harmony import */


    var _app_services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app-services/news.service */
    "./src/app/shared/services/news.service.ts");
    /* harmony import */


    var _app_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app-providers/form-helper.service */
    "./src/app/shared/providers/form-helper.service.ts");
    /* harmony import */


    var _app_providers_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app-providers/toaster.service */
    "./src/app/shared/providers/toaster.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app-providers/utils.service */
    "./src/app/shared/providers/utils.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../components/file-uploader/file-uploader.component */
    "./src/app/components/file-uploader/file-uploader.component.ts");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");

    var _c0 = ["uploaderThumbnail"];
    var _c1 = ["uploaderBanner"];
    var _c2 = ["uploader"];

    function AddComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddComponent_div_10_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r77.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-file-uploader", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDone", function AddComponent_div_10_Template_app_file_uploader_onDone_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r79.endBanner($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-file-uploader", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDone", function AddComponent_div_10_Template_app_file_uploader_onDone_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r80.endThumbnail($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "News Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "News");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "quill-editor", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r74.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("file", ctx_r74.data == null ? null : ctx_r74.data.banner)("edition", ctx_r74.edition)("endpoint", "upload")("multiple", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("file", ctx_r74.data == null ? null : ctx_r74.data.thumbnail)("edition", ctx_r74.edition)("endpoint", "upload")("multiple", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r74.displayFieldCss(ctx_r74.form, "title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r74.displayFieldCss(ctx_r74.form, "content"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r74.isLoading);
      }
    }

    var AddComponent =
    /*#__PURE__*/
    function () {
      function AddComponent(_categorieService, _newsService, _formHelperService, _fb, _toasterService, _route, _utilsService) {
        _classCallCheck(this, AddComponent);

        this._categorieService = _categorieService;
        this._newsService = _newsService;
        this._formHelperService = _formHelperService;
        this._fb = _fb;
        this._toasterService = _toasterService;
        this._route = _route;
        this._utilsService = _utilsService;
        this.id = this._route.snapshot.params['id'];
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoading = true;
                    _context.next = 3;
                    return this.loadData();

                  case 3:
                    this.isLoading = true;
                    this.form = this._fb.group({
                      title: [this.data ? this.data.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                      content: [this.data ? this.data.content : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                    this.isLoading = false;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.id !== 'new')) {
                      _context2.next = 6;
                      break;
                    }

                    _context2.next = 3;
                    return this._newsService.load(this.id).toPromise();

                  case 3:
                    this.data = _context2.sent;
                    _context2.next = 7;
                    break;

                  case 6:
                    this.data = new _app_models_news_model__WEBPACK_IMPORTED_MODULE_3__["News"]();

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loadCategories",
        value: function loadCategories() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              var categories;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this._categorieService.list(1, 100).toPromise();

                    case 2:
                      categories = _context3.sent;
                      resolve(categories);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }, {
        key: "endBanner",
        value: function endBanner(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (event && event.document) {
                      this.data.banner = event.document;
                    }

                    _context4.next = 3;
                    return this.uploaderThumbnail.uploadFileNow();

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "endThumbnail",
        value: function endThumbnail(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this2 = this;

            var obs$;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (event && event.document) {
                      this.data.thumbnail = event.document;
                    }

                    obs$ = this.data.id ? this._newsService.update(this.data) : this._newsService.add(this.data);
                    this.isLoading = true;
                    obs$.subscribe(function (result) {
                      _this2._toasterService.success('Success');

                      _this2._utilsService.back();

                      _this2.isLoading = false;
                    }, function (err) {
                      _this2._toasterService.error(err.message);

                      _this2.isLoading = false;
                    });

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var news;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (this.form.valid) {
                      _context6.next = 4;
                      break;
                    }

                    this._toasterService.error('Please fill the form');

                    this._formHelperService.validateAllFormFields(this.form);

                    return _context6.abrupt("return");

                  case 4:
                    if (!(this.id === 'new' && this.uploaderThumbnail.uploader.queue.length === 0)) {
                      _context6.next = 8;
                      break;
                    }

                    this._toasterService.error('Thumbnail is required');

                    this._formHelperService.validateAllFormFields(this.form);

                    return _context6.abrupt("return");

                  case 8:
                    if (!(this.id === 'new' && this.uploaderBanner.uploader.queue.length === 0)) {
                      _context6.next = 12;
                      break;
                    }

                    this._toasterService.error('Banner is required');

                    this._formHelperService.validateAllFormFields(this.form);

                    return _context6.abrupt("return");

                  case 12:
                    news = new _app_models_news_model__WEBPACK_IMPORTED_MODULE_3__["News"](Object.assign(Object.assign({}, this.form.value), {
                      slug: this._utilsService.slugify(this.form.value.title)
                    }));

                    if (this.data.id) {
                      news.id = this.data.id;
                    }

                    this.data = news;
                    _context6.next = 17;
                    return this.uploaderBanner.uploadFileNow();

                  case 17:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /**
         * [Description] Set error class on form based on Form and field validation
         * @param {FormGroup} form
         * @param {string} field
         */

      }, {
        key: "displayFieldCss",
        value: function displayFieldCss(form, field) {
          return {
            'has-error': this._formHelperService.isFieldValid(form, field),
            'has-feedback': this._formHelperService.isFieldValid(form, field)
          };
        }
      }]);

      return AddComponent;
    }();

    AddComponent.ɵfac = function AddComponent_Factory(t) {
      return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_6__["FormHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]));
    };

    AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddComponent,
      selectors: [["app-add"]],
      viewQuery: function AddComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploaderThumbnail = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploaderBanner = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploader = _t.first);
        }
      },
      decls: 11,
      vars: 1,
      consts: [["id", "admin", 1, "main-content", "container", "pb-3"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "title", "font-30"], [1, "title-2"], [1, "s-title", "text-center"], ["class", "col-md-12 d-flex mt-3", 4, "ngIf"], [1, "col-md-12", "d-flex", "mt-3"], ["novalidate", "", 1, "col-sm-12", "col-md-12", "col-lg-12", "pl-0", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-md-8", "form-group", "pl-0"], ["maxWidth", "600px", "label", "Upload Slider  picture", "btnClass", "btn-warning", "folder", "article", "typeImage", "banner", 3, "file", "edition", "endpoint", "multiple", "onDone"], ["uploaderBanner", ""], [1, "col-md-4", "form-group", "pl-0"], ["typeImage", "thumbnail", "maxWidth", "250px", "label", "Upload thumbnail picture", "btnClass", "btn-warning", "folder", "article", 3, "file", "edition", "endpoint", "multiple", "onDone"], ["uploaderThumbnail", ""], [1, "form-group", 3, "ngClass"], ["type", "text", "formControlName", "title", "required", "", 1, "form-control"], ["formControlName", "content", "required", ""], ["type", "submit", 1, "btn", "btn-warning", "btn-large", "capitalize", "mt-2", 3, "disabled"]],
      template: function AddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "News/Updates");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Can be rearranged as to which articles/Categories appear first");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AddComponent_div_10_Template, 20, 12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_11__["FileUploaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], ngx_quill__WEBPACK_IMPORTED_MODULE_12__["QuillEditorComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-add',
          templateUrl: './add.component.html',
          styleUrls: ['./add.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"]
        }, {
          type: _app_services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"]
        }, {
          type: _app_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_6__["FormHelperService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _app_providers_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]
        }];
      }, {
        uploaderThumbnail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['uploaderThumbnail', {
            "static": false
          }]
        }],
        uploaderBanner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['uploaderBanner', {
            "static": false
          }]
        }],
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['uploader', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/news/detail/detail.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/news/detail/detail.component.ts ***!
    \*******************************************************/

  /*! exports provided: DetailComponent */

  /***/
  function srcAppPagesNewsDetailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
      return DetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DetailComponent =
    /*#__PURE__*/
    function () {
      function DetailComponent() {
        _classCallCheck(this, DetailComponent);
      }

      _createClass(DetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(pageNumber, pageSize) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
      }, {
        key: "goBack",
        value: function goBack() {}
      }]);

      return DetailComponent;
    }();

    DetailComponent.ɵfac = function DetailComponent_Factory(t) {
      return new (t || DetailComponent)();
    };

    DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DetailComponent,
      selectors: [["app-detail"]],
      decls: 1,
      vars: 0,
      template: function DetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\ndetail categorie");
        }
      },
      styles: ["@media print {\n  .btn.btn-flat-default[_ngcontent-%COMP%], .btn.btn-danger[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmlqYS93b3Jrc3BhY2UvbGFkYWtoL0xhZGFraCUyMFRvdXJpc20lMjBBbmd1bGFyL3NyYy9hcHAvcGFnZXMvbmV3cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXdzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNFLGFBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50IHtcbiAgICAuYnRuLmJ0bi1mbGF0LWRlZmF1bHQsLmJ0bi5idG4tZGFuZ2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9IiwiQG1lZGlhIHByaW50IHtcbiAgLmJ0bi5idG4tZmxhdC1kZWZhdWx0LCAuYnRuLmJ0bi1kYW5nZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-detail',
          templateUrl: './detail.component.html',
          styleUrls: ['./detail.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/news/list/list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/news/list/list.component.ts ***!
    \***************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppPagesNewsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
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


    var _shared_models_categorie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/models/categorie.model */
    "./src/app/shared/models/categorie.model.ts");
    /* harmony import */


    var app_core_pages_page_with_listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/core/pages/page-with-listing */
    "./src/app/core/pages/page-with-listing.ts");
    /* harmony import */


    var _app_services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app-services/news.service */
    "./src/app/shared/services/news.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app-providers/utils.service */
    "./src/app/shared/providers/utils.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    var _c0 = function _c0(a1) {
      return ["/news/add", a1];
    };

    function ListComponent_tbody_28_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "EDIT");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_tbody_28_tr_1_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);

          var d_r85 = ctx.$implicit;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r86["delete"](d_r85);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "DELETE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var d_r85 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r85.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r85.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", d_r85.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, d_r85.id));
      }
    }

    var _c1 = function _c1(a1, a2, a3) {
      return {
        id: "page",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function ListComponent_tbody_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_tbody_28_tr_1_Template, 12, 6, "tr", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r81.rows, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](4, _c1, ctx_r81.pageSize, ctx_r81.page, ctx_r81.pageLength)));
      }
    }

    function ListComponent_li_41_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_li_41_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93);

          var customPage_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

          return _r82.setCurrent(customPage_r88.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customPage_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _r82.getCurrent() === customPage_r88.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customPage_r88.label);
      }
    }

    function ListComponent_li_41_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customPage_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customPage_r88.label);
      }
    }

    function ListComponent_li_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_li_41_a_1_Template, 2, 3, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListComponent_li_41_a_2_Template, 2, 1, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customPage_r88 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r82.getCurrent() !== customPage_r88.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r82.getCurrent() === customPage_r88.value);
      }
    }

    var _c2 = function _c2() {
      return ["/news/add", "new"];
    };

    var ListComponent =
    /*#__PURE__*/
    function (_app_core_pages_page_) {
      _inherits(ListComponent, _app_core_pages_page_);

      var _super = _createSuper(ListComponent);

      function ListComponent(_newsService, _router, _utils, _route) {
        var _this3;

        _classCallCheck(this, ListComponent);

        _this3 = _super.call(this);
        _this3._newsService = _newsService;
        _this3._router = _router;
        _this3._utils = _utils;
        _this3._route = _route;
        _this3.pageSize = 10;
        _this3.searchString = '';
        _this3.rows = new _shared_models_categorie_model__WEBPACK_IMPORTED_MODULE_2__["Categorie"]();
        return _this3;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.isLoading = true;

                    this._newsService.totalCount$.subscribe(function (count) {
                      _this4.pageLength = count;
                    });

                    _context9.next = 4;
                    return this.loadData(this.page, this.pageSize);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(pageNumber, pageSize) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var queryString;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.isLoading = true;

                    if (pageNumber) {
                      this.page = pageNumber;
                    }

                    queryString = {
                      excerpt: true
                    };

                    if (this.searchString) {
                      queryString.libelle_contains = this.searchString;
                    }

                    _context10.prev = 4;
                    _context10.next = 7;
                    return this._newsService.list(pageNumber, pageSize, queryString).toPromise();

                  case 7:
                    this.rows = _context10.sent;
                    this.isLoading = false;

                    this._router.navigate([], {
                      queryParams: {
                        page: this.page || undefined,
                        q: this.searchString || undefined
                      }
                    });

                    _context10.next = 16;
                    break;

                  case 12:
                    _context10.prev = 12;
                    _context10.t0 = _context10["catch"](4);
                    this.isLoading = false;
                    console.error(_context10.t0);

                  case 16:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[4, 12]]);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    _context11.next = 3;
                    return this._utils.confirm('Are you really want to delete the news?');

                  case 3:
                    this.isLoading = true;
                    _context11.next = 6;
                    return this._newsService["delete"](item).toPromise();

                  case 6:
                    _context11.next = 8;
                    return this.loadData();

                  case 8:
                    this.isLoading = false;
                    _context11.next = 14;
                    break;

                  case 11:
                    _context11.prev = 11;
                    _context11.t0 = _context11["catch"](0);
                    this.isLoading = false;

                  case 14:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[0, 11]]);
          }));
        }
      }]);

      return ListComponent;
    }(app_core_pages_page_with_listing__WEBPACK_IMPORTED_MODULE_3__["PageWithListing"]);

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 50,
      vars: 11,
      consts: [["id", "admin", 1, "main-content", "container"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "title"], [1, "title-2"], [1, "btn", "btn-warning", "ml-4", 3, "routerLink"], [1, "col-md-12", "mt-2"], [1, "col-md-12", "d-flex", "mt-4"], [1, "col-xs-12", "col-md-10", "content", "table-responsive", "mt-4"], [1, "table", "table-hover"], [1, "text-left", "border-top-0"], [1, "text-left", "border-top-0", 2, "width", "200px"], ["class", "pt-3", 4, "ngIf"], [1, "col-lg-12", "pb-4", "mt-5", "mb-4", "footer-pager", "text-center"], [1, "col", "text-right"], ["id", "page", 3, "pageChange"], ["p", "paginationApi"], [1, "mx-auto"], [1, "pagination", "mx-auto"], [1, "page-item"], [1, "page-link", "prev", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "page-link", "next", 3, "click"], [1, "text-center"], [1, "pt-3"], [4, "ngFor", "ngForOf"], [1, "text-left"], [1, "text-left", 3, "innerHTML"], [1, "td-actions", "text-right"], [1, "btn", "btn", "btn-outline-dark", "btn-link", "btn-xs", 3, "routerLink"], [1, "btn", "btn", "btn-outline-danger", "text-danger", "btn-link", "btn-xs", 3, "click"], ["class", "page-link", 3, "active", "click", 4, "ngIf"], ["class", "page-link active", 4, "ngIf"], [1, "page-link", 3, "click"], [1, "page-link", "active"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Welcome Admin.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "List News/Updates ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "News/Updates");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "S.No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ListComponent_tbody_28_Template, 3, 8, "tbody", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "pagination-template", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ListComponent_Template_pagination_template_pageChange_31_listener($event) {
            return ctx.pageChangeEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nav", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_a_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

            return !_r82.isFirstPage() && _r82.previous();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\xAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ListComponent_li_41_Template, 3, 2, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_a_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

            return !_r82.isLastPage() && _r82.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rows && ctx.rows.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", _r82.isFirstPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r82.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", _r82.isLastPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.page, " to ", ctx.pageSize * ctx.page, " of ", ctx.pageLength, " totals");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/news/news-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/news/news-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: NewsRoutingModule */

  /***/
  function srcAppPagesNewsNewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function () {
      return NewsRoutingModule;
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


    var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/pages/news/list/list.component.ts");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/pages/news/detail/detail.component.ts");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/pages/news/add/add.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }, {
      path: 'list',
      component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    }, {
      path: 'detail/:date',
      component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
    }, {
      path: 'add/:id',
      component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    }];

    var NewsRoutingModule = function NewsRoutingModule() {
      _classCallCheck(this, NewsRoutingModule);
    };

    NewsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NewsRoutingModule
    });
    NewsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NewsRoutingModule_Factory(t) {
        return new (t || NewsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsRoutingModule, [{
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
  "./src/app/pages/news/news.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/news/news.module.ts ***!
    \*******************************************/

  /*! exports provided: NewsModule */

  /***/
  function srcAppPagesNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsModule", function () {
      return NewsModule;
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


    var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/pages/news/list/list.component.ts");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/pages/news/detail/detail.component.ts");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/locales/fr */
    "./node_modules/@angular/common/locales/fr.js");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/pages/news/add/add.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var app_components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _news_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./news-routing.module */
    "./src/app/pages/news/news-routing.module.ts");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7___default.a, 'fr-FR');

    var NewsModule = function NewsModule() {
      _classCallCheck(this, NewsModule);
    };

    NewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NewsModule
    });
    NewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NewsModule_Factory(t) {
        return new (t || NewsModule)();
      },
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
        useValue: 'fr-FR'
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_12__["NewsRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], app_components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"].forRoot({
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
            'header': 1
          }, {
            'header': 2
          }], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsModule, {
        declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_12__["NewsRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], app_components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_12__["NewsRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], app_components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"].forRoot({
            modules: {
              toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
                'header': 1
              }, {
                'header': 2
              }], [{
                'list': 'ordered'
              }, {
                'list': 'bullet'
              }]]
            }
          })],
          entryComponents: [],
          providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
            useValue: 'fr-FR'
          }],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/news.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/models/news.model.ts ***!
    \*********************************************/

  /*! exports provided: News */

  /***/
  function srcAppSharedModelsNewsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "News", function () {
      return News;
    });
    /* harmony import */


    var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./base.model */
    "./src/app/shared/models/base.model.ts");
    /* harmony import */


    var _fichier_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fichier.model */
    "./src/app/shared/models/fichier.model.ts");

    var News =
    /*#__PURE__*/
    function (_base_model__WEBPACK_) {
      _inherits(News, _base_model__WEBPACK_);

      var _super2 = _createSuper(News);

      function News(arg) {
        var _this5;

        _classCallCheck(this, News);

        _this5 = _super2.call(this, arg);

        if (arg) {
          for (var key in arg) {
            if (key === 'banner') {
              _this5.banner = new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](arg.banner);
            } else if (key === 'thumbnail') {
              _this5.thumbnail = new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](arg.thumbnail);
            } else if (Object.prototype.hasOwnProperty.call(arg, key)) {
              _this5[key] = arg[key];
            }
          }
        }

        return _this5;
      }

      return News;
    }(_base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]);
    /***/

  },

  /***/
  "./src/app/shared/services/news.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/news.service.ts ***!
    \*************************************************/

  /*! exports provided: NewsService */

  /***/
  function srcAppSharedServicesNewsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsService", function () {
      return NewsService;
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


    var _app_models_news_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app-models/news.model */
    "./src/app/shared/models/news.model.ts");
    /* harmony import */


    var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../providers/http.service */
    "./src/app/shared/providers/http.service.ts");

    var NewsService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(NewsService, _base_service__WEBPAC);

      var _super3 = _createSuper(NewsService);

      function NewsService(_httpService) {
        var _this6;

        _classCallCheck(this, NewsService);

        _this6 = _super3.call(this, _httpService, _app_models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"], 'news', 'news');
        _this6._httpService = _httpService;
        return _this6;
      }

      return NewsService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]);

    NewsService.ɵfac = function NewsService_Factory(t) {
      return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
    };

    NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NewsService,
      factory: NewsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
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
//# sourceMappingURL=pages-news-news-module-es5.js.map