"use strict";(self.webpackChunksala_juegos_llemos=self.webpackChunksala_juegos_llemos||[]).push([[599],{6599:(C,d,t)=>{t.r(d),t.d(d,{HomeModule:()=>h});var g=t(6814),u=t(969),o=t(5879),c=t(3015),p=t(2759),m=t(833),i=t(6697);const v=[{path:"",component:(()=>{var n;class r{constructor(e,a,s,Z){this.router=e,this.autenticacionService=a,this.usuariosService=s,this.interceptor=Z,this.toggleNavbar=!0,this.id=""}ngOnInit(){this.interceptor.updateOverlayState(!0);const e=localStorage.getItem("id")??"";this.usuariosService.getUsuario(e).then(a=>this.usuario=a).then(()=>this.interceptor.updateOverlayState(!1))}logout(){this.autenticacionService.logout()}}return(n=r).\u0275fac=function(e){return new(e||n)(o.Y36(u.F0),o.Y36(c.T),o.Y36(p.J),o.Y36(m._))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-home"]],decls:36,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","p-2","pt-3","border-start","border-bottom","border-end","border-secondary"],[1,"container-fluid"],["routerLink","","title","Hola!",1,"navbar-brand","text-start","w-100"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"border-0","mt-2","top-0","end-0","navbar-toggler","position-absolute",3,"click"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse",3,"ngbCollapse"],[1,"navbar-nav","mr-auto"],["ngbDropdown","",1,"nav-item","dropdown"],["ngbDropdownToggle","","role","button","aria-expanded","false",1,"nav-link","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu-dark"],["ngbDropdownItem","","routerLink","juego1",1,"nav-link"],["ngbDropdownItem","","routerLink","juego2",1,"nav-link"],["ngbDropdownItem","","routerLink","juego3",1,"nav-link"],["ngbDropdownItem","","routerLink","usuario",1,"nav-link"],["ngbDropdownItem","",1,"nav-link",3,"click"],[1,"nav-item","text-nowrap"],["id","linkQuienSoy","routerLink","quiensoy",1,"nav-link"],[1,"bg-transparent","text-bg-dark"]],template:function(e,a){1&e&&(o.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),o._uU(3,"SALA DE JUEGOS"),o.qZA(),o.TgZ(4,"button",3),o.NdJ("click",function(){return a.toggleNavbar=!a.toggleNavbar}),o._UZ(5,"span",4),o.qZA(),o.TgZ(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),o._uU(10," Juegos "),o.qZA(),o.TgZ(11,"ul",9)(12,"li")(13,"a",10),o._uU(14,"Tateti"),o.qZA()(),o.TgZ(15,"li")(16,"a",11),o._uU(17,"Memotest"),o.qZA()(),o.TgZ(18,"li")(19,"a",12),o._uU(20,"Piedra, papel o tijera"),o.qZA()()()(),o.TgZ(21,"li",7)(22,"a",8),o._uU(23),o.qZA(),o.TgZ(24,"ul",9)(25,"li")(26,"a",13),o._uU(27,"Ver perfil"),o.qZA()(),o.TgZ(28,"li")(29,"a",14),o.NdJ("click",function(){return a.logout()}),o._uU(30,"Salir"),o.qZA()()()(),o.TgZ(31,"li",15)(32,"a",16),o._uU(33,"Qui\xe9n Soy"),o.qZA()()()()()(),o.TgZ(34,"div",17),o._UZ(35,"router-outlet"),o.qZA()),2&e&&(o.xp6(6),o.Q6J("ngbCollapse",a.toggleNavbar),o.xp6(17),o.hij(" ",a.usuario.nombre," "))},dependencies:[u.lC,u.rH,i._D,i.jt,i.iD,i.Vi,i.TH],styles:["a[_ngcontent-%COMP%]{cursor:pointer}.dropdown-menu-dark[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{padding-left:1rem}"]}),r})(),children:[{path:"",loadChildren:()=>t.e(841).then(t.bind(t,1841)).then(n=>n.BienvenidoModule)},{path:"quiensoy",loadChildren:()=>t.e(148).then(t.bind(t,1148)).then(n=>n.QuienSoyModule)}]}];let b=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.Bz.forChild(v),u.Bz]}),r})(),h=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[g.ez,b,i.IJ,i.lQ]}),r})()}}]);