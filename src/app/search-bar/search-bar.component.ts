import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionsService } from '../products/collections.service';
import { MessengerService } from '../products/messenger.service';
import { Products } from '../products/products.model';
import { SearchService } from './search.service'; 


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchkey: string;
  searchResults: Array<any> = [];
  productList = [];

  constructor(private msg: MessengerService, private router: Router, public searchService: SearchService) { }


  ngOnInit(): void {

  }

  viewClick(item) {
    this.msg.item = item;
    console.log('Selected_Item', this.msg.item);
    this.router.navigate(['/addcart']);
  }

}