import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureNonPaComponent } from './facture-non-pa.component';

describe('FactureNonPaComponent', () => {
  let component: FactureNonPaComponent;
  let fixture: ComponentFixture<FactureNonPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureNonPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureNonPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
