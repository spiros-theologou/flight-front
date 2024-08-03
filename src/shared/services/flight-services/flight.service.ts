import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchFlightDTO } from '../../models/search-flight.dto';
import { FlightDTO } from '../../models/flight.dto';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url: string = "http://localhost:8080/flights"

  title2: BehaviorSubject<string> = new BehaviorSubject<string>('This is the old title');

  constructor(private httpClient: HttpClient) { }

  searchFlightsByCriteria(dto: SearchFlightDTO): Observable<FlightDTO[]>{
    let uri = this.url + '/search-flights';
    return this.httpClient.post<FlightDTO[]>(uri, dto);
  }
}
