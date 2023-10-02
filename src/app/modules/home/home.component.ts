import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { InterceptorService } from 'src/app/services/interceptor.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private autenticacionService: AutenticacionService, private usuariosService: UsuariosService, private interceptor: InterceptorService) { }

  toggleNavbar = true;
  usuario?: Usuario;
  id: string = "";
  subscription?: Subscription;

  ngOnInit(): void {
    this.interceptor.updateOverlayState(true);

    if(localStorage.getItem('user')) {
      this.usuariosService.updateLoginState(JSON.parse(localStorage.getItem('user')!).uid);
    }

    this.subscription = this.usuariosService.currentLoginState.subscribe((idloc)=>{
      console.log(idloc)
      this.usuariosService.getUsuario(idloc)
      .then((respuesta) => {console.log(respuesta); this.usuario = respuesta}) //poner en el login y traer los datos visibles del usuario a un local storage
      .catch((err)=>{ console.log(err) })
      .then(() => this.interceptor.updateOverlayState(false))
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  logout() {
    this.autenticacionService.logout();
  }
}
