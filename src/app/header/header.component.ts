import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { User } from '../user/user.model';
import { UserService} from '../user/user.service';
import { Router } from "@angular/router";
import { CollectionsService } from '../products/collections.service';
import { MessengerService } from '../products/messenger.service';
import { Products } from '../products/products.model'
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { SearchService } from '../search-bar/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchkey: string;

  myControl = new FormControl();
  options: string[] = ['Tops', 'Skirts', 'Pants'];
  filteredOptions: Observable<string[]>;

  collectiondetails: String[];
  searchResults: Array<any> = [];
  productdetails = [];
  value = '';
  productList = [];
  Products: Products[];
  filteredProducts: Products[];
  filtersupport: Products[];

  constructor(private collectionsService: CollectionsService, private msg: MessengerService, private router: Router, private searchService: SearchService,public auth: UserService) { }


  ngOnInit(): void {


  }
  search() {

    this.collectionsService.searchItem(this.searchkey).subscribe( 
      (data) => {


        console.log(data);
        this.searchService.items = data.payload;

        this.router.navigateByUrl('/search-bar')

      },
      err => {
        // window.alert("Invalid search");
        console.log(err, 'error')

      }
    )
  }

  logout(){
    this.auth.logout();
    
    
  }

}
