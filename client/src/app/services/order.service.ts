import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseURL = "http://localhost:5000/api/";


  constructor(private http: HttpClient) { }

  addToCart(game: Cart) {
    return this.http.post<Cart>(this.baseURL + 'order/addtocart', game);
  }

  getCart(customerId: number) {
    return this.http.get<CartItem[]>(this.baseURL + 'order/getcart/' + customerId);
  }

  removeCartRecord(cartId: number) {
    return this.http.delete(this.baseURL + 'order/removecartrecord/' + cartId);
  } 
  
  removeCart(cartId: number) {
    return this.http.delete(this.baseURL + 'order/removecart/' + cartId);
  }
}
