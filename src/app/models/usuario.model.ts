import { TipoIdentificacion } from './tipo-identificacion.model';
import { Rol } from './rol.model';

export class Usuario {

  nombres: string;
  apellidos: string;
  email: string;
  identificacion: string;
  username: string;
  fechaRegistro: string;
  fechaRestablecer: string;
  tipoId: TipoIdentificacion;
  rol: Rol;
  enable: boolean;
  auditor: boolean;

}
