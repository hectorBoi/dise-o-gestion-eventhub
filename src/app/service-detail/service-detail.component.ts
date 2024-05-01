import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service/model/Service';
import { ServicesService } from '../service/services.service';
import { EventService } from '../event/event.service';
import { Event } from '../event/model/Event';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  serviceId: number = 0;
  thisService = new Service("", "", "", "", "", "", "", 0, "", "");
  allEvents: Event[] = [];
  selectedEvent: number = 0;

  constructor(private route : ActivatedRoute, private servicesService : ServicesService, private eventService : EventService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.serviceId = Number(params['id']);
    });
    this.servicesService.findServiceById(this.serviceId).subscribe( service => {
      if(service != null){
        this.thisService = service;
        console.log(this.thisService);
      } else{
        console.log("No se encontro el servicio");
      }
    }
    );
    this.eventService.findAllEvents().subscribe(events => {
      this.allEvents = events;
    });

  };
  onSubmit(): void {
    console.log(Number(this.selectedEvent));
    let event : Event;
    this.eventService.findEventById(Number(this.selectedEvent)).subscribe(event => {
      if(event != null){
        this.eventService.subsribeEvent(event.id, this.thisService.id).subscribe(event => {
          console.log("event");
        });
      }else{
        console.log("No se encontro el evento");
      }
    });
  }

}
