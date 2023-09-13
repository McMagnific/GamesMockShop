import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserInformation } from '../models/user';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: User) {
    return this.http.post<User>('https://localhost:5001/api/customer/login', model).pipe(
      map((response: User) => {
        const user = response;

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);

        }
      })
    );
  }
  register(model: User) {
    return this.http.post<User>('https://localhost:5001/api/customer/register', model).pipe(
      map((response: User) => {
        const user = response;

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);

        }
      })
    );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);

  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);

  }

  getUser(id: number){
   return this.http.get<UserInformation>("https://localhost:5001/api/customer/user/" + id);
  }
}
