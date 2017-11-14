import { Component, OnInit } from '@angular/core';

import { LuxuryCarService } from 'libs/cars';

@Component({
  selector: 'app-root',
  template: `<h2>Luxury Cars</h2>
             <div *ngFor="let car of cars">{{car}}</div>`
})
export class AppComponent implements OnInit {

  cars: string[];

  constructor(private carsService: LuxuryCarService) {}

  ngOnInit() {
    this.cars = this.carsService.getCars();
  }
}
