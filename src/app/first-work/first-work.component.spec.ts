import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWorkComponent } from './first-work.component';

describe('FirstWorkComponent', () => {
  let component: FirstWorkComponent;
  let fixture: ComponentFixture<FirstWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
