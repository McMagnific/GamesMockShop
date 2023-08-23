import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { DetailsComponent } from './details/details.component';
import { DealsComponent } from './deals/deals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'latest', component: HomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'product/details/:id', component: DetailsComponent },
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
