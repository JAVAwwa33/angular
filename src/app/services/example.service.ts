import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  public powerUp(basisOfPower: number,
                 exponent: number): number{
    return Math.pow(basisOfPower, exponent);
  }
}
