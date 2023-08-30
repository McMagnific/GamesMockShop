import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {


  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
  }

  logout() {
    this.customerService.logout();
  }

}
