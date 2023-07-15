import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewAndamentoComponent } from './dialog-view-andamento.component';

describe('DialogViewAndamentoComponent', () => {
  let component: DialogViewAndamentoComponent;
  let fixture: ComponentFixture<DialogViewAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
