import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonBusquedaComponent } from './boton-busqueda.component';

describe('BotonBusquedaComponent', () => {
  let component: BotonBusquedaComponent;
  let fixture: ComponentFixture<BotonBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonBusquedaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
