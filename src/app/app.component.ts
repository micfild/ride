import {Component} from '@angular/core';
import {RideapiService} from './service/rideapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ride';


  constructor(public rideservice: RideapiService) {

  }
}
