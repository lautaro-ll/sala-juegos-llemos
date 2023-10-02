import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent {

  constructor() {}

  errores: string = '';
  palabra: string = '';
  solucion: string = '';

  ngOnInit() {
    this.solucion = 'LAPICERA'; //SIEMPRE MAYUSCULA
    for (let i = 0; i < this.solucion.length; i++) {
      this.palabra += '_';      
    }
  }

  replaceAt(palabra: string, index: number, reemplazo: string): string {
    return palabra.substring(0, index) + reemplazo + palabra.substring(index + reemplazo.length);
  }

  clickLetra(letra: string, $event: MouseEvent) { 
    ($event.target as HTMLButtonElement).disabled = true;
    if(this.solucion.includes(letra)){
      for (let i = 0; i < this.solucion.length; i++) {
        if(this.solucion[i] == letra){
          this.palabra = this.replaceAt(this.palabra, i, letra)
        }
      }
      if(!this.palabra.includes('_')) {
        Swal.fire({
          icon: 'success',
          title: '¡Ganaste!',
          text: 'Volvé a intentar!',        
        }).then((result) => {
          this.ReiniciarJuego();
        })
      }
    } else {
      if(this.errores.length > 4) {
        Swal.fire({
          icon: 'error',
          title: 'Perdiste...',
          text: 'Volvé a intentar!',        
        }).then((result) => {
          this.ReiniciarJuego();
        })
      }
      else {
        this.errores += 'X'
        }
    }
  }

  @ViewChildren('boton') btnElements?: QueryList<ElementRef>;

  ReiniciarJuego() {
    this.errores = '';
    this.palabra = '';

    this.solucion = 'lapicera';
    for (let i = 0; i < this.solucion.length; i++) {
      this.palabra += '_ ';      
    }

    this.btnElements?.forEach(elementRef => {
      const element: HTMLButtonElement = elementRef.nativeElement;
      element.disabled = false;
    });

  }

}
