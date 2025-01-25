import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelItemComponent } from './parcel-item.component';

describe('ParcelItemComponent', () => {
  let component: ParcelItemComponent;
  let fixture: ComponentFixture<ParcelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
