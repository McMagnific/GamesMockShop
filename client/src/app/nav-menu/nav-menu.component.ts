import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  faCartShopping = faCartShopping;
  username: string | undefined = "Username";
  showSideNav = "hidden";


  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.currentUser$.subscribe({
      next: res => this.username = res?.username
    })
  }

  logout() {
    this.customerService.logout();
  }
}
