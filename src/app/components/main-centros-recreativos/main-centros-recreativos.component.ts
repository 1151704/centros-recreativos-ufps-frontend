import { CentroSalidaApi } from './../../models/api/centro-salida-api.model';
import { NAME_APP } from './../../url.constants';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CentroRecreativo } from 'src/app/models/centro.model';

@Component({
  selector: 'app-main-centros-recreativos',
  templateUrl: './main-centros-recreativos.component.html',
  styleUrls: ['./main-centros-recreativos.component.css']
})
export class MainCentrosRecreativosComponent implements OnInit {

  epss = [];

  constructor(private token: TokenStorageService,
    private router: Router,
    private apiService: ApiService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Centros Recreativos`);
    this.token.validate();
    this.apiService.centroService.getCentrosRecreativosAll()
      .subscribe(data => {
        this.epss = [];
        this.epss.push(...data.centros);
      });
  }

  adminUsuario(usuario: CentroRecreativo) {
    localStorage.removeItem("editCentroId");
    localStorage.setItem("editCentroId", usuario.id.toString());
    this.router.navigate(["/main/centro-edit"]);
  }

  updateUsuarioFromList(usuario: CentroRecreativo) {
    for (var i in this.epss) {
      if (this.epss[i].id == usuario.id) {
        this.epss[i] = usuario;
      }
    }
  }

  editUsuario(usuario: CentroRecreativo) {
    this.apiService.centroService
      .saveEstado(!usuario.enable, usuario.id)
      .subscribe(
        data => {
          usuario.enable = !usuario.enable;
          this.updateUsuarioFromList(usuario);
        },
        error => {
          console.error(error);
          this.apiService.notifService.error("Error", error);
        }
      );
  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
