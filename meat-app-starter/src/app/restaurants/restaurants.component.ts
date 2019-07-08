import { Component, OnInit } from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantsService} from "./restaurants.service";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})

export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  // ngOnInit - ele espera carregar tudo do componente inclusive as dependecias para depois executar o codigo dentro dele
  ngOnInit() {
    this.restaurants = this.restaurantsService.restaurants()
  }

}
