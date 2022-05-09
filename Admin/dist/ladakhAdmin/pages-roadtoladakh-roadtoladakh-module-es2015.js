(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-roadtoladakh-roadtoladakh-module"],{

/***/ "./src/app/pages/roadtoladakh/add/add.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/roadtoladakh/add/add.component.ts ***!
  \*********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_models_roadtoladakh_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-models/roadtoladakh.model */ "./src/app/shared/models/roadtoladakh.model.ts");
/* harmony import */ var _shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/categorie.service */ "./src/app/shared/services/categorie.service.ts");
/* harmony import */ var _app_services_roadtoladakh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-services/roadtoladakh.service */ "./src/app/shared/services/roadtoladakh.service.ts");
/* harmony import */ var _app_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app-providers/form-helper.service */ "./src/app/shared/providers/form-helper.service.ts");
/* harmony import */ var _app_providers_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app-providers/toaster.service */ "./src/app/shared/providers/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app-providers/utils.service */ "./src/app/shared/providers/utils.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/file-uploader/file-uploader.component */ "./src/app/components/file-uploader/file-uploader.component.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");















const _c0 = ["uploaderThumbnail"];
const _c1 = ["uploaderBanner"];
const _c2 = ["uploader"];
function AddComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddComponent_div_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r116.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-file-uploader", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDone", function AddComponent_div_8_Template_app_file_uploader_onDone_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r118.endBanner($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-file-uploader", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDone", function AddComponent_div_8_Template_app_file_uploader_onDone_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r119.endThumbnail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Road to ladakh Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Road to ladakh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "quill-editor", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r113.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("file", ctx_r113.data == null ? null : ctx_r113.data.banner)("edition", ctx_r113.edition)("endpoint", "upload")("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("file", ctx_r113.data == null ? null : ctx_r113.data.thumbnail)("edition", ctx_r113.edition)("endpoint", "upload")("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r113.displayFieldCss(ctx_r113.form, "title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r113.displayFieldCss(ctx_r113.form, "content"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r113.isLoading);
} }
class AddComponent {
    constructor(_categorieService, _roadtoladakhService, _formHelperService, _fb, _toasterService, _route, _utilsService) {
        this._categorieService = _categorieService;
        this._roadtoladakhService = _roadtoladakhService;
        this._formHelperService = _formHelperService;
        this._fb = _fb;
        this._toasterService = _toasterService;
        this._route = _route;
        this._utilsService = _utilsService;
        this.id = this._route.snapshot.params['id'];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.loadData();
            this.isLoading = true;
            this.form = this._fb.group({
                title: [this.data ? this.data.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                content: [this.data ? this.data.content : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            this.isLoading = false;
        });
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.id !== 'new') {
                this.data = yield this._roadtoladakhService.load(this.id).toPromise();
            }
            else {
                this.data = new _app_models_roadtoladakh_model__WEBPACK_IMPORTED_MODULE_3__["Roadtoladakh"]();
            }
        });
    }
    loadCategories() {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const categories = yield this._categorieService.list(1, 100).toPromise();
            resolve(categories);
        }));
    }
    endBanner(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event && event.document) {
                this.data.banner = event.document;
            }
            yield this.uploaderThumbnail.uploadFileNow();
        });
    }
    endThumbnail(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event && event.document) {
                this.data.thumbnail = event.document;
            }
            const obs$ = (this.data.id) ?
                this._roadtoladakhService.update(this.data) : this._roadtoladakhService.add(this.data);
            this.isLoading = true;
            obs$.subscribe(result => {
                this._toasterService.success('Success');
                this._utilsService.back();
                this.isLoading = false;
            }, err => {
                this._toasterService.error(err.message);
                this.isLoading = false;
            });
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.form.valid) {
                this._toasterService.error('Please fill the form');
                this._formHelperService.validateAllFormFields(this.form);
                return;
            }
            if (this.id === 'new' && this.uploaderThumbnail.uploader.queue.length === 0) {
                this._toasterService.error('Thumbnail is required');
                this._formHelperService.validateAllFormFields(this.form);
                return;
            }
            if (this.id === 'new' && this.uploaderBanner.uploader.queue.length === 0) {
                this._toasterService.error('Banner is required');
                this._formHelperService.validateAllFormFields(this.form);
                return;
            }
            const roadtoladakh = new _app_models_roadtoladakh_model__WEBPACK_IMPORTED_MODULE_3__["Roadtoladakh"](Object.assign(Object.assign({}, this.form.value), { slug: this._utilsService.slugify(this.form.value.title) }));
            if (this.data.id) {
                roadtoladakh.id = this.data.id;
            }
            this.data = roadtoladakh;
            yield this.uploaderBanner.uploadFileNow();
        });
    }
    /**
     * [Description] Set error class on form based on Form and field validation
     * @param {FormGroup} form
     * @param {string} field
     */
    displayFieldCss(form, field) {
        return {
            'has-error': this._formHelperService.isFieldValid(form, field),
            'has-feedback': this._formHelperService.isFieldValid(form, field)
        };
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_roadtoladakh_service__WEBPACK_IMPORTED_MODULE_5__["RoadtoladakhService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_6__["FormHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"])); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], viewQuery: function AddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploaderThumbnail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploaderBanner = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploader = _t.first);
    } }, decls: 9, vars: 1, consts: [["id", "admin", 1, "main-content", "container", "pb-3"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "title", "font-30"], [1, "title-2"], ["class", "col-md-12 d-flex mt-3", 4, "ngIf"], [1, "col-md-12", "d-flex", "mt-3"], ["novalidate", "", 1, "col-sm-12", "col-md-12", "col-lg-12", "pl-0", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-md-8", "form-group", "pl-0"], ["maxWidth", "600px", "label", "Upload Slider  picture", "btnClass", "btn-warning", "folder", "roadtoladakh", "typeImage", "banner", 3, "file", "edition", "endpoint", "multiple", "onDone"], ["uploaderBanner", ""], [1, "col-md-4", "form-group", "pl-0"], ["typeImage", "thumbnail", "maxWidth", "250px", "label", "Upload thumbnail picture", "btnClass", "btn-warning", "folder", "roadtoladakh", 3, "file", "edition", "endpoint", "multiple", "onDone"], ["uploaderThumbnail", ""], [1, "form-group", 3, "ngClass"], ["type", "text", "formControlName", "title", "required", "", 1, "form-control"], ["formControlName", "content", "required", ""], ["type", "submit", 1, "btn", "btn-warning", "btn-large", "capitalize", "mt-2", 3, "disabled"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Road to ladakh/Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Road to ladakh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddComponent_div_8_Template, 20, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_11__["FileUploaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], ngx_quill__WEBPACK_IMPORTED_MODULE_12__["QuillEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvYWR0b2xhZGFraC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add',
                templateUrl: './add.component.html',
                styleUrls: ['./add.component.scss']
            }]
    }], function () { return [{ type: _shared_services_categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"] }, { type: _app_services_roadtoladakh_service__WEBPACK_IMPORTED_MODULE_5__["RoadtoladakhService"] }, { type: _app_providers_form_helper_service__WEBPACK_IMPORTED_MODULE_6__["FormHelperService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _app_providers_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"] }]; }, { uploaderThumbnail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['uploaderThumbnail', { static: false }]
        }], uploaderBanner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['uploaderBanner', { static: false }]
        }], uploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['uploader', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/roadtoladakh/detail/detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/roadtoladakh/detail/detail.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class DetailComponent {
    constructor() {
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    loadData(pageNumber, pageSize) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    goBack() {
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 1, vars: 0, template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\ndetail categorie");
    } }, styles: ["@media print {\n  .btn.btn-flat-default[_ngcontent-%COMP%], .btn.btn-danger[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmlqYS93b3Jrc3BhY2UvbGFkYWtoL0xhZGFraCUyMFRvdXJpc20lMjBBbmd1bGFyL3NyYy9hcHAvcGFnZXMvcm9hZHRvbGFkYWtoL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JvYWR0b2xhZGFraC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDRSxhQUFBO0VDQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvYWR0b2xhZGFraC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50IHtcbiAgICAuYnRuLmJ0bi1mbGF0LWRlZmF1bHQsLmJ0bi5idG4tZGFuZ2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9IiwiQG1lZGlhIHByaW50IHtcbiAgLmJ0bi5idG4tZmxhdC1kZWZhdWx0LCAuYnRuLmJ0bi1kYW5nZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/roadtoladakh/list/list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/roadtoladakh/list/list.component.ts ***!
  \***********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_categorie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/categorie.model */ "./src/app/shared/models/categorie.model.ts");
/* harmony import */ var app_core_pages_page_with_listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/pages/page-with-listing */ "./src/app/core/pages/page-with-listing.ts");
/* harmony import */ var _app_services_roadtoladakh_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-services/roadtoladakh.service */ "./src/app/shared/services/roadtoladakh.service.ts");
/* harmony import */ var _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app-providers/utils.service */ "./src/app/shared/providers/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");










