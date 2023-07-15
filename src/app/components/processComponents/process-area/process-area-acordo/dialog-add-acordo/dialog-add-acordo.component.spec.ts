import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAcordoComponent } from './dialog-add-acordo.component';

describe('DialogAddAcordoComponent', () => {
  let component: DialogAddAcordoComponent;
  let fixture: ComponentFixture<DialogAddAcordoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddAcordoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddAcordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
