
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    this.setCurrentUser();
    
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;

    const user: User = JSON.parse(userString);

    this.customerService.setCurrentUser(user);
  }

}

