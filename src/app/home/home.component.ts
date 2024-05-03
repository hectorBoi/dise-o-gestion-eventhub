import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../event/model/Event';
import { EventService } from '../event/event.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SourceTextModule } from 'vm';
import { ServicesService } from '../service/services.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  todosEventos : Event[] = [];
  recientesEventos : Event[] = [];
  constructor(private eventService : EventService, private servicesService : ServicesService) {}
  
  ngOnInit(): void {
    this.eventService.findAllEvents().subscribe(events => {
      for (let event of events) {
        this.calculateCost(event);
      }
      this.todosEventos = events;
      this.recientesEventos = this.getRecentEvents(events);
      
    });
  };
  calculateCost(event: Event) {
    this.servicesService.findServicesByServicesId(event.idServices).subscribe(services => {
      for (let service of services) {
        event.actualCost += service.price;
      }
    });
  };
  newEvent : Event = new Event("", new Date(), "", 0);
  createEvent() : void {
    const date = new Date(this.newEvent.date);
    this.newEvent.date = date;
    this.eventService.createEvent(this.newEvent).subscribe(event => {
      this.todosEventos = [...this.todosEventos, event];
      this.recientesEventos = this.getRecentEvents(this.todosEventos);
      console.log("Todos eventos:");
      console.log(this.todosEventos);

    });
    
    
    
  };
  private getRecentEvents(events: Event[]): Event[] {

    return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
  }

  
 
}
