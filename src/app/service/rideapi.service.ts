import { Injectable } from '@angular/core';
import {User} from '../../entity/user';
import {PlanedRide} from '../../entity/planed-ride';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RideapiService {
  user: User;
  listPRides: Array<PlanedRide>;

  constructor(private httpClient: HttpClient) {
    this.getPlannedRides();
    console.log('coucou chui la');
  }

  getPlannedRides(): void {
    this.listPRides = [];
    this.httpClient.get('http://localhost:8000/api/planed_rides')
      .subscribe((result: object) => {
        for (let pRide of result['hydra:member']) {
          let tmp: User = Object.assign(new User(), pRide.organizer);
          this.listPRides.push(Object.assign(new PlanedRide(tmp), pRide));
        }
        console.log(this.listPRides);
      });
  }
}
