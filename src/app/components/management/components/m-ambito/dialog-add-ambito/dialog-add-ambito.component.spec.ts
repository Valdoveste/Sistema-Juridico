import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAmbitoComponent } from './dialog-add-ambito.component';

describe('DialogAddAmbitoComponent', () => {
  let component: DialogAddAmbitoComponent;
  let fixture: ComponentFixture<DialogAddAmbitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddAmbitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddAmbitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
