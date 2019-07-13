import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import {RestaurantsService} from '../../restaurants/restaurants.service'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //como eu estou em um sublink preciso pegar o id do Pai, por isso deve-se colocar o parent
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
