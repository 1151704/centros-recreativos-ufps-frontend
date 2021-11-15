import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComunasComponent } from './main-comunas.component';

describe('MainComunasComponent', () => {
  let component: MainComunasComponent;
  let fixture: ComponentFixture<MainComunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
