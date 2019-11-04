import {BikeType} from './bike-type';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  region: string;
  city: string;
  passHash: string;
  bikeType: BikeType;
  drivingStyle: number;
  description: string;


  constructor() {
    this.bikeType = new BikeType();
  }
}
