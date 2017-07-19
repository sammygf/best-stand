import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainNavComponent} from './components/header/main-nav/main-nav.component';
import {SidePanelComponent} from './components/side-panel/side-panel.component';
import {SideNavComponent} from './components/side-panel/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomeOffersComponent } from './components/home/home-offers/home-offers.component';
import { HomeOfferComponent } from './components/home/home-offers/home-offer/home-offer.component';
import { HomeAdvantagesComponent } from './components/home/home-advantages/home-advantages.component';
import { AdvantageComponent } from './components/home/home-advantages/home-advantage/home-advantage.component';
import { HomeTopComponent } from './components/home/home-top/home-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    SidePanelComponent,
    SideNavComponent,
    FooterComponent,
    HomeComponent,
    HomeOffersComponent,
    HomeOfferComponent,
    HomeAdvantagesComponent,
    AdvantageComponent,
    HomeTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
