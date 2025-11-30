import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Canciones {
   private API_SERVER = 'http://localhost:8080/canciones';

   constructor(private httpClient: HttpClient) { }

   public getAllCanciones(): Observable<any> {
     return this.httpClient.get(this.API_SERVER);}


}
