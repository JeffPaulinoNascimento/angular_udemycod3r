import {Injectable} from "@angular/core"
import {Http} from "@angular/http";
import {Restaurant} from "./restaurant/restaurant.model"
import {MEAT_API} from "../app.api"
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class RestaurantsService {

  constructor(private http: Http){}

  //Observable porque o serviço retorna um Observable e não os Restaurants
  //Precisamos transformar a resposta em um array de restaurants com map que recebe um response e retorna um response.json
  restaurants(): Observable<Restaurant[]> {
    // localhost:3000/restaurants
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
  }
}
