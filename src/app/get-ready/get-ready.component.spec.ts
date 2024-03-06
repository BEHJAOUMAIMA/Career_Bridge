import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReadyComponent } from './get-ready.component';

describe('GetReadyComponent', () => {
  let component: GetReadyComponent;
  let fixture: ComponentFixture<GetReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetReadyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
