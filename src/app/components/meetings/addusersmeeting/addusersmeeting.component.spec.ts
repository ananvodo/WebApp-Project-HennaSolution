import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusersmeetingComponent } from './addusersmeeting.component';

describe('AddusersmeetingComponent', () => {
  let component: AddusersmeetingComponent;
  let fixture: ComponentFixture<AddusersmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddusersmeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddusersmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
