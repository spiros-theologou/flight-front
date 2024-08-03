import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SharedModule } from '../../shared/shared.module';
import { FlightResultsComponent } from './results/flight-results/flight-results.component';



@NgModule({
  declarations: [
    SearchFlightComponent,
    FlightResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchFlightComponent,
    FlightResultsComponent
  ]
})
export class FeaturesModule { }
