import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  baseURL = "http://localhost:5000/api/";

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Game[]>(this.baseURL + 'games');
  }

  getGame(id: number) {
    return this.http.get<Game>(this.baseURL +'games/product/' + id);
  }

  getGamesByGenre(genre: string) {
    return this.http.get<Game[]>(this.baseURL +'games/category/' + genre);
  }
}
