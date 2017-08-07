import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainNavComponent} from './components/header/main-nav/main-nav.component';
import {SidePanelComponent} from './components/side-panel/side-panel.component';
import {SideNavComponent} from './components/side-panel/side-nav/side-nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {HomeOffersComponent} from './components/home/home-offers/home-offers.component';
import {HomeOfferComponent} from './components/home/home-offers/home-offer/home-offer.component';
import {HomeAdvantagesComponent} from './components/home/home-advantages/home-advantages.component';
import {AdvantageComponent} from './components/home/home-advantages/home-advantage/home-advantage.component';
import {HomeTopComponent} from './components/home/home-top/home-top.component';
import {HomeAboutComponent} from './components/home/home-about/home-about.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {HomeClientsComponent} from './components/home/home-clients/home-clients.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ServicesComponent} from './components/services/services.component';
import {ServiceComponent} from './components/services/service/service.component';
import {RequirementsComponent} from './components/requirements/requirements.component';
import {RequirementsPrintComponent} from './components/requirements/requirements-print/requirements-print.component';
import {RequirementPrintComponent} from './components/requirements/requirements-print/requirement-print/requirement-print.component';
import {RequirementsRasterComponent} from './components/requirements/requirements-raster/requirements-raster.component';
import {RequirementsVectorComponent} from './components/requirements/requirements-vector/requirements-vector.component';
import {RequirementsTypographicComponent} from './components/requirements/requirements-typographic/requirements-typographic.component';
import {HomeReviewsComponent} from './components/home/home-reviews/home-reviews.component';
import {HomeReviewComponent} from './components/home/home-reviews/home-review/home-review.component';
import {ProductComponent} from './components/product/product.component';
import {RoundedButtonComponent} from './components/rounded-button/rounded-button.component';
import {ProductOverviewComponent} from './components/product/product-overview/product-overview.component';
import {ProductOrderComponent} from './components/product/product-order/product-order.component';
import {ProductOrderCompleteComponent} from './components/product/product-order-complete/product-order-complete.component';

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
    ServiceComponent,
    RequirementsComponent,
    RequirementsPrintComponent,
    RequirementPrintComponent,
    RequirementsRasterComponent,
    RequirementsVectorComponent,
    RequirementsTypographicComponent,
    HomeReviewsComponent,
    HomeReviewComponent,
    ProductComponent,
    RoundedButtonComponent,
    ProductOverviewComponent,
    ProductOrderComponent,
    ProductOrderCompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
