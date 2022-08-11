import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureElecComponent } from './signature-elec.component';

describe('SignatureElecComponent', () => {
  let component: SignatureElecComponent;
  let fixture: ComponentFixture<SignatureElecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureElecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
