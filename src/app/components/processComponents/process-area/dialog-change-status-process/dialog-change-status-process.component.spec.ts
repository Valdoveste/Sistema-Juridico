import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeStatusProcessComponent } from './dialog-change-status-process.component';

describe('DialogChangeStatusProcessComponent', () => {
  let component: DialogChangeStatusProcessComponent;
  let fixture: ComponentFixture<DialogChangeStatusProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChangeStatusProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChangeStatusProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