const _c0 = function (a1) { return ["/roadtoladakh/add", a1]; };
function ListComponent_tbody_28_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_tbody_28_tr_1_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); const d_r101 = ctx.$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r102.delete(d_r101); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r101.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r101.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", d_r101.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, d_r101.id));
} }
const _c1 = function (a1, a2, a3) { return { id: "page", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
function ListComponent_tbody_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_tbody_28_tr_1_Template, 12, 6, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r97.rows, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](4, _c1, ctx_r97.pageSize, ctx_r97.page, ctx_r97.pageLength)));
} }
function ListComponent_li_41_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_li_41_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const customPage_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return _r98.setCurrent(customPage_r104.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customPage_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _r98.getCurrent() === customPage_r104.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customPage_r104.label);
} }
function ListComponent_li_41_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customPage_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customPage_r104.label);
} }
function ListComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_li_41_a_1_Template, 2, 3, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListComponent_li_41_a_2_Template, 2, 1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customPage_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r98.getCurrent() !== customPage_r104.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r98.getCurrent() === customPage_r104.value);
} }
const _c2 = function () { return ["/roadtoladakh/add", "new"]; };
class ListComponent extends app_core_pages_page_with_listing__WEBPACK_IMPORTED_MODULE_3__["PageWithListing"] {
    constructor(_roadtoladakhService, _utils, _router, _route) {
        super();
        this._roadtoladakhService = _roadtoladakhService;
        this._utils = _utils;
        this._router = _router;
        this._route = _route;
        this.pageSize = 10;
        this.searchString = '';
        this.rows = new _shared_models_categorie_model__WEBPACK_IMPORTED_MODULE_2__["Categorie"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            this._roadtoladakhService.totalCount$.subscribe(count => {
                this.pageLength = count;
            });
            yield this.loadData(this.page, this.pageSize);
        });
    }
    loadData(pageNumber, pageSize) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            if (pageNumber) {
                this.page = pageNumber;
            }
            let queryString = { excerpt: true };
            if (this.searchString) {
                queryString.libelle_contains = this.searchString;
            }
            try {
                this.rows = yield this._roadtoladakhService.list(pageNumber, pageSize, queryString).toPromise();
                this.isLoading = false;
                this._router.navigate([], {
                    queryParams: {
                        page: this.page || undefined,
                        q: this.searchString || undefined
                    }
                });
            }
            catch (e) {
                this.isLoading = false;
                console.error(e);
            }
        });
    }
    delete(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this._utils.confirm('Are you really want to delete the artice?');
                this.isLoading = true;
                yield this._roadtoladakhService.delete(item).toPromise();
                yield this.loadData();
                this.isLoading = false;
            }
            catch (e) {
                this.isLoading = false;
            }
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_roadtoladakh_service__WEBPACK_IMPORTED_MODULE_4__["RoadtoladakhService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_providers_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 11, consts: [["id", "admin", 1, "main-content", "container"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "title"], [1, "title-2"], [1, "btn", "btn-warning", "ml-4", 3, "routerLink"], [1, "col-md-12", "mt-2"], [1, "col-md-12", "d-flex", "mt-4"], [1, "col-xs-12", "col-md-10", "content", "table-responsive", "mt-4"], [1, "table", "table-hover"], [1, "text-left", "border-top-0"], ["class", "pt-3", 4, "ngIf"], [1, "col-lg-12", "pb-4", "mt-5", "mb-4", "footer-pager", "text-center"], [1, "col", "text-right"], ["id", "page", 3, "pageChange"], ["p", "paginationApi"], [1, "mx-auto"], [1, "pagination", "mx-auto"], [1, "page-item"], [1, "page-link", "prev", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "page-link", "next", 3, "click"], [1, "text-center"], [1, "pt-3"], [4, "ngFor", "ngForOf"], [1, "text-left"], [1, "text-left", 3, "innerHTML"], [1, "td-actions", "text-right"], [1, "btn", "btn", "btn-outline-dark", "btn-link", "btn-xs", 3, "routerLink"], [1, "btn", "btn", "btn-outline-danger", "text-danger", "btn-link", "btn-xs", 3, "click"], ["class", "page-link", 3, "active", "click", 4, "ngIf"], ["class", "page-link active", 4, "ngIf"], [1, "page-link", 3, "click"], [1, "page-link", "active"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Welcome Admin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "List Road to ladakh ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Road to ladakh");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ListComponent_tbody_28_Template, 3, 8, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "pagination-template", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ListComponent_Template_pagination_template_pageChange_31_listener($event) { return ctx.pageChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_a_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return !_r98.isFirstPage() && _r98.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ListComponent_li_41_Template, 3, 2, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_a_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return !_r98.isLastPage() && _r98.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rows && ctx.rows.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", _r98.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r98.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", _r98.isLastPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.page, " to ", ctx.pageSize * ctx.page, " of ", ctx.pageLength, " totals");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvYWR0b2xhZGFraC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: _app_services_roadtoladakh_service__WEBPACK_IMPORTED_MODULE_4__["RoadtoladakhService"] }, { type: _app_providers_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/roadtoladakh/roadtoladakh-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/roadtoladakh/roadtoladakh-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RoadtoladakhRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadtoladakhRoutingModule", function() { return RoadtoladakhRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/roadtoladakh/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/roadtoladakh/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/roadtoladakh/add/add.component.ts");







const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    },
    {
        path: 'detail/:date',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
    },
    {
        path: 'add/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    }
];
class RoadtoladakhRoutingModule {
}
RoadtoladakhRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoadtoladakhRoutingModule });
RoadtoladakhRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoadtoladakhRoutingModule_Factory(t) { return new (t || RoadtoladakhRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoadtoladakhRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadtoladakhRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/roadtoladakh/roadtoladakh.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/roadtoladakh/roadtoladakh.module.ts ***!
  \***********************************************************/
/*! exports provided: RoadtoladakhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadtoladakhModule", function() { return RoadtoladakhModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/roadtoladakh/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/roadtoladakh/detail/detail.component.ts");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/roadtoladakh/add/add.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _roadtoladakh_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roadtoladakh-routing.module */ "./src/app/pages/roadtoladakh/roadtoladakh-routing.module.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7___default.a, 'fr-FR');
class RoadtoladakhModule {
}
RoadtoladakhModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoadtoladakhModule });
RoadtoladakhModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoadtoladakhModule_Factory(t) { return new (t || RoadtoladakhModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'fr-FR' }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
            _roadtoladakh_routing_module__WEBPACK_IMPORTED_MODULE_12__["RoadtoladakhRoutingModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
            app_components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"].forRoot({
                modules: {
                    toolbar: [['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoadtoladakhModule, { declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
        _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
        _roadtoladakh_routing_module__WEBPACK_IMPORTED_MODULE_12__["RoadtoladakhRoutingModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
        app_components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadtoladakhModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                    _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
                    _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                    _roadtoladakh_routing_module__WEBPACK_IMPORTED_MODULE_12__["RoadtoladakhRoutingModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
                    app_components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"].forRoot({
                        modules: {
                            toolbar: [['bold', 'italic', 'underline', 'strike'],
                                ['blockquote', 'code-block'],
                                [{ 'header': 1 }, { 'header': 2 }],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }]]
                        }
                    })
                ],
                entryComponents: [],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'fr-FR' }
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/models/roadtoladakh.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/roadtoladakh.model.ts ***!
  \*****************************************************/
/*! exports provided: Roadtoladakh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roadtoladakh", function() { return Roadtoladakh; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "./src/app/shared/models/base.model.ts");
/* harmony import */ var _fichier_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fichier.model */ "./src/app/shared/models/fichier.model.ts");


