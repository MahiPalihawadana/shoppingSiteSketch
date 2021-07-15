import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCartComponent } from './cart/add-cart/add-cart.component';
import { ViewCartComponent } from './cart/view-cart/view-cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PantsComponent } from './products/pants/pants.component';
import { SkirtsComponent } from './products/skirts/skirts.component';
import { CollectionComponent } from './products/collection/collection.component';
import { LookbookComponent } from './products/collection/lookbook/lookbook.component';
import { TopsComponent } from './products/tops/tops.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { AccountOverviewComponent } from './user/account/account-overview/account-overview.component';
import { AddAddressComponent } from './user/account/add-address/add-address.component';
import { AddressBookComponent } from './user/account/address-book/address-book.component';
import { MyOrdersComponent } from './user/account/my-orders/my-orders.component';
import { UserSidenavComponent } from './user/account/user-sidenav/user-sidenav.component';
import { WishlistComponent } from './user/account/wishlist/wishlist.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CharityComponent } from './charity/charity.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'tops', component: TopsComponent },
  { path: 'skirts', component: SkirtsComponent },
  { path: 'skirts/:id', component: AddCartComponent },
  { path: 'pants', component: PantsComponent },
  { path: 'pants/:id', component: AddCartComponent},
  { path: 'collection', component: CollectionComponent },
  { path: 'collection/:id', component: LookbookComponent },
  { path: 'collection/:id/:pId', component: AddCartComponent },
  { path: 'tops/:id', component: AddCartComponent },
  { path: 'viewcart', component: ViewCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'account-overview', component: AccountOverviewComponent },
  { path: 'address-book', component: AddressBookComponent },
  { path: 'sidenavbar', component: SideNavbarComponent },
  { path: 'add-address', component: AddAddressComponent },
  { path: 'user-sidenav', component: UserSidenavComponent },
  { path: 'charity', component: CharityComponent },
  { path: 'search-bar', component: SearchBarComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
