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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: MaterialModule, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_LOCALE"],
        useValue: 'fr-FR'
      }, {
        provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MAT_CHECKBOX_CLICK_ACTION"],
        useValue: 'check'
      }],
      imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"]], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"]],
        exports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]],
          providers: [{
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_LOCALE"],
            useValue: 'fr-FR'
          }, {
            provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MAT_CHECKBOX_CLICK_ACTION"],
            useValue: 'check'
          }],
          declarations: [],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"]]
        }]
      }], null, null);
    })();

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"]
      } // use hash
      ],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], MaterialModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], MaterialModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], MaterialModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([])],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"]
          } // use hash
          ],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/alert/alert.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/alert/alert.component.ts ***!
    \*****************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppComponentsAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent() {
        _classCallCheck(this, AlertComponent);
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)();
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["app-alert"]],
      decls: 7,
      vars: 0,
      consts: [["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Holy guacamole!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You should check in on some of those fields below. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert',
          templateUrl: './alert.component.html',
          styleUrls: ['./alert.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/button/button.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/button/button.component.ts ***!
    \*******************************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppComponentsButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ButtonComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r42.spinner);
      }
    }

    function ButtonComponent_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r43.icon);
      }
    }

    function ButtonComponent_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "!loading"]);
      }
    }

    function ButtonComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.customText);
      }
    }

    var _c0 = ["*"];

    var ButtonComponent =
    /*#__PURE__*/
    function () {
      function ButtonComponent(fill, full, simple, block, outline, blocksmall, spinner) {
        _classCallCheck(this, ButtonComponent);

        this.simple = simple !== null ? 'btn-simple' : '';
        this.fill = fill !== null ? 'btn-fill' : '';
        this.full = full !== null ? 'btn-full' : '';
        this.outline = outline !== null ? 'btn-outline' : '';
        this.block = block !== null ? 'btn-wd' : '';
        this.blocksmall = blocksmall !== null ? 'btn-sd' : '';
        this.spinner = spinner !== null ? 'fa fa-spinner fa-spin' : '';
      }

      _createClass(ButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.color) {
            this.color = 'btn-' + this.color;
          }
        }
      }]);

      return ButtonComponent;
    }();

    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
      return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('fill'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('full'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('simple'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('block'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('outline'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('block-small'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('spinner'));
    };

    ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonComponent,
      selectors: [["app-button"]],
      inputs: {
        color: "color",
        icon: "icon",
        loading: "loading",
        disabled: "disabled",
        customText: "customText"
      },
      ngContentSelectors: _c0,
      decls: 6,
      vars: 14,
      consts: [["type", "button", 3, "disabled"], [3, "class", 4, "ngIf"], [1, "btn-label"], [4, "ngIf"]],
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_span_1_Template, 1, 3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonComponent_i_3_Template, 1, 3, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ButtonComponent_4_Template, 1, 0, undefined, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ButtonComponent_ng_container_5_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate7"]("btn ", ctx.color, " ", ctx.simple, " ", ctx.outline, " ", ctx.fill, " ", ctx.full, " ", ctx.block, " ", ctx.blocksmall, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading || ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner && ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-button',
          templateUrl: './button.component.html'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['fill']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['full']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['simple']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['block']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['outline']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['block-small']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['spinner']
          }]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./button/button.component */
    "./src/app/components/button/button.component.ts");
    /* harmony import */


    var _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./delete-modal/delete-modal.component */
    "./src/app/components/delete-modal/delete-modal.component.ts");
    /* harmony import */


    var _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./file-uploader/file-uploader.component */
    "./src/app/components/file-uploader/file-uploader.component.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/app/components/modal/modal.component.ts");
    /* harmony import */


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./alert/alert.component */
    "./src/app/components/alert/alert.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
        declarations: [_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteModalComponent"], _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_5__["FileUploaderComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]],
        exports: [_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteModalComponent"], _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_5__["FileUploaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]],
          declarations: [_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteModalComponent"], _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_5__["FileUploaderComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"]],
          exports: [_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteModalComponent"], _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_5__["FileUploaderComponent"]],
          entryComponents: [_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteModalComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/delete-modal/delete-modal.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/delete-modal/delete-modal.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DeleteModalComponent */

  /***/
  function srcAppComponentsDeleteModalDeleteModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteModalComponent", function () {
      return DeleteModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DeleteModalComponent_i_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("fa text-danger " + ctx_r0.iconClass);
      }
    }

    function DeleteModalComponent_img_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
      }
    }

    var DeleteModalComponent =
    /*#__PURE__*/
    function () {
      function DeleteModalComponent(dialogRef, data) {
        _classCallCheck(this, DeleteModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.iconClass = 'fa-trash';

        if (typeof this.data === 'string') {
          this.text = this.data ? this.data : 'Do you really want to delete this element?';
        } else {
          if (this.data.icon) {
            this.iconClass = this.data.icon;
          }

          this.text = this.data.text ? this.data.text : 'Do you really want to delete this element?';
        }
      }

      _createClass(DeleteModalComponent, [{
        key: "delete",
        value: function _delete() {
          this.dialogRef.close(true);
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close(false);
        }
      }]);

      return DeleteModalComponent;
    }();

    DeleteModalComponent.ɵfac = function DeleteModalComponent_Factory(t) {
      return new (t || DeleteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DeleteModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteModalComponent,
      selectors: [["app-delete-modal"]],
      decls: 21,
      vars: 3,
      consts: [[1, "main-content"], [1, "container-fluid"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "row", "justify-content-end", 2, "cursor", "pointer", 3, "click"], [1, "material-icons", 2, "color", "#4a4a4a"], [1, "text-center"], [3, "class", 4, "ngIf"], ["src", "../../../assets/img//icons/bread.png", "width", "100", 4, "ngIf"], [1, "content"], [1, "col-md", "text-center"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-fill", 3, "click"], ["src", "../../../assets/img//icons/bread.png", "width", "100"]],
      template: function DeleteModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteModalComponent_Template_div_click_5_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "em", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DeleteModalComponent_i_9_Template, 1, 2, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DeleteModalComponent_img_10_Template, 1, 0, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteModalComponent_Template_button_click_16_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "NON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteModalComponent_Template_button_click_19_listener() {
            return ctx["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "OUI");

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconClass !== "bread");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconClass === "bread");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".text-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f97a4a;\n  font-size: 50px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin: 20px 0;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmlqYS93b3Jrc3BhY2UvbGFkYWtoL0xhZGFraCUyMFRvdXJpc20lMjBBbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtbW9kYWwvZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC9kZWxldGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC9kZWxldGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIgaSB7XG4gIGNvbG9yOiAjZjk3YTRhO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbiIsIi50ZXh0LWNlbnRlciBpIHtcbiAgY29sb3I6ICNmOTdhNGE7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-delete-modal',
          templateUrl: './delete-modal.component.html',
          styleUrls: ['./delete-modal.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/file-uploader/file-uploader.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/file-uploader/file-uploader.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FileUploaderComponent */

  /***/
  function srcAppComponentsFileUploaderFileUploaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function () {
      return FileUploaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_providers_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/providers/utils.service */
    "./src/app/shared/providers/utils.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/providers/local-storage.service */
    "./src/app/shared/providers/local-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FileUploaderComponent_div_3_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.getFilePath(ctx_r6.fichier), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FileUploaderComponent_div_3_ng_container_2_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", ctx_r9.maxWidth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/placeholder", ctx_r9.typeImage && ctx_r9.typeImage !== "" ? "_" + ctx_r9.typeImage : "", ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FileUploaderComponent_div_3_ng_container_2_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", ctx_r10.maxWidth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.file.realPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FileUploaderComponent_div_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploaderComponent_div_3_ng_container_2_img_1_Template, 1, 3, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploaderComponent_div_3_ng_container_2_img_2_Template, 1, 3, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.file || !ctx_r7.file.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.file && ctx_r7.file.id);
      }
    }

    function FileUploaderComponent_div_3_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.previewFileItem(ctx_r8.uploader.queue[0]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FileUploaderComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploaderComponent_div_3_img_1_Template, 1, 1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploaderComponent_div_3_ng_container_2_Template, 3, 2, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploaderComponent_div_3_img_3_Template, 1, 1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.uploader.queue.length && ctx_r2.fichier && ctx_r2.fichier.path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.uploader.queue.length && !ctx_r2.fichier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.uploader.queue.length);
      }
    }

    function FileUploaderComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.previewFileItem(item_r12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FileUploaderComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploaderComponent_div_4_div_1_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.uploader.queue);
      }
    }

    function FileUploaderComponent_div_6_span_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploaderComponent_div_6_span_2_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          return _r16.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update picture");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.label ? ctx_r13.label : "Upload pictures");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r13.isLoading)("hidden", true)("uploader", ctx_r13.uploader);
      }
    }

    function FileUploaderComponent_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploaderComponent_div_6_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          return _r19.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update picture");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 24, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.label ? ctx_r14.label : "Upload pictures");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.isLoading)("hidden", true)("uploader", ctx_r14.uploader);
      }
    }

    function FileUploaderComponent_div_6_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Supprimer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FileUploaderComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploaderComponent_div_6_span_2_Template, 7, 4, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploaderComponent_div_6_div_3_Template, 7, 4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUploaderComponent_div_6_a_5_Template, 3, 0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.multiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.multiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "width": a0
      };
    };

    function FileUploaderComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r5.uploader.progress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.uploader.progress ? ctx_r5.uploader.progress : 0, " % ");
      }
    }

    var FileUploaderComponent =
    /*#__PURE__*/
    function () {
      function FileUploaderComponent(utils, sanitizer, _localStorageService) {
        _classCallCheck(this, FileUploaderComponent);

        this.utils = utils;
        this.sanitizer = sanitizer;
        this._localStorageService = _localStorageService;
        this.folder = 'article';
        this.maxWidth = '200px';
        this.typeImage = '';
        this.multiple = false;
        this.onDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._result = [];
        this.isLoading = false;
      }

      _createClass(FileUploaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uploader = this.loadFileUploader(this.endpoint, {});
        }
        /**
         * load uploader
         */

      }, {
        key: "loadFileUploader",
        value: function loadFileUploader(endpoint, options) {
          var _this = this;

          var additionalParameter = {};

          for (var key in options) {
            if (options[key]) {
              additionalParameter[key] = options[key];
            }
          }

          var uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + endpoint,
            headers: [{
              name: 'generateThumb',
              value: 'true'
            }, {
              name: 'path',
              value: this.folder
            }, {
              name: 'name',
              value: this.typeImage + (this.objectId ? this.objectId : Date.now())
            }],
            //itemAlias: "uploadedFile",
            isHTML5: true
          });
          uploader.setOptions({
            isHTML5: true,
            additionalParameter: additionalParameter
          });

          uploader.onBeforeUploadItem = function (item) {
            _this.isLoading = true;
            item.withCredentials = false;
          };

          uploader.onErrorItem = function (item, response, status, headers) {// console.log(item, status, headers);
          };

          uploader.onAfterAddingFile = function (fileItem) {
            // Remove first element every time a new file is adding to limit to 1 element in queue
            uploader.setOptions({
              additionalParameter: {
                name: _this.typeImage + (_this.objectId ? _this.objectId : Date.now())
              }
            });

            if (uploader.queue.length > 1 && !_this.multiple) {
              uploader.queue.shift();
            }
          };

          uploader.onCompleteItem = function (item, response, status, headers) {
            try {
              var jsonResponse = JSON.parse(response); // empty the queue

              if (!_this.multiple) {
                uploader.clearQueue();
              } else {
                _this._result.push(jsonResponse.document);

                uploader.removeFromQueue(item);
              }

              _this.endUploaded(jsonResponse);
            } catch (e) {
              console.log(e);
            }
          };

          return uploader;
        }
        /**
         *  should be fire when upload are done
         */

      }, {
        key: "endUploaded",
        value: function endUploaded(resp) {
          if (this.uploader.queue.length === 0) {
            // todo
            this.isLoading = false;

            if (this.multiple === true) {
              this.onDone.emit(this._result);
            } else {
              this.onDone.emit(resp);
            }
          }
        }
      }, {
        key: "uploadFileNow",
        value: function uploadFileNow() {
          if (this.uploader.getNotUploadedItems().length > 0) {
            this.uploader.uploadAll();
          } else {
            this.endUploaded(true);
          }
        }
      }, {
        key: "getFilePath",
        value: function getFilePath(file) {
          return this.utils.getfile(file.path, this.folder);
        }
      }, {
        key: "previewFileItem",
        value: function previewFileItem(fileItem) {
          return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileItem._file));
        }
      }, {
        key: "updateHeaders",
        value: function updateHeaders(path, name) {
          this.uploader.setOptions({
            headers: [{
              name: 'generateThumb',
              value: 'true'
            }, {
              name: 'path',
              value: path
            }, {
              name: 'name',
              value: name
            }]
          });
        }
      }]);

      return FileUploaderComponent;
    }();

    FileUploaderComponent.ɵfac = function FileUploaderComponent_Factory(t) {
      return new (t || FileUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_providers_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]));
    };

    FileUploaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileUploaderComponent,
      selectors: [["app-file-uploader"]],
      inputs: {
        label: "label",
        folder: "folder",
        endpoint: "endpoint",
        fichier: "fichier",
        edition: "edition",
        maxWidth: "maxWidth",
        typeImage: "typeImage",
        multiple: "multiple",
        objectId: "objectId",
        file: "file"
      },
      outputs: {
        onDone: "onDone"
      },
      decls: 8,
      vars: 4,
      consts: [["data-provides", "fileinput", 1, "fileinput", "fileinput-new", "text-center"], [1, "col-md-12"], ["class", "fileinput-new thumbnail", 4, "ngIf"], ["class", "d-flex", 4, "ngIf"], [1, "fileinput-preview", "fileinput-exists", "thumbnail"], ["class", "col-md-12 pl-0", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "fileinput-new", "thumbnail"], ["alt", "...", 3, "src", 4, "ngIf"], [4, "ngIf"], ["alt", "...", 3, "src"], ["alt", "...", 3, "max-width", "src", 4, "ngIf"], [1, "d-flex"], ["class", "m-2 image-container", 4, "ngFor", "ngForOf"], [1, "m-2", "image-container"], ["alt", "...", 1, "mg-fluid", "img-thumbnail", 2, "width", "150px", 3, "src"], [1, "col-md-12", "pl-0"], ["class", "btn btn-fill btn-warning btn-file", 3, "click", 4, "ngIf"], ["href", "javascript:void()", "class", "btn btn-danger btn-fill fileinput-exists", "data-dismiss", "fileinput", 4, "ngIf"], [1, "btn", "btn-fill", "btn-warning", "btn-file", 3, "click"], [1, "fileinput-new"], [1, "fileinput-exists"], ["type", "file", "multiple", "", "accept", ".png, .jpg, .jpeg, .gif", "ng2FileSelect", "", 3, "disabled", "hidden", "uploader"], ["uploadInput", ""], ["type", "file", "accept", ".png, .jpg, .jpeg, .gif", "ng2FileSelect", "", 3, "disabled", "hidden", "uploader"], ["href", "javascript:void()", "data-dismiss", "fileinput", 1, "btn", "btn-danger", "btn-fill", "fileinput-exists"], [1, "fa", "fa-times"], [1, "progress", 2, "height", "10px"], ["role", "progressbar", 1, "progress-bar", "bg-info", "progress-bar-striped", 3, "ngStyle"]],
      template: function FileUploaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploaderComponent_div_3_Template, 4, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileUploaderComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FileUploaderComponent_div_6_Template, 6, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FileUploaderComponent_div_7_Template, 4, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.uploader.queue && ctx.uploader.queue.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploader.queue.length && ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-file-uploader",
          templateUrl: "./file-uploader.component.html",
          styleUrls: ["./file-uploader.component.scss"]
        }]
      }], function () {
        return [{
          type: _shared_providers_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _shared_providers_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
        }];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        folder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        endpoint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fichier: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        edition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        typeImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        objectId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        file: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/modal/modal.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/modal/modal.component.ts ***!
    \*****************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent() {
        _classCallCheck(this, ModalComponent);
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)();
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal"]],
      decls: 2,
      vars: 0,
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " modal works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal',
          templateUrl: './modal.component.html',
          styleUrls: ['./modal.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/core-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: CoreRoutingModule */

  /***/
  function srcAppCoreCoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function () {
      return CoreRoutingModule;
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


    var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layouts/admin/admin-layout.component */
    "./src/app/core/layouts/admin/admin-layout.component.ts");
    /* harmony import */


    var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layouts/auth/auth-layout.component */
    "./src/app/core/layouts/auth/auth-layout.component.ts");
    /* harmony import */


    var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: '/auth/login',
      pathMatch: 'full'
    }, {
      path: '',
      component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__["AdminLayoutComponent"],
      children: [{
        path: 'categorie',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-categorie-categorie-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("default~pages-article-article-module~pages-categorie-categorie-module~pages-must-to-do-must-to-do-mo~43c08634"), __webpack_require__.e("common"), __webpack_require__.e("pages-categorie-categorie-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/categorie/categorie.module */
          "./src/app/pages/categorie/categorie.module.ts")).then(function (m) {
            return m.CategorieModule;
          });
        }
      }, {
        path: 'article',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-article-article-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("default~pages-article-article-module~pages-categorie-categorie-module~pages-must-to-do-must-to-do-mo~43c08634"), __webpack_require__.e("default~pages-article-article-module~pages-news-news-module~pages-roadtoladakh-roadtoladakh-module~p~fcd1acc9"), __webpack_require__.e("common"), __webpack_require__.e("pages-article-article-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/article/article.module */
          "./src/app/pages/article/article.module.ts")).then(function (m) {
            return m.ArticleModule;
          });
        }
      }, {
        path: 'news',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-news-news-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("default~pages-article-article-module~pages-categorie-categorie-module~pages-must-to-do-must-to-do-mo~43c08634"), __webpack_require__.e("default~pages-article-article-module~pages-news-news-module~pages-roadtoladakh-roadtoladakh-module~p~fcd1acc9"), __webpack_require__.e("common"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/news/news.module */
          "./src/app/pages/news/news.module.ts")).then(function (m) {
            return m.NewsModule;
          });
        }
      }, {
        path: 'roadtoladakh',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-roadtoladakh-roadtoladakh-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("default~pages-article-article-module~pages-categorie-categorie-module~pages-must-to-do-must-to-do-mo~43c08634"), __webpack_require__.e("default~pages-article-article-module~pages-news-news-module~pages-roadtoladakh-roadtoladakh-module~p~fcd1acc9"), __webpack_require__.e("common"), __webpack_require__.e("pages-roadtoladakh-roadtoladakh-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/roadtoladakh/roadtoladakh.module */
          "./src/app/pages/roadtoladakh/roadtoladakh.module.ts")).then(function (m) {
            return m.RoadtoladakhModule;
          });
        }
      }, {
        path: 'profile',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-profile-profile-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfileModule;
          });
        }
      }, {
        path: 'home',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: 'accounts',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-accounts-accounts-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("pages-accounts-accounts-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/accounts/accounts.module */
          "./src/app/pages/accounts/accounts.module.ts")).then(function (m) {
            return m.AccountsModule;
          });
        }
      }, {
        path: 'post',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-post-post-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("pages-post-post-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/post/post.module */
          "./src/app/pages/post/post.module.ts")).then(function (m) {
            return m.PostModule;
          });
        }
      }, {
        path: 'must-to-do',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-must-to-do-must-to-do-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("default~pages-article-article-module~pages-categorie-categorie-module~pages-must-to-do-must-to-do-mo~43c08634"), __webpack_require__.e("common"), __webpack_require__.e("pages-must-to-do-must-to-do-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/must-to-do/must-to-do.module */
          "./src/app/pages/must-to-do/must-to-do.module.ts")).then(function (m) {
            return m.MustToDoModule;
          });
        }
      }, {
        path: 'slider',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-slider-slider-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("default~pages-accounts-accounts-module~pages-article-article-module~pages-categorie-categorie-module~1e5e5aa7"), __webpack_require__.e("default~pages-article-article-module~pages-categorie-categorie-module~pages-must-to-do-must-to-do-mo~43c08634"), __webpack_require__.e("default~pages-article-article-module~pages-news-news-module~pages-roadtoladakh-roadtoladakh-module~p~fcd1acc9"), __webpack_require__.e("pages-slider-slider-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/slider/slider.module */
          "./src/app/pages/slider/slider.module.ts")).then(function (m) {
            return m.SliderModule;
          });
        }
      }]
    }, {
      path: '',
      component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
      children: [{
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | auth-auth-module */
          [__webpack_require__.e("default~auth-auth-module~pages-accounts-accounts-module~pages-article-article-module~pages-categorie~d2ee4f3e"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null,
          /*! ../auth/auth.module */
          "./src/app/auth/auth.module.ts")).then(function (m) {
            return m.AuthModule;
          });
        }
      }]
    }, {
      path: '**',
      redirectTo: '/categorie'
    }];

    var CoreRoutingModule = function CoreRoutingModule() {
      _classCallCheck(this, CoreRoutingModule);
    };

    CoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreRoutingModule
    });
    CoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreRoutingModule_Factory(t) {
        return new (t || CoreRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreRoutingModule, [{
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
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_guards_module_import_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/guards/module-import.guard */
    "./src/app/shared/guards/module-import.guard.ts");
    /* harmony import */


    var _shared_providers_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/providers/auth.interceptor */
    "./src/app/shared/providers/auth.interceptor.ts");
    /* harmony import */


    var _core_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core-routing.module */
    "./src/app/core/core-routing.module.ts");
    /* harmony import */


    var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/admin/admin-layout.component */
    "./src/app/core/layouts/admin/admin-layout.component.ts");
    /* harmony import */


    var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/auth/auth-layout.component */
    "./src/app/core/layouts/auth/auth-layout.component.ts");
    /* harmony import */


    var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./navbar/navbar.module */
    "./src/app/core/navbar/navbar.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var CoreModule = function CoreModule(parentModule) {
      _classCallCheck(this, CoreModule);

      Object(_shared_guards_module_import_guard__WEBPACK_IMPORTED_MODULE_3__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](CoreModule, 12));
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _shared_providers_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["BasicAuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoreRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"], _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoreRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"], _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoreRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _shared_providers_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["BasicAuthInterceptor"],
            multi: true
          }]
        }]
      }], function () {
        return [{
          type: CoreModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/layouts/admin/admin-layout.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/layouts/admin/admin-layout.component.ts ***!
    \**************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppCoreLayoutsAdminAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../navbar/navbar.component */
    "./src/app/core/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminLayoutComponent = function AdminLayoutComponent() {
      _classCallCheck(this, AdminLayoutComponent);
    };

    AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
      return new (t || AdminLayoutComponent)();
    };

    AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-layout"]],
      decls: 4,
      vars: 0,
      consts: [[1, "wrapper"], [1, "main-panel"]],
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar-cmp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './admin-layout.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/layouts/auth/auth-layout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/layouts/auth/auth-layout.component.ts ***!
    \************************************************************/

  /*! exports provided: AuthLayoutComponent */

  /***/
  function srcAppCoreLayoutsAuthAuthLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
      return AuthLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthLayoutComponent =
    /*#__PURE__*/
    function () {
      function AuthLayoutComponent() {
        _classCallCheck(this, AuthLayoutComponent);
      }

      _createClass(AuthLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthLayoutComponent;
    }();

    AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
      return new (t || AuthLayoutComponent)();
    };

    AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthLayoutComponent,
      selectors: [["app-layout"]],
      decls: 1,
      vars: 0,
      template: function AuthLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './auth-layout.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/navbar/navbar.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/navbar/navbar.component.ts ***!
    \*************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppCoreNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
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


    var _app_providers_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app-providers/session.service */
    "./src/app/shared/providers/session.service.ts");
    /* harmony import */


    var _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app-providers/utils.service */
    "./src/app/shared/providers/utils.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = function _c0() {
      return ["/post"];
    };

    var misc = {
      navbar_menu_visible: 0,
      active_collapse: true,
      disabled_collapse_init: 0
    };

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(session, utils, _router) {
        _classCallCheck(this, NavbarComponent);

        this.session = session;
        this.utils = utils;
        this._router = _router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.utils.confirm('Do you really want to logout?');

                  case 2:
                    resp = _context.sent;
                    console.log(resp);

                    if (resp) {
                      this.session.logout();

                      this._router.navigate(['.auth', 'login']);
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "sidebarToggle",
        value: function sidebarToggle() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar-cmp"]],
      decls: 18,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "navbar-absolute"], ["navbar", ""], [1, "navbar-wrapper"], ["mat-button", "", "type", "button", 1, "navbar-toggler", "btn-no-ripple"], [1, "sr-only"], [1, "navbar-toggler-icon", "icon-bar"], [1, "navbar-nav", "flex-row", "ml-md-auto", "d-none", "d-md-flex"], [1, "nav-item"], [1, "nav-link", "d-flex", "flex-row", "power-icon", 3, "routerLink"], [1, "material-icons"], ["href", "javascript:void(0)", 1, "nav-link", "d-flex", "flex-row", "power-icon", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Toggle navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \xA0Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "power_settings_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \xA0", ctx.session == null ? null : ctx.session.user == null ? null : ctx.session.user.name, " ");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-navbar-cmp',
          templateUrl: 'navbar.component.html'
        }]
      }], function () {
        return [{
          type: _app_providers_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }, {
          type: _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/navbar/navbar.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/navbar/navbar.module.ts ***!
    \**********************************************/

  /*! exports provided: NavbarModule */

  /***/
  function srcAppCoreNavbarNavbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
      return NavbarModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar.component */
    "./src/app/core/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NavbarModule = function NavbarModule() {
      _classCallCheck(this, NavbarModule);
    };

    NavbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NavbarModule
    });
    NavbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NavbarModule_Factory(t) {
        return new (t || NavbarModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavbarModule, {
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
          declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
          exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guards/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/guards/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _providers_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../providers/session.service */
    "./src/app/shared/providers/session.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(_sessionService, _router) {
        _classCallCheck(this, AuthGuard);

        this._sessionService = _sessionService;
        this._router = _router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this2 = this;

          return this._sessionService.getSessionStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) {
            return !x && _this2._router.navigate(['/auth', 'login']);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _providers_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guards/module-import.guard.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/guards/module-import.guard.ts ***!
    \******************************************************/

  /*! exports provided: throwIfAlreadyLoaded */

  /***/
  function srcAppSharedGuardsModuleImportGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () {
      return throwIfAlreadyLoaded;
    });

    function throwIfAlreadyLoaded(parentModule, moduleName) {
      if (parentModule) {
        throw new Error("".concat(moduleName, " has already been loaded. Import Core modules in the AppModule only."));
      }
    }
    /***/

  },

  /***/
  "./src/app/shared/models/base.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/models/base.model.ts ***!
    \*********************************************/

  /*! exports provided: BaseModel */

  /***/
  function srcAppSharedModelsBaseModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseModel", function () {
      return BaseModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var json_ignore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! json-ignore */
    "./node_modules/json-ignore/index.js");
    /* harmony import */


    var json_ignore__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(json_ignore__WEBPACK_IMPORTED_MODULE_1__);

    var BaseModel =
    /*#__PURE__*/
    function () {
      function BaseModel(arg) {
        _classCallCheck(this, BaseModel);

        if (arg) {
          for (var key in arg) {
            if (Object.prototype.hasOwnProperty.call(arg, key)) {
              this[key] = arg[key];
            }
          }
        }
      }

      _createClass(BaseModel, [{
        key: "prepareForSending",

        /**
         * Generate a version ready for create or update in DB
         */
        value: function prepareForSending() {
          var copy = {};

          try {
            var data = JSON.parse(JSON.stringify(this, json_ignore__WEBPACK_IMPORTED_MODULE_1__["jsonIgnoreReplacer"]));

            for (var key in data) {
              if (Object.prototype.hasOwnProperty.call(data, key)) {
                if (data[key] === null) {// copy[key] = 'null';
                } else {
                  copy[key] = data[key];
                }
              }
            }
          } catch (e) {}

          return copy;
        }
      }, {
        key: "hasID",
        value: function hasID() {
          return this.id !== "" && this.id !== null;
        }
      }, {
        key: "clone",
        value: function clone() {
          var cloneObj = new this.constructor();
          var keys = Object.keys(this);

          for (var i in keys) {
            if (i) {
              var property = keys[i];

              if (typeof this[property] === "object" && this[property] && typeof this[property] !== "function" && !(this[property] instanceof Array) && typeof this[property].clone === "function") {
                cloneObj[property] = this[property].clone();
              } else {
                cloneObj[property] = this[property];
              }
            }
          }

          return cloneObj;
        }
      }], [{
        key: "initModel",
        value: function initModel(data, model) {
          if (data && model) {
            if (Array.isArray(data)) {
              return data.map(function (i) {
                return new model(i);
              });
            } else if (typeof data === "object") {
              return new model(data);
            }
          }

          return data;
        }
      }]);

      return BaseModel;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(json_ignore__WEBPACK_IMPORTED_MODULE_1__["jsonIgnore"])()], BaseModel.prototype, "createdAt", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(json_ignore__WEBPACK_IMPORTED_MODULE_1__["jsonIgnore"])()], BaseModel.prototype, "updatedAt", void 0);
    /***/
  },

  /***/
  "./src/app/shared/models/user.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/models/user.model.ts ***!
    \*********************************************/

  /*! exports provided: User */

  /***/
  function srcAppSharedModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var json_ignore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! json-ignore */
    "./node_modules/json-ignore/index.js");
    /* harmony import */


    var json_ignore__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(json_ignore__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _base_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./base.model */
    "./src/app/shared/models/base.model.ts");

    var User =
    /*#__PURE__*/
    function (_base_model__WEBPACK_) {
      _inherits(User, _base_model__WEBPACK_);

      var _super = _createSuper(User);

      function User(arg) {
        _classCallCheck(this, User);

        return _super.call(this, arg);
      }

      _createClass(User, [{
        key: "isValidEmail",
        value: function isValidEmail() {
          var regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
          return regex.test(this.email);
        }
      }, {
        key: "prepareForSending",
        value: function prepareForSending() {
          var copy = {};

          if (this.email) {
            var arr = this.email.split('@');
          }

          try {
            var data = JSON.parse(JSON.stringify(this, json_ignore__WEBPACK_IMPORTED_MODULE_1__["jsonIgnoreReplacer"]));

            for (var key in data) {
              if (Object.prototype.hasOwnProperty.call(data, key)) {
                if (data[key] === null) {} else {
                  if (key === "extra") {
                    copy[key] = this[key].prepareForSending();
                  } else {
                    copy[key] = data[key];
                  }
                }
              }
            }
          } catch (e) {}

          return copy;
        }
      }]);

      return User;
    }(_base_model__WEBPACK_IMPORTED_MODULE_2__["BaseModel"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(json_ignore__WEBPACK_IMPORTED_MODULE_1__["jsonIgnore"])()], User.prototype, "repeatPassword", void 0);
    /***/
  },

  /***/
  "./src/app/shared/providers/auth.interceptor.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/providers/auth.interceptor.ts ***!
    \******************************************************/

  /*! exports provided: BasicAuthInterceptor */

  /***/
  function srcAppSharedProvidersAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function () {
      return BasicAuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./local-storage.service */
    "./src/app/shared/providers/local-storage.service.ts");

    var getOptions = function getOptions(token) {
      return {
        Authorization: "Bearer ".concat(token)
      };
    };

    var BasicAuthInterceptor =
    /*#__PURE__*/
    function () {
      function BasicAuthInterceptor(_localStorageService) {
        _classCallCheck(this, BasicAuthInterceptor);

        this._localStorageService = _localStorageService;
      }

      _createClass(BasicAuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with bearer auth credentials if available
          var token = this._localStorageService.get('token');

          if (token) {
            request = request.clone({
              setHeaders: getOptions(token)
            });
          }

          return next.handle(request);
        }
      }]);

      return BasicAuthInterceptor;
    }();

    BasicAuthInterceptor.ɵfac = function BasicAuthInterceptor_Factory(t) {
      return new (t || BasicAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]));
    };

    BasicAuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BasicAuthInterceptor,
      factory: BasicAuthInterceptor.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicAuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/providers/http.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/providers/http.service.ts ***!
    \**************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppSharedProvidersHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(_http) {
        _classCallCheck(this, HttpService);

        this._http = _http;
      }

      _createClass(HttpService, [{
        key: "formatErrors",
        value: function formatErrors(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
        }
      }, {
        key: "get",
        value: function get(url) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var headers = arguments.length > 2 ? arguments[2] : undefined;
          var options = {
            params: params
          };

          if (headers) {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](headers);
            options.headers = headers;
          }

          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL).concat(url), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
        }
      }, {
        key: "post",
        value: function post(url) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this._http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL).concat(url), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
        }
      }, {
        key: "patch",
        value: function patch(url) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this._http.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL).concat(url), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
        }
      }, {
        key: "put",
        value: function put(url) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this._http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL).concat(url), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
        }
      }, {
        key: "delete",
        value: function _delete(url) {
          return this._http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL).concat(url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/providers/local-storage.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/providers/local-storage.service.ts ***!
    \***********************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppSharedProvidersLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");

    var LocalStorageService =
    /*#__PURE__*/
    function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);

        if (!localStorage) {
          throw new Error("Le navigateur actuel ne supporte pas le Local Storage");
        }

        this.localStorage = localStorage;
      }

      _createClass(LocalStorageService, [{
        key: "set",
        value: function set(key, value) {
          this.localStorage.setItem(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].LOCAL_STORAGE_PREFIX + "_" + key, value);
        }
      }, {
        key: "get",
        value: function get(key) {
          return this.localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].LOCAL_STORAGE_PREFIX + "_" + key) || false;
        }
      }, {
        key: "setObject",
        value: function setObject(key, value) {
          this.localStorage.setItem(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].LOCAL_STORAGE_PREFIX + "_" + key, JSON.stringify(value));
        }
      }, {
        key: "getObject",
        value: function getObject(key) {
          return JSON.parse(this.localStorage.getItem(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].LOCAL_STORAGE_PREFIX + "_" + key) || false);
        }
      }, {
        key: "remove",
        value: function remove(key) {
          this.localStorage.removeItem(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].LOCAL_STORAGE_PREFIX + "_" + key);
        }
      }, {
        key: "removeAll",
        value: function removeAll() {
          this.localStorage.clear();
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
      return new (t || LocalStorageService)();
    };

    LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocalStorageService,
      factory: LocalStorageService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/providers/session.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/providers/session.service.ts ***!
    \*****************************************************/

  /*! exports provided: SessionService */

  /***/
  function srcAppSharedProvidersSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionService", function () {
      return SessionService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/toPromise */
    "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/user.model */
    "./src/app/shared/models/user.model.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/shared/providers/http.service.ts");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./local-storage.service */
    "./src/app/shared/providers/local-storage.service.ts");

    var jwt = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();

    var SessionService =
    /*#__PURE__*/
    function () {
      function SessionService(_httpService, _localStorageService) {
        var _this3 = this;

        _classCallCheck(this, SessionService);

        this._httpService = _httpService;
        this._localStorageService = _localStorageService;
        this.checkIsInProgress = false;
        this.user = {};
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();

        this.programNextRegenerate = function () {
          if (_this3.checkIsInProgress === true) {
            return;
          }

          var token = _this3._localStorageService.get('token');

          var expirationDate = moment__WEBPACK_IMPORTED_MODULE_6__(jwt.getTokenExpirationDate(token)).subtract(10, 'minutes');
          _this3.checkIsInProgress = true;
          var delay = (expirationDate.valueOf() - moment__WEBPACK_IMPORTED_MODULE_6__().valueOf()) / 1000;

          if (delay < 10) {
            delay = 10;
          }

          setTimeout(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      try {// await this.regenerate(token);
                      } catch (e) {
                        console.log(e);
                      }

                      this.checkIsInProgress = false;
                      this.programNextRegenerate();

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, delay * 1000);
        };
      }

      _createClass(SessionService, [{
        key: "getSessionStatus",
        value: function getSessionStatus() {
          var _this4 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              var token;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      token = this._localStorageService.get('token');

                      if (token) {
                        _context3.next = 7;
                        break;
                      }

                      this.logout();
                      observer.next(false);
                      _context3.next = 10;
                      break;

                    case 7:
                      _context3.next = 9;
                      return this.initSession(token);

                    case 9:
                      observer.next(true);

                    case 10:
                      _context3.next = 15;
                      break;

                    case 12:
                      _context3.prev = 12;
                      _context3.t0 = _context3["catch"](0);
                      observer.next(false);

                    case 15:
                      observer.complete();

                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 12]]);
            }));
          });
        }
      }, {
        key: "initSession",
        value: function initSession(token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var decodedToken, user;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this._localStorageService.set('token', token);

                    _context4.prev = 1;

                    if (!jwt.isTokenExpired(token)) {
                      _context4.next = 6;
                      break;
                    }

                    _context4.next = 5;
                    return this.regenerate(token).toPromise();

                  case 5:
                    return _context4.abrupt("return");

                  case 6:
                    decodedToken = jwt.decodeToken(token); // Retrieve user data

                    if (!(!this.user || !this.user.id)) {
                      _context4.next = 12;
                      break;
                    }

                    _context4.next = 10;
                    return this._httpService.get("users/me").toPromise();

                  case 10:
                    user = _context4.sent;
                    // Set current user data into observable
                    this.setAuth(new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](user));

                  case 12:
                    this.programNextRegenerate();
                    _context4.next = 18;
                    break;

                  case 15:
                    _context4.prev = 15;
                    _context4.t0 = _context4["catch"](1);
                    console.error(_context4.t0);

                  case 18:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[1, 15]]);
          }));
        }
      }, {
        key: "login",
        value: function login(user) {
          var _this5 = this;

          return this._httpService.post('login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (sessionUser) {
            _this5.initSession(sessionUser.token);

            _this5.setAuth(new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](sessionUser.user));
          }));
        }
      }, {
        key: "register",
        value: function register(user) {
          var _this6 = this;

          return this._httpService.post('register', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (sessionUser) {
            _this6.initSession(sessionUser.token);

            _this6.setAuth(new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](sessionUser.user));
          }));
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(data) {
          return this._httpService.post('forgot', data);
        }
      }, {
        key: "logout",
        value: function logout() {
          this._localStorageService.removeAll();

          this.purgeAuth();
        }
      }, {
        key: "regenerate",
        value: function regenerate(token) {
          var _this7 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee5() {
              var datas;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return this._httpService.get('regenerate?token=' + token).toPromise();

                    case 3:
                      datas = _context5.sent;
                      _context5.next = 6;
                      return this.initSession(datas.token);

                    case 6:
                      observer.next(datas);
                      _context5.next = 12;
                      break;

                    case 9:
                      _context5.prev = 9;
                      _context5.t0 = _context5["catch"](0);
                      observer.error(_context5.t0);

                    case 12:
                      observer.complete();

                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 9]]);
            }));
          });
        }
      }, {
        key: "setAuth",
        value: function setAuth(user) {
          // Set current user
          this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](Object.assign({}, user)); // Set isAuthenticated to true

          this.isAuthenticatedSubject.next(true);
        }
      }, {
        key: "purgeAuth",
        value: function purgeAuth() {
          // Set current user to an empty object
          this.user = undefined; // Set auth status to false

          this.isAuthenticatedSubject.next(false);
        }
      }]);

      return SessionService;
    }();

    SessionService.ɵfac = function SessionService_Factory(t) {
      return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"]));
    };

    SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SessionService,
      factory: SessionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
        }, {
          type: _local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/providers/utils.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/providers/utils.service.ts ***!
    \***************************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppSharedProvidersUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var app_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/components/delete-modal/delete-modal.component */
    "./src/app/components/delete-modal/delete-modal.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var UtilsService =
    /*#__PURE__*/
    function () {
      function UtilsService(_location, _domSanitizationService, dialog) {
        _classCallCheck(this, UtilsService);

        this._location = _location;
        this._domSanitizationService = _domSanitizationService;
        this.dialog = dialog;
      }

      _createClass(UtilsService, [{
        key: "confirm",
        value: function confirm(text, icon) {
          var _this8 = this;

          if (!text) {
            text = 'Do you really want to continue?';
          }

          return new Promise(function (resolve, reject) {
            var dialogRef = _this8.dialog.open(app_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__["DeleteModalComponent"], {
              width: '450px',
              data: {
                text: text,
                icon: icon
              }
            });

            dialogRef.afterClosed().subscribe(function (result) {
              resolve(result);
            });
          });
        }
      }, {
        key: "popupSuccess",
        value: function popupSuccess(message) {
          return swal({
            title: 'Succès!',
            text: message || 'Traitement réussi.',
            type: 'success',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false
          });
        }
      }, {
        key: "back",
        value: function back() {
          return this._location.back();
        }
      }, {
        key: "slugify",
        value: function slugify(text) {
          return text.toString().toLowerCase().trim().replace(/\s+/g, '-') // Replace spaces with -
          .replace(/&/g, '-and-') // Replace & with 'and'
          .replace(/[^\w\-]+/g, '') // Remove all non-word chars
          .replace(/\-\-+/g, '-');
        }
      }, {
        key: "getfile",
        value: function getfile(path, folder) {
          return this._domSanitizationService.bypassSecurityTrustResourceUrl(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].DATA_ENDPOINT + path + (folder ? '?folder=' + folder : ''));
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ɵfac = function UtilsService_Factory(t) {
      return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilsService,
      factory: UtilsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      LOCAL_STORAGE_PREFIX: "f8e5c41c-d071-4d9f-9cf8-9fdaa9d5d2a2",
      DOMAIN_SCHEME: "https://",
      ENV: "dev",
      DOMAIN: "",
      API_URL: "http://192.168.1.4:8000/api/v1/",
      SERVER_URL: "",
      FILE_ENDPOINT: "http://192.168.1.4:8000",
      DATA_ENDPOINT: "http://192.168.1.4:8000",
      GOOGLE_MAPS_API_KEY: ""
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/narija/workspace/ladakh/Ladakh%20Tourism%20Angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map