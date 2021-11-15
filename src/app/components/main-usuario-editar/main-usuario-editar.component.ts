import { UsuarioSalidaApi } from './../../models/api/usuario-salida-api.model';
import { JwtResponse } from './../../auth/jwt-response';
import { Rol } from './../../models/rol.model';
import { ROLES } from './../../data/datos.constants';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { NAME_APP } from './../../url.constants';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-usuario-editar',
  templateUrl: './main-usuario-editar.component.html',
  styleUrls: ['./main-usuario-editar.component.css']
})
export class MainUsuarioEditarComponent implements OnInit {

  usuario: Usuario;
  usuarioEdit: Usuario;
  usuarioForm: FormGroup;

  info: JwtResponse;

  roles: Rol[] = ROLES;
  rol: Rol = null;

  constructor(private token: TokenStorageService,
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Editar usuario`);
    this.token.validate();
    this.info = this.token.getInfo();
    this.usuario = new Usuario();

    let usuarioId = window.localStorage.getItem("editUsuarioId");
    if (!usuarioId) {
      this.router.navigate(['/main/usuarios']);
      return;
    }

    this.usuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      identificacion: ['', Validators.required],
      nombreTipoId: ['', Validators.required],
      enable: [''],
    });

    this.apiService.usuarioService.getUsuarioByIdentificacion(usuarioId)
      .subscribe(data => {
        this.usuario = data.usuario;
        this.usuarioForm.patchValue(data.usuario);
        this.usuarioForm.patchValue({
          nombreTipoId: this.usuario.tipoId.descripcion
        });
        this.roles.forEach(element => {
          if (element.rol == this.usuario.rol.rol) {
            this.rol = element;
          }
        });
      })
  }

  onSubmit() {

    this.usuarioEdit = Object.assign({}, this.usuarioForm.value);

    let usuarioSave = new UsuarioSalidaApi();

    usuarioSave.email = this.usuarioEdit.email;
    usuarioSave.enable = this.usuarioEdit.enable;
    usuarioSave.identificacion = this.usuarioEdit.identificacion;

    usuarioSave.rol = this.rol ? this.rol.rol : '';

    this.apiService.usuarioService.updateUsuario(usuarioSave).subscribe(data => {
      this.router.navigate(['/main/usuarios']);
    }, error => {
      console.log(error)
      this.apiService.notifService.error('Error', error);
    });

  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
