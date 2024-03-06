import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomationComponent } from './fomation.component';

describe('FomationComponent', () => {
  let component: FomationComponent;
  let fixture: ComponentFixture<FomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
