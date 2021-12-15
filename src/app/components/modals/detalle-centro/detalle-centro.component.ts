import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../../../services/api.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detalle-centro',
  templateUrl: './detalle-centro.component.html',
  styleUrls: ['./detalle-centro.component.css']
})
export class DetalleCentroComponent implements OnInit {

  @Input() public centro: any;
  calificaciones = []
  usuarioForm: FormGroup;
  openCalificacion=false

  @ViewChild("modalClose", { static: false }) modalClose: ElementRef;

  constructor(private apiService: ApiService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.usuarioForm = this.fb.group({
      calificacion: [5],
      nombre: [''],
      correo: [''],
      observacion: [''],
    });
    if (this.centro) {
      this.apiService.calificacionCentroService.getComunaPorId(this.centro.id).subscribe(data => {
        this.calificaciones = data
      })
    }
  }

  onSubmit() {
    let centroSalida = Object.assign({}, this.usuarioForm.value);
    centroSalida.idCentro = this.centro.id
    this.apiService.calificacionCentroService.saveComuna(centroSalida).subscribe(
      data => {
        if (data) {
          this.openCalificacion=false
          this.ngOnInit()
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

  showModal() {
    this.ngOnInit();
  }

  hideModal() {
    this.modalClose.nativeElement.click();
  }

}
