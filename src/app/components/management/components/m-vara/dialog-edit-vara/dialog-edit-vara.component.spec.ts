import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditVaraComponent } from './dialog-edit-vara.component';

describe('DialogEditVaraComponent', () => {
  let component: DialogEditVaraComponent;
  let fixture: ComponentFixture<DialogEditVaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditVaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditVaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
