import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeletePatronoResponsavelComponent } from './dialog-delete-patrono-responsavel.component';

describe('DialogDeletePatronoResponsavelComponent', () => {
  let component: DialogDeletePatronoResponsavelComponent;
  let fixture: ComponentFixture<DialogDeletePatronoResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeletePatronoResponsavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeletePatronoResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
