import { CalificacionCentroService } from './calificacion-centro.service';
import { UsuarioService } from './usuario.service';
import { ComunaService } from './comuna.service';
import { CentrosRecreativosService } from './centros-recreativos.service';
import { UtilService } from './util.service';
import { NotificacionService } from './notificacion.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public notifService: NotificacionService,
    public utilService: UtilService,
    public centroService: CentrosRecreativosService,
    public comunaService: ComunaService, 
    public calificacionCentroService: CalificacionCentroService, 
    public usuarioService: UsuarioService) { }
}
