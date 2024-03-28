import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPrincipalComponent } from './dash-principal.component';

describe('DashPrincipalComponent', () => {
  let component: DashPrincipalComponent;
  let fixture: ComponentFixture<DashPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
