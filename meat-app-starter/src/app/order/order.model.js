"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = (function () {
    function Order(address, number, optionalAddress, paymentOption, orderItems, id) {
        if (orderItems === void 0) { orderItems = []; }
        this.address = address;
        this.number = number;
        this.optionalAddress = optionalAddress;
        this.paymentOption = paymentOption;
        this.orderItems = orderItems;
        this.id = id;
    }
    return Order;
}());
exports.Order = Order;
var OrderItem = (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
