import { ComunasApi } from './../models/api/comunas-api.model';
import { Observable } from 'rxjs';
import { ComunaSalidaApi } from './../models/api/comuna-salida-api.model';
import { ComunaApi } from './../models/api/comuna-api.model';
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
    return this.http.get<ComunasApi>(`${this.baseUrl}all`);
  }

  getComunaPorId(id: number) {
    return this.http.get<ComunaApi>(`${this.baseUrl}${id}`);
  }

  saveComuna(centro: ComunaSalidaApi): Observable<ComunaApi> {
    return this.http.post<ComunaApi>(`${this.baseUrl}save`, centro);
  }

}
