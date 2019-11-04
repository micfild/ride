import {User} from './user';

export class PlanedRide {
  id: number;
  organizer: User;
  region: string;
  city: string;
  gpx: string;
  StartTime: string;
  duration: number;


  constructor(user: User) {
    this.organizer = user;
  }
}
