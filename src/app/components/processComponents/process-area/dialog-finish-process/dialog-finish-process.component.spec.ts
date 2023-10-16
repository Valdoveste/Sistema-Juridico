import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFinishProcessComponent } from './dialog-finish-process.component';

describe('DialogFinishProcessComponent', () => {
  let component: DialogFinishProcessComponent;
  let fixture: ComponentFixture<DialogFinishProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFinishProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFinishProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
