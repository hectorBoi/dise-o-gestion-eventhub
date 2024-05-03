import { Component , OnInit} from '@angular/core';
import { EventService } from './event.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from './model/Event';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../service/services.service';
import { Service } from '../service/model/Service';


@Component({
  selector: 'app-event',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent  implements OnInit{
  eventId : number = 0;
  services : Service[] = [];
  thisEvent = new Event("", new Date(), "", 0);
  constructor(private eventService : EventService, private route : ActivatedRoute, private servicesService : ServicesService) {
   
  }
  fetchEvents(): void {
    this.route.params.subscribe(params => {
      this.eventId = Number(params['id'] );
    });
    this.eventService.findEventById(this.eventId).subscribe(event => {
      if(event != null){
        this.thisEvent = event;
        console.log(this.thisEvent);
        this.servicesService.findServicesByServicesId(this.thisEvent.idServices).subscribe(newServices => {
          this.services = newServices;
          for (let service of this.services) {
            this.thisEvent.actualCost += service.price;
          }
        });  
      }
    });
  }
  ngOnInit(): void {
    this.fetchEvents();
                                                                   
  };
  removeService(serviceId: number): void {
    this.services = this.services.filter(service => service.id !== serviceId);
  };
 

}
