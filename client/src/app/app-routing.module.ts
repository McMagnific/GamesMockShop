import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DealsComponent } from './deals/deals.component';
import { LoginComponent } from './customer/login/login.component';
import { RegisterComponent } from './customer/register/register.component';
import { CustomerdetailsComponent } from './customer/customerdetails/customerdetails.component';
import { CartComponent } from './cart/cart.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/details/:id', component: DetailsComponent },
  { path: 'receipt', component: ReceiptComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer/details', component: CustomerdetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'deals', component: DealsComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
