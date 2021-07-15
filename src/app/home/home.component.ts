import { Component, OnInit } from '@angular/core';
import {CollectionsService} from '../Products/collections.service';
import { Router } from '@angular/router';
import { Products } from '../products/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collectiondetails : String[];
  // constructor(private collectionsService: CollectionsService ,private router: Router) { }

  ngOnInit(): void {
  //   this.collectionsService.collectionList().subscribe(collection => {
      
  //      this.collectiondetails = collection.payload.data.collections.edges;
  //      console.log(this.collectiondetails);
      
  //   }, err =>{
  //     console.log(err);
  //   });
   }

}
