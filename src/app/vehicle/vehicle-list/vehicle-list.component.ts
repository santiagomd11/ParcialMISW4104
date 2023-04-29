import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Array<Vehicle> = []
  constructor(private vehicleService: VehicleService) { }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles =  vehicles;
    });
  }

  getVehiclesNumber(brand: string): number{
    return this.vehicles.filter((vehicle: Vehicle) => vehicle.marca == brand).length
  }

  ngOnInit() {
    this.getVehicles();
  }

}
