import { Component } from '@angular/core';
import { faDeleteLeft, faCircleUp, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss']
})
export class MastermindComponent {

  faTurnUp = faTurnUp;
  faDeleteLeft = faDeleteLeft;
  faCircleUp = faCircleUp;
  puntuacion: number = 0;
  solucion: Array<string> = [];
  colorSel: Array<string> = [];
  intentos: string[][] = [];
  coincidencias: number[][] = [];
  canGuess: boolean = false;
  topeIntentos: number = 8;
  intentosSel: number = 8;
  coloresSel: number = 4;
  topeColores: number = 4;
  ocultarSol: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.resetGame();
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  changeSettings() {
    this.topeIntentos = this.intentosSel;
    this.topeColores = this.coloresSel;
    this.resetGame();
  }

  addGuess(color: string) {
    if (this.colorSel.length <  this.topeColores)
      this.colorSel.push(color);
    if (this.colorSel.length ==  this.topeColores)
      this.canGuess = true;
  }

  delGuess() {
    this.colorSel.pop();
    this.canGuess = false;
  }

  sendGuess() {
    this.puntuacion++;
    this.intentos.push(this.colorSel);
    this.checkMatchs(this.colorSel);
    console.log(this.colorSel == this.solucion)
    if (this.arrayEquals(this.colorSel, this.solucion)) {
      this.ocultarSol = false;
      this.showWinMsg();
    }
    else if (this.intentos.length == this.topeIntentos) {
      this.ocultarSol = false;
      this.showLoseMsg();
    }
    this.clear();
  }

  arrayEquals(a: any, b: any) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

  checkMatchs(colorSel: Array<string>) {
    let coincidencia: Array<number> = [];
    let solucionAux = this.solucion.slice();
    let colorSelAux = this.colorSel.slice();

    for (let i = 0; i <  this.topeColores; i++) {
      if (colorSelAux[i] == solucionAux[i]) {
        coincidencia.push(2);
        colorSelAux[i] = "x";
        solucionAux[i] = "z";
      }
    }
    
    for (let i = 0; i <  this.topeColores; i++) {
      for (let j = 0; j <  this.topeColores; j++) {
        console.log('indices (i,j)', i, j)
        console.log('colorSelAux[i]', colorSelAux[i])
        console.log('solucionAux[j]', solucionAux[j])  
        if (colorSelAux[i] == solucionAux[j]) {
          coincidencia.push(1);
          colorSelAux[i] = "x";
          solucionAux[j] = "z";
        }
      }
    }

    this.coincidencias.push(coincidencia);
  }

  showWinMsg() {
    Swal.fire({
      icon: 'success',
      title: '¡Ganaste!',
      text: 'Resuelto en ' + this.puntuacion + ' intentos',
    }).then((result) => {
      // this.resetGame();
    })
  }

  showLoseMsg() {
    Swal.fire({
      icon: 'error',
      title: 'Perdiste...',
      text: 'Intentos: ' + this.puntuacion,
    }).then((result) => {
      // this.resetGame();
    })
  }

  clear() {
    this.colorSel = [];
    this.canGuess = false;
  }

  resetGame() {
    this.puntuacion = 0;
    this.intentos = [];
    this.coincidencias = [];
    this.solucion = [];
    this.colorSel = [];
    this.canGuess = false;
    this.ocultarSol = true;
    this.generateSolution();
  }

  generateSolution() {
    for (let index = 0; index <  this.topeColores; index++) {
      let num = Math.floor(Math.random() * 7).toString();
      this.solucion.push('color-' + num);
    }
  }

}
