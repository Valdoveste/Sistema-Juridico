import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewStatusProcessComponent } from './dialog-view-status-process.component';

describe('DialogViewStatusProcessComponent', () => {
  let component: DialogViewStatusProcessComponent;
  let fixture: ComponentFixture<DialogViewStatusProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewStatusProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewStatusProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
