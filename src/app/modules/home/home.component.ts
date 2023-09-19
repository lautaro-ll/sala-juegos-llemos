import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private autenticacionService: AutenticacionService, private usuariosService: UsuariosService) { }

  usuario?: Usuario;
  id: string = "";

  ngOnInit(): void {
    // this.usuariosService.currentLoginState.subscribe(msg => this.id = msg);
    // this.traerUsuario(this.id);
    // if(this.id == "")
    //   this.router.navigateByUrl('/login');
  }

  logout() {
    this.autenticacionService.logout();
    this.router.navigateByUrl('/login');
  }

  public async traerUsuario(id: string) {
    // await this.usuariosService.traer(id).then((respuesta) => {
    //   this.usuario = respuesta;
    // });
  }
}
