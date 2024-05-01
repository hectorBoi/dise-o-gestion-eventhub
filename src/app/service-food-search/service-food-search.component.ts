import { CommonModule } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../service/services.service';
import { Service } from '../service/model/Service';

@Component({
  selector: 'app-service-food-search',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './service-food-search.component.html',
  styleUrl: './service-food-search.component.css'
})
export class ServiceFoodSearchComponent implements OnInit{
  todosServicios : Service[] = [];
  constructor(private serviceServices : ServicesService) {}
  ngOnInit(): void {
    this.serviceServices.findAllServices().subscribe(services => {
      this.todosServicios = services;
    });
  }

}
