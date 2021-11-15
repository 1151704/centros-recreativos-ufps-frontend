import { TokenStorageService } from './../../services/auth/token-storage.service';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { NAME_APP } from './../../url.constants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-main-perfil',
  templateUrl: './main-perfil.component.html',
  styleUrls: ['./main-perfil.component.css']
})
export class MainPerfilComponent implements OnInit {

  usuario: Usuario = null;

  formPassword: FormGroup;

  constructor(
    private token: TokenStorageService,
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router, private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Perfil`);
    this.token.validate();
    this.usuario = this.token.getUser();

    this.formPassword = this.fb.group(
      {
        password: ["", [Validators.required, Validators.minLength(5)]],
        confirmPassword: [""]
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    let pass = group.value.password;
    let confirmPass = group.value.confirmPassword;

    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    this.apiService.usuarioService
      .savePassword(this.formPassword.value.password)
      .subscribe(
        data => {
          if (data) {
            this.apiService.notifService.success(
              "Hecho",
              "La contraseña ha sido actualizada"
            );
            this.router.navigate(["/main"]);
          } else {
            this.apiService.notifService.error(
              "Error",
              "No se actualizo la contraseña"
            );
          }
        },
        error => {
          console.log(error);
          this.apiService.notifService.error("Error", error);
        }
      );
    this.formPassword.reset();
  }

}
