import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerService } from '../../../../products/messenger.service';


@Component({
  selector: 'app-view-lookbook',
  templateUrl: './view-lookbook.component.html',
  styleUrls: ['./view-lookbook.component.css']
})
export class ViewLookbookComponent implements OnInit {
  
  qnty=1 ;
  product = [];
  productArr = [];
  img = this.msg.item.node.images.edges[0].node.originalSrc;
  title = this.msg.item.node.title
  price = this.msg.item.node.priceRange.minVariantPrice.amount

  constructor(private router: Router,private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    let product = JSON.parse(localStorage.getItem('product'));
    if (product === null) {
      console.log('null')
    } else {
      this.productArr = [];
      for (let i = 0; i < product.length; i++) {
        this.productArr.push(product[i]);
      };
    }
    this.product = [];
    this.product.push(this.img);
    this.product.push(this.title);
    this.product.push(this.price);
    this.product.push(this.qnty);
    this.productArr.push(this.product);

    localStorage.setItem('product', JSON.stringify(this.productArr))

    console.log('productArr', this.productArr)
  }

  qty(q) {
    this.qnty = q
  }
  

}
