import { TestBed } from '@angular/core/testing';

import { CalificacionCentroService } from './calificacion-centro.service';

describe('CalificacionCentroService', () => {
  let service: CalificacionCentroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificacionCentroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
