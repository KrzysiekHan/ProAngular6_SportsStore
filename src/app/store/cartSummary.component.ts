import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
    selector: 'cart-summarty',
    templateUrl: 'cartSummary.component.html'
})
export class CartSummaryComponent {
    constructor(public cart: Cart) { }
}
