function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot/forgot.component */
    "./src/app/auth/forgot/forgot.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* harmony import */


    var _register2_register2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register2/register2.component */
    "./src/app/auth/register2/register2.component.ts");

    var AuthRoutes = [{
      path: '',
      children: [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'forgot',
        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
      }, {
        path: 'register2',
        component: _register2_register2_component__WEBPACK_IMPORTED_MODULE_5__["Register2Component"]
      }]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
    AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(AuthRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(AuthRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_shared_guards_module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! app/shared/guards/module-import.guard */
    "./src/app/shared/guards/module-import.guard.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot/forgot.component */
    "./src/app/auth/forgot/forgot.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/shared/pipes/pipes.module */
    "./src/app/shared/pipes/pipes.module.ts");
    /* harmony import */


    var _register2_register2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./register2/register2.component */
    "./src/app/auth/register2/register2.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    var AuthModule = function AuthModule(parentModule) {
      _classCallCheck(this, AuthModule);

      Object(app_shared_guards_module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"])(parentModule, 'AuthModule');
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](AuthModule, 12));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"], app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__["ForgotComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _register2_register2_component__WEBPACK_IMPORTED_MODULE_9__["Register2Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"], app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__["ForgotComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _register2_register2_component__WEBPACK_IMPORTED_MODULE_9__["Register2Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"], app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]
        }]
      }], function () {
        return [{
          type: AuthModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/forgot/forgot.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/forgot/forgot.component.ts ***!
    \*************************************************/

  /*! exports provided: ForgotComponent */

  /***/
  function srcAppAuthForgotForgotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotComponent", function () {
      return ForgotComponent;
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


    var app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/providers/toaster.service */
    "./src/app/shared/providers/toaster.service.ts");
    /* harmony import */


    var _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/providers/session.service */
    "./src/app/shared/providers/session.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/shared/providers/form-helper.service */
    "./src/app/shared/providers/form-helper.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/auth", "login"];
    };

    var ForgotComponent =
    /*#__PURE__*/
    function () {
      function ForgotComponent(_toasterService, _session, _router, _fb, sanitizer, _formHelperService) {
        _classCallCheck(this, ForgotComponent);

        this._toasterService = _toasterService;
        this._session = _session;
        this._router = _router;
        this._fb = _fb;
        this.sanitizer = sanitizer;
        this._formHelperService = _formHelperService;
        this.date = new Date();
      }

      _createClass(ForgotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this._fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
          });
          this.load();
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var status;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this._session.getSessionStatus().toPromise();

                  case 3:
                    status = _context.sent;

                    if (!status) {
                      _context.next = 7;
                      break;
                    }

                    this._router.navigate(['/dashboard']);

                    return _context.abrupt("return");

                  case 7:
                    _context.next = 11;
                    break;

                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](0);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 9]]);
          }));
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          if (!this.form.valid) {
            return this._toasterService.warning('Merci d\'entrer un email valide');
          }

          this._session.forgotPassword({
            email: this.form.value.email,
            sousdomaine: this.form.value.sousdomaine
          }).subscribe(function (isSuccess) {
            if (isSuccess) {
              _this._toasterService.success('Un email a été envoyé à ' + _this.form.value.email + ', veuillez suivre les instructions pour un nouveau mot de passe.');

              _this._router.navigate(['/auth', 'login']);
            } else {
              _this._toasterService.error('Mauvais détails de connexion.');
            }
          });
        }
      }, {
        key: "loginNavigation",
        value: function loginNavigation() {
          this._router.navigate(['/auth', 'login']);
        }
      }, {
        key: "displayFieldCss",
        value: function displayFieldCss(form, field) {
          return {
            'has-error': this._formHelperService.isFieldValid(form, field),
            'has-feedback': this._formHelperService.isFieldValid(form, field)
          };
        }
      }]);

      return ForgotComponent;
    }();

    ForgotComponent.ɵfac = function ForgotComponent_Factory(t) {
      return new (t || ForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_7__["FormHelperService"]));
    };

    ForgotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgotComponent,
      selectors: [["app-forgot"]],
      decls: 25,
      vars: 9,
      consts: [[1, "d-md-flex", "h-md-100", "align-items-center"], [1, "col-md-7", "p-0", "bg-image", "h-md-100"], [1, "col-md-5", "p-0", "login-form", "h-md-100", "loginarea"], [1, "d-md-flex", "h-md-100"], [1, "signin-form", "justify-content-center", 3, "formGroup", "ngSubmit"], [1, "loginarea", "text-center"], ["href", "#"], ["src", "../../../assets/img/col-right@3x.png", "alt", "", 1, "balme-logo"], [1, "mb-4", "text-center", "login-title"], [1, "input-group", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Entrez votre e-mail", "required", "", 1, "form-control"], [1, "d-block", "mb-4", "mt-3", "pull-left"], ["routerLinkActive", "router-link-active", 1, "text-theme", "text-sm", 3, "routerLink"], [1, "text-right"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "copyright", "text-center"]],
      template: function ForgotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Mot de passe oubli\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "< Revenir");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Envoyer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.form, "email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSubmitting);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \xA9 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 5, ctx.date, "yyyy"), " - Tout droits r\xE9serv\xE9s ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ForgotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-forgot',
          templateUrl: './forgot.component.html',
          styleUrls: ['./forgot.component.scss']
        }]
      }], function () {
        return [{
          type: app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
        }, {
          type: _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_7__["FormHelperService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/providers/toaster.service */
    "./src/app/shared/providers/toaster.service.ts");
    /* harmony import */


    var _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/providers/session.service */
    "./src/app/shared/providers/session.service.ts");
    /* harmony import */


    var app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/shared/providers/form-helper.service */
    "./src/app/shared/providers/form-helper.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(_toasterService, _sessionService, _formHelperService, sanitizer, _router, _fb) {
        _classCallCheck(this, LoginComponent);

        this._toasterService = _toasterService;
        this._sessionService = _sessionService;
        this._formHelperService = _formHelperService;
        this.sanitizer = sanitizer;
        this._router = _router;
        this._fb = _fb;
        this.date = new Date();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this._fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.load();
        }
        /**
         * [Description] Load data
         */

      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var status;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this._sessionService.getSessionStatus().toPromise();

                  case 3:
                    status = _context2.sent;

                    if (!status) {
                      _context2.next = 7;
                      break;
                    }

                    this._router.navigate(['/home']);

                    return _context2.abrupt("return");

                  case 7:
                    _context2.next = 11;
                    break;

                  case 9:
                    _context2.prev = 9;
                    _context2.t0 = _context2["catch"](0);

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 9]]);
          }));
        }
        /**
         *
         *
         * @returns
         * @memberof LoginComponent
         */

      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          this.isSubmitting = true;

          if (this.form.valid) {
            this._sessionService.logout();

            this._sessionService.login(this.form.value).subscribe(function (_) {
              console.log('azaza', _);

              if (_.user.role === 'user') {
                _this2._router.navigate(['/auth', 'register2']);
              } else {
                _this2._router.navigate(['/home']);
              }

              _this2._formHelperService.validateAllFormFields(_this2.form);

              _this2.isSubmitting = false;
            }, function (err) {
              _this2._toasterService.error('Wrong credentiels');

              _this2._formHelperService.validateAllFormFields(_this2.form);

              _this2.isSubmitting = false;
            });
          } else {
            this._formHelperService.validateAllFormFields(this.form);

            this.isSubmitting = false;
          }
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

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_5__["FormHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 12,
      vars: 3,
      consts: [["id", "auth", 1, "container", "pt-5", "pb-5"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-lg-8", "offset-lg-1"], [1, "title"], [1, "col-sm-10", "col-md-10", "col-lg-8", "pl-0", "mt-5", "pt-5", 3, "formGroup", "ngSubmit"], [1, "form-group", 3, "ngClass"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Entrez votre e-mail", "required", "", 1, "form-control"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Mot de passe", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-theme", "mt-2"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.form, "email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.form, "password"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
        }, {
          type: _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }, {
          type: app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_5__["FormHelperService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/register/register.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/register/register.component.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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


    var app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/providers/toaster.service */
    "./src/app/shared/providers/toaster.service.ts");
    /* harmony import */


    var _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/providers/session.service */
    "./src/app/shared/providers/session.service.ts");
    /* harmony import */


    var app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/shared/providers/form-helper.service */
    "./src/app/shared/providers/form-helper.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["passwords", "password"];
    };

    var _c1 = function _c1() {
      return ["passwords", "confirmPassword"];
    };

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(_toasterService, _sessionService, _formHelperService, sanitizer, _router, _fb) {
        _classCallCheck(this, RegisterComponent);

        this._toasterService = _toasterService;
        this._sessionService = _sessionService;
        this._formHelperService = _formHelperService;
        this.sanitizer = sanitizer;
        this._router = _router;
        this._fb = _fb;
        this.date = new Date();
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this._fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            passwords: this._fb.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
              confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            }, {
              validator: this.passwordConfirming
            })
          });
          this.load();
        }
      }, {
        key: "passwordConfirming",
        value: function passwordConfirming(c) {
          if (c.get('password').value !== c.get('confirmPassword').value) {
            return {
              invalid: true
            };
          }
        }
        /**
         * [Description] Load data
         */

      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var status;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this._sessionService.getSessionStatus().toPromise();

                  case 3:
                    status = _context3.sent;

                    if (!status) {
                      _context3.next = 7;
                      break;
                    }

                    this._router.navigate(['/home']);

                    return _context3.abrupt("return");

                  case 7:
                    _context3.next = 11;
                    break;

                  case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3["catch"](0);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 9]]);
          }));
        }
        /**
         *
         *
         * @returns
         * @memberof RegisterComponent
         */

      }, {
        key: "submit",
        value: function submit() {
          var _this3 = this;

          this.isSubmitting = true;

          if (this.form.valid) {
            this._sessionService.logout();

            this._sessionService.register(this.form.value).subscribe(function (_) {
              _this3._router.navigate(['/auth', 'register2']);

              _this3._formHelperService.validateAllFormFields(_this3.form);

              _this3.isSubmitting = false;
            }, function (err) {
              _this3._toasterService.error('Wrong credentiels');

              _this3._formHelperService.validateAllFormFields(_this3.form);

              _this3.isSubmitting = false;
            });
          } else {
            this._formHelperService.validateAllFormFields(this.form);

            this.isSubmitting = false;
          }
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

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_5__["FormHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 21,
      vars: 8,
      consts: [["id", "auth", 1, "container", "pt-5", "pb-5"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-lg-8", "offset-lg-1"], [1, "title"], [1, "col-sm-10", "col-md-10", "col-lg-8", "pl-0", "mt-5", "pt-5", 3, "formGroup", "ngSubmit"], [1, "form-group", 3, "ngClass"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Listing Name", "required", "", 1, "form-control"], ["type", "text", "id", "phone", "formControlName", "phone", "placeholder", "Phone Number", "required", "", 1, "form-control"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["formGroupName", "passwords"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Retype password", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-theme", "mt-2"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Create an account.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Register for an account using the details below. Once approved by the admin, you can fill forms and register your property/Business.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.form, "name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.form, "phone"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.form, "email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.form, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.form, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1)));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html'
        }]
      }], function () {
        return [{
          type: app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
        }, {
          type: _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }, {
          type: app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_5__["FormHelperService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/register2/register2.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/auth/register2/register2.component.ts ***!
    \*******************************************************/

  /*! exports provided: Register2Component */

  /***/
  function srcAppAuthRegister2Register2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Register2Component", function () {
      return Register2Component;
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


    var app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/shared/providers/toaster.service */
    "./src/app/shared/providers/toaster.service.ts");
    /* harmony import */


    var _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/providers/session.service */
    "./src/app/shared/providers/session.service.ts");
    /* harmony import */


    var app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/shared/providers/form-helper.service */
    "./src/app/shared/providers/form-helper.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    var Register2Component =
    /*#__PURE__*/
    function () {
      function Register2Component(_toasterService, session, _formHelperService, sanitizer, _router, _fb) {
        _classCallCheck(this, Register2Component);

        this._toasterService = _toasterService;
        this.session = session;
        this._formHelperService = _formHelperService;
        this.sanitizer = sanitizer;
        this._router = _router;
        this._fb = _fb;
        this.date = new Date();
        this.registers = [{
          id: 1,
          name: 'HOTEL/RESORT/CAMP'
        }, {
          id: 2,
          name: 'GUEST HOUSE'
        }, {
          id: 3,
          name: 'TRAVEL AGENT'
        }, {
          id: 4,
          name: 'HOMESTAY'
        }];
      }

      _createClass(Register2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.load();
        }
        /**
         * [Description] Load data
         */

      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var status;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return this.session.getSessionStatus().toPromise();

                  case 3:
                    status = _context4.sent;

                    if (status) {
                      console.log('status', status);
                    }

                    _context4.next = 9;
                    break;

                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](0);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[0, 7]]);
          }));
        }
        /**
         *
         *
         * @returns
         * @memberof Register2Component
         */

      }, {
        key: "submit",
        value: function submit() {
          this.isSubmitting = true;

          if (this.form.valid) {
            this.session.logout(); //register here
          } else {
            this._formHelperService.validateAllFormFields(this.form);

            this.isSubmitting = false;
          }
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

      return Register2Component;
    }();

    Register2Component.ɵfac = function Register2Component_Factory(t) {
      return new (t || Register2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_4__["FormHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]));
    };

    Register2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Register2Component,
      selectors: [["app-register2"]],
      decls: 15,
      vars: 3,
      consts: [["id", "auth", 1, "container", "pt-5", "pb-5"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-lg-8", "offset-lg-1"], [1, "title"], [1, "col-sm-10", "col-md-10", "col-lg-8", "pl-0", "mt-5", "pt-5", 3, "ngSubmit"], [1, "form-group"], [1, "d-flex", "align-items-center", "text-white"], [1, "col-lg-10", "col-md-8"], ["name", "registeringfor", "placeholder", "Registering for", "bindLabel", "name", "bindValue", "id", 1, "registerng", 3, "items", "ngModel", "ngModelChange"], [1, "btn-next", "col-lg-2", "col-md-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-theme"]],
      template: function Register2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Register for an account using the details below. Once approved by the admin, you can fill forms and register your property/Business.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function Register2Component_Template_form_ngSubmit_7_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ng-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function Register2Component_Template_ng_select_ngModelChange_11_listener($event) {
            return ctx.selectedregister = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome ", ctx.session.user.name, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.registers)("ngModel", ctx.selectedregister);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIyL3JlZ2lzdGVyMi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Register2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-register2',
          templateUrl: './register2.component.html',
          styleUrls: ['./register2.component.scss']
        }]
      }], function () {
        return [{
          type: app_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]
        }, {
          type: _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }, {
          type: app_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_4__["FormHelperService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/array2string.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/pipes/array2string.pipe.ts ***!
    \***************************************************/

  /*! exports provided: ArrayToStringPipe */

  /***/
  function srcAppSharedPipesArray2stringPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayToStringPipe", function () {
      return ArrayToStringPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ArrayToStringPipe =
    /*#__PURE__*/
    function () {
      function ArrayToStringPipe() {
        _classCallCheck(this, ArrayToStringPipe);
      }

      _createClass(ArrayToStringPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value.length > 0) {
            return value.join(' - ');
          }

          return '';
        }
      }]);

      return ArrayToStringPipe;
    }();

    ArrayToStringPipe.ɵfac = function ArrayToStringPipe_Factory(t) {
      return new (t || ArrayToStringPipe)();
    };

    ArrayToStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "arrayToString",
      type: ArrayToStringPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrayToStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'arrayToString'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/capitalize.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
    \*************************************************/

  /*! exports provided: CapitalizePipe */

  /***/
  function srcAppSharedPipesCapitalizePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function () {
      return CapitalizePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CapitalizePipe =
    /*#__PURE__*/
    function () {
      function CapitalizePipe() {
        _classCallCheck(this, CapitalizePipe);
      }

      _createClass(CapitalizePipe, [{
        key: "transform",
        value: function transform(value) {
          if (value) {
            return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
          }

          return value;
        }
      }]);

      return CapitalizePipe;
    }();

    CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) {
      return new (t || CapitalizePipe)();
    };

    CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "capitalize",
      type: CapitalizePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'capitalize'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/double-zero.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/pipes/double-zero.pipe.ts ***!
    \**************************************************/

  /*! exports provided: DoubleZeroPipe */

  /***/
  function srcAppSharedPipesDoubleZeroPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoubleZeroPipe", function () {
      return DoubleZeroPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DoubleZeroPipe =
    /*#__PURE__*/
    function () {
      function DoubleZeroPipe() {
        _classCallCheck(this, DoubleZeroPipe);
      }

      _createClass(DoubleZeroPipe, [{
        key: "transform",
        value: function transform(value) {
          if (!isNaN(value) && value < 10) {
            return '0' + value;
          }

          return value;
        }
      }]);

      return DoubleZeroPipe;
    }();

    DoubleZeroPipe.ɵfac = function DoubleZeroPipe_Factory(t) {
      return new (t || DoubleZeroPipe)();
    };

    DoubleZeroPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "zero",
      type: DoubleZeroPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoubleZeroPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'zero'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/format-date.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/pipes/format-date.pipe.ts ***!
    \**************************************************/

  /*! exports provided: FormatDatePipe */

  /***/
  function srcAppSharedPipesFormatDatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatDatePipe", function () {
      return FormatDatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    var FormatDatePipe =
    /*#__PURE__*/
    function () {
      function FormatDatePipe() {
        _classCallCheck(this, FormatDatePipe);
      }

      _createClass(FormatDatePipe, [{
        key: "transform",
        value: function transform(value) {
          if (value) {
            return moment__WEBPACK_IMPORTED_MODULE_1__(value).format('DD/MM/YYYY');
          }

          return value;
        }
      }]);

      return FormatDatePipe;
    }();

    FormatDatePipe.ɵfac = function FormatDatePipe_Factory(t) {
      return new (t || FormatDatePipe)();
    };

    FormatDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatDate",
      type: FormatDatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatDate'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/pipes.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/pipes/pipes.module.ts ***!
    \**********************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppSharedPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./capitalize.pipe */
    "./src/app/shared/pipes/capitalize.pipe.ts");
    /* harmony import */


    var _array2string_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./array2string.pipe */
    "./src/app/shared/pipes/array2string.pipe.ts");
    /* harmony import */


    var _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./truncate.pipe */
    "./src/app/shared/pipes/truncate.pipe.ts");
    /* harmony import */


    var _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./format-date.pipe */
    "./src/app/shared/pipes/format-date.pipe.ts");
    /* harmony import */


    var _double_zero_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./double-zero.pipe */
    "./src/app/shared/pipes/double-zero.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizePipe"], _array2string_pipe__WEBPACK_IMPORTED_MODULE_3__["ArrayToStringPipe"], _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"], _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDatePipe"], _double_zero_pipe__WEBPACK_IMPORTED_MODULE_6__["DoubleZeroPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        exports: [_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizePipe"], _array2string_pipe__WEBPACK_IMPORTED_MODULE_3__["ArrayToStringPipe"], _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"], _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDatePipe"], _double_zero_pipe__WEBPACK_IMPORTED_MODULE_6__["DoubleZeroPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          declarations: [_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizePipe"], _array2string_pipe__WEBPACK_IMPORTED_MODULE_3__["ArrayToStringPipe"], _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"], _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDatePipe"], _double_zero_pipe__WEBPACK_IMPORTED_MODULE_6__["DoubleZeroPipe"]],
          exports: [_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizePipe"], _array2string_pipe__WEBPACK_IMPORTED_MODULE_3__["ArrayToStringPipe"], _truncate_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncatePipe"], _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDatePipe"], _double_zero_pipe__WEBPACK_IMPORTED_MODULE_6__["DoubleZeroPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/truncate.pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/pipes/truncate.pipe.ts ***!
    \***********************************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppSharedPipesTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Truncate pipe
     * @example
     * {{ item.userFirstname | truncate: '1':'.' }}
     */


    var TruncatePipe =
    /*#__PURE__*/
    function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",

        /**
         * @param {string} value Value to transform
         * @param {number} limit Value limit to transform
         * @param {string} trail Char to replace truncated value
         */
        value: function transform(value) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
          var trail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

          if (!value) {
            value = '';
          }

          if (limit < 0) {
            limit *= -1;
            return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
          } else {
            return value.length > limit ? value.substring(0, limit) + trail : value;
          }
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe.ɵfac = function TruncatePipe_Factory(t) {
      return new (t || TruncatePipe)();
    };

    TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncate",
      type: TruncatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'truncate'
        }]
      }], null, null);
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
          var _this4 = this;

          Object.keys(form.controls).forEach(function (field) {
            var control = form.get(field);

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
              control.markAsTouched({
                onlySelf: true
              });
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
              _this4.validateAllFormFields(control);
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
        var _this5 = this;

        _classCallCheck(this, ToasterService);

        this.error = function (error) {
          if (!error) {
            error = 'Une erreur s\'est produite pendant le traitement';
          }

          _this5.showNotification(error, 'danger');
        };

        this.success = function (success) {
          if (!success) {
            success = 'Traitement réussi avec succès';
          }

          _this5.showNotification(success, 'success');
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
//# sourceMappingURL=auth-auth-module-es5.js.map