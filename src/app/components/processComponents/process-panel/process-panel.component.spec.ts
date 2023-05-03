import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessPanelComponent } from './process-panel.component';

describe('ProcessPanelComponent', () => {
  let component: ProcessPanelComponent;
  let fixture: ComponentFixture<ProcessPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
