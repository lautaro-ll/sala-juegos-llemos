import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private firestore: Firestore) { }
  
  //BehaviorSubject es un tipo de Observable que permite un valor inicial
  private loginState = new BehaviorSubject('');

  //Propiedad que devuelve el estado actual del usuario logueado
  public currentLoginState = this.loginState.asObservable();
  
  //Actualiza el id del usuario logueado
  updateLoginState(id: string) {
    this.loginState.next(id)
  }

  //Define la referencia a la collección de usuarios
  private usuariosRef: CollectionReference<DocumentData> = collection(this.firestore, 'usuarios');

  //Crea un usuario nuevo en la colección
  addUsuario(usuario: Usuario) {
    return addDoc(this.usuariosRef, usuario);
  }

  //Actualiza o crea por id un usuario en la colección
  async setUsuario(usuario: Usuario, id: string) {
    const usuarioDocRef = doc(this.usuariosRef, id);
    usuario.id = id;
    return setDoc(usuarioDocRef, {...usuario});
  }

  //Obtiene un observable con la colección
  getUsuarios() : Observable<Usuario[]> {
    return collectionData(this.usuariosRef, { idField: 'id' }) as Observable<Usuario[]>;
  }

  //Devuelve la subscripción a la colección
  traerSubscripcion(){     
    return this.getUsuarios().subscribe((informacion) => {
      console.log(informacion);
    });
  }
  
  //Devuelve un usuario por id
  async getUsuario(id:string) {    
    var documentData: DocumentData = new Document();
    const querySnapshot = await getDocs(this.usuariosRef);
    querySnapshot.forEach((doc) => {
      if(doc.id == id) {
        documentData = doc.data();
      }
    });
    return new Usuario(documentData['mail'], documentData['password'], documentData['nombre']);
  }

  //Modifica un usuario por mail
  updUsuario(usuario: Usuario) {
    const usuarioDocRef = doc(this.firestore, `usuarios/${usuario.mail}`);
    return updateDoc(usuarioDocRef, {...usuario})
  }

  //Elimina un usuario por id
  delUsuario(id: string) {
    const usuarioDocRef = doc(this.firestore, `usuarios/${id}`);
    return deleteDoc(usuarioDocRef)
  }

}
