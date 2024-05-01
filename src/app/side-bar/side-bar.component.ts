import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { EventComponent } from '../event/event.component';
import { ServiceFoodSearchComponent } from '../service-food-search/service-food-search.component';
import { RouterOutlet } from '@angular/router';
import { ServiceDetailComponent } from '../service-detail/service-detail.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    HomeComponent, 
    RouterOutlet, 
    EventComponent,  
    ServiceFoodSearchComponent,
    ServiceDetailComponent
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
