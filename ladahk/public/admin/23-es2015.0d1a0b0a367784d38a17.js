(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{BhQr:function(t,c,e){"use strict";e.r(c);var i=e("fXoL"),n=e("ofXK"),a=e("ZOsW"),r=e("oOf3"),s=e("3Pt+"),o=e("Hfs6"),d=e.n(o),l=e("0IaG"),b=e("7pIB"),u=e("j1ZV"),p=e("CzEO"),h=e("tyNb"),f=e("mrSG"),g=e("tuSX"),m=(e("t/4F"),e("FaTO"),e("E8I7"));class v extends m.a{constructor(t){super(t)}}var k=function(t){return t.faq="faq",t}({}),S=e("FXLl"),$=e("9jwV");let N=(()=>{class t extends S.a{constructor(t){super(t,v,"staticPages","staticPage"),this._httpService=t}}return t.\u0275fac=function(c){return new(c||t)(i.gc($.a))},t.\u0275prov=i.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var L=e("SZGZ");const C=function(t){return["/faq/add",t]};function y(t,c){if(1&t){const t=i.dc();i.cc(0,"tr"),i.cc(1,"td",37),i.Nc(2),i.bc(),i.cc(3,"td",37),i.Nc(4),i.bc(),i.Xb(5,"td",38),i.cc(6,"td",39),i.cc(7,"a",40),i.Nc(8,"EDIT"),i.bc(),i.Nc(9,"\xa0 "),i.cc(10,"a",41),i.kc("click",(function(){i.Dc(t);const e=c.$implicit;return i.oc(2).delete(e)})),i.Nc(11,"DELETE"),i.bc(),i.bc(),i.bc()}if(2&t){const t=c.$implicit;i.Jb(2),i.Oc(t.id),i.Jb(2),i.Oc(t.title),i.Jb(1),i.tc("innerHTML",t.content,i.Ec),i.Jb(2),i.tc("routerLink",i.xc(4,C,t.id))}}const F=function(t,c,e){return{id:"page",itemsPerPage:t,currentPage:c,totalItems:e}};function P(t,c){if(1&t&&(i.cc(0,"tbody",35),i.Lc(1,y,12,6,"tr",36),i.pc(2,"paginate"),i.bc()),2&t){const t=i.oc();i.Jb(1),i.tc("ngForOf",i.qc(2,1,t.rows,i.zc(4,F,t.pageSize,t.page,t.pageLength)))}}function M(t,c){if(1&t){const t=i.dc();i.cc(0,"a",44),i.kc("click",(function(){i.Dc(t);const c=i.oc().$implicit;return i.oc(),i.Cc(45).setCurrent(c.value)})),i.Nc(1),i.bc()}if(2&t){const t=i.oc().$implicit;i.oc();const c=i.Cc(45);i.Nb("active",c.getCurrent()===t.value),i.Jb(1),i.Oc(t.label)}}function J(t,c){if(1&t&&(i.cc(0,"a",45),i.Nc(1),i.bc()),2&t){const t=i.oc().$implicit;i.Jb(1),i.Oc(t.label)}}function w(t,c){if(1&t&&(i.cc(0,"li",28),i.Lc(1,M,2,3,"a",42),i.Lc(2,J,2,1,"a",43),i.bc()),2&t){const t=c.$implicit;i.oc();const e=i.Cc(45);i.Jb(1),i.tc("ngIf",e.getCurrent()!==t.value),i.Jb(1),i.tc("ngIf",e.getCurrent()===t.value)}}const x=function(){return["/faq/add","new"]};let D=(()=>{class t extends g.a{constructor(t,c,e,i){super(),this._staticPageService=t,this._router=c,this._utils=e,this._route=i,this.pageSize=10,this.searchString="",this.rows=new v,this.searchUpdated$.debounceTime(600).distinctUntilChanged().subscribe(t=>{this.loadData()})}ngOnInit(){return Object(f.b)(this,void 0,void 0,(function*(){this.isLoading=!0,this._staticPageService.totalCount$.subscribe(t=>{this.pageLength=t}),yield this.loadData(this.page,this.pageSize),this.isLoading=!1}))}loadData(t,c){return Object(f.b)(this,void 0,void 0,(function*(){this.isLoading=!0,t&&(this.page=t);let e={kind:k.faq};this.searchString&&(e.searchValue=this.searchString,e.searchFields="title");try{this.rows=yield this._staticPageService.list(t,c,e).toPromise(),this.isLoading=!1,this._router.navigate([],{queryParams:{page:this.page||void 0,q:this.searchString||void 0}})}catch(i){this.isLoading=!1,console.error(i)}}))}delete(t){return Object(f.b)(this,void 0,void 0,(function*(){try{(yield this._utils.confirm("Are you really want to delete the faq ?"))&&(this.isLoading=!0,yield this._staticPageService.delete(t).toPromise(),yield this.loadData(),this.isLoading=!1)}catch(c){this.isLoading=!1}}))}back(){this._router.navigate(["/post"])}}return t.\u0275fac=function(c){return new(c||t)(i.Wb(N),i.Wb(h.b),i.Wb(L.a),i.Wb(h.a))},t.\u0275cmp=i.Qb({type:t,selectors:[["app-list"]],features:[i.Gb],decls:63,vars:13,consts:[["id","admin",1,"main-content","container"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"title"],[1,"btn","btn-secondary","btn-large","capitalize","mt-2",3,"click"],[1,"fa","fa-arrow-left"],[1,"title-2"],[1,"btn","btn-warning","ml-4",3,"routerLink"],[1,"col-md-12","mt-2"],[1,"col-md-6","d-flex","mt-4"],[1,"input-group","mb-3"],["type","text","placeholder","Search","name","q",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary"],[1,"col-xs-12","col-md-12","content","table-responsive","mt-4"],[1,"table","table-hover"],[1,"text-left","border-top-0"],[1,"text-left","border-top-0",2,"width","200px"],["class","pt-3",4,"ngIf"],[1,"progress-loader","text-center",3,"hidden"],["src","assets/images/loadbk.gif"],[1,"col-lg-12","pb-4","mt-5","mb-4","footer-pager","text-center"],[1,"col","text-right"],["id","page",3,"pageChange"],["p","paginationApi"],[1,"mx-auto"],[1,"pagination","mx-auto"],[1,"page-item"],[1,"page-link","prev",3,"click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",4,"ngFor","ngForOf"],[1,"page-link","next",3,"click"],[1,"text-center"],[1,"pt-3"],[4,"ngFor","ngForOf"],[1,"text-left"],[1,"text-left",3,"innerHTML"],[1,"td-actions","text-right"],[1,"btn","btn","btn-outline-dark","btn-link","btn-xs",3,"routerLink"],[1,"btn","btn","btn-outline-danger","text-danger","btn-link","btn-xs",3,"click"],["class","page-link",3,"active","click",4,"ngIf"],["class","page-link active",4,"ngIf"],[1,"page-link",3,"click"],[1,"page-link","active"]],template:function(t,c){if(1&t){const t=i.dc();i.cc(0,"div",0),i.cc(1,"div",1),i.cc(2,"div",2),i.cc(3,"div",3),i.cc(4,"h4",4),i.Nc(5,"Welcome Admin."),i.bc(),i.cc(6,"button",5),i.kc("click",(function(){return c.back()})),i.Xb(7,"i",6),i.Nc(8," Back "),i.bc(),i.Xb(9,"br"),i.Xb(10,"br"),i.cc(11,"p",7),i.Nc(12,"List FAQs "),i.cc(13,"button",8),i.Nc(14," Add "),i.bc(),i.bc(),i.bc(),i.cc(15,"div",9),i.Xb(16,"hr"),i.bc(),i.cc(17,"div",10),i.cc(18,"p",7),i.Nc(19,"Faqs"),i.bc(),i.bc(),i.cc(20,"div",10),i.cc(21,"div",11),i.cc(22,"input",12),i.kc("ngModelChange",(function(t){return c.searchString=t}))("ngModelChange",(function(){return c.searchUpdated$.next(c.searchString)})),i.bc(),i.cc(23,"div",13),i.cc(24,"button",14),i.Nc(25,"Ok"),i.bc(),i.bc(),i.bc(),i.bc(),i.cc(26,"div",9),i.Xb(27,"hr"),i.bc(),i.cc(28,"div",15),i.cc(29,"table",16),i.cc(30,"thead"),i.cc(31,"tr"),i.cc(32,"th",17),i.Nc(33,"S.No"),i.bc(),i.cc(34,"th",17),i.Nc(35,"Title"),i.bc(),i.cc(36,"th",17),i.Nc(37,"content"),i.bc(),i.Xb(38,"th",18),i.bc(),i.bc(),i.Lc(39,P,3,8,"tbody",19),i.bc(),i.cc(40,"div",20),i.Xb(41,"img",21),i.bc(),i.bc(),i.cc(42,"div",22),i.cc(43,"div",23),i.cc(44,"pagination-template",24,25),i.kc("pageChange",(function(t){return c.pageChangeEvent(t)})),i.cc(46,"nav",26),i.cc(47,"ul",27),i.cc(48,"li",28),i.cc(49,"a",29),i.kc("click",(function(){i.Dc(t);const c=i.Cc(45);return!c.isFirstPage()&&c.previous()})),i.cc(50,"span",30),i.Nc(51,"\xab"),i.bc(),i.cc(52,"span",31),i.Nc(53,"Previous"),i.bc(),i.bc(),i.bc(),i.Lc(54,w,3,2,"li",32),i.cc(55,"li",28),i.cc(56,"a",33),i.kc("click",(function(){i.Dc(t);const c=i.Cc(45);return!c.isLastPage()&&c.next()})),i.cc(57,"span",30),i.Nc(58,"\xbb"),i.bc(),i.cc(59,"span",31),i.Nc(60,"Next"),i.bc(),i.bc(),i.bc(),i.bc(),i.bc(),i.cc(61,"h4",34),i.Nc(62),i.bc(),i.bc(),i.bc(),i.bc(),i.bc(),i.bc(),i.bc()}if(2&t){const t=i.Cc(45);i.Jb(13),i.tc("routerLink",i.wc(12,x)),i.Jb(9),i.tc("ngModel",c.searchString),i.Jb(17),i.tc("ngIf",c.rows&&c.rows.length),i.Jb(1),i.tc("hidden",!c.isLoading),i.Jb(8),i.Nb("disabled",t.isFirstPage()),i.Jb(6),i.tc("ngForOf",t.pages),i.Jb(1),i.Nb("disabled",t.isLastPage()),i.Jb(7),i.Rc("",c.page," to ",c.pageSize*c.page," of ",c.pageLength," totals")}},directives:[h.c,s.c,s.n,s.q,n.l,r.c,n.k,h.e],pipes:[r.b],styles:[""]}),t})();var O=e("ucZH"),_=e("eQ+J");function j(t,c){if(1&t){const t=i.dc();i.cc(0,"div",10),i.cc(1,"form",11),i.kc("ngSubmit",(function(){return i.Dc(t),i.oc().submit()})),i.cc(2,"div",12),i.cc(3,"label"),i.Nc(4,"Faq Title"),i.bc(),i.Xb(5,"input",13),i.bc(),i.cc(6,"div",12),i.cc(7,"label"),i.Nc(8,"Contenu"),i.bc(),i.Xb(9,"quill-editor",14),i.bc(),i.cc(10,"button",15),i.Nc(11,"Post"),i.bc(),i.bc(),i.bc()}if(2&t){const t=i.oc();i.Jb(1),i.tc("formGroup",t.form),i.Jb(1),i.tc("ngClass",t.displayFieldCss(t.form,"title")),i.Jb(4),i.tc("ngClass",t.displayFieldCss(t.form,"content")),i.Jb(4),i.tc("disabled",t.isLoading)}}const I=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:D},{path:"add/:id",component:(()=>{class t{constructor(t,c,e,i,n,a){this._staticPageService=t,this._formHelperService=c,this._fb=e,this._toasterService=i,this._route=n,this._utilsService=a,this.id=this._route.snapshot.params.id}ngOnInit(){return Object(f.b)(this,void 0,void 0,(function*(){this.isLoading=!0,yield this.loadData(),this.isLoading=!0,this.form=this._fb.group({title:[this.data?this.data.title:"",s.v.required],content:[this.data?this.data.content:"",s.v.required]}),this.isLoading=!1}))}loadData(){return Object(f.b)(this,void 0,void 0,(function*(){this.data="new"!==this.id?yield this._staticPageService.load(this.id).toPromise():new v}))}submit(){return Object(f.b)(this,void 0,void 0,(function*(){if(!this.form.valid)return this._toasterService.error("Please fill all inputs"),void this._formHelperService.validateAllFormFields(this.form);const t=new v(Object.assign({},this.form.value)),c=this.data.id?this._staticPageService.update(new v(Object.assign(Object.assign({},t),{id:this.data.id}))):this._staticPageService.add(t);this.isLoading=!0,c.subscribe(t=>{this._toasterService.success("Success"),this._utilsService.back(),this.isLoading=!1},t=>{this._toasterService.error(t.message),this.isLoading=!1})}))}displayFieldCss(t,c){return{"has-error":this._formHelperService.isFieldValid(t,c),"has-feedback":this._formHelperService.isFieldValid(t,c)}}back(){this._utilsService.back()}}return t.\u0275fac=function(c){return new(c||t)(i.Wb(N),i.Wb(O.a),i.Wb(s.d),i.Wb(_.a),i.Wb(h.a),i.Wb(L.a))},t.\u0275cmp=i.Qb({type:t,selectors:[["app-add"]],decls:13,vars:1,consts:[["id","admin",1,"main-content","container","pb-3"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"title","font-30"],[1,"title-2"],[1,"s-title","text-center"],[1,"btn","btn-secondary","btn-large","capitalize","mt-2",3,"click"],[1,"fa","fa-arrow-left"],["class","col-md-12 d-flex mt-3",4,"ngIf"],[1,"col-md-12","d-flex","mt-3"],["novalidate","",1,"col-sm-12","col-md-12","col-lg-12","pl-0",3,"formGroup","ngSubmit"],[1,"form-group",3,"ngClass"],["type","text","formControlName","title","required","",1,"form-control"],["formControlName","content","required",""],["type","submit",1,"btn","btn-warning","btn-large","capitalize","mt-2",3,"disabled"]],template:function(t,c){1&t&&(i.cc(0,"div",0),i.cc(1,"div",1),i.cc(2,"div",2),i.cc(3,"div",3),i.cc(4,"h4",4),i.Nc(5,"News/Updates"),i.bc(),i.cc(6,"p",5),i.Nc(7,"FAQs "),i.Xb(8,"span",6),i.bc(),i.cc(9,"button",7),i.kc("click",(function(){return c.back()})),i.Xb(10,"i",8),i.Nc(11," Back "),i.bc(),i.bc(),i.Lc(12,j,12,4,"div",9),i.bc(),i.bc(),i.bc()),2&t&&(i.Jb(12),i.tc("ngIf",c.form))},directives:[n.l,s.x,s.o,s.h,n.j,s.c,s.n,s.f,s.u,p.a],styles:[""]}),t})()}];let T=(()=>{class t{}return t.\u0275mod=i.Ub({type:t}),t.\u0275inj=i.Tb({factory:function(c){return new(c||t)},imports:[[h.f.forChild(I)],h.f]}),t})();e.d(c,"FaqModule",(function(){return q})),Object(n.w)(d.a,"fr-FR");let q=(()=>{class t{}return t.\u0275mod=i.Ub({type:t}),t.\u0275inj=i.Tb({factory:function(c){return new(c||t)},providers:[{provide:i.y,useValue:"fr-FR"}],imports:[[n.b,a.b,s.j,s.t,r.a,T,l.e,b.b,u.a,p.b.forRoot({modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}]]}})]]}),t})()},Hfs6:function(t,c,e){var i,n,a;!function(r){if("object"==typeof t.exports){var s=r(0,c);void 0!==s&&(t.exports=s)}else n=[e,c],void 0===(a="function"==typeof(i=r)?i.apply(c,n):i)||(t.exports=a)}((function(t,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var e=void 0;c.default=["fr",[["AM","PM"],e,e],e,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],e,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"]],e,[["av. J.-C.","ap. J.-C."],e,["avant J\xe9sus-Christ","apr\xe8s J\xe9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1} '\xe0' {0}",e,e],[",","\u202f",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","#,##0.00\xa0\xa4","#E0"],"EUR","\u20ac","euro",{ARS:["$AR","$"],AUD:["$AU","$"],BEF:["FB"],BMD:["$BM","$"],BND:["$BN","$"],BZD:["$BZ","$"],CAD:["$CA","$"],CLP:["$CL","$"],CNY:[e,"\xa5"],COP:["$CO","$"],CYP:["\xa3CY"],EGP:[e,"\xa3E"],FJD:["$FJ","$"],FKP:["\xa3FK","\xa3"],FRF:["F"],GBP:["\xa3GB","\xa3"],GIP:["\xa3GI","\xa3"],HKD:[e,"$"],IEP:["\xa3IE"],ILP:["\xa3IL"],ITL:["\u20a4IT"],JPY:[e,"\xa5"],KMF:[e,"FC"],LBP:["\xa3LB","\xa3L"],MTP:["\xa3MT"],MXN:["$MX","$"],NAD:["$NA","$"],NIO:[e,"$C"],NZD:["$NZ","$"],RHD:["$RH"],RON:[e,"L"],RWF:[e,"FR"],SBD:["$SB","$"],SGD:["$SG","$"],SRD:["$SR","$"],TOP:[e,"$T"],TTD:["$TT","$"],TWD:[e,"NT$"],USD:["$US","$"],UYU:["$UY","$"],WST:["$WS"],XCD:[e,"$"],XPF:["FCFP"],ZMW:[e,"Kw"]},function(t){var c=Math.floor(Math.abs(t));return 0===c||1===c?1:5}]}))}}]);