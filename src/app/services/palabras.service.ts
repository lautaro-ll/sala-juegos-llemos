import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, lastValueFrom, take, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  constructor(private http: HttpClient) {  }
  
  api: string = 'https://clientes.api.greenborn.com.ar/public-random-word';

  // get(): Observable<any> {
  //   return this.http.get(this.api);    
  // }

  async get(): Promise<any> {
    return await lastValueFrom<any>(this.http.get(this.api).pipe(take(1)));
  }

}
