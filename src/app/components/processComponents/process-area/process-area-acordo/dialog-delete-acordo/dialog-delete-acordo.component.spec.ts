import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAcordoComponent } from './dialog-delete-acordo.component';

describe('DialogDeleteAcordoComponent', () => {
  let component: DialogDeleteAcordoComponent;
  let fixture: ComponentFixture<DialogDeleteAcordoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteAcordoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteAcordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
