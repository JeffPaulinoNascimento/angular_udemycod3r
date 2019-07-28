import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model'
import {OrderService} from './order.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'
import {Router} from '@angular/router'
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  orderForm: FormGroup
  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de débito', value:'DEB' },
    {label: 'Cartão Refeição', value:'REF' }
  ]

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  /*** Implementando Reactive Form ***/

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('',[Validators.required])
    }, {validator: OrderComponent.equalsTo})
  }

  //retornar um objeto que a chave será do tipo string e o retorno do tipo boolean
  //Validar se os campos de email são iguais
  static equalsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')

    if(!email || !emailConfirmation){
      return undefined
    }

    if(email.value !== emailConfirmation.value){
      return {emailNotMatch:true}
    }
    return undefined
  }


  itemsValue(): number{
    return this.orderService.itemsValue()

  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: Order){
    //transformando array de cartItem em orderItem

    //subscribe para o observable fazer a requisição
    order.orderItems = this.cartItems()
      .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    // o que vai ser executado quando a resposta chegar => orderId
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    console.log(order)
  }
}
