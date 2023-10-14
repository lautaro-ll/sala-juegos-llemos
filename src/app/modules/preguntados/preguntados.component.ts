import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslatorService } from 'src/app/services/translator.service';
import { TriviaService } from 'src/app/services/trivia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent {

  pregunta: string = '';
  opciones: Array<string> = [];
  respuesta: string = '';
  categoria: string = '';
  btnClass: Array<string> = ['btn-dark', 'btn-dark', 'btn-dark', 'btn-dark'];
  puntuacion: number = 0;
  siguiente: boolean = false;
  loading: boolean = false;
  idiomaSel: string = 'en';
  idioma: string = 'en';
  urlImg: string = 'https://tse3.mm.bing.net/th?id=OIP.i-1jivcioovv6RKjklSKdgHaEK&pid=Api';

  constructor(private triviaService: TriviaService, private translatorService: TranslatorService, private http: HttpClient) { }

  ngOnInit(): void {
    this.nextQuestion();
  }

  changeLang(event: any) {
    this.idiomaSel = event.target.value;
  }

  resetLang() {
    this.idioma = this.idiomaSel;
    this.resetGame();
  }

  nextQuestion() {
    Swal.fire({
      title: 'Cargando pregunta...',
      text: 'Respuestas correctas: ' + this.puntuacion,
      didOpen: () => {
        Swal.showLoading();
        this.loading = true;
        this.clear();
        this.getQuestion()
        .then(() => {
          this.opciones = this.shuffle(this.opciones);
          this.siguiente = false;
        })
        .finally(()=>{
          setTimeout(()=>{
            Swal.close(); 
            this.loading = false; 
          },2000);          
        })
        .catch((err:any)=>console.log(err));
      }
    })
  }

  async getQuestion() {
    let indexCateg = Math.floor(Math.random() * 6);
    switch (indexCateg) {
      case 0:
        await this.triviaService.getArte().then((value) => this.loadResponse(value, this.idioma))
        break;
      case 1:
        await this.triviaService.getCiencia().then((value) => this.loadResponse(value, this.idioma));
        break;
      case 2:
        await this.triviaService.getDeportes().then((value) => this.loadResponse(value, this.idioma));
        break;
      case 3:
        await this.triviaService.getEntretenimiento().then((value) => this.loadResponse(value, this.idioma));
        break;
      case 4:
        await this.triviaService.getGeografia().then((value) => this.loadResponse(value, this.idioma));
        break;
      case 5:
        await this.triviaService.getHistoria().then((value) => this.loadResponse(value, this.idioma));
        break;
    }
  }

  loadResponse(response: any, idioma: string) {
    if(idioma == 'es'){
      this.translatorService.get(response.results[0].category).then((value: any) => { this.categoria = value.data.translations.translatedText });
      this.translatorService.get(response.results[0].question).then((value: any) => { 
        this.pregunta = value.data.translations.translatedText;
        this.triviaService.getImage(this.pregunta).then((value: any) => { 
          console.log(value);
          this.urlImg = value.value[0].thumbnailUrl;
        })
      });
      this.translatorService.get(response.results[0].correct_answer).then((value: any) => { 
        this.respuesta = value.data.translations.translatedText
        this.opciones.push(this.respuesta);
      });
      response.results[0].incorrect_answers.forEach((element: string) => {
        this.translatorService.get(element).then((value: any) => { 
          this.opciones.push(value.data.translations.translatedText);
        });  
      });
    }
    else {
      this.categoria = response.results[0].category;
      this.pregunta = response.results[0].question;
      this.triviaService.getImage(this.pregunta).then((value: any) => { 
        console.log(value);
        this.urlImg = value.value[0].thumbnailUrl;
      })
      this.respuesta = response.results[0].correct_answer;
      this.opciones.push(this.respuesta);
      response.results[0].incorrect_answers.forEach((element: string) => {
          this.opciones.push(element);
      });
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

  clickOption(option: number) {
    if(this.opciones[option] == this.respuesta) {
      this.btnClass[option] = 'btn-success';
      this.puntuacion++;
    }
    else {
      this.btnClass[option] = 'btn-danger'; 
      Swal.fire({
        icon: 'error',
        title: 'Perdiste...',
        text: 'Puntos obtenidos: ' + this.puntuacion,
      }).then((result) => {
        this.resetGame();
      })
     
    }
    this.siguiente = true;
  }
  
  clear() {
    this.btnClass = ['btn-dark', 'btn-dark', 'btn-dark', 'btn-dark'];
    this.opciones = [];
  }

  resetGame() {
    this.puntuacion = 0;
    this.nextQuestion();
  }

}
