import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteForoTribunalOrgaoComponent } from './dialog-delete-foro-tribunal-orgao.component';

describe('DialogDeleteForoTribunalOrgaoComponent', () => {
  let component: DialogDeleteForoTribunalOrgaoComponent;
  let fixture: ComponentFixture<DialogDeleteForoTribunalOrgaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteForoTribunalOrgaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteForoTribunalOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
