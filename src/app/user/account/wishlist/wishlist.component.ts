import { Component, OnInit } from '@angular/core';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { MessengerService } from 'src/app/products/messenger.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlistItems = [];

  constructor() { }

  ngOnInit(): void {
    let wishlist = JSON.parse(localStorage.getItem('wishlist'));
    for (let i = 0; i < wishlist.length; i++) {
      this.wishlistItems.push(wishlist[i])
    }
    console.log('wishlistItems', this.wishlistItems)



  }
  clear() {

  }

}