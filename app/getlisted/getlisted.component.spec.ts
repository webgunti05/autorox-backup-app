import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlistedComponent } from './getlisted.component';

describe('GetlistedComponent', () => {
  let component: GetlistedComponent;
  let fixture: ComponentFixture<GetlistedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetlistedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
