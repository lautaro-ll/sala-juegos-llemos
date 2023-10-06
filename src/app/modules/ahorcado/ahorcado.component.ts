import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PalabrasService } from 'src/app/services/palabras.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent {

  constructor(private palabrasService: PalabrasService) { }

  ruta: string = '/../../assets/ahorcado/';
  errores: number = 0;
  imagen: string = '';
  palabra: string = '';
  solucion: string = '';
  perdido: boolean = false;
  @ViewChildren('boton') btnElements?: QueryList<ElementRef>;

  ngOnInit() {
    this.getNuevaSolucion();
    this.actualizarImagen();
  }

  getNuevaSolucion() {  //TRAER PALABRA
    this.solucion = ''.toUpperCase();
    this.palabrasService.get().then(
      res => {
        console.log(res[0].toUpperCase());
        this.solucion = res[0].toUpperCase();
        for (let i = 0; i < this.solucion.length; i++) {
          this.palabra += '_';
        }
      });
  }

  actualizarImagen() {
    this.imagen = this.ruta + this.errores + '.svg';
  }

  clickLetra(letra: string, $event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    if (this.solucion.includes(letra)) {
      for (let i = 0; i < this.solucion.length; i++) {
        if (this.solucion[i] == letra) {
          this.palabra = this.replaceAt(this.palabra, i, letra)
        }
      }
      if (!this.palabra.includes('_')) {
        Swal.fire({
          icon: 'success',
          title: '¡Ganaste!',
          text: 'Volvé a intentar!',
        }).then((result) => {
          this.ReiniciarJuego();
        })
      }
    } else {
      if (this.errores > 5) {
        this.perdido = true;
        Swal.fire({
          icon: 'error',
          title: 'Perdiste...',
          text: 'Volvé a intentar!',
        }).then((result) => {
          this.ReiniciarJuego();
        })
      }
      else {
        this.errores++;
        this.actualizarImagen();
      }
    }
  }

  replaceAt(palabra: string, index: number, reemplazo: string): string {
    return palabra.substring(0, index) + reemplazo + palabra.substring(index + reemplazo.length);
  }

  ReiniciarJuego() {
    this.perdido = false;
    this.palabra = '';
    this.errores = 0;
    this.actualizarImagen();
    this.getNuevaSolucion();

    this.btnElements?.forEach(elementRef => {
      const element: HTMLButtonElement = elementRef.nativeElement;
      element.disabled = false;
    });
  }

}
