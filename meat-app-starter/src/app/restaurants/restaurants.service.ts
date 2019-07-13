import {Injectable} from "@angular/core"
import {Http} from "@angular/http";
import {Restaurant} from "./restaurant/restaurant.model"
import {MEAT_API} from "../app.api"
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'
// import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantsService {

  constructor(private http: Http){}

  //Observable porque o serviço retorna um Observable e não os Restaurants
  //Precisamos transformar a resposta em um array de restaurants com map que recebe um response e retorna um response.json
  restaurants(): Observable<Restaurant[]> {
    // localhost:3000/restaurants
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
      // .catch(ErrorHandler.handleError)
  }

  restaurantById(id: String): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json())
    // .catch(ErrorHandler.handleError)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json())
    // .catch(ErrorHandler.handleError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json())
    // .catch(ErrorHandler.handleError)
  }

}
