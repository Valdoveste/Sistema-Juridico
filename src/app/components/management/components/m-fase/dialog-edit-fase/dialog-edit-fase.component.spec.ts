import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditFaseComponent } from './dialog-edit-fase.component';

describe('DialogEditFaseComponent', () => {
  let component: DialogEditFaseComponent;
  let fixture: ComponentFixture<DialogEditFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditFaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
