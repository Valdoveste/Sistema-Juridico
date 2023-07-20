import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditEmpresasComponent } from './dialog-edit-empresas.component';

describe('DialogEditEmpresasComponent', () => {
  let component: DialogEditEmpresasComponent;
  let fixture: ComponentFixture<DialogEditEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
