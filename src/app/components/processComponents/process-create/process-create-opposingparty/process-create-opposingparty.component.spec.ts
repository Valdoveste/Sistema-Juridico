import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreateOpposingpartyComponent } from './process-create-opposingparty.component';

describe('ProcessCreateOpposingpartyComponent', () => {
  let component: ProcessCreateOpposingpartyComponent;
  let fixture: ComponentFixture<ProcessCreateOpposingpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCreateOpposingpartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessCreateOpposingpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
