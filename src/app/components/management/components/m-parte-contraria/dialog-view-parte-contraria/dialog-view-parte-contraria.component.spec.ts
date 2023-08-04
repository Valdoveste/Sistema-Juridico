import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewParteContrariaComponent } from './dialog-view-parte-contraria.component';

describe('DialogViewParteContrariaComponent', () => {
  let component: DialogViewParteContrariaComponent;
  let fixture: ComponentFixture<DialogViewParteContrariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewParteContrariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewParteContrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
