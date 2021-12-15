import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalificacionCentroService {
  baseUrl = API_REST + "calificacion/";

  constructor(private http: HttpClient) {}

  getComunaPorId(id: number) {
    return this.http.get<any>(`${this.baseUrl}${id}`);
  }

  saveComuna(centro: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}save`, centro);
  }
}
