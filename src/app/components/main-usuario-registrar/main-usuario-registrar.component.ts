import { JwtResponse } from './../../auth/jwt-response';
import { TIPOS_DOCUMENTOS } from './../../data/datos.constants';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { NAME_APP } from './../../url.constants';
import { TipoIdentificacion } from './../../models/tipo-identificacion.model';
import { UsuarioSalidaApi } from './../../models/api/usuario-salida-api.model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-usuario-registrar',
  templateUrl: './main-usuario-registrar.component.html',
  styleUrls: ['./main-usuario-registrar.component.css']
})
export class MainUsuarioRegistrarComponent implements OnInit {

  usuario: Usuario;
  usuarioEdit: Usuario;
  usuarioForm: FormGroup;

  info: JwtResponse;

  tipos = TIPOS_DOCUMENTOS;

  constructor(
    private token: TokenStorageService,
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Registrar usuario`);
    this.token.validate();
    this.info = this.token.getInfo();
    this.usuario = new Usuario();

    this.usuarioForm = this.fb.group({
      nombres: ["", Validators.required],
      apellidos: ["", Validators.required],
      email: ["", Validators.required],
      identificacion: ["", Validators.required],
      tipoId: [this.tipos[0].value, Validators.required],
      auditor: [false]
    });
  }

  onSubmit() {
    this.usuarioEdit = Object.assign({}, this.usuarioForm.value);

    this.usuarioEdit.tipoId = new TipoIdentificacion();
    this.usuarioEdit.tipoId.tipo = this.usuarioForm.get("tipoId").value;

    let usuarioSave = new UsuarioSalidaApi();

    usuarioSave.apellidos = this.usuarioEdit.apellidos;
    usuarioSave.email = this.usuarioEdit.email;
    usuarioSave.enable = true;
    usuarioSave.identificacion = this.usuarioEdit.identificacion;

    usuarioSave.nombres = this.usuarioEdit.nombres;
    usuarioSave.tipoId = this.usuarioForm.get("tipoId").value;
    usuarioSave.rol = 'ROLE_ADMIN';

    this.apiService.usuarioService.saveUsuario(usuarioSave).subscribe(
      data => {
        if (data.usuario) {
          this.router.navigate(["/main/usuarios"]);
        } else {
          this.apiService.notifService.warning('Datos invalidos', 'Los datos enviados no pueden ser procesados');
        }
      },
      error => {
        console.log(error);
        this.apiService.notifService.error("Error", error);
      }
    );
  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
