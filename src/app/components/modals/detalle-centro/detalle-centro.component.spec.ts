import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCentroComponent } from './detalle-centro.component';

describe('DetalleCentroComponent', () => {
  let component: DetalleCentroComponent;
  let fixture: ComponentFixture<DetalleCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
