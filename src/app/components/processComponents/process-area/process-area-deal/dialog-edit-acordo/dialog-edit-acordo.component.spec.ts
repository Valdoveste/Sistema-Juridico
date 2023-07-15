import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAcordoComponent } from './dialog-edit-acordo.component';

describe('DialogEditAcordoComponent', () => {
  let component: DialogEditAcordoComponent;
  let fixture: ComponentFixture<DialogEditAcordoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditAcordoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditAcordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
