import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: any = {}
  constructor(private customerService: CustomerService, private router: Router) {

  }


  register() {
    this.customerService.register(this.model).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: err => console.log(err)
    })
  }

}
