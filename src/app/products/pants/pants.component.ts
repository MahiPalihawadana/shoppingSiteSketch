import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionsService } from '../../products/collections.service';
import { MessengerService } from '../messenger.service';
import { Products } from '../products.model'

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  collectiondetails: any[];
  pantsList = [];
  images = [];
  sizes = [];
  variants = [];

  constructor(private collectionsService: CollectionsService, private msg: MessengerService, private router: Router) { }

  ngOnInit(): void {

    this.collectionsService.getCategories('Pants').subscribe(products => {

      this.collectiondetails = products.payload.products;
      console.log(this.collectiondetails);
      for (let i = 0; i < this.collectiondetails.length; i++) {
        this.images = this.collectiondetails[i].images;
        this.sizes = this.collectiondetails[i].options;
        this.variants = this.collectiondetails[i].variants;

        let product = new Products(
          this.collectiondetails[i].id,
          this.collectiondetails[i].title,
          this.collectiondetails[i].image.src,
          this.collectiondetails[i].images,
          this.sizes,
          this.variants,
        );

        this.pantsList.push(product);
      }
      console.log(this.pantsList);

    }, err => {
      console.log(err);
    });
  }

  viewClick(item) {
    this.collectionsService.setProduct(item);
    
    this.router.navigate(['/pants',item.product_id]);
  }

}
