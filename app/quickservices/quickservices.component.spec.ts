import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickservicesComponent } from './quickservices.component';

describe('QuickservicesComponent', () => {
  let component: QuickservicesComponent;
  let fixture: ComponentFixture<QuickservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
