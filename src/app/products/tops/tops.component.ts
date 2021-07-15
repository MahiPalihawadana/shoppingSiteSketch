import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionsService } from '../../products/collections.service';
import { MessengerService } from '../messenger.service';
import { Products } from '../products.model'



@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit { 

  collectiondetails: any[];

  topsList = [];
  images = [];
  sizes = [];
  variants=[];



  constructor(private collectionsService: CollectionsService,  private router: Router,private msg:MessengerService) { }



  ngOnInit(): void {


    this.collectionsService.getCategories('Tops').subscribe(products => {

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
          this.images,
          this.sizes,
          this.variants,
          );

        
        this.topsList.push(product); 
        
       
      }
      

      console.log('Tops_List', this.topsList);

    }, err => {
      console.log(err);
    });

  }

  viewClick(item) {
    this.collectionsService.setProduct(item);
    
    this.router.navigate(['/tops',item.product_id]);
  }



}
