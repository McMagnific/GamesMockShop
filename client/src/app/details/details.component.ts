import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../models/games';
import { OrderService } from '../services/order.service';
import { CustomerService } from '../services/customer.service';
import { Cart } from '../models/cart';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() id: string = '';
  userId: number = 0;

  game: Game = {
    id: 0,
    title: "Game Title",
    description: "Description of Game",
    price: 69.99,
    image_link: "/assets/images/placeholdersquare/bg3square.avif"
  };

  constructor(private gamesService: GamesService, public customerService: CustomerService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {

    this.gamesService.getGame(+this.id).subscribe({
      next: res => this.game = res,
      error: err => console.log(err),

    });

    this.customerService.currentUser$.subscribe({
      next: res => {
        if (res) this.userId = res.id
      },
      error: err => console.log(err, "User not found")

    })
  }

  addToCart() {

    var cartItem: Cart = {
      customerId: this.userId,
      gameId: this.game.id,
      quantity: 1
    }

    this.orderService.addToCart(cartItem).subscribe({
      next: () => this.router.navigateByUrl('/cart'),
      error: err => {
        if (HttpErrorResponse) {
          alert("You have to login first to add games into your cart");
          this.router.navigateByUrl('/login')

        }
        console.log(err)
      }
    });
  }
}
