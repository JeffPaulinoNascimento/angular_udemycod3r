"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReviewsComponent = (function () {
    function ReviewsComponent(restaurantsService, route) {
        this.restaurantsService = restaurantsService;
        this.route = route;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        //como eu estou em um sublink preciso pegar o id do Pai, por isso deve-se colocar o parent
        this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
    };
    ReviewsComponent = __decorate([
        core_1.Component({
            selector: 'mt-reviews',
            templateUrl: './reviews.component.html'
        })
    ], ReviewsComponent);
    return ReviewsComponent;
}());
exports.ReviewsComponent = ReviewsComponent;
