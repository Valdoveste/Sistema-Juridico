import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAmbitoComponent } from './dialog-delete-ambito.component';

describe('DialogDeleteAmbitoComponent', () => {
  let component: DialogDeleteAmbitoComponent;
  let fixture: ComponentFixture<DialogDeleteAmbitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteAmbitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteAmbitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
