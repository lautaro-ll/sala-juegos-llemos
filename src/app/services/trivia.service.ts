import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, lastValueFrom, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  api = 'https://opentdb.com/api.php?amount=1&category=__id__&type=multiple';
  arte: string = '25';
  ciencia: string = '17';
  deportes: string = '21';
  entretenimiento: Array<string> = ['10', '11', '12', '13', '14', '15', '16']
  geografia: string = '22';
  historia: string = '23';

  constructor(private http: HttpClient) { }

  getArte(): Promise<any> {
    return lastValueFrom<any>(this.http.get(this.api.replace("__id__", this.arte)));
  }

  getCiencia(): Promise<any> {
    return lastValueFrom<any>(this.http.get(this.api.replace("__id__", this.ciencia)));
  }

  getDeportes(): Promise<any> {
    return lastValueFrom<any>(this.http.get(this.api.replace("__id__", this.deportes)));
  }

  getEntretenimiento(): Promise<any> {
    let index = Math.floor(Math.random() * 6);
    return lastValueFrom<any>(this.http.get(this.api.replace("__id__", this.entretenimiento[index])));
  }

  getGeografia(): Promise<any> {
    return lastValueFrom<any>(this.http.get(this.api.replace("__id__", this.geografia)));
  }

  getHistoria(): Promise<any> {
    return lastValueFrom<any>(this.http.get(this.api.replace("__id__", this.historia)));
  }


  getImage(text: string): Promise<any> {
  
  const url = 'https://bing-image-search1.p.rapidapi.com/images/search?q='+encodeURIComponent(text)+'&count=1&mkt=es-AR';
  const options = {
    headers: {
      'X-RapidAPI-Key': '0d43c1385fmshd3574d57cb15586p1da3e1jsn387a57d6df10',
      'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
      }
  };

  return lastValueFrom<any>(this.http.get(url,options));
}

}
