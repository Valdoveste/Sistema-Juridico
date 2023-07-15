import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditMovementComponent } from './dialog-edit-movement.component';

describe('DialogEditMovementComponent', () => {
  let component: DialogEditMovementComponent;
  let fixture: ComponentFixture<DialogEditMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
