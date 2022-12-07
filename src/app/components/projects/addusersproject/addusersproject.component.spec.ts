import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusersprojectComponent } from './addusersproject.component';

describe('AddusersprojectComponent', () => {
  let component: AddusersprojectComponent;
  let fixture: ComponentFixture<AddusersprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddusersprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddusersprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
