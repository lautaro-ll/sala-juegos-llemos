import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private autenticacionService: AutenticacionService, private usuariosService: UsuariosService) { }
  faUser = faUser;
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      mail: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }
  get mail(){
    return this.loginForm.get('mail');
  }
  get password(){
    return this.loginForm.get('password');
  }
  error: string = "";
  id:string = "";

  login() {
    this.autenticacionService.login(
      this.loginForm.get('mail')?.value!, 
      this.loginForm.get('password')?.value!)
      .then((user)=> {
        this.id = user?.user?.uid!;
        this.usuariosService.updateLoginState(this.id);
        this.router.navigateByUrl('/bienvenido');
      })
      .catch((err) => {
        console.log(err)
        if(err.code = 400) {
          if(err.message = 'INVALID_PASSWORD')
            this.error = 'Clave incorrectos';
          if(err.message = 'EMAIL_NOT_FOUND')
            this.error = 'Email no registrado';
        }
      });
  }

  limpiar() {
    this.loginForm.controls['mail'].setValue('');
    this.loginForm.controls['password'].setValue('');
    this.error = '';
  }

  goToRegistro() {
    this.router.navigateByUrl("registro");
  }

  completarCampos(id:number) {
    switch(id){
      case 1:
        this.error = '';
        this.loginForm.controls['mail'].setValue('pepito@mail.com');
        this.loginForm.controls['password'].setValue('123456');
        break;
      case 2:
        this.error = '';
        this.loginForm.controls['mail'].setValue('juanito@mail.com');
        this.loginForm.controls['password'].setValue('123456');
        break;
    }
  }
}
