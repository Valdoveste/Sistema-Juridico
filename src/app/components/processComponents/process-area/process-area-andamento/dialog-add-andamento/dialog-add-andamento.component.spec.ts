import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAndamentoComponent } from './dialog-add-andamento.component';

describe('DialogAddAndamentoComponent', () => {
  let component: DialogAddAndamentoComponent;
  let fixture: ComponentFixture<DialogAddAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
