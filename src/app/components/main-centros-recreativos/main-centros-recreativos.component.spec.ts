import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCentrosRecreativosComponent } from './main-centros-recreativos.component';

describe('MainCentrosRecreativosComponent', () => {
  let component: MainCentrosRecreativosComponent;
  let fixture: ComponentFixture<MainCentrosRecreativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCentrosRecreativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCentrosRecreativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
