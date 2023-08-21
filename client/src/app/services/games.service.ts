import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Game[]>('https://localhost:5001/api/games');
  }
}