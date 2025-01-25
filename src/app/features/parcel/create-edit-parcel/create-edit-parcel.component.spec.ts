import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditParcelComponent } from './create-edit-parcel.component';

describe('CreateEditParcelComponent', () => {
  let component: CreateEditParcelComponent;
  let fixture: ComponentFixture<CreateEditParcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditParcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
