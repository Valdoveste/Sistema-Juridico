import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddParteContrariaComponent } from './dialog-add-parte-contraria.component';

describe('DialogAddParteContrariaComponent', () => {
  let component: DialogAddParteContrariaComponent;
  let fixture: ComponentFixture<DialogAddParteContrariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddParteContrariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddParteContrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
