(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{gDdP:function(c,t,e){"use strict";e.r(t);var i=e("ofXK"),n=e("ZOsW"),r=e("oOf3"),o=e("3Pt+"),a=e("tyNb"),s=e("mrSG"),b=e("fXoL"),l=e("SZGZ"),d=e("ucZH");const u=function(){return["/slider"]},m=function(){return["/news"]},f=function(){return["/roadtoladakh"]},h=function(){return["/calendar","list"]},v=function(){return["/article"]},p=function(){return["/business-category"]},w=function(){return["/must-to-do"]},g=function(){return["/videos"]},N=function(){return["/gallery"]},k=function(){return["/faq"]},y=function(){return["/categorie"]},L=[{path:"",component:(()=>{class c{constructor(c,t,e){this._utils=c,this._formHelperService=t,this._router=e,this.types=[{label:"type 1"},{label:"type 2"}],this.rows=[{id:"1",nom:"Tsewang Namgyal",phone:"+91 8976565776",email:"mail@mail.com"},{id:"2",nom:"Tsewang Namgyal",phone:"+91 8976565776",email:"mail@mail.com"},{id:"3",nom:"Tsewang Namgyal",phone:"+91 8976565776",email:"mail@mail.com"},{id:"4",nom:"Tsewang Namgyal",phone:"+91 8976565776",email:"mail@mail.com"},{id:"5",nom:"Tsewang Namgyal",phone:"+91 8976565776",email:"mail@mail.com"}],this.isLoading=!1}ngOnInit(){return Object(s.b)(this,void 0,void 0,(function*(){}))}submit(){return Object(s.b)(this,void 0,void 0,(function*(){}))}isFieldValid(c){return this._formHelperService.isFieldValid(this.form,c)}displayFieldCss(c){return{"has-error":this.isFieldValid(c),"has-feedback":this.isFieldValid(c)}}reset(){this.form.reset()}goBack(){this._router.navigate(["/home"])}}return c.\u0275fac=function(t){return new(t||c)(b.Wb(l.a),b.Wb(d.a),b.Wb(a.b))},c.\u0275cmp=b.Qb({type:c,selectors:[["app-post"]],decls:73,vars:22,consts:[["id","admin",1,"main-content","container"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"title"],[1,"title-2"],[1,"btn","btn-secondary","btn-large","capitalize","mt-2",3,"click"],[1,"fa","fa-arrow-left"],[1,"col-md-12","d-flex","mt-2"],[1,"bord",3,"routerLink"],[1,"d-flex","align-items-center","ml-4"],[1,"bord"],[3,"routerLink"]],template:function(c,t){1&c&&(b.cc(0,"div",0),b.cc(1,"div",1),b.cc(2,"div",2),b.cc(3,"div",3),b.cc(4,"h4",4),b.Nc(5,"Welcome Admin."),b.bc(),b.cc(6,"p",5),b.Nc(7,"ADD/UPDATE SITE CONTENT"),b.bc(),b.cc(8,"button",6),b.kc("click",(function(){return t.goBack()})),b.Xb(9,"i",7),b.Nc(10," Back "),b.bc(),b.bc(),b.cc(11,"div",3),b.Xb(12,"hr"),b.bc(),b.cc(13,"div",8),b.cc(14,"a",9),b.cc(15,"h4"),b.Nc(16," Home page"),b.Xb(17,"br"),b.Nc(18," Featured Images "),b.bc(),b.cc(19,"p"),b.Nc(20,"(Slider)"),b.bc(),b.bc(),b.bc(),b.cc(21,"div",8),b.cc(22,"a",9),b.cc(23,"h4"),b.Nc(24," News/Updates "),b.bc(),b.bc(),b.cc(25,"div",10),b.cc(26,"a",9),b.cc(27,"h4"),b.Nc(28," Road status"),b.Xb(29,"br"),b.Nc(30," notification "),b.bc(),b.bc(),b.bc(),b.cc(31,"div",10),b.cc(32,"div",11),b.cc(33,"a",12),b.cc(34,"h4"),b.Nc(35," Calendar "),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(36,"div",8),b.cc(37,"a",9),b.cc(38,"h4"),b.Nc(39," Articles "),b.bc(),b.bc(),b.cc(40,"div",10),b.cc(41,"div",11),b.cc(42,"a",12),b.cc(43,"h4"),b.Nc(44," Business category "),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(45,"div",10),b.cc(46,"div",11),b.cc(47,"a",12),b.cc(48,"h4"),b.Nc(49," Must to do section "),b.bc(),b.bc(),b.cc(50,"p"),b.Nc(51,"(Select featured)"),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(52,"div",8),b.cc(53,"div",11),b.cc(54,"a",12),b.cc(55,"h4"),b.Nc(56," Videos "),b.bc(),b.bc(),b.bc(),b.cc(57,"div",10),b.cc(58,"div",11),b.cc(59,"a",12),b.cc(60,"h4"),b.Nc(61," Photos "),b.bc(),b.cc(62,"p"),b.Nc(63,"(Gallery Images)"),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(64,"div",8),b.cc(65,"div",11),b.cc(66,"a",12),b.cc(67,"h4"),b.Nc(68," FAQ Section "),b.bc(),b.bc(),b.bc(),b.cc(69,"div",10),b.cc(70,"a",9),b.cc(71,"h4"),b.Nc(72," Categories "),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.bc()),2&c&&(b.Jb(14),b.tc("routerLink",b.wc(11,u)),b.Jb(8),b.tc("routerLink",b.wc(12,m)),b.Jb(4),b.tc("routerLink",b.wc(13,f)),b.Jb(7),b.tc("routerLink",b.wc(14,h)),b.Jb(4),b.tc("routerLink",b.wc(15,v)),b.Jb(5),b.tc("routerLink",b.wc(16,p)),b.Jb(5),b.tc("routerLink",b.wc(17,w)),b.Jb(7),b.tc("routerLink",b.wc(18,g)),b.Jb(5),b.tc("routerLink",b.wc(19,N)),b.Jb(7),b.tc("routerLink",b.wc(20,k)),b.Jb(4),b.tc("routerLink",b.wc(21,y)))},directives:[a.e],styles:[""]}),c})()}];let J=(()=>{class c{}return c.\u0275mod=b.Ub({type:c}),c.\u0275inj=b.Tb({factory:function(t){return new(t||c)},imports:[[a.f.forChild(L)],a.f]}),c})();e.d(t,"PostModule",(function(){return F}));let F=(()=>{class c{}return c.\u0275mod=b.Ub({type:c}),c.\u0275inj=b.Tb({factory:function(t){return new(t||c)},imports:[[i.b,J,n.b,o.j,o.t,r.a]]}),c})()},ucZH:function(c,t,e){"use strict";e.d(t,"a",(function(){return r}));var i=e("3Pt+"),n=e("fXoL");let r=(()=>{class c{isFieldValid(c,t){return!c.get(t).valid&&c.get(t).touched}validateAllFormFields(c){Object.keys(c.controls).forEach(t=>{const e=c.get(t);e instanceof i.e?e.markAsTouched({onlySelf:!0}):e instanceof i.g&&this.validateAllFormFields(e)})}passwordMatchValidator(c){return c&&c.get("password").value!==c.get("repeatPassword").value?{notMatching:!0}:null}}return c.\u0275fac=function(t){return new(t||c)},c.\u0275prov=n.Sb({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);