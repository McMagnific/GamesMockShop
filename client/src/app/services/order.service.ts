import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addToCart(game: Cart) {
    return this.http.post<Cart>('https://localhost:5001/api/order/addtocart', game);
  }

  getCart(customerId: number) {
    return this.http.get<CartItem[]>('https://localhost:5001/api/order/getcart/' + customerId);
  }

  removeCartRecord(cartId: number){
    return this.http.delete('https://localhost:5001/api/order/removecartrecord/' + cartId);
  }
}
