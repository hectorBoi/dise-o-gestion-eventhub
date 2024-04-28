import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFoodSearchComponent } from './service-food-search.component';

describe('ServiceFoodSearchComponent', () => {
  let component: ServiceFoodSearchComponent;
  let fixture: ComponentFixture<ServiceFoodSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFoodSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceFoodSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
