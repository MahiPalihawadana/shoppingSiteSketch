import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionsService } from '../../products/collections.service';
import { MessengerService } from '../messenger.service';
import { Products } from '../products.model'; 


@Component({
  selector: 'app-skirts',
  templateUrl: './skirts.component.html',
  styleUrls: ['./skirts.component.css']
})
export class SkirtsComponent implements OnInit {

  collectiondetails: any[];
  skirtsList = [];
  images = [];
  sizes = [];
  variants=[];

  constructor(private collectionsService: CollectionsService, private msg: MessengerService, private router: Router) { }



  ngOnInit(): void {

    this.collectionsService.getCategories('Skirts').subscribe(products => {

      this.collectiondetails = products.payload.products;
      console.log(this.collectiondetails);
      for (let i = 0; i < this.collectiondetails.length; i++) {
        this.images = this.collectiondetails[i].images;          
        this.sizes=this.collectiondetails[i].options;
        this.variants=this.collectiondetails[i].variants;
          
        let product = new Products(
        this.collectiondetails[i].id,
        this.collectiondetails[i].title, 
        this.collectiondetails[i].image.src,
        this.collectiondetails[i].images,
        this.sizes,
        this.variants,
        )
        this.skirtsList .push(product);
      }
      console.log(this.skirtsList );

    }, err => {
      console.log(err);
    });
 }

  viewClick(item) {
    this.collectionsService.setProduct(item);
    
    this.router.navigate(['/skirts',item.product_id]);
  }  
}
