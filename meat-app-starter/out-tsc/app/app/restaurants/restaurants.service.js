var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { MEAT_API } from "../app.api";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { HttpClient, HttpParams } from '@angular/common/http';
// import {ErrorHandler} from '../app.error-handler'
var RestaurantsService = (function () {
    function RestaurantsService(http) {
        this.http = http;
    }
    //Observable porque o serviço retorna um Observable e não os Restaurants
    //Precisamos transformar a resposta em um array de restaurants com map que recebe um response e retorna um response.json
    RestaurantsService.prototype.restaurants = function (search) {
        var params = undefined;
        if (search) {
            params = new HttpParams().set('q', search);
        }
        // localhost:3000/restaurants
        return this.http.get(MEAT_API + "/restaurants", { params: params });
    };
    RestaurantsService.prototype.restaurantById = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id);
    };
    RestaurantsService.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/reviews");
    };
    RestaurantsService.prototype.menuOfRestaurant = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/menu");
    };
    RestaurantsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RestaurantsService);
    return RestaurantsService;
}());
export { RestaurantsService };
//# sourceMappingURL=restaurants.service.js.map