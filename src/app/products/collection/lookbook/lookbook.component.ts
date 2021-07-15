import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../collections.service';
import { Router } from '@angular/router';
import { LookbookServiceService } from '../lookbook-service.service';
import { MessengerService } from '../../../products/messenger.service';
// import { Lookbook } from '../../../products/collection/lookbook/lookbook.model'; 
import { Products } from '../../products.model';
 

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.css']
})
export class LookbookComponent implements OnInit {

  lookbook:Array<any>;
 
  lookbookList = [];
  collection:any;

  images = [];
  sizes = [];
  variants=[];

 

  constructor(private collectionsService: CollectionsService, private router: Router, private lookBookSVC: LookbookServiceService, private msg: MessengerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   let collection_id = this.route.snapshot.paramMap.get('id');
   console.log(collection_id);
  

  this.collectionsService.getproductList(collection_id).subscribe(data=>{


    this.lookbook = data.payload.products;
    console.log('Lookbook_Items',this.lookbook);

    for (let i = 0; i < this.lookbook.length; i++) {
      this.images = this.lookbook[i].images;          
      this.sizes=this.lookbook[i].options;
      this.variants=this.lookbook[i].variants;
        
      let product = new Products(
      this.lookbook[i].id,
      this.lookbook[i].title, 
      this.lookbook[i].image.src,
      this.lookbook[i].images,
      this.sizes,
      this.variants,
      );
      this.lookbookList.push(product);
    }
    console.log('Items_List',this.lookbookList);

  },err=>{
    console.log(err);
  });

  this.collection = this.collectionsService.getCollection();
  console.log(this.collection);


  }

  viewClick(item) {
    let collection_id = this.route.snapshot.paramMap.get('id');
    this.collectionsService.setProduct(item);
    
    this.router.navigate(['collection/'+collection_id,item.product_id]);
  }  



}
