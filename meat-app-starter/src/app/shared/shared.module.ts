import {ModuleWithProviders, NgModule} from '@angular/core'
import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {RestaurantsService} from '../restaurants/restaurants.service'
import {OrderService} from '../order/order.service'

@NgModule({
  declarations:[
    InputComponent,
    RadioComponent,
    RatingComponent
  ],

  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  // com o exports, os componentes que importarem o shared.module.ts, não precisarão mais importar esses modulos, pois eles ja vem junto com o shared.module.ts
  exports:[
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule{
  static forRoot(): ModuleWithProviders{
    return{
      ngModule: SharedModule,
      providers:[ShoppingCartService, RestaurantsService, OrderService]
    }
  }
}
