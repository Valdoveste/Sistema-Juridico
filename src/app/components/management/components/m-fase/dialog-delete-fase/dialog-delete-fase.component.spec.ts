import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteFaseComponent } from './dialog-delete-fase.component';

describe('DialogDeleteFaseComponent', () => {
  let component: DialogDeleteFaseComponent;
  let fixture: ComponentFixture<DialogDeleteFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteFaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
