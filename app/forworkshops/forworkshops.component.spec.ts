import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForworkshopsComponent } from './forworkshops.component';

describe('ForworkshopsComponent', () => {
  let component: ForworkshopsComponent;
  let fixture: ComponentFixture<ForworkshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForworkshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForworkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
