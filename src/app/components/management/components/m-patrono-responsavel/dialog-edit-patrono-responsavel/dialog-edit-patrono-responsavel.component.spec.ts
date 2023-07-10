import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditPatronoResponsavelComponent } from './dialog-edit-patrono-responsavel.component';

describe('DialogEditPatronoResponsavelComponent', () => {
  let component: DialogEditPatronoResponsavelComponent;
  let fixture: ComponentFixture<DialogEditPatronoResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditPatronoResponsavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditPatronoResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
