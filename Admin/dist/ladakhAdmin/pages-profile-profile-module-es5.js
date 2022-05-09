function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
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


    var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/pages/profile/profile.component.ts");

    var routes = [{
      path: '',
      component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
    ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileRoutingModule_Factory(t) {
        return new (t || ProfileRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
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
  "./src/app/pages/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/models/user.model */
    "./src/app/shared/models/user.model.ts");
    /* harmony import */


    var _shared_providers_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/providers/utils.service */
    "./src/app/shared/providers/utils.service.ts");
    /* harmony import */


    var _shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/providers/toaster.service */
    "./src/app/shared/providers/toaster.service.ts");
    /* harmony import */


    var _shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/providers/form-helper.service */
    "./src/app/shared/providers/form-helper.service.ts");
    /* harmony import */


    var _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/providers/session.service */
    "./src/app/shared/providers/session.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(fb, _utils, _toasterService, _formHelperService, _sessionService, userService) {
        _classCallCheck(this, ProfileComponent);

        this.fb = fb;
        this._utils = _utils;
        this._toasterService = _toasterService;
        this._formHelperService = _formHelperService;
        this._sessionService = _sessionService;
        this.userService = userService;
        this.data = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.isLoading = false;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    try {
                      setTimeout(function () {
                        _this.form = _this.fb.group({
                          password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
                          repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }, {
                          validators: _this._formHelperService.passwordMatchValidator
                        });
                      });
                    } catch (e) {}

                  case 1:
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
            var p, user;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.form.valid) {
                      _context2.next = 4;
                      break;
                    }

                    this._toasterService.error("Veuillez vérifier le formulaire");

                    this._formHelperService.validateAllFormFields(this.form);

                    return _context2.abrupt("return");

                  case 4:
                    _context2.prev = 4;
                    p = Object.assign({}, this.form.value);
                    this.isLoading = true;
                    user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](p);
                    _context2.next = 10;
                    return this.userService.updateProfile(user).toPromise();

                  case 10:
                    this._toasterService.success('Votre mot de passe est maintenat à jour');

                    this.isLoading = false;
                    this.form.reset();
                    _context2.next = 18;
                    break;

                  case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2["catch"](4);
                    this.isLoading = false;

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[4, 15]]);
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

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_6__["FormHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_providers_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 13,
      vars: 1,
      consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "col-md-12", "back-btn-container"], [1, "title"], ["form", "form", "type", "submit", 1, "btn", "btn-fill", "btn-success", "pull-right", 3, "disabled"], [1, "card"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Votre profil");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Enregistrer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " contenu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
        }
      },
      styles: [".modal-dialog[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.btn-primary.pull-right[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmlqYS93b3Jrc3BhY2UvbGFkYWtoL0xhZGFraCUyMFRvdXJpc20lMjBBbmd1bGFyL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWRpYWxvZyB7XG4gICAgd2lkdGg6IDYwMHB4O1xufVxuLmJ0bi1wcmltYXJ5LnB1bGwtcmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSIsIi5tb2RhbC1kaWFsb2cge1xuICB3aWR0aDogNjAwcHg7XG59XG5cbi5idG4tcHJpbWFyeS5wdWxsLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-profile",
          templateUrl: "./profile.component.html",
          styleUrls: ["./profile.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_providers_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
        }, {
          type: _shared_providers_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]
        }, {
          type: _shared_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_6__["FormHelperService"]
        }, {
          type: _shared_providers_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
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


    var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfileRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfileRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfileRoutingModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]]
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
          var _this2 = this;

          Object.keys(form.controls).forEach(function (field) {
            var control = form.get(field);

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
              control.markAsTouched({
                onlySelf: true
              });
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
              _this2.validateAllFormFields(control);
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
        var _this3 = this;

        _classCallCheck(this, ToasterService);

        this.error = function (error) {
          if (!error) {
            error = 'Une erreur s\'est produite pendant le traitement';
          }

          _this3.showNotification(error, 'danger');
        };

        this.success = function (success) {
          if (!success) {
            success = 'Traitement réussi avec succès';
          }

          _this3.showNotification(success, 'success');
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

  },

  /***/
  "./src/app/shared/services/base.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/base.service.ts ***!
    \*************************************************/

  /*! exports provided: BaseService */

  /***/
  function srcAppSharedServicesBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseService", function () {
      return BaseService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * Abstract BaseSevice Class
     *
     * @export
     * @abstract
     * @class BaseService
     * @template T
     */


    var BaseService =
    /*#__PURE__*/
    function () {
      function BaseService(httpService, TCreator, pathPlural, pathSingular) {
        _classCallCheck(this, BaseService);

        this.httpService = httpService;
        this.TCreator = TCreator;
        this.pathPlural = pathPlural;
        this.pathSingular = pathSingular;
        /**
         *  Create subjet of items total count
         *
         * @type {BehaviorSubject<number>}
         * @memberof BaseService
         */

        this.totalCount = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        /**
         *  Create observable of items total count
         *
         * @memberof BaseService
         */

        this.totalCount$ = this.totalCount.asObservable();
      }
      /**
       * Get one item from API
       *
       * @param {string} id
       * @returns {Observable<T>}
       * @memberof BaseService
       */


      _createClass(BaseService, [{
        key: "load",
        value: function load(id) {
          var _this4 = this;

          return this.httpService.get("".concat(this.pathSingular, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            return new _this4.TCreator(x);
          }));
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

      }, {
        key: "list",
        value: function list() {
          var _this5 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var query = arguments.length > 2 ? arguments[2] : undefined;
          var order = arguments.length > 3 ? arguments[3] : undefined;
          var select = arguments.length > 4 ? arguments[4] : undefined;
          var isAscendant = arguments.length > 5 ? arguments[5] : undefined;
          var key = arguments.length > 6 ? arguments[6] : undefined;
          var $top = perPage.toString();
          var $query = {
            page: page,
            limit: $top
          };

          if (query) {
            $query = Object.assign(Object.assign({}, $query), query);
          }

          if (order) {
            $query["_sort"] = order;
          }

          if (select) {
            $query["$select"] = select;
          }

          return this.httpService.get("".concat(this.pathPlural), $query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            var data = x;

            if (key && key !== '') {
              data = x[key];
            }

            _this5.totalCount.next(x.total);

            return data.rows.map(function (u) {
              return new _this5.TCreator(u);
            });
          }));
        }
      }, {
        key: "count",
        value: function count() {
          var _this6 = this;

          return this.httpService.get("".concat(this.pathPlural, "/count")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            _this6.totalCount.next(x);
          }));
        }
      }, {
        key: "countFind",
        value: function countFind(arg) {
          if (!arg) {
            arg = {};
          }

          return this.httpService.get("".concat(this.pathPlural, "/count"), arg);
        }
        /**
         * Add item from API
         *
         * @param {T} item
         * @returns {Observable<T>}
         * @memberof BaseService
         */

      }, {
        key: "add",
        value: function add(item) {
          return this.httpService.post("".concat(this.pathPlural), item.prepareForSending());
        }
        /**
         * Update item from API
         *
         * @param {T} item
         * @returns {Observable<T>}
         * @memberof BaseService
         */

      }, {
        key: "update",
        value: function update(item) {
          return this.httpService.put("".concat(this.pathSingular, "/").concat(item.id), item.prepareForSending());
        }
        /**
         * Delete item from API
         *
         * @param {T} item
         * @returns {Observable<T>}
         * @memberof BaseService
         */

      }, {
        key: "delete",
        value: function _delete(item) {
          return this.httpService["delete"]("".concat(this.pathSingular, "/").concat(item.id));
        }
      }]);

      return BaseService;
    }();
    /***/

  },

  /***/
  "./src/app/shared/services/user.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/user.service.ts ***!
    \*************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/user.model */
    "./src/app/shared/models/user.model.ts");
    /* harmony import */


    var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../providers/http.service */
    "./src/app/shared/providers/http.service.ts");

    var UserService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(UserService, _base_service__WEBPAC);

      var _super = _createSuper(UserService);

      function UserService(_httpService) {
        var _this7;

        _classCallCheck(this, UserService);

        _this7 = _super.call(this, _httpService, _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"], 'users', 'user');
        _this7._httpService = _httpService;
        return _this7;
      }

      _createClass(UserService, [{
        key: "updateProfile",
        value: function updateProfile(item) {
          return this.httpService.patch("updateProfile", item.prepareForSending());
        }
      }]);

      return UserService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]);

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
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
//# sourceMappingURL=pages-profile-profile-module-es5.js.map