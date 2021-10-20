import { NAME_APP } from './../../url.constants';
import { ApiService } from './../../services/api.service';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-inicio',
  templateUrl: './main-inicio.component.html',
  styleUrls: ['./main-inicio.component.css']
})
export class MainInicioComponent implements OnInit {

  now = moment();

  info: any = {};

  mesActual = this.now.get('M');
  anioActual = this.now.get('y');

  constructor(private token: TokenStorageService,
    private apiService: ApiService, private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Inicio`);
    this.token.validate();
    this.info = this.token.getInfo();
  }

  isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
