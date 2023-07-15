import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewAcordoComponent } from './dialog-view-acordo.component';

describe('DialogViewAcordoComponent', () => {
  let component: DialogViewAcordoComponent;
  let fixture: ComponentFixture<DialogViewAcordoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewAcordoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewAcordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
