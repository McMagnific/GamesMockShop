import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { OrderService } from '../services/order.service';
import { CartItem } from '../models/cart';
import { GamesService } from '../services/games.service';
import { Game } from '../models/games';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  faTrash = faTrash;
  userId: number = 0;

  cartItems: CartItem[] = [];
  games: Game[] = [];
  orderModel: any = {};
  totalPrice: number = 0;

  pickpayment: boolean = true;
  inputInvalid = false;

  constructor(private customerService: CustomerService, private orderService: OrderService, private gamesService: GamesService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.currentUser$.subscribe({
      next: res => {
        if (res) this.userId = res.id
      },

      error: err => console.log(err, "User not found")

    })

    this.orderService.getCart(this.userId).subscribe({
      next: res => {
        res.forEach(element => {
          this.cartItems.push(element);
          this.gamesService.getGame(element.gameId).subscribe({
            next: res => {
              this.games.push(res);
              this.totalPrice += res.price;

            }
          })
        });
      },

      error: err => console.log(err, "did not find anything")

    })
  }

  removeCartItem(gameId: number) {
    var cartItem = this.cartItems.find(x => x.gameId == gameId)?.id;
    if (cartItem == undefined) return;

    this.orderService.removeCartRecord(cartItem).subscribe({
      next: () => window.location.reload(),

      error: err => console.log("An error ocurred:" + err)

    })
  }

  onSubmit() {
    this.inputInvalid = false;
    this.orderModel.totalprice = this.totalPrice;
    this.router.navigateByUrl("/receipt");
    console.log(this.orderModel);
  }

  choosepayment() {
    if (this.pickpayment == true) this.pickpayment = false;
  }

  checkValidation() {
    if (this.inputInvalid == false)
      this.inputInvalid = true;

  }
}

