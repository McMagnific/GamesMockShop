import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../models/games';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  games: Game[] = [];
  sportsGames: Game[] = [];
  routerLink: string = "product/details/";


  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit(): void {

    this.gamesService.getGames().subscribe({
      next: res => this.games = res,
      error: err => console.log(err),

    }); 
    
    this.gamesService.getGamesByGenre("sport").subscribe({
      next: res => this.sportsGames = res,
      error: err => console.log(err),

    });
  }

  toDetailsPage(gameId: number){
    this.router.navigateByUrl("product/details/" +gameId);

  }
}
