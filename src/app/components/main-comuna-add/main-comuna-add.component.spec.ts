import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComunaAddComponent } from './main-comuna-add.component';

describe('MainComunaAddComponent', () => {
  let component: MainComunaAddComponent;
  let fixture: ComponentFixture<MainComunaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComunaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComunaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
