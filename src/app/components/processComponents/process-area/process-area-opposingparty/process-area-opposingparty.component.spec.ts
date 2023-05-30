import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAreaOpposingpartyComponent } from './process-area-opposingparty.component';

describe('ProcessAreaOpposingpartyComponent', () => {
  let component: ProcessAreaOpposingpartyComponent;
  let fixture: ComponentFixture<ProcessAreaOpposingpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAreaOpposingpartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAreaOpposingpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
