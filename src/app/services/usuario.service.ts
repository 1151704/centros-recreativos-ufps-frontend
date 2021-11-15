import { UsuarioSalidaApi } from './../models/api/usuario-salida-api.model';
import { UsuarioApi } from './../models/api/usuario-api.model';
import { UsuariosApi } from './../models/api/usuarios-api.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = API_REST + 'usuario/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UsuariosApi> {
    return this.http.get<UsuariosApi>(`${this.baseUrl}all`);
  }

  getUsuariosByRol(rol: string): Observable<UsuariosApi> {
    return this.http.get<UsuariosApi>(`${this.baseUrl}byRol/${rol}`);
  }

  getUsuarioByIdentificacion(identificacion: string): Observable<UsuarioApi> {
    return this.http.get<UsuarioApi>(`${this.baseUrl}byUsuario/${identificacion}`);
  }

  saveUsuario(usuario: UsuarioSalidaApi): Observable<UsuarioApi> {
    return this.http.post<UsuarioApi>(this.baseUrl, usuario);
  }

  updateUsuario(usuario: UsuarioSalidaApi): Observable<UsuarioApi> {
    return this.http.post<UsuarioApi>(`${this.baseUrl}update`, usuario);
  }

  savePassword(password: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}passwordEdit`, password);
  }

  saveEstado(enable: boolean, identificacion: string): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl+'enableEdit/'+identificacion+'/'+enable, {});
  }

}
