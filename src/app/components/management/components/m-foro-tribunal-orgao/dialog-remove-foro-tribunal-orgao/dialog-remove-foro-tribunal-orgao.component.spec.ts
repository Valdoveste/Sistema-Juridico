import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRemoveForoTribunalOrgaoComponent } from './dialog-remove-foro-tribunal-orgao.component';

describe('DialogRemoveForoTribunalOrgaoComponent', () => {
  let component: DialogRemoveForoTribunalOrgaoComponent;
  let fixture: ComponentFixture<DialogRemoveForoTribunalOrgaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRemoveForoTribunalOrgaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRemoveForoTribunalOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
