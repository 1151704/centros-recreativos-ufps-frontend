import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detalle-centro',
  templateUrl: './detalle-centro.component.html',
  styleUrls: ['./detalle-centro.component.css']
})
export class DetalleCentroComponent implements OnInit {

  @Input() public centro: any;
  
  @ViewChild("modalClose", { static: false }) modalClose: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  showModal() {
    this.ngOnInit();
  }

  hideModal() {
    this.modalClose.nativeElement.click();
  }

}
