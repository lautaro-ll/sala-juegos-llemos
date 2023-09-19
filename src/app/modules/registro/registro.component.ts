import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent {
  
  @ViewChild('swalError', { read: ElementRef }) swalError!: ElementRef<HTMLElement>;
  constructor(private router: Router, private autenticacionService: AutenticacionService, private usuariosService: UsuariosService) { }
  
  regForm!: FormGroup;
  nuevoId:string = "";
  
  ngOnInit(): void {
    this.regForm = new FormGroup({
      nombre: new FormControl("", { validators: [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]+$')], updateOn: 'blur' }),
      mail: new FormControl("", { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
      clave: new FormControl("", { validators: [Validators.required, Validators.minLength(6)], updateOn: 'blur' }),
      repiteClave: new FormControl("", { validators: [Validators.required, Validators.minLength(6)], updateOn: 'blur' })
    });
  }
  
  get nombre() {    return this.regForm.get('nombre');  }
  get mail() {    return this.regForm.get('mail');  }
  get clave() {    return this.regForm.get('clave');  }
  get repiteClave() {    return this.regForm.get('repiteClave');  }

  registrarse() {
    if(this.regForm.valid){      
      this.autenticacionService.guardar(
        this.regForm.get('mail')?.value!,
        this.regForm.get('clave')?.value!)
        .then((id) => {
          this.nuevoId = id!;
          this.usuariosService.guardar(new Usuario(
            this.regForm.get('mail')?.value!,
            this.regForm.get('clave')?.value!,
            this.regForm.get('nombre')?.value!),this.nuevoId)
            .then(() => {
              this.autenticacionService.login(
                this.regForm.get('mail')?.value!,
                this.regForm.get('clave')?.value!)
                .then(() => {
                  this.usuariosService.updateLoginState(this.nuevoId);
                  this.router.navigate(['']);
                })
              })
            }).catch((error) => {    
              if(error.code == 'auth/email-already-in-use') {
                Swal.fire({
                  icon: 'error',
                  title: 'Usuario Existente!',
                  html: 'Ya existe un usuario registrado con ese email.<br>Por favor registrese con un email distinto.',
                });
              }
              else {
                console.log(error.code);
                Swal.fire({
                  icon: 'error',
                  title: 'Lo sentimos!',
                  html: 'Ocurrió un error inesperado.<br>Por favor comuniquese con soporte.',
                });        
              }
            })
    }
    else {
      console.log(this.regForm.valid);
      console.log(this.nombre?.invalid);
      console.log(this.nombre?.dirty);
      console.log(this.nombre?.touched);
    }
  }

  goToLogin() {
    this.router.navigateByUrl("login");
  }
}
