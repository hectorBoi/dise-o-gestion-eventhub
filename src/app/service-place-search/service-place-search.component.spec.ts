import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePlaceSearchComponent } from './service-place-search.component';

describe('ServicePlaceSearchComponent', () => {
  let component: ServicePlaceSearchComponent;
  let fixture: ComponentFixture<ServicePlaceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePlaceSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicePlaceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
