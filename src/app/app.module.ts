import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { TopsComponent } from './products/tops/tops.component';
import { SkirtsComponent } from './products/skirts/skirts.component';
import { PantsComponent } from './products/pants/pants.component';
import { CollectionComponent } from './products/collection/collection.component';
import { LookbookComponent } from './products/collection/lookbook/lookbook.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AccountOverviewComponent } from './user/account/account-overview/account-overview.component';
import { AddressBookComponent } from './user/account/address-book/address-book.component';
import { AddAddressComponent } from './user/account/add-address/add-address.component';
import { MyOrdersComponent } from './user/account/my-orders/my-orders.component';
import { WishlistComponent } from './user/account/wishlist/wishlist.component';
import { AddCartComponent } from './cart/add-cart/add-cart.component';
import { ViewCartComponent } from './cart/view-cart/view-cart.component';
import { UserSidenavComponent } from './user/account/user-sidenav/user-sidenav.component';
import { MustMatchDirective } from './user/helpers/must-match.directive';
import { FilterPipe } from './header/filter.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CharityComponent } from './charity/charity.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavbarComponent,
    TopsComponent,
    SkirtsComponent,
    PantsComponent,
    CollectionComponent,
    LoginComponent,
    LookbookComponent,
    RegisterComponent,
    AccountOverviewComponent,
    AddressBookComponent,
    AddAddressComponent,
    MyOrdersComponent,
    WishlistComponent,
    AddCartComponent,
    ViewCartComponent,
    UserSidenavComponent,
    MustMatchDirective,
    FilterPipe,
    SearchBarComponent,
    CharityComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
