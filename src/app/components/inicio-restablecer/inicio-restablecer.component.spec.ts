import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRestablecerComponent } from './inicio-restablecer.component';

describe('InicioRestablecerComponent', () => {
  let component: InicioRestablecerComponent;
  let fixture: ComponentFixture<InicioRestablecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioRestablecerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRestablecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
