import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaucontactComponent } from './displaucontact.component';

describe('DisplaucontactComponent', () => {
  let component: DisplaucontactComponent;
  let fixture: ComponentFixture<DisplaucontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaucontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaucontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
