import { HttpClient } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {
  baseUrl = API_REST + "comuna/";

  constructor(private http: HttpClient) {}

  getComunasAll() {
    return this.http.get<any>(`${this.baseUrl}`);
  }

}
