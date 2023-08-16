import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Game } from './models/games';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  games: any;
  title: string = "Getta Game";
  gameCollection: Game[] = [{

    id: 1,
    title: "Mortal Kombat 2 (2023)",
    description: "Best Game of the Year",
    price: 79.99,
    image_link: "assets/images/placeholdersquare/mk1square.avif"
  }, {

    id: 2,
    title: "Tower Of Fantasy",
    description: "Best Game of the Year",
    price: 79.99,
    image_link: "assets/images/placeholdersquare/toweroffantasysquare.avif"
  }, {

    id: 3,
    title: "Apex Legends",
    description: "Best Game of the Year",
    price: 79.99,
    image_link: "assets/images/placeholdersquare/apexsquare.avif"
  }, {

    id: 4,
    title: "Madden 24",
    description: "Best Game of the Year",
    price: 79.99,
    image_link: "assets/images/placeholdersquare/madden24square.avif"
  }, {

    id: 5,
    title: "Baldurs Gate 3",
    description: "Best Game of the Year",
    price: 79.99,
    image_link: "assets/images/placeholdersquare/bg3square.avif"
  }, {

    id: 6,
    title: "Grand Theft Auto 5",
    description: "Best Game of the Year",
    price: 79.99,
    image_link: "assets/images/placeholdersquare/gta5square.webp"
  }, {

    id: 7,
    title: "Remnant 2",
    description: "Best Game of the Year",
    price: 79.99,
    image_link: "assets/images/placeholdersquare/remnant2square.avif"
  },
    {

      id: 8,
      title: "Baldurs Gate 3",
      description: "Best Game of the Year",
      price: 79.99,
      image_link: "assets/images/placeholdersquare/bg3square.avif"
    },{

      id: 9,
      title: "Grand Theft Auto 5",
      description: "Best Game of the Year",
      price: 79.99,
      image_link: "assets/images/placeholdersquare/gta5square.webp"
    },{

      id: 10,
      title: "Remnant 2",
      description: "Best Game of the Year",
      price: 79.99,
      image_link: "assets/images/placeholdersquare/remnant2square.avif"
    },
  ];




  itemsPerSlide = 5;
  singleSlideOffset = false;
  noWrap = true;




  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://localhost:5001/api/games').subscribe({
      next: res => this.games = res,
      error: () => { },

    });

  }

}
