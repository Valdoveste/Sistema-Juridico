import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddVaraComponent } from './dialog-add-vara.component';

describe('DialogAddVaraComponent', () => {
  let component: DialogAddVaraComponent;
  let fixture: ComponentFixture<DialogAddVaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddVaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddVaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
