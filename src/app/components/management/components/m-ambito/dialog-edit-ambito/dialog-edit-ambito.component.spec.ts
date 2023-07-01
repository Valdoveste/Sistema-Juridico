import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAmbitoComponent } from './dialog-edit-ambito.component';

describe('DialogEditAmbitoComponent', () => {
  let component: DialogEditAmbitoComponent;
  let fixture: ComponentFixture<DialogEditAmbitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditAmbitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditAmbitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
