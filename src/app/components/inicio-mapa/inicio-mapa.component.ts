import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-inicio-mapa',
  templateUrl: './inicio-mapa.component.html',
  styleUrls: ['./inicio-mapa.component.css']
})
export class InicioMapaComponent implements OnInit {
  centros = []
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.centroService.getCentrosRecreativosAll().subscribe(data => {
      this.centros = data.centros;
      this.cargarMapa();
    })
  }

  cargarMapa() {
    if (document.getElementById('myMap')) {

      let myMap = L.map('myMap')

      myMap.setView([7.8785503, -72.4812302], 12)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
        foo: 'bar',
      }).addTo(myMap);

      let comunas = {}

      this.centros.forEach(item => {
        let marker = L.marker([item.posicionX, item.posicionY]).bindPopup(item.nombreCentro)
        
        if (!comunas[item.comunaId.id]) {
          comunas[item.comunaId.id] = {
            'comuna': item.comunaId,
            'markers': [],
            'centros': [],
          }
        }
        comunas[item.comunaId.id].markers.push(marker)
        comunas[item.comunaId.id].centros.push(item)
      })

      var overlayMaps = {};

      for (let id_comuna in comunas) {
        let comuna = comunas[id_comuna]
        overlayMaps[comuna.comuna.nombreComuna] = L.layerGroup(comuna.markers)
      }

      L.control.layers([], overlayMaps).addTo(myMap);

      myMap.doubleClickZoom.disable()
    }
  }

}
