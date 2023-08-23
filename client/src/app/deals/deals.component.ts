import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../models/games';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  games: Game[] = [];
  sportsGames: Game[] = [];

  constructor(private gamesService: GamesService) { }

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
}
