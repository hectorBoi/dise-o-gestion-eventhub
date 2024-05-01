import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Service } from './model/Service';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = "http://localhost:8080/api/services";
  findAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.url);

  }
  createService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.url, service);
    
  }
  findServiceById(id: number): Observable<Service > {
    return this.http.get<Service>(`${this.url}/${id}`);
  }
  findServicesByServicesId(ids : number[]): Observable<Service[]> {
    console.log(ids);
   const params = new HttpParams().set('services', ids.join(','));
    return this.http.get<Service[]>(this.url+"/list", {params});
}
  constructor(private http: HttpClient) {
    console.log("Primera instancia de ServicesService creada " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
   }
}
