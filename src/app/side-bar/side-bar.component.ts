import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { EventComponent } from '../event/event.component';
import { ServicePlaceSearchComponent } from '../service-place-search/service-place-search.component';
import { ServiceMusicSearchComponent } from '../service-music-search/service-music-search.component';
import { ServiceFoodSearchComponent } from '../service-food-search/service-food-search.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    HomeComponent, 
    RouterOutlet, 
    EventComponent, 
    ServicePlaceSearchComponent, 
    ServiceMusicSearchComponent, 
    ServiceFoodSearchComponent
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
