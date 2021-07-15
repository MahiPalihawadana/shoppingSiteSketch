import { Products } from '../../products/products.model'

export class Cart {
    id:number;
    productId:number;
    productTitle:string;
    qty:number;
    price:number;
    data:[{
        product:Products,
        numInCart:number
    }];

    // constructor(id:number){
    //     this.id=id;
        
    // }
    
}


