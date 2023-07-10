import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPatronoResponsavelComponent } from './m-patrono-responsavel.component';

describe('MPatronoResponsavelComponent', () => {
  let component: MPatronoResponsavelComponent;
  let fixture: ComponentFixture<MPatronoResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPatronoResponsavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPatronoResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
