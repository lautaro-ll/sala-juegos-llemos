import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, lastValueFrom, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private http: HttpClient) { }

  get(text: string): Promise<any> {
    const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';

    const options = {
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '0d43c1385fmshd3574d57cb15586p1da3e1jsn387a57d6df10',
        'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
      }
    };

    const body = {
      q: text,
      source: 'en',
      target: 'es'
    }

    const encodedParams = new URLSearchParams();
    encodedParams.set('source', 'en');
    encodedParams.set('target', 'es');
    encodedParams.set('q', text);

    return lastValueFrom<any>(this.http.post(url, body, options));
  }
}
