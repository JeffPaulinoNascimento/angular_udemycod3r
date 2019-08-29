import { Component, OnInit } from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantsService} from "./restaurants.service";
import {animate, state, style, transition, trigger} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height":"0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height":"70px",
        "margin-top":"20px"
      })),
      transition('* => *',animate('250ms 0s ease-in-out'))
    ])
  ]
})

export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'
  restaurants: Restaurant[]

  searchForm: FormGroup
  searchControl: FormControl


  constructor(private restaurantsService: RestaurantsService, private formBuilder: FormBuilder) { }

  // ngOnInit - ele espera carregar tudo do componente inclusive as dependecias para depois executar o codigo dentro dele
  ngOnInit() {
    this.searchControl = this.formBuilder.control('')
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    })
    /**debounceTime -> ele espera 500 milisegundos para acionar o proximo evento, objetivo é esperar o usuario digitar a plavra completa para só então disparar o evento ao banco**/
    /**distinctUntilChange -> se a palvra digitada for igual ele nao dispara ao banco a consulta novamente**/
    /** Com o switchmap se fizer uma query muito demorada e a proxima query for mais rapida a segunda query nao vai sobrescrever a primeira, antes de executar a segunda ele faz o unsubscribe da primeira**/
    this.searchControl.valueChanges.debounceTime(500).distinctUntilChanged().switchMap(termoDigitado => this.restaurantsService.restaurants(termoDigitado)).subscribe(restaurants => this.restaurants = restaurants)

    this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
