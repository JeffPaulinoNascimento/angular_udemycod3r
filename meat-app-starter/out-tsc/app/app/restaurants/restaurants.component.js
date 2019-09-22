var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RestaurantsService } from "./restaurants.service";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder } from '@angular/forms';
var RestaurantsComponent = (function () {
    function RestaurantsComponent(restaurantsService, formBuilder) {
        this.restaurantsService = restaurantsService;
        this.formBuilder = formBuilder;
        this.searchBarState = 'hidden';
    }
    // ngOnInit - ele espera carregar tudo do componente inclusive as dependecias para depois executar o codigo dentro dele
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = this.formBuilder.control('');
        this.searchForm = this.formBuilder.group({
            searchControl: this.searchControl
        });
        /**debounceTime -> ele espera 500 milisegundos para acionar o proximo evento, objetivo é esperar o usuario digitar a plavra completa para só então disparar o evento ao banco**/
        /**distinctUntilChange -> se a palvra digitada for igual ele nao dispara ao banco a consulta novamente**/
        /** Com o switchmap se fizer uma query muito demorada e a proxima query for mais rapida a segunda query nao vai sobrescrever a primeira, antes de executar a segunda ele faz o unsubscribe da primeira**/
        this.searchControl.valueChanges.debounceTime(500).distinctUntilChanged().switchMap(function (termoDigitado) { return _this.restaurantsService.restaurants(termoDigitado); }).subscribe(function (restaurants) { return _this.restaurants = restaurants; });
        this.restaurantsService.restaurants().subscribe(function (restaurants) { return _this.restaurants = restaurants; });
    };
    RestaurantsComponent.prototype.toggleSearch = function () {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    };
    RestaurantsComponent = __decorate([
        Component({
            selector: 'mt-restaurants',
            templateUrl: './restaurants.component.html',
            animations: [
                trigger('toggleSearch', [
                    state('hidden', style({
                        opacity: 0,
                        "max-height": "0px"
                    })),
                    state('visible', style({
                        opacity: 1,
                        "max-height": "70px",
                        "margin-top": "20px"
                    })),
                    transition('* => *', animate('250ms 0s ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [RestaurantsService, FormBuilder])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
export { RestaurantsComponent };
//# sourceMappingURL=restaurants.component.js.map