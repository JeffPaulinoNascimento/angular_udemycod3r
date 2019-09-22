"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_api_1 = require("../app.api");
var OrderService = (function () {
    function OrderService(cartService, http) {
        this.cartService = cartService;
        this.http = http;
    }
    OrderService.prototype.cartItems = function () {
        return this.cartService.items;
    };
    OrderService.prototype.increaseQty = function (item) {
        this.cartService.increaseQty(item);
    };
    OrderService.prototype.decreaseQty = function (item) {
        this.cartService.decreaseQty(item);
    };
    OrderService.prototype.remove = function (item) {
        this.cartService.removeItem(item);
    };
    OrderService.prototype.itemsValue = function () {
        return this.cartService.total();
    };
    OrderService.prototype.clear = function () {
        this.cartService.clear();
    };
    OrderService.prototype.checkOrder = function (order) {
        return this.http.post(app_api_1.MEAT_API + "/orders", order)
            .map(function (order) { return order.id; });
    };
    OrderService = __decorate([
        core_1.Injectable()
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
