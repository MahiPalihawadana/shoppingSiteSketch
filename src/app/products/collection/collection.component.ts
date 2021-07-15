import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../products/collections.service';
import { Router } from '@angular/router';
import { Collection } from '../../products/collection/collection.model';  



@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit { 

 
  collectionlist: any[];
  collections = [];

  constructor(private collectionsService: CollectionsService, private router: Router) { }

  ngOnInit(): void {

    this.collectionsService.getLookbooks().subscribe(collection => {

      this.collectionlist = collection.payload;
      console.log(this.collectionlist);

      for (let i = 0; i < this.collectionlist.length; i++) {

        let collection = new Collection(
          this.collectionlist[i].id,
          this.collectionlist[i].title,
          this.collectionlist[i].image.src,
          this.collectionlist[i].body_html,
          this.collectionlist[i].sort_order,

        );

        this.collections.push(collection);
      }
      console.log('COLLECTION_LIST', this.collections);

    }, err => {
      console.log(err);
    });
  }

  viewClick(item) { 
    this.collectionsService.setCollection(item);
    this.router.navigate(['/collection',item.id]);
  } 

}
