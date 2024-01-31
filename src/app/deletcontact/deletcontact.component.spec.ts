import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletcontactComponent } from './deletcontact.component';

describe('DeletcontactComponent', () => {
  let component: DeletcontactComponent;
  let fixture: ComponentFixture<DeletcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletcontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
