function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _createSuper(e){return function(){var t,i=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Ftky:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return u})),i.d(t,"e",(function(){return d})),i.d(t,"f",(function(){return p}));var n=i("mrSG"),r=i("VeED"),c=i("E8I7"),a=function(){var e=function(e){_inherits(i,e);var t=_createSuper(i);function i(e){return _classCallCheck(this,i),t.call(this,e)}return _createClass(i,[{key:"isValidEmail",value:function(){return/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.email)}},{key:"prepareForSending",value:function(){var e={};this.email&&this.email.split("@");try{var t=JSON.parse(JSON.stringify(this,r.jsonIgnoreReplacer));for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(null===t[i]||(e[i]="extra"===i?this[i].prepareForSending():t[i]))}catch(n){}return e}},{key:"classNameDocs",get:function(){return this.documentStatus===b.pending?"btn-warning":this.documentStatus===b.refused?"btn-danger":"btn-success"}},{key:"classNameDisp",get:function(){return this.displayStatus===b.pending?"btn-warning":this.displayStatus===b.refused?"btn-danger":"btn-success"}}]),i}(c.a);return Object(n.c)([Object(r.jsonIgnore)()],e.prototype,"classNameDocs",null),Object(n.c)([Object(r.jsonIgnore)()],e.prototype,"classNameDisp",null),e}(),o=function(e){return e.new="new",e.registering="registering",e.waiting_form="waiting_form",e.under_review="under_review",e.waiting_payment="waiting_payment",e.ignoring_guidelines="ignoring_guidelines",e.document_missing="document_missing",e.valid="valid",e.rejected="rejected",e}({}),s=[{_id:o.new,label:"New"},{_id:o.registering,label:"Registering"},{_id:o.waiting_form,label:"Waiting Form"},{_id:o.under_review,label:"Under Review"},{_id:o.waiting_payment,label:"Waiting Payment"},{_id:o.ignoring_guidelines,label:"Ignoring Guidelines"},{_id:o.document_missing,label:"Document Missing"},{_id:o.valid,label:"Valid"},{_id:o.rejected,label:"Rejected"}],l=[{_id:o.registering,label:"Approve"},{_id:o.rejected,label:"Rejected"}],u=[{_id:o.waiting_form,label:"Approve"},{_id:o.rejected,label:"Rejected"}],d=[{_id:o.waiting_payment,label:"Waiting Payment"},{_id:o.ignoring_guidelines,label:"Ignoring Guidelines"},{_id:o.document_missing,label:"Document Missing"},{_id:o.valid,label:"Valid"},{_id:o.rejected,label:"Rejected"}],b=function(e){return e.pending="pending",e.valid="valid",e.refused="refused",e}({}),p=[b.pending,b.valid,b.refused]},hOEO:function(e,t,i){"use strict";i.r(t);var n=i("fXoL"),r=i("ofXK"),c=i("ZOsW"),a=i("oOf3"),o=i("3Pt+"),s=i("Hfs6"),l=i.n(s),u=i("0IaG"),d=i("7pIB"),b=i("j1ZV"),p=i("tyNb"),f=i("mrSG"),g=i("tLNA"),h=i("tuSX"),m=(i("t/4F"),i("FaTO"),i("fTDj")),v=i("SZGZ"),y=function(e){return["/article/add",e]};function _(e,t){if(1&e){var i=n.dc();n.cc(0,"tr"),n.cc(1,"td",37),n.Nc(2),n.bc(),n.cc(3,"td",37),n.Nc(4),n.bc(),n.Xb(5,"td",38),n.cc(6,"td",39),n.cc(7,"a",40),n.Nc(8,"EDIT"),n.bc(),n.Nc(9,"\xa0 "),n.cc(10,"a",41),n.kc("click",(function(){n.Dc(i);var e=t.$implicit;return n.oc(2).delete(e)})),n.Nc(11,"DELETE"),n.bc(),n.bc(),n.bc()}if(2&e){var r=t.$implicit;n.Jb(2),n.Oc(r.id),n.Jb(2),n.Oc(r.title),n.Jb(1),n.tc("innerHTML",r.content,n.Ec),n.Jb(2),n.tc("routerLink",n.xc(4,y,r.id))}}var k=function(e,t,i){return{id:"page",itemsPerPage:e,currentPage:t,totalItems:i}};function x(e,t){if(1&e&&(n.cc(0,"tbody",35),n.Lc(1,_,12,6,"tr",36),n.pc(2,"paginate"),n.bc()),2&e){var i=n.oc();n.Jb(1),n.tc("ngForOf",n.qc(2,1,i.rows,n.zc(4,k,i.pageSize,i.page,i.pageLength)))}}function w(e,t){if(1&e){var i=n.dc();n.cc(0,"a",44),n.kc("click",(function(){n.Dc(i);var e=n.oc().$implicit;return n.oc(),n.Cc(45).setCurrent(e.value)})),n.Nc(1),n.bc()}if(2&e){var r=n.oc().$implicit;n.oc();var c=n.Cc(45);n.Nb("active",c.getCurrent()===r.value),n.Jb(1),n.Oc(r.label)}}function S(e,t){if(1&e&&(n.cc(0,"a",45),n.Nc(1),n.bc()),2&e){var i=n.oc().$implicit;n.Jb(1),n.Oc(i.label)}}function C(e,t){if(1&e&&(n.cc(0,"li",28),n.Lc(1,w,2,3,"a",42),n.Lc(2,S,2,1,"a",43),n.bc()),2&e){var i=t.$implicit;n.oc();var r=n.Cc(45);n.Jb(1),n.tc("ngIf",r.getCurrent()!==i.value),n.Jb(1),n.tc("ngIf",r.getCurrent()===i.value)}}var O,I,j=function(){return["/article/add","new"]},N=((O=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,n,r,c){var a;return _classCallCheck(this,i),(a=t.call(this))._artcileService=e,a._router=n,a._utils=r,a._route=c,a.pageSize=10,a.searchString="",a.rows=new g.a,a.searchUpdated$.debounceTime(600).distinctUntilChanged().subscribe((function(e){a.loadData()})),a}return _createClass(i,[{key:"ngOnInit",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,this._artcileService.totalCount$.subscribe((function(e){t.pageLength=e})),e.next=4,this.loadData(this.page,this.pageSize);case 4:this.isLoading=!1;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(e,t){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return this.isLoading=!0,e&&(this.page=e),n={searchFields:"title",excerpt:!0},this.searchString&&(n.searchValue=this.searchString),i.prev=3,i.next=6,this._artcileService.list(e,t,n).toPromise();case 6:this.rows=i.sent,this.isLoading=!1,this._router.navigate([],{queryParams:{page:this.page||void 0,q:this.searchString||void 0}}),i.next=14;break;case 11:i.prev=11,i.t0=i.catch(3),this.isLoading=!1,console.error(i.t0);case 14:case"end":return i.stop()}}),i,this,[[3,11]])})))}},{key:"delete",value:function(e){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this._utils.confirm("Are you really want to delete the article?");case 3:if(t.t0=t.sent,!t.t0){t.next=11;break}return this.isLoading=!0,t.next=8,this._artcileService.delete(e).toPromise();case 8:return t.next=10,this.loadData();case 10:this.isLoading=!1;case 11:t.next=16;break;case 13:t.prev=13,t.t1=t.catch(0),this.isLoading=!1;case 16:case"end":return t.stop()}}),t,this,[[0,13]])})))}},{key:"back",value:function(){this._router.navigate(["/post"])}}]),i}(h.a)).\u0275fac=function(e){return new(e||O)(n.Wb(m.a),n.Wb(p.b),n.Wb(v.a),n.Wb(p.a))},O.\u0275cmp=n.Qb({type:O,selectors:[["app-list"]],features:[n.Gb],decls:63,vars:13,consts:[["id","admin",1,"main-content","container"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"title"],[1,"btn","btn-secondary","btn-large","capitalize","mt-2",3,"click"],[1,"fa","fa-arrow-left"],[1,"title-2"],[1,"btn","btn-warning","ml-4",3,"routerLink"],[1,"col-md-12","mt-2"],[1,"col-md-6","d-flex","mt-4"],[1,"input-group","mb-3"],["type","text","placeholder","Search","name","q",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary"],[1,"col-xs-12","col-md-10","content","table-responsive","mt-4"],[1,"table","table-hover"],[1,"text-left","border-top-0"],[1,"text-left","border-top-0",2,"width","200px"],["class","pt-3",4,"ngIf"],[1,"progress-loader","text-center",3,"hidden"],["src","assets/images/loadbk.gif"],[1,"col-lg-12","pb-4","mt-5","mb-4","footer-pager","text-center"],[1,"col","text-right"],["id","page",3,"pageChange"],["p","paginationApi"],[1,"mx-auto"],[1,"pagination","mx-auto"],[1,"page-item"],[1,"page-link","prev",3,"click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",4,"ngFor","ngForOf"],[1,"page-link","next",3,"click"],[1,"text-center"],[1,"pt-3"],[4,"ngFor","ngForOf"],[1,"text-left"],[1,"text-left",3,"innerHTML"],[1,"td-actions","text-right"],[1,"btn","btn","btn-outline-dark","btn-link","btn-xs",3,"routerLink"],[1,"btn","btn","btn-outline-danger","text-danger","btn-link","btn-xs",3,"click"],["class","page-link",3,"active","click",4,"ngIf"],["class","page-link active",4,"ngIf"],[1,"page-link",3,"click"],[1,"page-link","active"]],template:function(e,t){if(1&e){var i=n.dc();n.cc(0,"div",0),n.cc(1,"div",1),n.cc(2,"div",2),n.cc(3,"div",3),n.cc(4,"h4",4),n.Nc(5,"Welcome Admin."),n.bc(),n.cc(6,"button",5),n.kc("click",(function(){return t.back()})),n.Xb(7,"i",6),n.Nc(8," Back "),n.bc(),n.Xb(9,"br"),n.Xb(10,"br"),n.cc(11,"p",7),n.Nc(12,"List Article "),n.cc(13,"button",8),n.Nc(14," Add "),n.bc(),n.bc(),n.bc(),n.cc(15,"div",9),n.Xb(16,"hr"),n.bc(),n.cc(17,"div",10),n.cc(18,"p",7),n.Nc(19,"Articles"),n.bc(),n.bc(),n.cc(20,"div",10),n.cc(21,"div",11),n.cc(22,"input",12),n.kc("ngModelChange",(function(e){return t.searchString=e}))("ngModelChange",(function(){return t.searchUpdated$.next(t.searchString)})),n.bc(),n.cc(23,"div",13),n.cc(24,"button",14),n.Nc(25,"Ok"),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(26,"div",9),n.Xb(27,"hr"),n.bc(),n.cc(28,"div",15),n.cc(29,"table",16),n.cc(30,"thead"),n.cc(31,"tr"),n.cc(32,"th",17),n.Nc(33,"S.No"),n.bc(),n.cc(34,"th",17),n.Nc(35,"Title"),n.bc(),n.cc(36,"th",17),n.Nc(37,"content"),n.bc(),n.Xb(38,"th",18),n.bc(),n.bc(),n.Lc(39,x,3,8,"tbody",19),n.bc(),n.cc(40,"div",20),n.Xb(41,"img",21),n.bc(),n.bc(),n.cc(42,"div",22),n.cc(43,"div",23),n.cc(44,"pagination-template",24,25),n.kc("pageChange",(function(e){return t.pageChangeEvent(e)})),n.cc(46,"nav",26),n.cc(47,"ul",27),n.cc(48,"li",28),n.cc(49,"a",29),n.kc("click",(function(){n.Dc(i);var e=n.Cc(45);return!e.isFirstPage()&&e.previous()})),n.cc(50,"span",30),n.Nc(51,"\xab"),n.bc(),n.cc(52,"span",31),n.Nc(53,"Previous"),n.bc(),n.bc(),n.bc(),n.Lc(54,C,3,2,"li",32),n.cc(55,"li",28),n.cc(56,"a",33),n.kc("click",(function(){n.Dc(i);var e=n.Cc(45);return!e.isLastPage()&&e.next()})),n.cc(57,"span",30),n.Nc(58,"\xbb"),n.bc(),n.cc(59,"span",31),n.Nc(60,"Next"),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(61,"h4",34),n.Nc(62),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.bc()}if(2&e){var r=n.Cc(45);n.Jb(13),n.tc("routerLink",n.wc(12,j)),n.Jb(9),n.tc("ngModel",t.searchString),n.Jb(17),n.tc("ngIf",t.rows&&t.rows.length),n.Jb(1),n.tc("hidden",!t.isLoading),n.Jb(8),n.Nb("disabled",r.isFirstPage()),n.Jb(6),n.tc("ngForOf",r.pages),n.Jb(1),n.Nb("disabled",r.isLastPage()),n.Jb(7),n.Rc("",t.page," to ",t.pageSize*t.page," of ",t.pageLength," totals")}},directives:[p.c,o.c,o.n,o.q,r.l,a.c,r.k,p.e],pipes:[a.b],styles:[""]}),O),L=i("tMbT"),D=((I=function(){function e(t,i){_classCallCheck(this,e),this.businessService=t,this.router=i}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.isLoading=!0,this.loadData();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.isLoading=!0,e.next=4,this.businessService.load(this.id).toPromise();case 4:this.data=e.sent,console.log("data",this.data),this.isLoading=!1,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),this.isLoading=!1;case 12:case"end":return e.stop()}}),e,this,[[0,9]])})))}},{key:"goBack",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||I)(n.Wb(L.a),n.Wb(p.b))},I.\u0275cmp=n.Qb({type:I,selectors:[["app-detail"]],decls:1,vars:0,template:function(e,t){1&e&&n.Nc(0,"\ndetail categorie")},styles:["@media print{.btn.btn-danger[_ngcontent-%COMP%], .btn.btn-flat-default[_ngcontent-%COMP%]{display:none}}"]}),I),R=i("FwKj"),P=i("arBS"),A=i("ucZH"),J=i("eQ+J"),X=i("1jS7"),F=i("CzEO"),T=["uploaderBanner"],q=["uploaderDoc"],W=["uploader"];function M(e,t){if(1&e){var i=n.dc();n.cc(0,"div",49),n.cc(1,"button",50),n.kc("click",(function(){n.Dc(i);var e=t.$implicit;return n.oc(3).removeBannerImg(e)})),n.Nc(2,"x"),n.bc(),n.Xb(3,"img",51),n.bc()}if(2&e){var r=t.$implicit;n.Jb(3),n.tc("src",r.realPath,n.Gc)}}function z(e,t){if(1&e&&(n.ac(0),n.Lc(1,M,4,1,"div",48),n.Zb()),2&e){var i=n.oc(2);n.Jb(1),n.tc("ngForOf",i.data.sliders)}}function B(e,t){if(1&e){var i=n.dc();n.cc(0,"div",49),n.cc(1,"button",50),n.kc("click",(function(){n.Dc(i);var e=t.$implicit;return n.oc(3).removeGalleryImg(e)})),n.Nc(2,"x"),n.bc(),n.Xb(3,"img",51),n.bc()}if(2&e){var r=t.$implicit;n.Jb(3),n.tc("src",r.realPath,n.Gc)}}function E(e,t){if(1&e&&(n.ac(0),n.Lc(1,B,4,1,"div",48),n.Zb()),2&e){var i=n.oc(2);n.Jb(1),n.tc("ngForOf",i.data.images)}}function $(e,t){if(1&e){var i=n.dc();n.cc(0,"div",9),n.cc(1,"form",10),n.kc("ngSubmit",(function(){return n.Dc(i),n.oc().submit()})),n.cc(2,"div",11),n.cc(3,"div",12),n.Lc(4,z,2,1,"ng-container",13),n.cc(5,"app-file-uploader",14,15),n.kc("onDone",(function(e){return n.Dc(i),n.oc().endBanner(e)})),n.bc(),n.bc(),n.bc(),n.cc(7,"div",16),n.cc(8,"label"),n.Nc(9,"Categories"),n.bc(),n.Xb(10,"ng-select",17),n.bc(),n.cc(11,"div",16),n.cc(12,"label"),n.Nc(13,"Article Title"),n.bc(),n.Xb(14,"input",18),n.bc(),n.cc(15,"div",16),n.cc(16,"label"),n.Nc(17,"Article"),n.bc(),n.cc(18,"quill-editor",19),n.cc(19,"div",20),n.cc(20,"span",21),n.cc(21,"select",22),n.Xb(22,"option",23),n.Xb(23,"option",24),n.Xb(24,"option",25),n.bc(),n.cc(25,"select",26),n.Xb(26,"option",27),n.Xb(27,"option",23),n.Xb(28,"option",28),n.Xb(29,"option",29),n.bc(),n.bc(),n.cc(30,"span",21),n.Xb(31,"button",30),n.Xb(32,"button",31),n.Xb(33,"button",32),n.Xb(34,"button",33),n.bc(),n.cc(35,"span",21),n.Xb(36,"select",34),n.Xb(37,"select",35),n.bc(),n.cc(38,"span",21),n.Xb(39,"button",36),n.Xb(40,"button",37),n.cc(41,"select",38),n.Xb(42,"option",23),n.Xb(43,"option",39),n.Xb(44,"option",40),n.Xb(45,"option",41),n.bc(),n.bc(),n.cc(46,"span",21),n.cc(47,"app-file-uploader",42,43),n.kc("onDone",(function(e){return n.Dc(i),n.oc().endDoc(e)})),n.bc(),n.bc(),n.bc(),n.bc(),n.bc(),n.cc(49,"div",11),n.cc(50,"div",44),n.Lc(51,E,2,1,"ng-container",13),n.cc(52,"app-file-uploader",45,46),n.kc("onDone",(function(e){return n.Dc(i),n.oc().end(e)})),n.bc(),n.bc(),n.bc(),n.cc(54,"button",47),n.Nc(55,"Post"),n.bc(),n.bc(),n.bc()}if(2&e){var r=n.oc();n.Jb(1),n.tc("formGroup",r.form),n.Jb(3),n.tc("ngIf",r.data&&r.data.sliders),n.Jb(1),n.tc("multiple",!0)("edition",r.edition)("endpoint","upload"),n.Jb(2),n.tc("ngClass",r.displayFieldCss(r.form,"categories")),n.Jb(3),n.tc("items",r.categories)("multiple",!0)("searchable",!1)("clearable",!1),n.Jb(1),n.tc("ngClass",r.displayFieldCss(r.form,"title")),n.Jb(4),n.tc("ngClass",r.displayFieldCss(r.form,"content")),n.Jb(32),n.tc("fichier",null==r.data?null:r.data.thumbnail)("endpoint","upload")("multiple",!1),n.Jb(4),n.tc("ngIf",r.data&&r.data.images),n.Jb(1),n.tc("multiple",!0)("edition",r.edition)("endpoint","upload"),n.Jb(2),n.tc("disabled",r.isLoading)}}var G,H,V=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:N},{path:"detail/:date",component:D},{path:"add/:id",component:(G=function(){function e(t,i,n,r,c,a,o){_classCallCheck(this,e),this._categorieService=t,this._articleService=i,this._formHelperService=n,this._fb=r,this._toasterService=c,this._route=a,this._utilsService=o,this.existingImages=[],this.id=this._route.snapshot.params.id}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,this.loadData();case 3:return e.next=5,this.loadCategories();case 5:this.categories=e.sent,this.isLoading=!0,this.form=this._fb.group({title:[this.data?this.data.title:"",o.v.required],content:[this.data?this.data.content:"",o.v.required],categories:[this.data?this.data.categories:"",o.v.required]}),this.isLoading=!1;case 9:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.id){e.next=8;break}return e.next=3,this._articleService.load(this.id).toPromise();case 3:this.data=e.sent,this.data.sliders=this.data.sliders||[],this.existingImages=this.data.images?[].concat(_toConsumableArray(this.data.images),_toConsumableArray(this.data.sliders)):[],e.next=9;break;case 8:this.data=new R.a;case 9:case"end":return e.stop()}}),e,this)})))}},{key:"loadCategories",value:function(){var e=this;return new Promise((function(t,i){return Object(f.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._categorieService.list(1,100).toPromise();case 2:i=e.sent,t(i);case 4:case"end":return e.stop()}}),e,this)})))}))}},{key:"end",value:function(e){e&&(this.existingImages||(this.existingImages=[]),this.existingImages=this.existingImages.concat(e)),this.uploaderDoc.uploadFileNow()}},{key:"endBanner",value:function(e){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e&&(this.existingImages||(this.existingImages=[]),this.existingImages=this.existingImages.concat(e)),t.next=3,this.uploader.uploadFileNow();case 3:case"end":return t.stop()}}),t,this)})))}},{key:"onAllDone",value:function(){var e=this,t=new R.a(Object.assign(Object.assign(Object.assign({},this.form.value),this.data),{slug:this._utilsService.slugify(this.form.value.title)}));this.data.id&&(t.id=this.data.id),this.data=t,this.data.images||(this.data.images=[]),this.data.images=_toConsumableArray(this.existingImages);var i=this.data.id?this._articleService.update(this.data):this._articleService.add(this.data);this.isLoading=!0,i.subscribe((function(t){e._toasterService.success("Success"),e._utilsService.back(),e.isLoading=!1}),(function(t){e._toasterService.error(t.message),e.isLoading=!1}))}},{key:"submit",value:function(){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.form.valid){e.next=2;break}return e.abrupt("return",(this._toasterService.error("Please fill all inputs"),void this._formHelperService.validateAllFormFields(this.form)));case 2:return e.next=4,this.uploaderBanner.uploadFileNow();case 4:case"end":return e.stop()}}),e,this)})))}},{key:"displayFieldCss",value:function(e,t){return{"has-error":this._formHelperService.isFieldValid(e,t),"has-feedback":this._formHelperService.isFieldValid(e,t)}}},{key:"back",value:function(){this._utilsService.back()}},{key:"removeGalleryImg",value:function(e){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this._utilsService.confirm("Do you really want to remove this pic?");case 3:if(!t.sent){t.next=8;break}i=this.existingImages.findIndex((function(t){return t.id===e.id})),this.existingImages.splice(i,1),n=this.data.images.findIndex((function(t){return t.id===e.id})),this.data.images.splice(n,1);case 8:t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,this,[[0,10]])})))}},{key:"removeBannerImg",value:function(e){return Object(f.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this._utilsService.confirm("Do you really want to remove this pic?");case 3:if(!t.sent){t.next=8;break}i=this.existingImages.findIndex((function(t){return t.id===e.id})),this.existingImages.splice(i,1),n=this.data.images.findIndex((function(t){return t.id===e.id})),this.data.images.splice(n,1);case 8:t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,this,[[0,10]])})))}},{key:"endDoc",value:function(e){e&&e.document&&(this.data.thumbnail=e.document),this.onAllDone()}}]),e}(),G.\u0275fac=function(e){return new(e||G)(n.Wb(P.a),n.Wb(m.a),n.Wb(A.a),n.Wb(o.d),n.Wb(J.a),n.Wb(p.a),n.Wb(v.a))},G.\u0275cmp=n.Qb({type:G,selectors:[["app-add"]],viewQuery:function(e,t){var i;1&e&&(n.Tc(T,!0),n.Tc(q,!0),n.Tc(W,!0)),2&e&&(n.Bc(i=n.lc())&&(t.uploaderBanner=i.first),n.Bc(i=n.lc())&&(t.uploaderDoc=i.first),n.Bc(i=n.lc())&&(t.uploader=i.first))},decls:14,vars:1,consts:[["id","admin",1,"main-content","container","pb-3"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"title-2"],[1,"s-title","text-center"],[1,"btn","btn-secondary","btn-large","capitalize","mt-2",3,"click"],[1,"fa","fa-arrow-left"],["class","col-md-12 d-flex mt-3",4,"ngIf"],[1,"col-md-12","d-flex","mt-3"],["novalidate","",1,"col-sm-12","col-md-12","col-lg-12","pl-0",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-md-12","form-group","pl-0","d-flex","flex-wrap","align-items-center"],[4,"ngIf"],["maxWidth","120px","label","Upload sliders","size","1350 X 400","btnClass","btn-warning","folder","article","typeImage","banner",3,"multiple","edition","endpoint","onDone"],["uploaderBanner",""],[1,"form-group",3,"ngClass"],["bindLabel","name","placeholder","Categories","formControlName","categories",1,"btn-outline-dark",3,"items","multiple","searchable","clearable"],["type","text","formControlName","title","required","",1,"form-control"],["formControlName","content","required",""],["quill-editor-toolbar",""],[1,"ql-formats"],[1,"ql-font"],["selected",""],["value","serif"],["value","monospace"],[1,"ql-size"],["value","small"],["value","large"],["value","huge"],[1,"ql-bold"],[1,"ql-italic"],[1,"ql-underline"],[1,"ql-strike"],[1,"ql-color"],[1,"ql-background"],["value","ordered",1,"ql-list"],["value","bullet",1,"ql-list"],[1,"ql-align"],["value","center"],["value","right"],["value","justify"],["typeImage","thumbnail","maxWidth","250px","label","Add doc ","btnClass","","isDoc","true","folder","article",3,"fichier","endpoint","multiple","onDone"],["uploaderDoc",""],[1,"col-md-12","form-group","pl-0","flex-wrap","d-flex","align-items-center"],["maxWidth","120px","label","Upload more  pictures in grid","btnClass","btn-warning","folder","article","typeImage","gallery",3,"multiple","edition","endpoint","onDone"],["uploader",""],["type","submit",1,"btn","btn-warning","btn-large","capitalize","mt-2",3,"disabled"],["class","m-2 image-container",4,"ngFor","ngForOf"],[1,"m-2","image-container"],["type","button",1,"btn","btn-xs","btn-remove",3,"click"],[1,"img-fluid","img-thumbnail",3,"src"]],template:function(e,t){1&e&&(n.cc(0,"div",0),n.cc(1,"div",1),n.cc(2,"div",2),n.cc(3,"div",3),n.cc(4,"h1"),n.Nc(5,"Articles"),n.bc(),n.cc(6,"p",4),n.Nc(7,"Articles "),n.cc(8,"span",5),n.Nc(9,"Can be rearranged as to which articles/Categories appear first"),n.bc(),n.bc(),n.cc(10,"button",6),n.kc("click",(function(){return t.back()})),n.Xb(11,"i",7),n.Nc(12," Back "),n.bc(),n.bc(),n.Lc(13,$,56,20,"div",8),n.bc(),n.bc(),n.bc()),2&e&&(n.Jb(13),n.tc("ngIf",t.form))},directives:[r.l,o.x,o.o,o.h,X.a,r.j,c.a,o.n,o.f,o.c,o.u,F.a,o.r,o.w,r.k],styles:[".btn-remove[_ngcontent-%COMP%]{position:absolute;background:#dcdcdc;padding:5px;margin-left:135px;top:-10px;border-radius:50%}"]}),G)}],U=((H=function e(){_classCallCheck(this,e)}).\u0275mod=n.Ub({type:H}),H.\u0275inj=n.Tb({factory:function(e){return new(e||H)},imports:[[p.f.forChild(V)],p.f]}),H);i.d(t,"ArticleModule",(function(){return Q})),Object(r.w)(l.a,"fr-FR");var Z,Q=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=n.Ub({type:Z}),Z.\u0275inj=n.Tb({factory:function(e){return new(e||Z)},providers:[{provide:n.y,useValue:"fr-FR"}],imports:[[r.b,c.b,o.j,o.t,a.a,U,u.e,d.b,b.a,F.b.forRoot({modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}]]}})]]}),Z)},tMbT:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("FXLl"),r=i("Ftky"),c=i("fXoL"),a=i("9jwV"),o=function(){var e=function(e){_inherits(i,e);var t=_createSuper(i);function i(e){var n;return _classCallCheck(this,i),(n=t.call(this,e,r.a,"businesses","business"))._httpService=e,n}return _createClass(i,[{key:"updateReject",value:function(e){return this.httpService.put("business/".concat(e.id,"/reject"),e.prepareForSending())}},{key:"updateApprouve",value:function(e){return this.httpService.put("business/".concat(e,"/approve"))}},{key:"stat",value:function(){return this.httpService.get("businessStat")}}]),i}(n.a);return e.\u0275fac=function(t){return new(t||e)(c.gc(a.a))},e.\u0275prov=c.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);