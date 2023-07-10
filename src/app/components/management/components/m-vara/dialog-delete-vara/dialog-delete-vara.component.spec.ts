import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteVaraComponent } from './dialog-delete-vara.component';

describe('DialogRemoveVaraComponent', () => {
  let component: DialogDeleteVaraComponent;
  let fixture: ComponentFixture<DialogDeleteVaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteVaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteVaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
