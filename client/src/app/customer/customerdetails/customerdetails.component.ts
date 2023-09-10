import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  model: any = {}

  constructor(private customerService: CustomerService) {

  }
  ngOnInit(): void {
    this.customerService.currentUser$.subscribe({
      next: res => this.model = res,
      error: err => console.log(err)
    })


  }

  update(){}

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

}
