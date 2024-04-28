import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMusicSearchComponent } from './service-music-search.component';

describe('ServiceMusicSearchComponent', () => {
  let component: ServiceMusicSearchComponent;
  let fixture: ComponentFixture<ServiceMusicSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceMusicSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceMusicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
