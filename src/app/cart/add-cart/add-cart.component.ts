import { Component, OnInit } from '@angular/core'; 
import { MessengerService } from '../../products/messenger.service';  

import { ActivatedRoute } from '@angular/router';
import { CollectionsService } from '../../products/collections.service';
import { Products } from '../../products/products.model';
// import { Productitems} from '../../products/productitems.model';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {


  constructor(public msg: MessengerService, private http: CollectionsService,private route:ActivatedRoute) { }

  // selectedSize : String;
  qnty : number=1;//used

  displayProduct : Products;//used 
  // displayProduct : Productitems

  product : any;//used

  productArr = [];
  wishlistArr =[];

  selectedVariant : any; //used



  ngOnInit(): void {
    // let collection_id = this.route.snapshot.paramMap.get('id');
    // console.log("24 "+collection_id);
    

    // this.http.getProductbyId(collection_id).subscribe(data=>{
      
    //   this.product = data.payload.product;
    //   console.log(this.product);

    //   let retrievedProduct = new Productitems(
    //     this.product.id,
    //     this.product.title,
    //     this.product.image.src,
    //     this.product.options[0].values ,

    //     this.product.variants,
    //     this.product.images,
    //     this.product.body_html

    //   );
        
        
    //     this.displayProduct =retrievedProduct;
    //     console.log(this.displayProduct);

    //     this.selectedVariant=this.displayProduct.variants[0];
    //     console.log("selected variant "+JSON.stringify(this.selectedVariant));
    // },err=>{
    //   console.log(err);
    // });
    
    this.displayProduct =this.http.getProduct();
    this.selectedVariant=this.displayProduct.variants[0];
    console.log("selected product is "+JSON.stringify(this.displayProduct.sizes[0].values));
    // console.log(this.displayProduct.variants);
  }


      
selectVariantofMatch(size:string):void{
  
    console.log("65 "+size);
    console.log(this.displayProduct.variants);

    this.displayProduct.variants.filter(x =>{
      if(x.title == size){
        this.selectedVariant = x;
        
      }
    }); 
    console.log("selected variant "+JSON.stringify(this.selectedVariant)); 
   
}





























handleAddToCart() {
  

  if(this.qnty > this.selectedVariant.inventory_quantity){
    // alert
  }else{
    let product = JSON.parse(localStorage.getItem('product'));
    if (product === null) {
      console.log('null')
    } else {
      this.productArr = product;
    }
    
    this.productArr.push({
      productId:this.displayProduct.product_id,
      productImgsrc:this.displayProduct.image,
      productTitle:this.displayProduct.title,
      variantId:this.selectedVariant.id,
      variantOption:this.selectedVariant.option1,
      variantPrice:this.selectedVariant.price,
      quantity:this.qnty}); 
    

    localStorage.setItem('product', JSON.stringify(this.productArr));

    console.log('productArr', this.productArr);
  }
 



}



   handleWishlist() {
  //   let wishlist = JSON.parse(localStorage.getItem('wishlist'));
  //   if (wishlist === null) {
  //     console.log('null')
  //   } else {
  //     this.wishlistArr = wishlist;
  //   }
    
  //   this.wishlistArr.push({id:this.id, title:this.title, img:this.img, price:this.price});

  //   localStorage.setItem('wishlist', JSON.stringify(this.wishlistArr))

  //   console.log('wishlistArr', this.wishlistArr)
  }

   }
