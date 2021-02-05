import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocoinComponent } from './cryptocoin.component';

describe('CryptocoinComponent', () => {
  let component: CryptocoinComponent;
  let fixture: ComponentFixture<CryptocoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
