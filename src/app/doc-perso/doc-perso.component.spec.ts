import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPersoComponent } from './doc-perso.component';

describe('DocPersoComponent', () => {
  let component: DocPersoComponent;
  let fixture: ComponentFixture<DocPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
