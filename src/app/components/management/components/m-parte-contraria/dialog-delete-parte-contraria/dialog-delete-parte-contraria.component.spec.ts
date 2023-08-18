import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteParteContrariaComponent } from './dialog-delete-parte-contraria.component';

describe('DialogDeleteParteContrariaComponent', () => {
  let component: DialogDeleteParteContrariaComponent;
  let fixture: ComponentFixture<DialogDeleteParteContrariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteParteContrariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteParteContrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
