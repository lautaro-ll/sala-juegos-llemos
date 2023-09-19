import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent {
  constructor(private autenticacionService: AutenticacionService, private usuariosService: UsuariosService) { }

  usuario?: Usuario;
  id: string = "";

  ngOnInit(): void {
    // this.usuariosService.currentLoginState.subscribe(msg => this.id = msg);
    this.traerUsuario(this.id);
  }

  public async traerUsuario(id: string) {
    await this.usuariosService.traer(id).then((respuesta) => {
      this.usuario = respuesta;
    });
  }
}
