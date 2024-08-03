import { Component } from '@angular/core';
import { FlightService } from '../shared/services/flight-services/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flight-demo';
  outputMessage: string = '';

  constructor(public flightService: FlightService){}

  ngOnInit(){
    this.flightService.title2.subscribe(result => {
      this.outputMessage = result;
    })
  }

  readNewMessage(e: string){
    this.outputMessage = e;
  }
}
