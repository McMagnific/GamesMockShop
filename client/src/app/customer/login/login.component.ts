import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}


  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.customerService.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: err => console.log(err)
    })
  }
}
