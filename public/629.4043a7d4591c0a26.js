"use strict";(self.webpackChunksala_juegos_llemos=self.webpackChunksala_juegos_llemos||[]).push([[629],{2629:(l0,h,s)=>{s.r(h),s.d(h,{LoginModule:()=>s0});var v=s(6814),m=s(969),r=s(95),E={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]},c=s(5879),c0=s(3015),a0=s(2759),O2=s(5597);function e0(a,f){1&a&&(c.ynx(0),c.TgZ(1,"small",10),c._uU(2,"Fomato inv\xe1lido"),c.qZA(),c.BQk())}function r0(a,f){if(1&a&&(c.ynx(0),c.TgZ(1,"small",10),c._uU(2),c.qZA(),c.BQk()),2&a){const l=c.oxw();c.xp6(2),c.hij("La clave debe tener m\xednimo ",null==l.password?null:l.password.getError("minlength").requiredLength," caracteres")}}const i0=[{path:"",component:(()=>{var a;class f{constructor(e,i,n){this.router=e,this.autenticacionService=i,this.usuariosService=n,this.faUser=E,this.error="",this.id=""}ngOnInit(){this.loginForm=new r.cw({mail:new r.NI("",[r.kI.required,r.kI.email]),password:new r.NI("",[r.kI.required,r.kI.minLength(6)])})}get mail(){return this.loginForm.get("mail")}get password(){return this.loginForm.get("password")}login(){this.autenticacionService.login(this.loginForm.get("mail")?.value,this.loginForm.get("password")?.value).then(e=>{this.id=e?.user?.uid,this.usuariosService.updateLoginState(this.id),this.router.navigateByUrl("/bienvenido")}).catch(e=>{console.log(e),(e.code=400)&&((e.message="INVALID_PASSWORD")&&(this.error="Clave incorrectos"),(e.message="EMAIL_NOT_FOUND")&&(this.error="Email no registrado"))})}limpiar(){this.loginForm.controls.mail.setValue(""),this.loginForm.controls.password.setValue(""),this.error=""}goToRegistro(){this.router.navigateByUrl("registro")}completarCampos(e){switch(e){case 1:this.error="",this.loginForm.controls.mail.setValue("pepito@mail.com"),this.loginForm.controls.password.setValue("123456");break;case 2:this.error="",this.loginForm.controls.mail.setValue("juanito@mail.com"),this.loginForm.controls.password.setValue("123456")}}}return(a=f).\u0275fac=function(e){return new(e||a)(c.Y36(m.F0),c.Y36(c0.T),c.Y36(a0.J))},a.\u0275cmp=c.Xpm({type:a,selectors:[["app-login"]],decls:31,vars:6,consts:[[1,"text-center"],[1,"form-signin","w-100","m-auto"],[3,"formGroup","ngSubmit"],[1,"h3","mb-3","fw-normal","text-light"],[1,"form-floating"],["type","email","id","floatingInput","placeholder","nombre@mail.com","formControlName","mail",1,"form-control"],["for","floatingInput"],["type","password","id","floatingPassword","placeholder","Contrase\xf1a","formControlName","password",1,"form-control"],["for","floatingPassword"],[4,"ngIf"],[1,"text-danger"],["type","submit",1,"w-100","btn","btn-lg","btn-primary"],[1,"text-secondary"],["type","submit",1,"w-100","btn","btn-lg","btn-secondary",3,"click"],[1,"w-100","mt-4"],[1,"btn","btn","btn-info","m-1",3,"click"],[3,"icon"]],template:function(e,i){1&e&&(c.TgZ(0,"body",0)(1,"main",1)(2,"form",2),c.NdJ("ngSubmit",function(){return i.login()}),c.TgZ(3,"h1",3),c._uU(4,"Inicio de Sesi\xf3n"),c.qZA(),c.TgZ(5,"div",4),c._UZ(6,"input",5),c.TgZ(7,"label",6),c._uU(8,"Email"),c.qZA()(),c.TgZ(9,"div",4),c._UZ(10,"input",7),c.TgZ(11,"label",8),c._uU(12,"Contrase\xf1a"),c.qZA()(),c.YNc(13,e0,3,0,"ng-container",9),c.YNc(14,r0,3,1,"ng-container",9),c.TgZ(15,"p",10),c._uU(16),c.qZA(),c.TgZ(17,"button",11),c._uU(18,"Ingresar"),c.qZA()(),c._UZ(19,"hr"),c.TgZ(20,"h6",12),c._uU(21," \xbfNo est\xe1s registrado? "),c.qZA(),c.TgZ(22,"button",13),c.NdJ("click",function(){return i.goToRegistro()}),c._uU(23,"Registro"),c.qZA(),c.TgZ(24,"div",14)(25,"h6",12),c._uU(26," Acceso r\xe1pido "),c.qZA(),c.TgZ(27,"button",15),c.NdJ("click",function(){return i.completarCampos(1)}),c._UZ(28,"fa-icon",16),c.qZA(),c.TgZ(29,"button",15),c.NdJ("click",function(){return i.completarCampos(2)}),c._UZ(30,"fa-icon",16),c.qZA()()()()),2&e&&(c.xp6(2),c.Q6J("formGroup",i.loginForm),c.xp6(11),c.Q6J("ngIf",null==i.mail?null:i.mail.hasError("mail")),c.xp6(1),c.Q6J("ngIf",null==i.password?null:i.password.hasError("minlength")),c.xp6(2),c.Oqu(i.error),c.xp6(12),c.Q6J("icon",i.faUser),c.xp6(2),c.Q6J("icon",i.faUser))},dependencies:[v.O5,O2.BN,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{display:flex;align-items:center;padding-top:40px;padding-bottom:40px;background-color:transparent}.form-signin[_ngcontent-%COMP%]{max-width:330px;padding:15px}.form-signin[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]:focus-within{z-index:2}.form-signin[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}"]}),f})()}];let f0=(()=>{var a;class f{}return(a=f).\u0275fac=function(e){return new(e||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[m.Bz.forChild(i0),m.Bz]}),f})(),s0=(()=>{var a;class f{}return(a=f).\u0275fac=function(e){return new(e||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[v.ez,f0,O2.uH,r.UX]}),f})()}}]);