import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserInformation } from '../models/user';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseURL = "http://localhost:5000/api/";


  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: User) {
    return this.http.post<User>(this.baseURL + 'customer/login', model).pipe(
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
    return this.http.post<User>(this.baseURL + 'customer/register', model).pipe(
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

  getUser(id: number | undefined){
   return this.http.get<UserInformation>(this.baseURL + "customer/user/" + id);
  }
}
