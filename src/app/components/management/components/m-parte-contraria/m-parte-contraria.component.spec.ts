import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MParteContrariaComponent } from './m-parte-contraria.component';

describe('MParteContrariaComponent', () => {
  let component: MParteContrariaComponent;
  let fixture: ComponentFixture<MParteContrariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MParteContrariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MParteContrariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
