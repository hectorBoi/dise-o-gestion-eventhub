import { Injectable} from '@angular/core';
import { Event } from './model/Event';
import { Observable, BehaviorSubject, of, map, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventDTO } from './model/EventDTO';

@Injectable({
  providedIn: 'root'
})
export class EventService {
 
  private url = "http://localhost:8080/api/events"

  constructor(private http : HttpClient) { 
  }

  findAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }

  createEvent(event: Event) : Observable<Event>{
    let eventDTO = new EventDTO(event.name, event.date, event.type, event.actualCost, event.idServices);
    return this.http.post<Event>(this.url, eventDTO);
     
  }

  findEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.url}/${id}`);
  }

  subsribeEvent(id: number, idService: number): Observable<Event> {
    return this.http.post<Event>(`${this.url}/${id}/subscribe/${idService}`, null);
  }

}

