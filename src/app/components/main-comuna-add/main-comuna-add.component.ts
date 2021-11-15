import { JwtResponse } from './../../auth/jwt-response';
import { NAME_APP } from './../../url.constants';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { ApiService } from './../../services/api.service';
import { ComunaSalidaApi } from './../../models/api/comuna-salida-api.model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Comuna } from 'src/app/models/comuna.model';

@Component({
  selector: 'app-main-comuna-add',
  templateUrl: './main-comuna-add.component.html',
  styleUrls: ['./main-comuna-add.component.css']
})
export class MainComunaAddComponent implements OnInit {

  centro: Comuna;
  usuarioForm: FormGroup;

  info: JwtResponse;

  constructor(
    private token: TokenStorageService,
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Registrar comuna`);
    this.token.validate();
    this.info = this.token.getInfo();
    this.centro = new Comuna();
    this.usuarioForm = this.fb.group({
      nombreComuna: ["", Validators.required],
      codigoComuna: ["", Validators.required],
    });
  }

  onSubmit() {
    let centroSalida = Object.assign(new ComunaSalidaApi(), this.usuarioForm.value);

    this.apiService.comunaService.saveComuna(centroSalida).subscribe(
      data => {
        if (data.comuna) {
          this.router.navigate(["/main/comunas"]);
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
