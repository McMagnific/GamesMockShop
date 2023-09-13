import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  userId: number | undefined = undefined;
  userInformation: any = {};

  constructor(private customerService: CustomerService) {

  }
  ngOnInit(): void {
    this.customerService.currentUser$.subscribe({
      next: res => this.userId = res?.id,
      error: err => console.log(err)
    })

    this.customerService.getUser(12).subscribe({
      next: res => {
      this.userInformation = res,
      console.log(res);
      },  
      error: err => console.log(err)
    })

  }

  update(){}

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

}
