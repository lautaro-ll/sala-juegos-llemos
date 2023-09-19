import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(public auth: AngularFireAuth) {}

  login(mail: string, password: string) {
    return this.auth.signInWithEmailAndPassword(mail, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async guardar(mail: string, password: string) {
    return (await this.auth.createUserWithEmailAndPassword(mail, password)).user?.uid;
  }

}
