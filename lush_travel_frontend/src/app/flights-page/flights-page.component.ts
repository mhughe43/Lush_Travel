import { Component, OnInit } from '@angular/core';


interface Flight {
  id: number;
  airline: string;
  flightNumber: string;
  departureAirport: string;
  destinationAirport: string;
  departureDate: string;
  arrivalDate: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

@Component({
  selector: 'app-flights-page',
  templateUrl: './flights-page.component.html',
  styleUrls: ['./flights-page.component.css']
})
export class FlightsPageComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    this.filteredFlights = this.flights;;
  }

  
  flights: Flight[] = [
    { id: 1, airline: 'Delta', flightNumber: 'DL123', departureAirport: 'LAX', destinationAirport: 'JFK', departureDate: '04/24/2023', arrivalDate: '04/27/2023', departureTime: '8pm', arrivalTime: '1pm', price: 300 },
    { id: 2, airline: 'American Airlines', flightNumber: 'AA456', departureAirport: 'JFK', destinationAirport: 'LAX', departureDate: '05/11/2023', arrivalDate: '05/7/2023', departureTime: '3pm', arrivalTime: '1pm', price: 400 },
    { id: 3, airline: 'United', flightNumber: 'UA789', departureAirport: 'LAX', destinationAirport: 'ORD', departureDate: '06/01/2023', arrivalDate: '06/08/2023', departureTime: '2pm', arrivalTime: '2pm', price: 250 },
    { id: 4, airline: 'Delta', flightNumber: 'DL567', departureAirport: 'ORD', destinationAirport: 'LAX', departureDate: '07/25/2023', arrivalDate: '07/29/2023', departureTime: '8pm', arrivalTime: '1pm', price: 350 },
    { id: 5, airline: 'American Airlines', flightNumber: 'AA890', departureAirport: 'LAX', destinationAirport: 'JFK', departureDate: '04/30/2023', arrivalDate: '05/10/2023', departureTime: '5pm', arrivalTime: '1pm', price: 450 },
    { id: 6, airline: 'United', flightNumber: 'UA234', departureAirport: 'JFK', destinationAirport: 'LAX', departureDate: '05/24/2023', arrivalDate: '05/27/2023', departureTime: '2pm', arrivalTime: '2pm', price: 300 }
  ];

  filteredFlights: Flight[] = [];
  departureAirport: string = '';
  destinationAirport: string = '';
  departureDate: Date | null = null;
  arrivalDate: Date | null = null;
  minPrice: number | null = null;
  maxPrice: number | null = null;

  searchFlights(): void {
    this.filteredFlights = this.flights.filter(flight => {
      if (this.departureAirport && flight.departureAirport.toLowerCase() !== this.departureAirport) {
        return false;
      }
      if (this.destinationAirport && flight.destinationAirport.toLowerCase() !== this.destinationAirport) {
        return false;
      }
      if (this.departureDate && new Date(flight.departureTime) < this.departureDate) {
        return false;
      }
      if (this.arrivalDate && new Date(flight.arrivalTime) > this.arrivalDate) {
        return false;
      }
      if (this.minPrice && flight.price < this.minPrice) {
        return false;
      }
      if (this.maxPrice && flight.price > this.maxPrice) {
        return false;
      }
      return true;
    });
  }
}