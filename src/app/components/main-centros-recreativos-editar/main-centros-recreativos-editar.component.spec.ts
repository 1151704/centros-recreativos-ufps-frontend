import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCentrosRecreativosEditarComponent } from './main-centros-recreativos-editar.component';

describe('MainCentrosRecreativosEditarComponent', () => {
  let component: MainCentrosRecreativosEditarComponent;
  let fixture: ComponentFixture<MainCentrosRecreativosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCentrosRecreativosEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCentrosRecreativosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
