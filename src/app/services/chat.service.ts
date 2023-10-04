import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private db: AngularFireDatabase) {}

  getMessages() {
    return this.db.list('/messages').valueChanges();
  }

  sendMessage(usuario: Usuario, text: string) {
    console.log(usuario);
    let nombre = usuario.nombre;
    let date = new Date();
    this.db.list('/messages').push({
      nombre,
      text,
      fecha: date.toLocaleDateString('es-AR') + ' ' + date.toLocaleTimeString('es-AR') + 'hs',
      createdAt: date.getTime()
    });
  }
}
