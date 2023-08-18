import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditParteContrariaComponent } from './dialog-edit-parte-contraria.component';

describe('DialogEditParteContrariaComponent', () => {
  let component: DialogEditParteContrariaComponent;
  let fixture: ComponentFixture<DialogEditParteContrariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditParteContrariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditParteContrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
