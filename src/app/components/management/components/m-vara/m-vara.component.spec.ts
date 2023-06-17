import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVaraComponent } from './m-vara.component';

describe('MVaraComponent', () => {
  let component: MVaraComponent;
  let fixture: ComponentFixture<MVaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MVaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MVaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
