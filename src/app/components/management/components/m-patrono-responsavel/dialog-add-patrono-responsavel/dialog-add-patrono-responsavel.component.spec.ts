import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPatronoResponsavelComponent } from './dialog-add-patrono-responsavel.component';

describe('DialogAddPatronoResponsavelComponent', () => {
  let component: DialogAddPatronoResponsavelComponent;
  let fixture: ComponentFixture<DialogAddPatronoResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddPatronoResponsavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddPatronoResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
