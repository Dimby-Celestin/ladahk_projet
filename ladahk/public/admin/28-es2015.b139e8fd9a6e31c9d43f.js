(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{SRpE:function(t,i,c){"use strict";c.r(i);var e=c("fXoL"),n=c("ofXK"),a=c("ZOsW"),o=c("oOf3"),s=c("3Pt+"),r=c("Hfs6"),l=c.n(r),d=c("0IaG"),b=c("7pIB"),u=c("j1ZV"),p=c("tyNb"),h=c("mrSG"),g=c("tLNA"),f=c("tuSX"),m=c("FXLl"),v=c("E8I7"),k=c("s43p"),x=c("VeED");let y=(()=>{class t extends v.a{constructor(t){if(super(t),this.images=[],this.sliders=[],t)for(const i in t)"images"===i?(this.images=t.images.filter(t=>"gallery"===t.type).map(t=>new k.a(t)),this.sliders=t.images.filter(t=>"banner"===t.type).map(t=>new k.a(t))):Object.prototype.hasOwnProperty.call(t,i)&&(this[i]=t[i])}}return Object(h.c)([Object(x.jsonIgnore)()],t.prototype,"sliders",void 0),t})();var w=c("9jwV");let I=(()=>{class t extends m.a{constructor(t){super(t,y,"roadtoladakh","roadtoladakh"),this._httpService=t}}return t.\u0275fac=function(i){return new(i||t)(e.gc(w.a))},t.\u0275prov=e.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var O=c("SZGZ");const S=function(t){return["/roadtoladakh/add",t]};function L(t,i){if(1&t){const t=e.dc();e.cc(0,"tr"),e.cc(1,"td",32),e.Nc(2),e.bc(),e.cc(3,"td",33),e.Nc(4),e.bc(),e.Xb(5,"td",34),e.cc(6,"td",35),e.cc(7,"a",36),e.Nc(8,"EDIT"),e.bc(),e.Nc(9,"\xa0 "),e.cc(10,"a",37),e.kc("click",(function(){e.Dc(t);const c=i.$implicit;return e.oc(2).delete(c)})),e.Nc(11,"DELETE"),e.bc(),e.bc(),e.bc()}if(2&t){const t=i.$implicit;e.Jb(2),e.Oc(t.id),e.Jb(2),e.Oc(t.title),e.Jb(1),e.tc("innerHTML",t.content,e.Ec),e.Jb(2),e.tc("routerLink",e.xc(4,S,t.id))}}const _=function(t,i,c){return{id:"page",itemsPerPage:t,currentPage:i,totalItems:c}};function N(t,i){if(1&t&&(e.cc(0,"tbody",30),e.Lc(1,L,12,6,"tr",31),e.pc(2,"paginate"),e.bc()),2&t){const t=e.oc();e.Jb(1),e.tc("ngForOf",e.qc(2,1,t.rows,e.zc(4,_,t.pageSize,t.page,t.pageLength)))}}function X(t,i){if(1&t){const t=e.dc();e.cc(0,"a",40),e.kc("click",(function(){e.Dc(t);const i=e.oc().$implicit;return e.oc(),e.Cc(39).setCurrent(i.value)})),e.Nc(1),e.bc()}if(2&t){const t=e.oc().$implicit;e.oc();const i=e.Cc(39);e.Nb("active",i.getCurrent()===t.value),e.Jb(1),e.Oc(t.label)}}function C(t,i){if(1&t&&(e.cc(0,"a",41),e.Nc(1),e.bc()),2&t){const t=e.oc().$implicit;e.Jb(1),e.Oc(t.label)}}function J(t,i){if(1&t&&(e.cc(0,"li",23),e.Lc(1,X,2,3,"a",38),e.Lc(2,C,2,1,"a",39),e.bc()),2&t){const t=i.$implicit;e.oc();const c=e.Cc(39);e.Jb(1),e.tc("ngIf",c.getCurrent()!==t.value),e.Jb(1),e.tc("ngIf",c.getCurrent()===t.value)}}const D=function(){return["/roadtoladakh/add","new"]};let j=(()=>{class t extends f.a{constructor(t,i,c,e){super(),this._roadtoladakhService=t,this._utils=i,this._router=c,this._route=e,this.pageSize=10,this.searchString="",this.rows=new g.a}ngOnInit(){return Object(h.b)(this,void 0,void 0,(function*(){this.isLoading=!0,this._roadtoladakhService.totalCount$.subscribe(t=>{this.pageLength=t}),yield this.loadData(this.page,this.pageSize),this.isLoading=!1}))}loadData(t,i){return Object(h.b)(this,void 0,void 0,(function*(){this.isLoading=!0,t&&(this.page=t);let c={excerpt:!0};this.searchString&&(c.libelle_contains=this.searchString);try{this.rows=yield this._roadtoladakhService.list(t,i,c).toPromise(),this.isLoading=!1,this._router.navigate([],{queryParams:{page:this.page||void 0,q:this.searchString||void 0}})}catch(e){this.isLoading=!1,console.error(e)}}))}delete(t){return Object(h.b)(this,void 0,void 0,(function*(){try{(yield this._utils.confirm("Are you really want to delete the artice?"))&&(this.isLoading=!0,yield this._roadtoladakhService.delete(t).toPromise(),yield this.loadData(),this.isLoading=!1)}catch(i){this.isLoading=!1}}))}back(){this._router.navigate(["/post"])}}return t.\u0275fac=function(i){return new(i||t)(e.Wb(I),e.Wb(O.a),e.Wb(p.b),e.Wb(p.a))},t.\u0275cmp=e.Qb({type:t,selectors:[["app-list"]],features:[e.Gb],decls:57,vars:12,consts:[["id","admin",1,"main-content","container"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"title"],[1,"btn","btn-secondary","btn-large","capitalize","mt-2",3,"click"],[1,"fa","fa-arrow-left"],[1,"title-2"],[1,"btn","btn-warning","ml-4",3,"routerLink"],[1,"col-md-12","mt-2"],[1,"col-md-12","d-flex","mt-4"],[1,"col-xs-12","col-md-10","content","table-responsive","mt-4"],[1,"table","table-hover"],[1,"text-left","border-top-0"],["class","pt-3",4,"ngIf"],[1,"progress-loader","text-center",3,"hidden"],["src","assets/images/loadbk.gif"],[1,"col-lg-12","pb-4","mt-5","mb-4","footer-pager","text-center"],[1,"col","text-right"],["id","page",3,"pageChange"],["p","paginationApi"],[1,"mx-auto"],[1,"pagination","mx-auto"],[1,"page-item"],[1,"page-link","prev",3,"click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",4,"ngFor","ngForOf"],[1,"page-link","next",3,"click"],[1,"text-center"],[1,"pt-3"],[4,"ngFor","ngForOf"],[1,"text-left"],[1,"text-left","wd-title"],[1,"text-left","wd-content",3,"innerHTML"],[1,"td-actions","text-right","wd-btn"],[1,"btn","btn","btn-outline-dark","btn-link","btn-xs",3,"routerLink"],[1,"btn","btn","btn-outline-danger","text-danger","btn-link","btn-xs",3,"click"],["class","page-link",3,"active","click",4,"ngIf"],["class","page-link active",4,"ngIf"],[1,"page-link",3,"click"],[1,"page-link","active"]],template:function(t,i){if(1&t){const t=e.dc();e.cc(0,"div",0),e.cc(1,"div",1),e.cc(2,"div",2),e.cc(3,"div",3),e.cc(4,"h4",4),e.Nc(5,"Welcome Admin."),e.bc(),e.cc(6,"button",5),e.kc("click",(function(){return i.back()})),e.Xb(7,"i",6),e.Nc(8," Back "),e.bc(),e.Xb(9,"br"),e.Xb(10,"br"),e.cc(11,"p",7),e.Nc(12,"List Road to ladakh "),e.cc(13,"button",8),e.Nc(14," Add "),e.bc(),e.bc(),e.bc(),e.cc(15,"div",9),e.Xb(16,"hr"),e.bc(),e.cc(17,"div",10),e.cc(18,"p",7),e.Nc(19,"Road to ladakh"),e.bc(),e.bc(),e.cc(20,"div",9),e.Xb(21,"hr"),e.bc(),e.cc(22,"div",11),e.cc(23,"table",12),e.cc(24,"thead"),e.cc(25,"tr"),e.cc(26,"th",13),e.Nc(27,"S.No"),e.bc(),e.cc(28,"th",13),e.Nc(29,"Title"),e.bc(),e.cc(30,"th",13),e.Nc(31,"content"),e.bc(),e.Xb(32,"th",13),e.bc(),e.bc(),e.Lc(33,N,3,8,"tbody",14),e.bc(),e.cc(34,"div",15),e.Xb(35,"img",16),e.bc(),e.bc(),e.cc(36,"div",17),e.cc(37,"div",18),e.cc(38,"pagination-template",19,20),e.kc("pageChange",(function(t){return i.pageChangeEvent(t)})),e.cc(40,"nav",21),e.cc(41,"ul",22),e.cc(42,"li",23),e.cc(43,"a",24),e.kc("click",(function(){e.Dc(t);const i=e.Cc(39);return!i.isFirstPage()&&i.previous()})),e.cc(44,"span",25),e.Nc(45,"\xab"),e.bc(),e.cc(46,"span",26),e.Nc(47,"Previous"),e.bc(),e.bc(),e.bc(),e.Lc(48,J,3,2,"li",27),e.cc(49,"li",23),e.cc(50,"a",28),e.kc("click",(function(){e.Dc(t);const i=e.Cc(39);return!i.isLastPage()&&i.next()})),e.cc(51,"span",25),e.Nc(52,"\xbb"),e.bc(),e.cc(53,"span",26),e.Nc(54,"Next"),e.bc(),e.bc(),e.bc(),e.bc(),e.bc(),e.cc(55,"h4",29),e.Nc(56),e.bc(),e.bc(),e.bc(),e.bc(),e.bc(),e.bc(),e.bc()}if(2&t){const t=e.Cc(39);e.Jb(13),e.tc("routerLink",e.wc(11,D)),e.Jb(20),e.tc("ngIf",i.rows&&i.rows.length),e.Jb(1),e.tc("hidden",!i.isLoading),e.Jb(8),e.Nb("disabled",t.isFirstPage()),e.Jb(6),e.tc("ngForOf",t.pages),e.Jb(1),e.Nb("disabled",t.isLastPage()),e.Jb(7),e.Rc("",i.page," to ",i.pageSize*i.page," of ",i.pageLength," totals")}},directives:[p.c,n.l,o.c,n.k,p.e],pipes:[o.b],styles:[".wd-title[_ngcontent-%COMP%]{width:calc(100% - 175px)/4!important}.wd-content[_ngcontent-%COMP%]{width:calc(100% - 175px)/2!important}.wd-btn[_ngcontent-%COMP%]{width:175px}"]}),t})(),P=(()=>{class t{constructor(){}ngOnInit(){return Object(h.b)(this,void 0,void 0,(function*(){}))}loadData(t,i){return Object(h.b)(this,void 0,void 0,(function*(){}))}goBack(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Qb({type:t,selectors:[["app-detail"]],decls:1,vars:0,template:function(t,i){1&t&&e.Nc(0,"\ndetail categorie")},styles:["@media print{.btn.btn-danger[_ngcontent-%COMP%], .btn.btn-flat-default[_ngcontent-%COMP%]{display:none}}"]}),t})();var F=c("arBS"),q=c("ucZH"),B=c("eQ+J"),T=c("1jS7"),W=c("CzEO");const R=["uploaderThumbnail"],z=["uploaderBanner"],$=["uploader"];function E(t,i){if(1&t){const t=e.dc();e.cc(0,"div",48),e.cc(1,"button",49),e.kc("click",(function(){e.Dc(t);const c=i.$implicit;return e.oc(3).removeBannerImg(c)})),e.Nc(2,"x"),e.bc(),e.Xb(3,"img",50),e.bc()}if(2&t){const t=i.$implicit;e.Jb(3),e.tc("src",t.realPath,e.Gc)}}function G(t,i){if(1&t&&(e.ac(0),e.Lc(1,E,4,1,"div",47),e.Zb()),2&t){const t=e.oc(2);e.Jb(1),e.tc("ngForOf",t.data.sliders)}}function M(t,i){if(1&t){const t=e.dc();e.cc(0,"div",48),e.cc(1,"button",49),e.kc("click",(function(){e.Dc(t);const c=i.$implicit;return e.oc(3).removeGalleryImg(c)})),e.Nc(2,"x"),e.bc(),e.Xb(3,"img",50),e.bc()}if(2&t){const t=i.$implicit;e.Jb(3),e.tc("src",t.realPath,e.Gc)}}function A(t,i){if(1&t&&(e.ac(0),e.Lc(1,M,4,1,"div",47),e.Zb()),2&t){const t=e.oc(2);e.Jb(1),e.tc("ngForOf",t.data.images)}}function H(t,i){if(1&t){const t=e.dc();e.cc(0,"div",9),e.cc(1,"form",10),e.kc("ngSubmit",(function(){return e.Dc(t),e.oc().submit()})),e.cc(2,"div",11),e.cc(3,"div",12),e.Lc(4,G,2,1,"ng-container",13),e.cc(5,"app-file-uploader",14,15),e.kc("onDone",(function(i){return e.Dc(t),e.oc().endBanner(i)})),e.bc(),e.bc(),e.bc(),e.cc(7,"div",16),e.cc(8,"label"),e.Nc(9,"Road to ladakh Title"),e.bc(),e.Xb(10,"input",17),e.bc(),e.cc(11,"div",16),e.cc(12,"label"),e.Nc(13,"Road to ladakh"),e.bc(),e.cc(14,"quill-editor",18),e.cc(15,"div",19),e.cc(16,"span",20),e.cc(17,"select",21),e.Xb(18,"option",22),e.Xb(19,"option",23),e.Xb(20,"option",24),e.bc(),e.cc(21,"select",25),e.Xb(22,"option",26),e.Xb(23,"option",22),e.Xb(24,"option",27),e.Xb(25,"option",28),e.bc(),e.bc(),e.cc(26,"span",20),e.Xb(27,"button",29),e.Xb(28,"button",30),e.Xb(29,"button",31),e.Xb(30,"button",32),e.bc(),e.cc(31,"span",20),e.Xb(32,"select",33),e.Xb(33,"select",34),e.bc(),e.cc(34,"span",20),e.Xb(35,"button",35),e.Xb(36,"button",36),e.cc(37,"select",37),e.Xb(38,"option",22),e.Xb(39,"option",38),e.Xb(40,"option",39),e.Xb(41,"option",40),e.bc(),e.bc(),e.cc(42,"span",20),e.cc(43,"app-file-uploader",41,42),e.kc("onDone",(function(i){return e.Dc(t),e.oc().endDoc(i)})),e.bc(),e.bc(),e.bc(),e.bc(),e.bc(),e.cc(45,"div",11),e.cc(46,"div",43),e.Lc(47,A,2,1,"ng-container",13),e.cc(48,"app-file-uploader",44,45),e.kc("onDone",(function(i){return e.Dc(t),e.oc().end(i)})),e.bc(),e.bc(),e.bc(),e.cc(50,"button",46),e.Nc(51,"Post"),e.bc(),e.bc(),e.bc()}if(2&t){const t=e.oc();e.Jb(1),e.tc("formGroup",t.form),e.Jb(3),e.tc("ngIf",t.data&&t.data.sliders),e.Jb(1),e.tc("multiple",!0)("edition",t.edition)("endpoint","upload"),e.Jb(2),e.tc("ngClass",t.displayFieldCss(t.form,"title")),e.Jb(4),e.tc("ngClass",t.displayFieldCss(t.form,"content")),e.Jb(32),e.tc("fichier",null==t.data?null:t.data.thumbnail)("endpoint","upload")("multiple",!1),e.Jb(4),e.tc("ngIf",t.data&&t.data.images),e.Jb(1),e.tc("multiple",!0)("edition",t.edition)("endpoint","upload"),e.Jb(2),e.tc("disabled",t.isLoading)}}const Z=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:j},{path:"detail/:date",component:P},{path:"add/:id",component:(()=>{class t{constructor(t,i,c,e,n,a,o){this._categorieService=t,this._roadtoladakhService=i,this._formHelperService=c,this._fb=e,this._toasterService=n,this._route=a,this._utilsService=o,this.existingImages=[],this.id=this._route.snapshot.params.id}ngOnInit(){return Object(h.b)(this,void 0,void 0,(function*(){this.isLoading=!0,yield this.loadData(),this.isLoading=!0,this.form=this._fb.group({title:[this.data?this.data.title:"",s.v.required],content:[this.data?this.data.content:"",s.v.required]}),this.isLoading=!1}))}loadData(){return Object(h.b)(this,void 0,void 0,(function*(){"new"!==this.id?(this.data=yield this._roadtoladakhService.load(this.id).toPromise(),this.data.sliders=this.data.sliders||[],this.existingImages=this.data.images?[...this.data.images,...this.data.sliders]:[]):this.data=new y}))}loadCategories(){return new Promise((t,i)=>Object(h.b)(this,void 0,void 0,(function*(){const i=yield this._categorieService.list(1,100).toPromise();t(i)})))}end(t){return Object(h.b)(this,void 0,void 0,(function*(){t&&(this.existingImages||(this.existingImages=[]),this.existingImages=this.existingImages.concat(t)),yield this.uploaderThumbnail.uploadFileNow()}))}endBanner(t){return Object(h.b)(this,void 0,void 0,(function*(){t&&(this.existingImages||(this.existingImages=[]),this.existingImages=this.existingImages.concat(t)),yield this.uploader.uploadFileNow()}))}onAllDone(){console.log("data this.form.value",this.form.value),console.log("data this.form",this.data);const t=new y(Object.assign(Object.assign(Object.assign({},this.data),this.form.value),{slug:this._utilsService.slugify(this.form.value.title)}));this.data.id&&(t.id=this.data.id),this.data=t,this.data.images||(this.data.images=[]),this.data.images=[...this.existingImages],console.log("data data",this.data);const i=this.data.id?this._roadtoladakhService.update(this.data):this._roadtoladakhService.add(this.data);this.isLoading=!0,i.subscribe(t=>{this._toasterService.success("Success"),this._utilsService.back(),this.isLoading=!1},t=>{this._toasterService.error(t.message),this.isLoading=!1})}submit(){return Object(h.b)(this,void 0,void 0,(function*(){if(!this.form.valid)return this._toasterService.error("Please fill all inputs"),void this._formHelperService.validateAllFormFields(this.form);yield this.uploaderBanner.uploadFileNow()}))}displayFieldCss(t,i){return{"has-error":this._formHelperService.isFieldValid(t,i),"has-feedback":this._formHelperService.isFieldValid(t,i)}}back(){this._utilsService.back()}removeGalleryImg(t){return Object(h.b)(this,void 0,void 0,(function*(){try{if(yield this._utilsService.confirm("Do you really want to remove this pic?")){const i=this.existingImages.findIndex(i=>i.id===t.id);this.existingImages.splice(i,1);const c=this.data.images.findIndex(i=>i.id===t.id);this.data.images.splice(c,1)}}catch(i){}}))}removeBannerImg(t){return Object(h.b)(this,void 0,void 0,(function*(){try{if(yield this._utilsService.confirm("Do you really want to remove this pic?")){const i=this.existingImages.findIndex(i=>i.id===t.id);this.existingImages.splice(i,1);const c=this.data.images.findIndex(i=>i.id===t.id);this.data.images.splice(c,1)}}catch(i){}}))}endDoc(t){t&&t.document&&(this.data.thumbnail=t.document),this.onAllDone()}}return t.\u0275fac=function(i){return new(i||t)(e.Wb(F.a),e.Wb(I),e.Wb(q.a),e.Wb(s.d),e.Wb(B.a),e.Wb(p.a),e.Wb(O.a))},t.\u0275cmp=e.Qb({type:t,selectors:[["app-add"]],viewQuery:function(t,i){var c;1&t&&(e.Tc(R,!0),e.Tc(z,!0),e.Tc($,!0)),2&t&&(e.Bc(c=e.lc())&&(i.uploaderThumbnail=c.first),e.Bc(c=e.lc())&&(i.uploaderBanner=c.first),e.Bc(c=e.lc())&&(i.uploader=c.first))},decls:12,vars:1,consts:[["id","admin",1,"main-content","container","pb-3"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"title","font-30"],[1,"title-2"],[1,"btn","btn-secondary","btn-large","capitalize","mt-2",3,"click"],[1,"fa","fa-arrow-left"],["class","col-md-12 d-flex mt-3",4,"ngIf"],[1,"col-md-12","d-flex","mt-3"],["novalidate","",1,"col-sm-12","col-md-12","col-lg-12","pl-0",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-md-12","form-group","pl-0","d-flex","flex-wrap","align-items-center"],[4,"ngIf"],["maxWidth","120px","label","Upload sliders","size","1350 X 400","btnClass","btn-warning","folder","article","typeImage","banner",3,"multiple","edition","endpoint","onDone"],["uploaderBanner",""],[1,"form-group",3,"ngClass"],["type","text","formControlName","title","required","",1,"form-control"],["formControlName","content","required",""],["quill-editor-toolbar",""],[1,"ql-formats"],[1,"ql-font"],["selected",""],["value","serif"],["value","monospace"],[1,"ql-size"],["value","small"],["value","large"],["value","huge"],[1,"ql-bold"],[1,"ql-italic"],[1,"ql-underline"],[1,"ql-strike"],[1,"ql-color"],[1,"ql-background"],["value","ordered",1,"ql-list"],["value","bullet",1,"ql-list"],[1,"ql-align"],["value","center"],["value","right"],["value","justify"],["typeImage","thumbnail","maxWidth","250px","label","Add doc ","btnClass","","isDoc","true","folder","article",3,"fichier","endpoint","multiple","onDone"],["uploaderThumbnail",""],[1,"col-md-12","form-group","pl-0","flex-wrap","d-flex","align-items-center"],["maxWidth","120px","label","Upload more  pictures in grid","btnClass","btn-warning","folder","article","typeImage","gallery",3,"multiple","edition","endpoint","onDone"],["uploader",""],["type","submit",1,"btn","btn-warning","btn-large","capitalize","mt-2",3,"disabled"],["class","m-2 image-container",4,"ngFor","ngForOf"],[1,"m-2","image-container"],["type","button",1,"btn","btn-xs","btn-remove",3,"click"],[1,"img-fluid","img-thumbnail",3,"src"]],template:function(t,i){1&t&&(e.cc(0,"div",0),e.cc(1,"div",1),e.cc(2,"div",2),e.cc(3,"div",3),e.cc(4,"h4",4),e.Nc(5,"Road to ladakh/Updates"),e.bc(),e.cc(6,"p",5),e.Nc(7,"Road to ladakh "),e.bc(),e.cc(8,"button",6),e.kc("click",(function(){return i.back()})),e.Xb(9,"i",7),e.Nc(10," Back "),e.bc(),e.bc(),e.Lc(11,H,52,15,"div",8),e.bc(),e.bc(),e.bc()),2&t&&(e.Jb(11),e.tc("ngIf",i.form))},directives:[n.l,s.x,s.o,s.h,T.a,n.j,s.c,s.n,s.f,s.u,W.a,s.r,s.w,n.k],styles:[".btn-remove[_ngcontent-%COMP%]{position:absolute;background:#dcdcdc;padding:5px;margin-left:135px;top:-10px;border-radius:50%}"]}),t})()}];let V=(()=>{class t{}return t.\u0275mod=e.Ub({type:t}),t.\u0275inj=e.Tb({factory:function(i){return new(i||t)},imports:[[p.f.forChild(Z)],p.f]}),t})();c.d(i,"RoadtoladakhModule",(function(){return Q})),Object(n.w)(l.a,"fr-FR");let Q=(()=>{class t{}return t.\u0275mod=e.Ub({type:t}),t.\u0275inj=e.Tb({factory:function(i){return new(i||t)},providers:[{provide:e.y,useValue:"fr-FR"}],imports:[[n.b,a.b,s.j,s.t,o.a,V,d.e,b.b,u.a,W.b.forRoot({modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}]]}})]]}),t})()}}]);