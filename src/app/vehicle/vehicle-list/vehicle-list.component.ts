import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Array<Vehicle> = [];
  constructor(private vehicleService: VehicleService) { }
  brands: Set<string> = new Set();

  getVehicles() {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      this.brands = new Set(this.vehicles.map((vehicle) => vehicle.marca));
    });
  }

  getVehiclesNumber(brand: string): number{
    return this.vehicles.filter((vehicle: Vehicle) => vehicle.marca == brand).length
  }

  ngOnInit() {
    this.getVehicles();
  }

}
