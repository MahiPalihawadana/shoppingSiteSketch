import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/products/messenger.service';
import { Router } from '@angular/router';

import { CollectionsService } from '../../products/collections.service';


@Component({ 
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  
  
  cartItems = [

  ];

  

  orderDetails = [];
  subTotal: number;
  cartTotal = 0
  qnty;


  constructor(private msg: MessengerService, private router: Router, private http: CollectionsService) { }

  ngOnInit(): void {
    let products = JSON.parse(localStorage.getItem('product'));
    for (let i = 0; i < products.length; i++) {
      this.cartItems.push(products[i])
    }
    console.log('cartitems', this.cartItems)


    this.cartItems.forEach(item => {
      this.qnty=item.quantity
      this.cartTotal += item.quantity * item.variantPrice
      this.subTotal = item.quantity * item.variantPrice
    })
 }

  
  onQntyChange(qnty:number){// Change quantity
     this.qnty=qnty  
     console.log('hi',qnty)
  } 


  deleteItm(title) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].productTitle == title) {
        this.cartItems.splice(i, 1);
      }
    }

    localStorage.setItem('product', JSON.stringify(this.cartItems))

  }


  

  

  handleCheckout(){// no problem

    this.orderDetails = [];
    for(let i = 0; i < this.cartItems.length; i+=1){
        this.orderDetails.push({variantId :this.cartItems[i].variantId,quantity:this.cartItems[i].quantity})
    }
    console.log('orderDetails '+JSON.stringify(this.orderDetails));
  
  
  
  
  
  let token = localStorage.getItem('accessToken');
  
  
  if(token == null){
  
  
    this.http.createCheckout({lineItems:this.orderDetails,email:undefined,shippingAddress:undefined}).subscribe(data=>{
     
      if(data.status.code == 200){
  
      let id = data.payload.data.checkoutCreate.checkout.id;
      let webUrl = data.payload.data.checkoutCreate.checkout.webUrl;
      console.log("created  checkout id is : "+id);
        
      window.open(webUrl,'_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  
  
  
      }
      else{
      console.log(data.status.code);
      }
  
  
  
  
  
     
    },err=>{
      console.log(err);
    });
  
  
  
  }else{
    console.log("hi");
  
    this.http.customerDetails().subscribe(data=>{
       console.log(data);

       if(data.status.code == 200){
        let email = data.payload.data.customer.email;
        let defaultAddress = data.payload.data.customer.defaultAddress;
        console.log("email is "+email+" and default address is "+JSON.stringify(defaultAddress));
  
  
        this.http.createCheckout({lineItems:this.orderDetails,email:email,shippingAddress:defaultAddress}).subscribe(data1=>{
     
          if(data1.status.code == 200){
      console.log("112 "+JSON.stringify(data1));
          
          let webUrl = data1.payload.data.checkoutCreate.checkout.webUrl;
          console.log("created  checkout id is : "+webUrl);
            
          window.open(webUrl,'_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
      
      
      
          }
          else{
          console.log(data.status.code);
          }
      
      
      
      
      
         
        },err=>{
          console.log(err);
        });
  
  
       }
       else{
  
       }
  
      },err=>{
        console.log(err);
      });
     
  }
  
  
  }

}