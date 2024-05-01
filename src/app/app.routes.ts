import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ServiceFoodSearchComponent } from './service-food-search/service-food-search.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'event/:id', component: EventComponent},
    {path: 'service-food', component: ServiceFoodSearchComponent},
    {path: 'service-detail/:id', component: ServiceDetailComponent}
];
