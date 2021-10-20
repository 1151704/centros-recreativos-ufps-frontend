import { HttpClient } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentrosRecreativosService {
  baseUrl = API_REST + "centro-recreativo/";

  constructor(private http: HttpClient) { }

  getCentrosRecreativosAll() {
    return this.http.get<any>(`${this.baseUrl}all`);
  }

}
