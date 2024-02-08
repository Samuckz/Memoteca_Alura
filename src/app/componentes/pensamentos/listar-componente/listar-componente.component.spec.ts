import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponenteComponent } from './listar-componente.component';

describe('ListarComponenteComponent', () => {
  let component: ListarComponenteComponent;
  let fixture: ComponentFixture<ListarComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
