import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddForoTribunalOrgaoComponent } from './dialog-add-foro-tribunal-orgao.component';

describe('DialogAddForoTribunalOrgaoComponent', () => {
  let component: DialogAddForoTribunalOrgaoComponent;
  let fixture: ComponentFixture<DialogAddForoTribunalOrgaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddForoTribunalOrgaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddForoTribunalOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
