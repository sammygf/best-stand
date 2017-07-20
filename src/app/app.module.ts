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
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomeClientsComponent } from './components/home/home-clients/home-clients.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceComponent } from './components/services/service/service.component';

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
    HomeTopComponent,
    HomeAboutComponent,
    SpinnerComponent,
    HomeClientsComponent,
    ContactsComponent,
    ServicesComponent,
    ServiceComponent
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
