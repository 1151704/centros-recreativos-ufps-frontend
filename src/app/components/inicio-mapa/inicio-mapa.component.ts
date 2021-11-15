import { DetalleCentroComponent } from './../modals/detalle-centro/detalle-centro.component';
import { ApiService } from './../../services/api.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-inicio-mapa',
  templateUrl: './inicio-mapa.component.html',
  styleUrls: ['./inicio-mapa.component.css']
})
export class InicioMapaComponent implements OnInit {
  centros = []
  showModal = false
  @ViewChild('modalDetalleCentro', { static: true }) modalDetalleCentro: DetalleCentroComponent;
  @ViewChild("showModalDetalleCentro", { static: false }) showModalDetalleCentro: ElementRef;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.centroService.getCentrosRecreativosEnable().subscribe(data => {
      this.centros = data.centros;
      this.cargarMapa();
    })
  }

  mostrarCentroRecreativo(centro: any){    
    this.showModal=true;
    this.modalDetalleCentro.centro = centro;
    this.showModalDetalleCentro.nativeElement.click();
    this.modalDetalleCentro.showModal();
  }

  cargarMapa() {
    let idMap = 'myMap'
    if (document.getElementById(idMap)) {

      let comunas = {}

      this.centros.forEach(item => {
        try {
          // .bindPopup(item.nombreCentro)
          let marker = L.marker([item.posicionX, item.posicionY]).on('click', (e) => {this.mostrarCentroRecreativo(item)})

          if (!comunas[item.comunaId.id]) {
            comunas[item.comunaId.id] = {
              'comuna': item.comunaId,
              'markers': [],
              'centros': [],
            }
          }
          comunas[item.comunaId.id].markers.push(marker)
          comunas[item.comunaId.id].centros.push(item)
        } catch (error) {
        }
      })

      var overlayMaps = {};
      var comunasLayes = []

      for (let id_comuna in comunas) {
        let comuna = comunas[id_comuna]
        let layer = L.layerGroup(comuna.markers)
        overlayMaps[comuna.comuna.nombreComuna] = layer
        comunasLayes.push(layer)
      }

      let myMap = L.map(idMap, {
        center: [7.8785503, -72.4812302],
        zoom: 13,
        layers: comunasLayes
      })
      myMap.layers = comunasLayes

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
        foo: 'bar',
      }).addTo(myMap);

      L.control.layers([], overlayMaps).addTo(myMap);

      myMap.doubleClickZoom.disable()
    }
  }

}
