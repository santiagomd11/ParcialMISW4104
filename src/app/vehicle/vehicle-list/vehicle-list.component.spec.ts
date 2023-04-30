/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { VehicleListComponent } from './vehicle-list.component';
import { Vehicle } from '../vehicle';
import { faker } from '@faker-js/faker';
import { VehicleService } from '../vehicle.service';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehicleListComponent ],
      providers: [VehicleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; ++i) {
      const vehicle = new Vehicle(
        i,
        faker.vehicle.manufacturer(),
        faker.vehicle.fuel(),
        faker.vehicle.vin(),
        faker.date.past(10).getFullYear(),
        0,
        faker.vehicle.color(),
        faker.internet.url()
      );
      component.vehicles.push(vehicle);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Checks para el encabezado
  it('should have four columns in header', () => {
    const headColumns = debug.queryAll(By.css('thead tr th'));
    expect(headColumns.length).toBe(4);
  });

  // Checks para las filas
  it('should have three rows in the table', () => {
    const tableRows = debug.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(3);
  });
});
