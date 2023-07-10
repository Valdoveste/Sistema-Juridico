import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MForoTribunalOrgaoComponent } from './m-foro-tribunal-orgao.component';

describe('MForoTribunalOrgaoComponent', () => {
  let component: MForoTribunalOrgaoComponent;
  let fixture: ComponentFixture<MForoTribunalOrgaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MForoTribunalOrgaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MForoTribunalOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
