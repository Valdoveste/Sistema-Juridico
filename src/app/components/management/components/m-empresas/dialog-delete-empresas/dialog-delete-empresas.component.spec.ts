import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteEmpresasComponent } from './dialog-delete-empresas.component';

describe('DialogDeleteEmpresasComponent', () => {
  let component: DialogDeleteEmpresasComponent;
  let fixture: ComponentFixture<DialogDeleteEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
