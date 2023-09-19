import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
// export class UsuariosService {

//   constructor() { }
// }

export class UsuariosService {

  constructor() { }
  
  private loginState: any;
  currentLoginState: any;

  updateLoginState(id: string) {
  }
  
  async guardar(usuario:Usuario,id:string) {
  }
  
  traerSubscripcion(){
  }

  async traer(id:string){
    return new Usuario('mail', 'password', 'nombre');
  }

  modificar(usuario:Usuario){
  }

  eliminar(id: string){
  }

}
