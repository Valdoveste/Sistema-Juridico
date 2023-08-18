import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEmpresasComponent } from './dialog-add-empresas.component';

describe('DialogAddEmpresasComponent', () => {
  let component: DialogAddEmpresasComponent;
  let fixture: ComponentFixture<DialogAddEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
