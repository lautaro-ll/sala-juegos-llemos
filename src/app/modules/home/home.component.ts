import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
    this.interceptor.updateOverlayState(true);
    const idloc = localStorage.getItem('id') ?? '';
    this.usuariosService.getUsuario(idloc).then((respuesta) => this.usuario = respuesta) //poner en el login y traer los datos visibles del usuario a un local storage
    .then(() => this.interceptor.updateOverlayState(false))
    // .then(() => console.log(this.usuario)); 
    
    // this.usuariosService.currentLoginState.subscribe(msg => {this.id = msg; console.log(this.id);});
  }

  logout() {
    this.autenticacionService.logout();
  }
}
