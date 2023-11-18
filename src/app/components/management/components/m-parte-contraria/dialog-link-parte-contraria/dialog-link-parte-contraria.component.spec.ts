import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLinkParteContrariaComponent } from './dialog-link-parte-contraria.component';

describe('DialogLinkParteContrariaComponent', () => {
  let component: DialogLinkParteContrariaComponent;
  let fixture: ComponentFixture<DialogLinkParteContrariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLinkParteContrariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLinkParteContrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
