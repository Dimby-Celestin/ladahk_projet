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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categorie-categorie-module"], {
  /***/
  "./src/app/pages/categorie/add/add.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/categorie/add/add.component.ts ***!
    \******************************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppPagesCategorieAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _shared_models_categorie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/models/categorie.model */
    "./src/app/shared/models/categorie.model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var app_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/components/file-uploader/file-uploader.component */
    "./src/app/components/file-uploader/file-uploader.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/categorie.service */
    "./src/app/shared/services/categorie.service.ts");
    /* harmony import */


    var _app_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app-providers/form-helper.service */
    "./src/app/shared/providers/form-helper.service.ts");
    /* harmony import */


    var _app_providers_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app-providers/toaster.service */
    "./src/app/shared/providers/toaster.service.ts");
    /* harmony import */


    var _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app-providers/utils.service */
    "./src/app/shared/providers/utils.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddComponent_div_11_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Picture");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-file-uploader", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDone", function AddComponent_div_11_Template_app_file_uploader_onDone_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r25.end($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Label ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " (Enter categorie)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r22.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("edition", ctx_r22.edition)("endpoint", "upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r22.displayFieldCss(ctx_r22.form, "name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r22.isLoading);
      }
    }

    var AddComponent =
    /*#__PURE__*/
    function () {
      function AddComponent(_categorieService, _formHelperService, _fb, _toasterService, _utils, dialogRef, data) {
        _classCallCheck(this, AddComponent);

        this._categorieService = _categorieService;
        this._formHelperService = _formHelperService;
        this._fb = _fb;
        this._toasterService = _toasterService;
        this._utils = _utils;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(AddComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoading = true;
                    this.form = this._fb.group({
                      name: [this.data ? this.data.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                    });
                    this.isLoading = false;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "end",
        value: function end(event) {
          var _this = this;

          if (this.form.valid) {
            var categorie = new _shared_models_categorie_model__WEBPACK_IMPORTED_MODULE_2__["Categorie"](Object.assign(Object.assign({}, this.form.value), {
              slug: this._utils.slugify(this.form.value.name),
              image: event.document
            }));

            if (this.data.id) {
              categorie.id = this.data.id;
            }

            if (!event.document) {
              delete categorie.image;
            }

            var obs$ = this.data.id ? this._categorieService.update(categorie) : this._categorieService.add(categorie);
            this.isLoading = true;
            obs$.subscribe(function (result) {
              _this._toasterService.success('Ajout réussie');

              _this.isLoading = false;

              _this.dialogRef.close(result);
            }, function (err) {
              _this._toasterService.error(err.message);

              _this.isLoading = false;
            });
          } else {
            this._formHelperService.validateAllFormFields(this.form);
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          if (!this.form.valid) {
            this._toasterService.error('Veuillez remplir le formulaire');

            this._formHelperService.validateAllFormFields(this.form);

            return;
          }

          this.uploader.updateHeaders('categorie', this.form.value.name);
          this.uploader.uploadFileNow();
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
      return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_6__["CategorieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_7__["FormHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
    };

    AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddComponent,
      selectors: [["app-add"]],
      viewQuery: function AddComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](app_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__["FileUploaderComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploader = _t.first);
        }
      },
      decls: 12,
      vars: 1,
      consts: [["id", "admin", 1, "main-content", "popup", "pb-3"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "title", "font-30"], [1, "col-md-4", "justify-content-end"], [1, "row", "justify-content-end", 2, "cursor", "pointer", 3, "click"], [1, "material-icons", "close"], ["class", "col-md-12 d-flex mt-3", 4, "ngIf"], [1, "col-md-12", "d-flex", "mt-3"], ["novalidate", "", 1, "col-sm-10", "col-md-10", "col-lg-8", "pl-0", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-md-9", "form-group", "pl-0"], ["maxWidth", "120px", "label", "Upload categorie picture", "btnClass", "btn-warning", "folder", "categorie", 3, "edition", "endpoint", "onDone"], [1, "form-group", 3, "ngClass"], ["type", "text", "formControlName", "name", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-warning", "btn-large", "capitalize", "mt-2", 3, "disabled"]],
      template: function AddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "News/Updates Categorie");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddComponent_Template_div_click_8_listener() {
            return ctx.dialogRef.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "em", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddComponent_div_11_Template, 15, 5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], app_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__["FileUploaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZS9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"]
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
          type: _shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_6__["CategorieService"]
        }, {
          type: _app_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_7__["FormHelperService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _app_providers_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]
        }, {
          type: _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: _shared_models_categorie_model__WEBPACK_IMPORTED_MODULE_2__["Categorie"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [app_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__["FileUploaderComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/categorie/categorie-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/categorie/categorie-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CategorieRoutingModule */

  /***/
  function srcAppPagesCategorieCategorieRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieRoutingModule", function () {
      return CategorieRoutingModule;
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
    "./src/app/pages/categorie/list/list.component.ts");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/pages/categorie/detail/detail.component.ts");

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
    }];

    var CategorieRoutingModule = function CategorieRoutingModule() {
      _classCallCheck(this, CategorieRoutingModule);
    };

    CategorieRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CategorieRoutingModule
    });
    CategorieRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CategorieRoutingModule_Factory(t) {
        return new (t || CategorieRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategorieRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategorieRoutingModule, [{
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
  "./src/app/pages/categorie/categorie.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categorie/categorie.module.ts ***!
    \*****************************************************/

  /*! exports provided: CategorieModule */

  /***/
  function srcAppPagesCategorieCategorieModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieModule", function () {
      return CategorieModule;
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
    "./src/app/pages/categorie/list/list.component.ts");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/pages/categorie/detail/detail.component.ts");
    /* harmony import */


    var _categorie_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./categorie-routing.module */
    "./src/app/pages/categorie/categorie-routing.module.ts");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/locales/fr */
    "./node_modules/@angular/common/locales/fr.js");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/pages/categorie/add/add.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var app_components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! app/components/components.module */
    "./src/app/components/components.module.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8___default.a, 'fr-FR');

    var CategorieModule = function CategorieModule() {
      _classCallCheck(this, CategorieModule);
    };

    CategorieModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CategorieModule
    });
    CategorieModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CategorieModule_Factory(t) {
        return new (t || CategorieModule)();
      },
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
        useValue: 'fr-FR'
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _categorie_routing_module__WEBPACK_IMPORTED_MODULE_7__["CategorieRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], app_components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategorieModule, {
        declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _categorie_routing_module__WEBPACK_IMPORTED_MODULE_7__["CategorieRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], app_components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategorieModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _categorie_routing_module__WEBPACK_IMPORTED_MODULE_7__["CategorieRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], app_components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"]],
          entryComponents: [_add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"]],
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
  "./src/app/pages/categorie/detail/detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/categorie/detail/detail.component.ts ***!
    \************************************************************/

  /*! exports provided: DetailComponent */

  /***/
  function srcAppPagesCategorieDetailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
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
        key: "loadData",
        value: function loadData(pageNumber, pageSize) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
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
      styles: ["@media print {\n  .btn.btn-flat-default[_ngcontent-%COMP%], .btn.btn-danger[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmlqYS93b3Jrc3BhY2UvbGFkYWtoL0xhZGFraCUyMFRvdXJpc20lMjBBbmd1bGFyL3NyYy9hcHAvcGFnZXMvY2F0ZWdvcmllL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZS9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDRSxhQUFBO0VDQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZS9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50IHtcbiAgICAuYnRuLmJ0bi1mbGF0LWRlZmF1bHQsLmJ0bi5idG4tZGFuZ2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9IiwiQG1lZGlhIHByaW50IHtcbiAgLmJ0bi5idG4tZmxhdC1kZWZhdWx0LCAuYnRuLmJ0bi1kYW5nZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"]
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
  "./src/app/pages/categorie/list/list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/categorie/list/list.component.ts ***!
    \********************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppPagesCategorieListListComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../add/add.component */
    "./src/app/pages/categorie/add/add.component.ts");
    /* harmony import */


    var app_core_pages_page_with_listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/core/pages/page-with-listing */
    "./src/app/core/pages/page-with-listing.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/services/categorie.service */
    "./src/app/shared/services/categorie.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    function ListComponent_tbody_30_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_tbody_30_tr_1_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);

          var d_r30 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r31.add(d_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "EDIT");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var d_r30 = ctx.$implicit;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r30.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r30.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r30.slug);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r29.getPathImage(d_r30.image.path), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a1, a2, a3) {
      return {
        id: "page",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function ListComponent_tbody_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_tbody_30_tr_1_Template, 12, 4, "tr", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r26.rows, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](4, _c0, ctx_r26.pageSize, ctx_r26.page, ctx_r26.pageLength)));
      }
    }

    function ListComponent_li_43_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_li_43_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);

          var customPage_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

          return _r27.setCurrent(customPage_r33.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customPage_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _r27.getCurrent() === customPage_r33.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", customPage_r33.label, "");
      }
    }

    function ListComponent_li_43_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customPage_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customPage_r33.label);
      }
    }

    function ListComponent_li_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_li_43_a_1_Template, 2, 3, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListComponent_li_43_a_2_Template, 2, 1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customPage_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r27.getCurrent() !== customPage_r33.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r27.getCurrent() === customPage_r33.value);
      }
    }

    var ListComponent =
    /*#__PURE__*/
    function (_app_core_pages_page_) {
      _inherits(ListComponent, _app_core_pages_page_);

      var _super = _createSuper(ListComponent);

      function ListComponent(_categorieService, dialog, _router, _route) {
        var _this2;

        _classCallCheck(this, ListComponent);

        _this2 = _super.call(this);
        _this2._categorieService = _categorieService;
        _this2.dialog = dialog;
        _this2._router = _router;
        _this2._route = _route;
        _this2.searchString = '';
        _this2.pageSize = 10;
        _this2.rows = new _shared_models_categorie_model__WEBPACK_IMPORTED_MODULE_2__["Categorie"]();

        _this2._route.queryParams.subscribe(function (params) {
          _this2.page = parseInt(params['page'], 10) || _this2.page;
          _this2.searchString = params['q'] || _this2.searchString;
        });

        return _this2;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isLoading = true;

                    this._categorieService.totalCount$.subscribe(function (count) {
                      _this3.pageLength = count;
                    }); //await this._categorieService.count().toPromise();


                    _context4.next = 4;
                    return this.loadData(this.page, this.pageSize);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(pageNumber, pageSize) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var queryString;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isLoading = true;

                    if (pageNumber) {
                      this.page = pageNumber;
                    }

                    queryString = {};

                    if (this.searchString) {
                      queryString.libelle_contains = this.searchString;
                    }

                    _context5.prev = 4;
                    _context5.next = 7;
                    return this._categorieService.list(pageNumber, pageSize, queryString).toPromise();

                  case 7:
                    this.rows = _context5.sent;
                    this.isLoading = false;

                    this._router.navigate([], {
                      queryParams: {
                        page: this.page || undefined,
                        q: this.searchString || undefined
                      }
                    });

                    _context5.next = 16;
                    break;

                  case 12:
                    _context5.prev = 12;
                    _context5.t0 = _context5["catch"](4);
                    this.isLoading = false;
                    console.error(_context5.t0);

                  case 16:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[4, 12]]);
          }));
        }
      }, {
        key: "add",
        value: function add(p) {
          var _this4 = this;

          var dialogRef = this.dialog.open(_add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"], {
            width: '50%',
            data: p || ''
          });
          dialogRef.afterClosed().subscribe(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadData(this.page, this.pageSize);

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }, {
        key: "getPathImage",
        value: function getPathImage(path) {
          return "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].FILE_ENDPOINT, "/").concat(path);
        }
      }]);

      return ListComponent;
    }(app_core_pages_page_with_listing__WEBPACK_IMPORTED_MODULE_4__["PageWithListing"]);

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_6__["CategorieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 52,
      vars: 9,
      consts: [["id", "admin", 1, "main-content", "container"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "title"], [1, "title-2"], [1, "btn", "btn-warning", "ml-4", 3, "click"], [1, "col-md-12", "mt-2"], [1, "col-md-12", "d-flex", "mt-4"], [1, "col-xs-12", "col-md-10", "content", "table-responsive", "mt-4"], [1, "table", "table-hover"], [1, "text-left", "border-top-0"], [1, "text-center", "border-top-0"], ["class", "pt-3", 4, "ngIf"], [1, "col-lg-12", "pb-4", "mt-5", "mb-4", "footer-pager", "text-center"], [1, "col", "text-right"], ["id", "page", 3, "pageChange"], ["p", "paginationApi"], [1, "mx-auto"], [1, "pagination", "mx-auto"], [1, "page-item"], [1, "page-link", "prev", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "page-link", "next", 3, "click"], [1, "text-center"], [1, "pt-3"], [4, "ngFor", "ngForOf"], [1, "text-left"], ["alt", "Image categorie", 1, "img-categorie", 3, "src"], [1, "td-actions", "text-right", "border-top-0"], [1, "btn", "btn", "btn-outline-dark", "btn-link", "btn-xs", 3, "click"], ["class", "page-link", 3, "active", "click", 4, "ngIf"], ["class", "page-link active", 4, "ngIf"], [1, "page-link", 3, "click"], [1, "page-link", "active"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Welcome Admin.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "List Categories ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_button_click_8_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Categories");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Slug");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ListComponent_tbody_30_Template, 3, 8, "tbody", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "pagination-template", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ListComponent_Template_pagination_template_pageChange_33_listener($event) {
            return ctx.pageChangeEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nav", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_a_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

            return !_r27.isFirstPage() && _r27.previous();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\xAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ListComponent_li_43_Template, 3, 2, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_a_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

            return !_r27.isLastPage() && _r27.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", _r27.isFirstPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r27.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", _r27.isLastPage());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx.page, " to ", ctx.pageSize * ctx.page, " of ", ctx.pageLength, " totals");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
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
          type: _shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_6__["CategorieService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
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
          var _this5 = this;

          Object.keys(form.controls).forEach(function (field) {
            var control = form.get(field);

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
              control.markAsTouched({
                onlySelf: true
              });
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
              _this5.validateAllFormFields(control);
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

  },

  /***/
  "./src/app/shared/providers/toaster.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/providers/toaster.service.ts ***!
    \*****************************************************/

  /*! exports provided: ToasterService */

  /***/
  function srcAppSharedProvidersToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
      return ToasterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToasterService =
    /*#__PURE__*/
    function () {
      function ToasterService() {
        var _this6 = this;

        _classCallCheck(this, ToasterService);

        this.error = function (error) {
          if (!error) {
            error = 'Une erreur s\'est produite pendant le traitement';
          }

          _this6.showNotification(error, 'danger');
        };

        this.success = function (success) {
          if (!success) {
            success = 'Traitement réussi avec succès';
          }

          _this6.showNotification(success, 'success');
        };
      }

      _createClass(ToasterService, [{
        key: "warning",
        value: function warning(warn) {
          this.showNotification(warn, 'warning');
        }
      }, {
        key: "info",
        value: function info(_info) {
          this.showNotification(_info, 'info');
        }
      }, {
        key: "showNotification",
        value: function showNotification(message, type, from, align) {
          if (!type) {
            type = 'info';
          }

          if (!from) {
            from = 'top';
          }

          if (!align) {
            align = 'right';
          }

          $.notify({
            icon: 'notifications',
            message: message
          }, {
            type: type,
            timer: 1500,
            z_index: 30000,
            placement: {
              from: from,
              align: align
            }
          });
        }
      }]);

      return ToasterService;
    }();

    ToasterService.ɵfac = function ToasterService_Factory(t) {
      return new (t || ToasterService)();
    };

    ToasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToasterService,
      factory: ToasterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-categorie-categorie-module-es5.js.map