import { CentroSalidaApi } from './../../models/api/centro-salida-api.model';
import { NAME_APP } from './../../url.constants';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { JwtResponse } from './../../auth/jwt-response';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CentroRecreativo } from 'src/app/models/centro.model';

@Component({
  selector: 'app-main-centros-recreativos-registrar',
  templateUrl: './main-centros-recreativos-registrar.component.html',
  styleUrls: ['./main-centros-recreativos-registrar.component.css']
})
export class MainCentrosRecreativosRegistrarComponent implements OnInit {

  comunas = []
  centro: CentroRecreativo;
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
    this.titleService.setTitle(`${NAME_APP} - Registrar centro`);
    this.token.validate();
    this.info = this.token.getInfo();
    this.centro = new CentroRecreativo();
    this.apiService.comunaService.getComunasAll().subscribe(
      data => {
        this.comunas = data.comunas
      }
    )

    this.usuarioForm = this.fb.group({
      nombreCentro: ["", Validators.required],
      descripcionCentro: [""],
      direccionCentro: [""],
      posicionX: ["", Validators.required],
      posicionY: ["", Validators.required],
      comunaId: [null, Validators.required],
    });
  }

  onSubmit() {
    let centroSalida = Object.assign(new CentroSalidaApi(), this.usuarioForm.value);

    this.apiService.centroService.saveCentroRecreativo(centroSalida).subscribe(
      data => {
        if (data.centro) {
          this.router.navigate(["/main/centros"]);
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
