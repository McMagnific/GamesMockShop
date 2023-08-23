import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../models/games';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() id: String = '';

  game: Game = {
    id: 0,
    title: "Game Title",
    description: "Description of Game",
    price: 69.99,
    image_link: "/assets/images/placeholdersquare/bg3square.avif"
  };

  constructor(private gamesService: GamesService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.gamesService.getGame(+this.id).subscribe({
      next: res => this.game = res,
      error: err => console.log(err),

    });
  }
}
