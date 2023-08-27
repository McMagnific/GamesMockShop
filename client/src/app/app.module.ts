import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SliderModule } from './modules/slider.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DealsComponent } from './deals/deals.component';
import { BrowseComponent } from './browse/browse.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserregisterComponent } from './user/userregister/userregister.component';
import { UserdetailsComponent } from './user/userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    DealsComponent,
    BrowseComponent,
    UserloginComponent,
    UserregisterComponent,
    UserdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
