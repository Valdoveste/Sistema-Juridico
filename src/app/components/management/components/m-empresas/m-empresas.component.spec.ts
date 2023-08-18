import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEmpresasComponent } from './m-empresas.component';

describe('MEmpresasComponent', () => {
  let component: MEmpresasComponent;
  let fixture: ComponentFixture<MEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
