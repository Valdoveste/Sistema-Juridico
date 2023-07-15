import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAreaAcordoComponent } from './process-area-acordo.component';

describe('MAcordoComponent', () => {
  let component: ProcessAreaAcordoComponent;
  let fixture: ComponentFixture<ProcessAreaAcordoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessAreaAcordoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProcessAreaAcordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
