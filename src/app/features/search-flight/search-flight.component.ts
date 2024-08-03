import { Component } from '@angular/core';
import { FlightService } from '../../../shared/services/flight-services/flight.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FlightDTO } from '../../../shared/models/flight.dto';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.scss'
})
export class SearchFlightComponent {

  public searchForm!: FormGroup;
  flightsResult: FlightDTO[] = [];

  constructor(private flightService: FlightService,
              private formBuilder: FormBuilder){}

  date: Date | undefined;

  ngOnInit(){
    this.initializeForm();
  }

  searchFlight(){
    this.flightService.searchFlightsByCriteria(this.searchForm.value).subscribe(result => {
      this.flightsResult = result;
    })
  }

  initializeForm(){
    this.searchForm = this.formBuilder.group({
      from: new FormControl(),
      destination: new FormControl(),
      departureDate: new FormControl()
    })
  }

}
