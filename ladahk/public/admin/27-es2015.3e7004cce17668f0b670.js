(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{qUUn:function(t,i,e){"use strict";e.r(i);var c=e("fXoL"),n=e("ofXK"),a=e("ZOsW"),s=e("oOf3"),o=e("3Pt+"),r=e("Hfs6"),l=e.n(r),d=e("0IaG"),b=e("7pIB"),u=e("j1ZV"),p=e("tyNb"),g=e("mrSG"),h=e("tLNA"),f=e("tuSX"),m=e("FXLl"),v=e("E8I7"),w=e("s43p"),x=e("VeED");let k=(()=>{class t extends v.a{constructor(t){if(super(t),this.images=[],this.sliders=[],t)for(const i in t)"images"===i?(this.images=t.images.filter(t=>"gallery"===t.type).map(t=>new w.a(t)),this.sliders=t.images.filter(t=>"banner"===t.type).map(t=>new w.a(t))):Object.prototype.hasOwnProperty.call(t,i)&&(this[i]=t[i])}}return Object(g.c)([Object(x.jsonIgnore)()],t.prototype,"sliders",void 0),t})();var y=e("9jwV");let N=(()=>{class t extends m.a{constructor(t){super(t,k,"news","news"),this._httpService=t}}return t.\u0275fac=function(i){return new(i||t)(c.gc(y.a))},t.\u0275prov=c.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var I=e("SZGZ");const S=function(t){return["/news/add",t]};function L(t,i){if(1&t){const t=c.dc();c.cc(0,"tr"),c.cc(1,"td",33),c.Nc(2),c.bc(),c.cc(3,"td",33),c.Nc(4),c.bc(),c.Xb(5,"td",34),c.cc(6,"td",35),c.cc(7,"a",36),c.Nc(8,"EDIT"),c.bc(),c.Nc(9,"\xa0 "),c.cc(10,"a",37),c.kc("click",(function(){c.Dc(t);const e=i.$implicit;return c.oc(2).delete(e)})),c.Nc(11,"DELETE"),c.bc(),c.bc(),c.bc()}if(2&t){const t=i.$implicit;c.Jb(2),c.Oc(t.id),c.Jb(2),c.Oc(t.title),c.Jb(1),c.tc("innerHTML",t.content,c.Ec),c.Jb(2),c.tc("routerLink",c.xc(4,S,t.id))}}const O=function(t,i,e){return{id:"page",itemsPerPage:t,currentPage:i,totalItems:e}};function _(t,i){if(1&t&&(c.cc(0,"tbody",31),c.Lc(1,L,12,6,"tr",32),c.pc(2,"paginate"),c.bc()),2&t){const t=c.oc();c.Jb(1),c.tc("ngForOf",c.qc(2,1,t.rows,c.zc(4,O,t.pageSize,t.page,t.pageLength)))}}function X(t,i){if(1&t){const t=c.dc();c.cc(0,"a",40),c.kc("click",(function(){c.Dc(t);const i=c.oc().$implicit;return c.oc(),c.Cc(39).setCurrent(i.value)})),c.Nc(1),c.bc()}if(2&t){const t=c.oc().$implicit;c.oc();const i=c.Cc(39);c.Nb("active",i.getCurrent()===t.value),c.Jb(1),c.Oc(t.label)}}function C(t,i){if(1&t&&(c.cc(0,"a",41),c.Nc(1),c.bc()),2&t){const t=c.oc().$implicit;c.Jb(1),c.Oc(t.label)}}function J(t,i){if(1&t&&(c.cc(0,"li",24),c.Lc(1,X,2,3,"a",38),c.Lc(2,C,2,1,"a",39),c.bc()),2&t){const t=i.$implicit;c.oc();const e=c.Cc(39);c.Jb(1),c.tc("ngIf",e.getCurrent()!==t.value),c.Jb(1),c.tc("ngIf",e.getCurrent()===t.value)}}const D=function(){return["/news/add","new"]};let j=(()=>{class t extends f.a{constructor(t,i,e,c){super(),this._newsService=t,this._router=i,this._utils=e,this._route=c,this.pageSize=10,this.searchString="",this.rows=new h.a}ngOnInit(){return Object(g.b)(this,void 0,void 0,(function*(){this.isLoading=!0,this._newsService.totalCount$.subscribe(t=>{this.pageLength=t}),yield this.loadData(this.page,this.pageSize),this.isLoading=!1}))}loadData(t,i){return Object(g.b)(this,void 0,void 0,(function*(){this.isLoading=!0,t&&(this.page=t);let e={excerpt:!0};this.searchString&&(e.libelle_contains=this.searchString);try{this.rows=yield this._newsService.list(t,i,e).toPromise(),this.isLoading=!1,this._router.navigate([],{queryParams:{page:this.page||void 0,q:this.searchString||void 0}})}catch(c){this.isLoading=!1,console.error(c)}}))}delete(t){return Object(g.b)(this,void 0,void 0,(function*(){try{(yield this._utils.confirm("Are you really want to delete the news?"))&&(this.isLoading=!0,yield this._newsService.delete(t).toPromise(),yield this.loadData(),this.isLoading=!1)}catch(i){this.isLoading=!1}}))}back(){this._router.navigate(["/post"])}}return t.\u0275fac=function(i){return new(i||t)(c.Wb(N),c.Wb(p.b),c.Wb(I.a),c.Wb(p.a))},t.\u0275cmp=c.Qb({type:t,selectors:[["app-list"]],features:[c.Gb],decls:57,vars:12,consts:[["id","admin",1,"main-content","container"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"title"],[1,"btn","btn-secondary","btn-large","capitalize","mt-2",3,"click"],[1,"fa","fa-arrow-left"],[1,"title-2"],[1,"btn","btn-warning","ml-4",3,"routerLink"],[1,"col-md-12","mt-2"],[1,"col-md-12","d-flex","mt-4"],[1,"col-xs-12","col-md-10","content","table-responsive","mt-4"],[1,"table","table-hover"],[1,"text-left","border-top-0"],[1,"text-left","border-top-0",2,"width","200px"],["class","pt-3",4,"ngIf"],[1,"progress-loader","text-center",3,"hidden"],["src","assets/images/loadbk.gif"],[1,"col-lg-12","pb-4","mt-5","mb-4","footer-pager","text-center"],[1,"col","text-right"],["id","page",3,"pageChange"],["p","paginationApi"],[1,"mx-auto"],[1,"pagination","mx-auto"],[1,"page-item"],[1,"page-link","prev",3,"click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",4,"ngFor","ngForOf"],[1,"page-link","next",3,"click"],[1,"text-center"],[1,"pt-3"],[4,"ngFor","ngForOf"],[1,"text-left"],[1,"text-left",3,"innerHTML"],[1,"td-actions","text-right"],[1,"btn","btn","btn-outline-dark","btn-link","btn-xs",3,"routerLink"],[1,"btn","btn","btn-outline-danger","text-danger","btn-link","btn-xs",3,"click"],["class","page-link",3,"active","click",4,"ngIf"],["class","page-link active",4,"ngIf"],[1,"page-link",3,"click"],[1,"page-link","active"]],template:function(t,i){if(1&t){const t=c.dc();c.cc(0,"div",0),c.cc(1,"div",1),c.cc(2,"div",2),c.cc(3,"div",3),c.cc(4,"h4",4),c.Nc(5,"Welcome Admin."),c.bc(),c.cc(6,"button",5),c.kc("click",(function(){return i.back()})),c.Xb(7,"i",6),c.Nc(8," Back "),c.bc(),c.Xb(9,"br"),c.Xb(10,"br"),c.cc(11,"p",7),c.Nc(12,"List News/Updates "),c.cc(13,"button",8),c.Nc(14," Add "),c.bc(),c.bc(),c.bc(),c.cc(15,"div",9),c.Xb(16,"hr"),c.bc(),c.cc(17,"div",10),c.cc(18,"p",7),c.Nc(19,"News/Updates"),c.bc(),c.bc(),c.cc(20,"div",9),c.Xb(21,"hr"),c.bc(),c.cc(22,"div",11),c.cc(23,"table",12),c.cc(24,"thead"),c.cc(25,"tr"),c.cc(26,"th",13),c.Nc(27,"S.No"),c.bc(),c.cc(28,"th",13),c.Nc(29,"Title"),c.bc(),c.cc(30,"th",13),c.Nc(31,"content"),c.bc(),c.Xb(32,"th",14),c.bc(),c.bc(),c.Lc(33,_,3,8,"tbody",15),c.bc(),c.cc(34,"div",16),c.Xb(35,"img",17),c.bc(),c.bc(),c.cc(36,"div",18),c.cc(37,"div",19),c.cc(38,"pagination-template",20,21),c.kc("pageChange",(function(t){return i.pageChangeEvent(t)})),c.cc(40,"nav",22),c.cc(41,"ul",23),c.cc(42,"li",24),c.cc(43,"a",25),c.kc("click",(function(){c.Dc(t);const i=c.Cc(39);return!i.isFirstPage()&&i.previous()})),c.cc(44,"span",26),c.Nc(45,"\xab"),c.bc(),c.cc(46,"span",27),c.Nc(47,"Previous"),c.bc(),c.bc(),c.bc(),c.Lc(48,J,3,2,"li",28),c.cc(49,"li",24),c.cc(50,"a",29),c.kc("click",(function(){c.Dc(t);const i=c.Cc(39);return!i.isLastPage()&&i.next()})),c.cc(51,"span",26),c.Nc(52,"\xbb"),c.bc(),c.cc(53,"span",27),c.Nc(54,"Next"),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.cc(55,"h4",30),c.Nc(56),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.bc()}if(2&t){const t=c.Cc(39);c.Jb(13),c.tc("routerLink",c.wc(11,D)),c.Jb(20),c.tc("ngIf",i.rows&&i.rows.length),c.Jb(1),c.tc("hidden",!i.isLoading),c.Jb(8),c.Nb("disabled",t.isFirstPage()),c.Jb(6),c.tc("ngForOf",t.pages),c.Jb(1),c.Nb("disabled",t.isLastPage()),c.Jb(7),c.Rc("",i.page," to ",i.pageSize*i.page," of ",i.pageLength," totals")}},directives:[p.c,n.l,s.c,n.k,p.e],pipes:[s.b],styles:[""]}),t})(),F=(()=>{class t{constructor(){}ngOnInit(){return Object(g.b)(this,void 0,void 0,(function*(){}))}loadData(t,i){return Object(g.b)(this,void 0,void 0,(function*(){}))}goBack(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c.Qb({type:t,selectors:[["app-detail"]],decls:1,vars:0,template:function(t,i){1&t&&c.Nc(0,"\ndetail categorie")},styles:["@media print{.btn.btn-danger[_ngcontent-%COMP%], .btn.btn-flat-default[_ngcontent-%COMP%]{display:none}}"]}),t})();var q=e("arBS"),P=e("ucZH"),B=e("eQ+J"),T=e("1jS7"),W=e("CzEO");const z=["uploaderThumbnail"],$=["uploaderBanner"],G=["uploader"];function A(t,i){if(1&t){const t=c.dc();c.cc(0,"div",49),c.cc(1,"button",50),c.kc("click",(function(){c.Dc(t);const e=i.$implicit;return c.oc(3).removeBannerImg(e)})),c.Nc(2,"x"),c.bc(),c.Xb(3,"img",51),c.bc()}if(2&t){const t=i.$implicit;c.Jb(3),c.tc("src",t.realPath,c.Gc)}}function E(t,i){if(1&t&&(c.ac(0),c.Lc(1,A,4,1,"div",48),c.Zb()),2&t){const t=c.oc(2);c.Jb(1),c.tc("ngForOf",t.data.sliders)}}function U(t,i){if(1&t){const t=c.dc();c.cc(0,"div",49),c.cc(1,"button",50),c.kc("click",(function(){c.Dc(t);const e=i.$implicit;return c.oc(3).removeGalleryImg(e)})),c.Nc(2,"x"),c.bc(),c.Xb(3,"img",51),c.bc()}if(2&t){const t=i.$implicit;c.Jb(3),c.tc("src",t.realPath,c.Gc)}}function H(t,i){if(1&t&&(c.ac(0),c.Lc(1,U,4,1,"div",48),c.Zb()),2&t){const t=c.oc(2);c.Jb(1),c.tc("ngForOf",t.data.images)}}function M(t,i){if(1&t){const t=c.dc();c.cc(0,"div",10),c.cc(1,"form",11),c.kc("ngSubmit",(function(){return c.Dc(t),c.oc().submit()})),c.cc(2,"div",12),c.cc(3,"div",13),c.Lc(4,E,2,1,"ng-container",14),c.cc(5,"app-file-uploader",15,16),c.kc("onDone",(function(i){return c.Dc(t),c.oc().endBanner(i)})),c.bc(),c.bc(),c.bc(),c.cc(7,"div",17),c.cc(8,"label"),c.Nc(9,"News Title"),c.bc(),c.Xb(10,"input",18),c.bc(),c.cc(11,"div",17),c.cc(12,"label"),c.Nc(13,"News"),c.bc(),c.cc(14,"quill-editor",19),c.cc(15,"div",20),c.cc(16,"span",21),c.cc(17,"select",22),c.Xb(18,"option",23),c.Xb(19,"option",24),c.Xb(20,"option",25),c.bc(),c.cc(21,"select",26),c.Xb(22,"option",27),c.Xb(23,"option",23),c.Xb(24,"option",28),c.Xb(25,"option",29),c.bc(),c.bc(),c.cc(26,"span",21),c.Xb(27,"button",30),c.Xb(28,"button",31),c.Xb(29,"button",32),c.Xb(30,"button",33),c.bc(),c.cc(31,"span",21),c.Xb(32,"select",34),c.Xb(33,"select",35),c.bc(),c.cc(34,"span",21),c.Xb(35,"button",36),c.Xb(36,"button",37),c.cc(37,"select",38),c.Xb(38,"option",23),c.Xb(39,"option",39),c.Xb(40,"option",40),c.Xb(41,"option",41),c.bc(),c.bc(),c.cc(42,"span",21),c.cc(43,"app-file-uploader",42,43),c.kc("onDone",(function(i){return c.Dc(t),c.oc().endDoc(i)})),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.cc(45,"div",12),c.cc(46,"div",44),c.Lc(47,H,2,1,"ng-container",14),c.cc(48,"app-file-uploader",45,46),c.kc("onDone",(function(i){return c.Dc(t),c.oc().end(i)})),c.bc(),c.bc(),c.bc(),c.cc(50,"button",47),c.Nc(51,"Post"),c.bc(),c.bc(),c.bc()}if(2&t){const t=c.oc();c.Jb(1),c.tc("formGroup",t.form),c.Jb(3),c.tc("ngIf",t.data&&t.data.sliders),c.Jb(1),c.tc("multiple",!0)("edition",t.edition)("endpoint","upload"),c.Jb(2),c.tc("ngClass",t.displayFieldCss(t.form,"title")),c.Jb(4),c.tc("ngClass",t.displayFieldCss(t.form,"content")),c.Jb(32),c.tc("fichier",null==t.data?null:t.data.thumbnail)("endpoint","upload")("multiple",!1),c.Jb(4),c.tc("ngIf",t.data&&t.data.images),c.Jb(1),c.tc("multiple",!0)("edition",t.edition)("endpoint","upload"),c.Jb(2),c.tc("disabled",t.isLoading)}}const Z=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:j},{path:"detail/:date",component:F},{path:"add/:id",component:(()=>{class t{constructor(t,i,e,c,n,a,s){this._categorieService=t,this._newsService=i,this._formHelperService=e,this._fb=c,this._toasterService=n,this._route=a,this._utilsService=s,this.existingImages=[],this.id=this._route.snapshot.params.id}ngOnInit(){return Object(g.b)(this,void 0,void 0,(function*(){this.isLoading=!0,yield this.loadData(),this.isLoading=!0,this.form=this._fb.group({title:[this.data?this.data.title:"",o.v.required],content:[this.data?this.data.content:"",o.v.required]}),this.isLoading=!1}))}loadData(){return Object(g.b)(this,void 0,void 0,(function*(){"new"!==this.id?(this.data=yield this._newsService.load(this.id).toPromise(),this.data.sliders=this.data.sliders||[],this.existingImages=this.data.images?[...this.data.images,...this.data.sliders]:[]):this.data=new k}))}loadCategories(){return new Promise((t,i)=>Object(g.b)(this,void 0,void 0,(function*(){const i=yield this._categorieService.list(1,100).toPromise();t(i)})))}end(t){return Object(g.b)(this,void 0,void 0,(function*(){t&&(this.existingImages||(this.existingImages=[]),this.existingImages=this.existingImages.concat(t)),yield this.uploaderThumbnail.uploadFileNow()}))}endBanner(t){return Object(g.b)(this,void 0,void 0,(function*(){t&&(this.existingImages||(this.existingImages=[]),this.existingImages=this.existingImages.concat(t)),yield this.uploader.uploadFileNow()}))}onAllDone(){const t=new k(Object.assign(Object.assign(Object.assign({},this.data),this.form.value),{slug:this._utilsService.slugify(this.form.value.title)}));this.data.id&&(t.id=this.data.id),this.data=t,this.data.images||(this.data.images=[]),this.data.images=[...this.existingImages];const i=this.data.id?this._newsService.update(this.data):this._newsService.add(this.data);this.isLoading=!0,i.subscribe(t=>{this._toasterService.success("Success"),this._utilsService.back(),this.isLoading=!1},t=>{this._toasterService.error(t.message),this.isLoading=!1})}submit(){return Object(g.b)(this,void 0,void 0,(function*(){if(!this.form.valid)return this._toasterService.error("Please fill all inputs"),void this._formHelperService.validateAllFormFields(this.form);yield this.uploaderBanner.uploadFileNow()}))}displayFieldCss(t,i){return{"has-error":this._formHelperService.isFieldValid(t,i),"has-feedback":this._formHelperService.isFieldValid(t,i)}}back(){this._utilsService.back()}removeGalleryImg(t){return Object(g.b)(this,void 0,void 0,(function*(){try{if(yield this._utilsService.confirm("Do you really want to remove this pic?")){const i=this.existingImages.findIndex(i=>i.id===t.id);this.existingImages.splice(i,1);const e=this.data.images.findIndex(i=>i.id===t.id);this.data.images.splice(e,1)}}catch(i){}}))}removeBannerImg(t){return Object(g.b)(this,void 0,void 0,(function*(){try{if(yield this._utilsService.confirm("Do you really want to remove this pic?")){const i=this.existingImages.findIndex(i=>i.id===t.id);this.existingImages.splice(i,1);const e=this.data.images.findIndex(i=>i.id===t.id);this.data.images.splice(e,1)}}catch(i){}}))}endDoc(t){t&&t.document&&(this.data.thumbnail=t.document),this.onAllDone()}}return t.\u0275fac=function(i){return new(i||t)(c.Wb(q.a),c.Wb(N),c.Wb(P.a),c.Wb(o.d),c.Wb(B.a),c.Wb(p.a),c.Wb(I.a))},t.\u0275cmp=c.Qb({type:t,selectors:[["app-add"]],viewQuery:function(t,i){var e;1&t&&(c.Tc(z,!0),c.Tc($,!0),c.Tc(G,!0)),2&t&&(c.Bc(e=c.lc())&&(i.uploaderThumbnail=e.first),c.Bc(e=c.lc())&&(i.uploaderBanner=e.first),c.Bc(e=c.lc())&&(i.uploader=e.first))},decls:14,vars:1,consts:[["id","admin",1,"main-content","container","pb-3"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"title","font-30"],[1,"title-2"],[1,"s-title","text-center"],[1,"btn","btn-secondary","btn-large","capitalize","mt-2",3,"click"],[1,"fa","fa-arrow-left"],["class","col-md-12 d-flex mt-3",4,"ngIf"],[1,"col-md-12","d-flex","mt-3"],["novalidate","",1,"col-sm-12","col-md-12","col-lg-12","pl-0",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-md-12","form-group","pl-0","d-flex","flex-wrap","align-items-center"],[4,"ngIf"],["maxWidth","120px","label","Upload sliders","size","1350 X 400","btnClass","btn-warning","folder","article","typeImage","banner",3,"multiple","edition","endpoint","onDone"],["uploaderBanner",""],[1,"form-group",3,"ngClass"],["type","text","formControlName","title","required","",1,"form-control"],["formControlName","content","required",""],["quill-editor-toolbar",""],[1,"ql-formats"],[1,"ql-font"],["selected",""],["value","serif"],["value","monospace"],[1,"ql-size"],["value","small"],["value","large"],["value","huge"],[1,"ql-bold"],[1,"ql-italic"],[1,"ql-underline"],[1,"ql-strike"],[1,"ql-color"],[1,"ql-background"],["value","ordered",1,"ql-list"],["value","bullet",1,"ql-list"],[1,"ql-align"],["value","center"],["value","right"],["value","justify"],["typeImage","thumbnail","maxWidth","250px","label","Add doc ","btnClass","","isDoc","true","folder","article",3,"fichier","endpoint","multiple","onDone"],["uploaderThumbnail",""],[1,"col-md-12","form-group","pl-0","flex-wrap","d-flex","align-items-center"],["maxWidth","120px","label","Upload more  pictures in grid","btnClass","btn-warning","folder","article","typeImage","gallery",3,"multiple","edition","endpoint","onDone"],["uploader",""],["type","submit",1,"btn","btn-warning","btn-large","capitalize","mt-2",3,"disabled"],["class","m-2 image-container",4,"ngFor","ngForOf"],[1,"m-2","image-container"],["type","button",1,"btn","btn-xs","btn-remove",3,"click"],[1,"img-fluid","img-thumbnail",3,"src"]],template:function(t,i){1&t&&(c.cc(0,"div",0),c.cc(1,"div",1),c.cc(2,"div",2),c.cc(3,"div",3),c.cc(4,"h4",4),c.Nc(5,"News/Updates"),c.bc(),c.cc(6,"p",5),c.Nc(7,"News "),c.cc(8,"span",6),c.Nc(9,"Can be rearranged as to which articles/Categories appear first"),c.bc(),c.bc(),c.cc(10,"button",7),c.kc("click",(function(){return i.back()})),c.Xb(11,"i",8),c.Nc(12," Back "),c.bc(),c.bc(),c.Lc(13,M,52,15,"div",9),c.bc(),c.bc(),c.bc()),2&t&&(c.Jb(13),c.tc("ngIf",i.form))},directives:[n.l,o.x,o.o,o.h,T.a,n.j,o.c,o.n,o.f,o.u,W.a,o.r,o.w,n.k],styles:[".btn-remove[_ngcontent-%COMP%]{position:absolute;background:#dcdcdc;padding:5px;margin-left:135px;top:-10px;border-radius:50%}"]}),t})()}];let V=(()=>{class t{}return t.\u0275mod=c.Ub({type:t}),t.\u0275inj=c.Tb({factory:function(i){return new(i||t)},imports:[[p.f.forChild(Z)],p.f]}),t})();e.d(i,"NewsModule",(function(){return Q})),Object(n.w)(l.a,"fr-FR");let Q=(()=>{class t{}return t.\u0275mod=c.Ub({type:t}),t.\u0275inj=c.Tb({factory:function(i){return new(i||t)},providers:[{provide:c.y,useValue:"fr-FR"}],imports:[[n.b,a.b,o.j,o.t,s.a,V,d.e,b.b,u.a,W.b.forRoot({modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}]]}})]]}),t})()}}]);