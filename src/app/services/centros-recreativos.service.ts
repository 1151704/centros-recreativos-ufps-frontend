import { CentroRecreativoApi } from './../models/api/centro-api.model';
import { Observable } from 'rxjs';
import { CentroSalidaApi } from './../models/api/centro-salida-api.model';
import { HttpClient } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';
import { CentrosRecreativosApi } from '../models/api/centros-api.model';

@Injectable({
  providedIn: 'root'
})
export class CentrosRecreativosService {
  baseUrl = API_REST + "centro-recreativo/";

  constructor(private http: HttpClient) { }

  getCentrosRecreativosAll() {
    return this.http.get<CentrosRecreativosApi>(`${this.baseUrl}all`);
  }

  getCentrosRecreativosEnable() {
    return this.http.get<CentrosRecreativosApi>(`${this.baseUrl}enabled`);
  }
  
  saveEstado(enable: boolean, id: number): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl+'enableEdit/'+id+'/'+enable, {});
  }

  getCentroPorId(id: string) {
    return this.http.get<CentroRecreativoApi>(`${this.baseUrl}${id}`);
  }

  saveCentroRecreativo(centro: CentroSalidaApi): Observable<CentroRecreativoApi> {
    return this.http.post<CentroRecreativoApi>(`${this.baseUrl}save`, centro);
  }

}
