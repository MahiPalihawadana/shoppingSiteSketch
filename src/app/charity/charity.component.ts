import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionsService } from '../products/collections.service';
import { MessengerService } from '../products/messenger.service';
import { Products } from '../products/products.model';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {

  collectiondetails: any[];
  charityList = [];
  images = [];
  sizes = [];
  variants=[];

  constructor(private collectionsService: CollectionsService,  private router: Router,private msg:MessengerService) { }

  ngOnInit(): void {

    this.collectionsService.getCategories('Charity').subscribe(products => {

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

        this.charityList.push(product);

      }

      console.log('Tops_List', this.charityList);

    }, err => {
      console.log(err);
    });

  }

  viewClick(item) {
    this.collectionsService.setProduct(item);

    this.router.navigate(['/tops',item.product_id]);
  }



}
