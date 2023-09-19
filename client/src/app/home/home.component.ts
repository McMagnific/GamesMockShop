import { Component } from '@angular/core';
import { Game } from '../models/games';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  games: Game[] = [];
  sportsGames: Game[] = [];


  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {

    this.gamesService.getGames().subscribe({
      next: res => this.games = res,
      error: err => console.log(err),

    });

    this.gamesService.getGamesByGenre("Sport").subscribe({
      next: res => this.sportsGames = res,
      error: err => console.log(err),

    });
  }
}

