"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_model_1 = require("./order.model");
var forms_1 = require("@angular/forms");
var OrderComponent = (function () {
    function OrderComponent(orderService, router, formBuilder) {
        this.orderService = orderService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numberPattern = /^[0-9]*$/;
        this.delivery = 8;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartão de débito', value: 'DEB' },
            { label: 'Cartão Refeição', value: 'REF' }
        ];
    }
    OrderComponent_1 = OrderComponent;
    /*** Implementando Reactive Form ***/
    OrderComponent.prototype.ngOnInit = function () {
        this.orderForm = this.formBuilder.group({
            name: this.formBuilder.control('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            email: this.formBuilder.control('', [forms_1.Validators.required, forms_1.Validators.pattern(this.emailPattern)]),
            emailConfirmation: this.formBuilder.control('', [forms_1.Validators.required, forms_1.Validators.pattern(this.emailPattern)]),
            address: this.formBuilder.control('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            number: this.formBuilder.control('', [forms_1.Validators.required, forms_1.Validators.pattern(this.numberPattern)]),
            optionalAddress: this.formBuilder.control(''),
            paymentAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control('', [forms_1.Validators.required])
        }, { validator: OrderComponent_1.equalsTo });
    };
    //retornar um objeto que a chave será do tipo string e o retorno do tipo boolean
    //Validar se os campos de email são iguais
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailNotMatch: true };
        }
        return undefined;
    };
    OrderComponent.prototype.itemsValue = function () {
        return this.orderService.itemsValue();
    };
    OrderComponent.prototype.cartItems = function () {
        return this.orderService.cartItems();
    };
    OrderComponent.prototype.increaseQty = function (item) {
        this.orderService.increaseQty(item);
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        this.orderService.decreaseQty(item);
    };
    OrderComponent.prototype.remove = function (item) {
        this.orderService.remove(item);
    };
    OrderComponent.prototype.checkOrder = function (order) {
        //transformando array de cartItem em orderItem
        var _this = this;
        //subscribe para o observable fazer a requisição
        order.orderItems = this.cartItems()
            .map(function (item) { return new order_model_1.OrderItem(item.quantity, item.menuItem.id); });
        // o que vai ser executado quando a resposta chegar => orderId
        this.orderService.checkOrder(order).subscribe(function (orderId) {
            _this.router.navigate(['/order-summary']);
            _this.orderService.clear();
        });
        console.log(order);
    };
    OrderComponent = OrderComponent_1 = __decorate([
        core_1.Component({
            selector: 'mt-order',
            templateUrl: './order.component.html'
        })
    ], OrderComponent);
    return OrderComponent;
    var OrderComponent_1;
}());
exports.OrderComponent = OrderComponent;
