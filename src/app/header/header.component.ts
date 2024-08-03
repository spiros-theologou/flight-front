import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FlightService } from '../../shared/services/flight-services/flight.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor (public flightService: FlightService){
  }

  items: MenuItem[] | undefined;
  @Input() title!:string;
  @Output() messageForApp = new EventEmitter<string>();

  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home'
      },
      {
          label: 'Features',
          icon: 'pi pi-star'
      },
      {
          label: 'Projects',
          icon: 'pi pi-search',
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope'
      }
    ];
    this.flightService.title2.next("New title");
  }

}