class Roadtoladakh extends _base_model__WEBPACK_IMPORTED_MODULE_0__["BaseModel"] {
    constructor(arg) {
        super(arg);
        if (arg) {
            for (const key in arg) {
                if (key === 'banner') {
                    this.banner = new _fichier_model__WEBPACK_IMPORTED_MODULE_1__["Fichier"](arg.banner);
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

/***/ "./src/app/shared/services/roadtoladakh.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/roadtoladakh.service.ts ***!
  \*********************************************************/
/*! exports provided: RoadtoladakhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadtoladakhService", function() { return RoadtoladakhService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _app_models_roadtoladakh_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-models/roadtoladakh.model */ "./src/app/shared/models/roadtoladakh.model.ts");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/http.service */ "./src/app/shared/providers/http.service.ts");





class RoadtoladakhService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(_httpService) {
        super(_httpService, _app_models_roadtoladakh_model__WEBPACK_IMPORTED_MODULE_2__["Roadtoladakh"], 'roadtoladakh', 'roadtoladakh');
        this._httpService = _httpService;
    }
}
RoadtoladakhService.ɵfac = function RoadtoladakhService_Factory(t) { return new (t || RoadtoladakhService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
RoadtoladakhService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoadtoladakhService, factory: RoadtoladakhService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadtoladakhService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-roadtoladakh-roadtoladakh-module-es2015.js.map