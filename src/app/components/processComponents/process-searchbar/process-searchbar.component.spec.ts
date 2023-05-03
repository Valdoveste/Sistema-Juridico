import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSearchbarComponent } from './process-searchbar.component';

describe('ProcessSearchbarComponent', () => {
  let component: ProcessSearchbarComponent;
  let fixture: ComponentFixture<ProcessSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
