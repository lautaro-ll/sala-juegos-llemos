import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mayor-o-menor',
  templateUrl: './mayor-o-menor.component.html',
  styleUrls: ['./mayor-o-menor.component.scss']
})
export class MayorOMenorComponent {

  constructor() { }
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  cartaAnterior: string = '';
  valorAnterior: number = 0;
  cartaActual: string = '';
  valorActual: number = 0;
  puntuacion: number = 0;
  mazo: Array<string> = [
    '01C', '02C', '03C', '04C', '05C', '06C', '07C', '08C', '09C', '10C', '11C', '12C', '13C',
    '01D', '02D', '03D', '04D', '05D', '06D', '07D', '08D', '09D', '10D', '11D', '12D', '13D',
    '01H', '02H', '03H', '04H', '05H', '06H', '07H', '08H', '09H', '10H', '11H', '12H', '13H',
    '01S', '02S', '03S', '04S', '05S', '06S', '07S', '08S', '09S', '10S', '11S', '12S', '13S'
  ];

  ngOnInit() {
    this.mazo = this.shuffle(this.mazo);
    this.cambiarCartaActual();
  }

  cambiarCartaActual() {
    if (this.mazo.length > 0) {
      let carta = this.mazo.pop();
      this.valorActual = Number.parseInt(carta!.substring(0, 2));
      this.cartaActual = '../../assets/cards/' + carta + '.svg';
    }
    else {
      this.mazo = [
        '01C', '02C', '03C', '04C', '05C', '06C', '07C', '08C', '09C', '10C', '11C', '12C', '13C',
        '01D', '02D', '03D', '04D', '05D', '06D', '07D', '08D', '09D', '10D', '11D', '12D', '13D',
        '01H', '02H', '03H', '04H', '05H', '06H', '07H', '08H', '09H', '10H', '11H', '12H', '13H',
        '01S', '02S', '03S', '04S', '05S', '06S', '07S', '08S', '09S', '10S', '11S', '12S', '13S'
      ];
    }
  }

  shuffle(array: Array<string>) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  clickMayor() {
    this.cartaAnterior = this.cartaActual;
    this.valorAnterior = this.valorActual;
    this.cambiarCartaActual();
    if (this.valorAnterior > this.valorActual) {
      Swal.fire({
        icon: 'error',
        title: 'Perdiste...',
        text: 'Puntos obtenidos: ' + this.puntuacion,
      }).then((result) => {
        this.ReiniciarJuego();
      })
    }
    else {
      this.puntuacion++;
    }
  }

  clickMenor() {
    this.cartaAnterior = this.cartaActual;
    this.valorAnterior = this.valorActual;
    this.cambiarCartaActual();
    if (this.valorAnterior < this.valorActual) {
      Swal.fire({
        icon: 'error',
        title: 'Perdiste...',
        text: 'Puntos obtenidos: ' + this.puntuacion,
      }).then((result) => {
        this.ReiniciarJuego();
      })
    }
    else {
      this.puntuacion++;
    }
  }

  ReiniciarJuego() {
    this.cartaAnterior = '';
    this.valorAnterior = 0;
    this.cartaActual = '';
    this.valorActual = 0;
    this.puntuacion = 0;
    this.cambiarCartaActual();
  }
}
