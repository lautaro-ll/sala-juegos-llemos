"use strict";(self.webpackChunksala_juegos_llemos=self.webpackChunksala_juegos_llemos||[]).push([[599],{6599:(Z,u,e)=>{e.r(u),e.d(u,{HomeModule:()=>h});var d=e(6814),l=e(969),c=e(5861),o=e(5879),g=e(3015),m=e(2759);const v=[{path:"",component:(()=>{var t;class a{constructor(n,r,s){this.router=n,this.autenticacionService=r,this.usuariosService=s,this.id=""}ngOnInit(){null!=localStorage.getItem("id")&&(this.id=localStorage.getItem("id")),this.usuariosService.currentLoginState.subscribe(n=>this.id=n),""==this.id?this.router.navigateByUrl("/login"):this.traerUsuario(this.id)}traerUsuario(n){var r=this;return(0,c.Z)(function*(){yield r.usuariosService.getUsuario(n).then(s=>{r.usuario=s})})()}logout(){localStorage.clear(),this.autenticacionService.logout(),this.router.navigateByUrl("/login")}}return(t=a).\u0275fac=function(n){return new(n||t)(o.Y36(l.F0),o.Y36(g.T),o.Y36(m.J))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home"]],decls:33,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-dark"],["href","#",1,"navbar-brand","float-md-start"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","border-0"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto","position-absolute",2,"right","0"],[1,"nav-item","active"],["id","linkHome","routerLink","",1,"nav-link"],[1,"nav-item"],["id","linkQuienSoy","routerLink","quiensoy",1,"nav-link"],[1,"nav-item","dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item"],["id","linkLogin","role","button",1,"nav-link",3,"click"],[1,"bg-transparent","text-bg-dark"]],template:function(n,r){1&n&&(o.TgZ(0,"header")(1,"div")(2,"nav",0)(3,"a",1),o._uU(4,"SALA DE JUEGOS"),o.qZA(),o.TgZ(5,"button",2),o._UZ(6,"span",3),o.qZA(),o.TgZ(7,"div",4)(8,"ul",5)(9,"li",6)(10,"a",7),o._uU(11,"Inicio"),o.qZA()(),o.TgZ(12,"li",8)(13,"a",9),o._uU(14,"Qui\xe9n Soy"),o.qZA()(),o.TgZ(15,"li",10)(16,"a",11),o._uU(17," Juegos "),o.qZA(),o.TgZ(18,"ul",12)(19,"li")(20,"a",13),o._uU(21,"Tateti"),o.qZA()(),o.TgZ(22,"li")(23,"a",13),o._uU(24,"Memotest"),o.qZA()(),o.TgZ(25,"li")(26,"a",13),o._uU(27,"Piedra, papel o tijera"),o.qZA()()()(),o.TgZ(28,"li",8)(29,"a",14),o.NdJ("click",function(){return r.logout()}),o._uU(30,"Salir"),o.qZA()()()()()()(),o.TgZ(31,"body",15),o._UZ(32,"router-outlet"),o.qZA())},dependencies:[l.lC,l.rH]}),a})(),children:[{path:"",loadChildren:()=>e.e(841).then(e.bind(e,1841)).then(t=>t.BienvenidoModule)},{path:"quiensoy",loadChildren:()=>e.e(148).then(e.bind(e,1148)).then(t=>t.QuienSoyModule)}]}];let p=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.Bz.forChild(v),l.Bz]}),a})(),h=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez,p]}),a})()}}]);