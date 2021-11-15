import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { NAME_APP } from './../../url.constants';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-comunas',
  templateUrl: './main-comunas.component.html',
  styleUrls: ['./main-comunas.component.css']
})
export class MainComunasComponent implements OnInit {

  epss = [];

  constructor(private token: TokenStorageService,
    private router: Router,
    private apiService: ApiService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Comunas`);
    this.token.validate();
    this.apiService.comunaService.getComunasAll()
      .subscribe(data => {
        this.epss = [];
        this.epss.push(...data.comunas);
      });
  }

  // adminUsuario(usuario: CentroRecreativo) {
  //   localStorage.removeItem("editCentroId");
  //   localStorage.setItem("editCentroId", usuario.id.toString());
  //   this.router.navigate(["/main/centro-edit"]);
  // }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
