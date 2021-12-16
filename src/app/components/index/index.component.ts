import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css','./../../../assets/css/fontawesome-all.min.css','./../../../assets/css/main.css']
})
export class IndexComponent implements OnInit {

  constructor( private _CargaScripts: CargarScriptsService) {

    _CargaScripts.Carga(["jquery.min"]);
    _CargaScripts.Carga(["browser.min"]);
    _CargaScripts.Carga(["breakpoints.min"]);

    _CargaScripts.Carga(["util"]);
    _CargaScripts.Carga(["main"]);
  }
  ngOnInit(): void {
  }

}
