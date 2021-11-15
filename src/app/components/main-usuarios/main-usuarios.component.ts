import { NAME_APP } from './../../url.constants';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-usuarios',
  templateUrl: './main-usuarios.component.html',
  styleUrls: ['./main-usuarios.component.css']
})
export class MainUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  info: Usuario;

  constructor(
    private token: TokenStorageService,
    private router: Router,
    private apiService: ApiService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Usuarios`);
    this.token.validate();
    this.info = this.token.getUser();
    this.apiService.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = [];
      if (data.usuarios) {
        this.usuarios = data.usuarios;
      }
    });
  }

  updateUsuarioFromList(usuario: Usuario) {
    for (var i in this.usuarios) {
      if (this.usuarios[i].identificacion == usuario.identificacion) {
        this.usuarios[i] = usuario;
      }
    }
  }

  editUsuario(usuario: Usuario) {
    this.apiService.usuarioService
      .saveEstado(!usuario.enable, usuario.identificacion)
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

  adminUsuario(usuario: Usuario) {
    localStorage.removeItem("editUsuarioId");
    localStorage.setItem("editUsuarioId", usuario.identificacion);
    this.router.navigate(["/main/usuario-edit"]);
  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
