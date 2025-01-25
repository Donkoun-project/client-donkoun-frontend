import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDonkounWorksComponent } from './how-donkoun-works.component';

describe('HowDonkounWorksComponent', () => {
  let component: HowDonkounWorksComponent;
  let fixture: ComponentFixture<HowDonkounWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowDonkounWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDonkounWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
