import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCentrosRecreativosRegistrarComponent } from './main-centros-recreativos-registrar.component';

describe('MainCentrosRecreativosRegistrarComponent', () => {
  let component: MainCentrosRecreativosRegistrarComponent;
  let fixture: ComponentFixture<MainCentrosRecreativosRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCentrosRecreativosRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCentrosRecreativosRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
