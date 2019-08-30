import {Injectable} from "@angular/core"
import {Restaurant} from "./restaurant/restaurant.model"
import {MEAT_API} from "../app.api"
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'
import {HttpClient, HttpParams} from '@angular/common/http'
// import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient){}

  //Observable porque o serviço retorna um Observable e não os Restaurants
  //Precisamos transformar a resposta em um array de restaurants com map que recebe um response e retorna um response.json
  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined
    if(search){
      params = new HttpParams().set('q', search)
    }
    // localhost:3000/restaurants
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
  }

  restaurantById(id: String): Observable<Restaurant>{
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }

}
