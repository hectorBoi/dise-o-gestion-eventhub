import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ServicePlaceSearchComponent } from './service-place-search/service-place-search.component';
import { ServiceFoodSearchComponent } from './service-food-search/service-food-search.component';
import { ServiceMusicSearchComponent } from './service-music-search/service-music-search.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'event', component: EventComponent},
    {path: 'service-place', component: ServicePlaceSearchComponent},
    {path: 'service-food', component: ServiceFoodSearchComponent},
    {path: 'service-music', component: ServiceMusicSearchComponent},
    {path: 'service-detail', component: ServiceDetailComponent}
];
