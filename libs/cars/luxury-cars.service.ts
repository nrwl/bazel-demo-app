import { Injectable } from '@angular/core';

@Injectable()
export class LuxuryCarService {

  getCars() {
    return [
      "BMW",
      "Mercedes-Benz",
      "Lamborghini",
      "Ferrari",
      "Maserati"
    ];     
  }
}
