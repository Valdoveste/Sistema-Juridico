import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditForoTribunalOrgaoComponent } from './dialog-edit-foro-tribunal-orgao.component';

describe('DialogEditForoTribunalOrgaoComponent', () => {
  let component: DialogEditForoTribunalOrgaoComponent;
  let fixture: ComponentFixture<DialogEditForoTribunalOrgaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditForoTribunalOrgaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditForoTribunalOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
