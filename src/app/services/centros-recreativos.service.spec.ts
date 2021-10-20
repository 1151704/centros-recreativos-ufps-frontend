import { TestBed } from '@angular/core/testing';

import { CentrosRecreativosService } from './centros-recreativos.service';

describe('CentrosRecreativosService', () => {
  let service: CentrosRecreativosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosRecreativosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
