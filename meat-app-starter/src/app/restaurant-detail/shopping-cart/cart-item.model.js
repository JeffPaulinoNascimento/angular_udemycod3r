"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CartItem = (function () {
    function CartItem(menuItem, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.menuItem = menuItem;
        this.quantity = quantity;
    }
    CartItem.prototype.value = function () {
        return this.menuItem.price * this.quantity;
    };
    return CartItem;
}());
exports.CartItem = CartItem;
