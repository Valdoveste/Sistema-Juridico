import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAreaAndamentoComponent } from './process-area-andamento.component';

describe('MAndamentoComponent', () => {
  let component: ProcessAreaAndamentoComponent;
  let fixture: ComponentFixture<ProcessAreaAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessAreaAndamentoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProcessAreaAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
