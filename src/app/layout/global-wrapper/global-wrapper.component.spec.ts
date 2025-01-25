import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalWrapperComponent } from './global-wrapper.component';

describe('GlobalWrapperComponent', () => {
  let component: GlobalWrapperComponent;
  let fixture: ComponentFixture<GlobalWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
