import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  searchResults: Array<any> = [];

  selectedProduct : any = null ;

  selectedCollection : any = null;

  constructor(private http: HttpClient) { }



  public collectionList(): Observable<any> {
    return this.http.get('http://localhost:3000/collections');
  }

  // For tops,pants,skirts and charity projects
  public getCategories(data: string): Observable<any> {
    return this.http.get(`http://localhost:3000/products/getCollectionList/` + data);
  }

  //For collection
  public getLookbooks(): Observable<any> {
    return this.http.get('http://localhost:3000/products/getlookbookList');
  }

  //For lookbook products
  public getproductList(data: string): Observable<any> {
    return this.http.get(`http://localhost:3000/products/getProductsofCategory/` + data);
  }


  // public getcollectionList(): Observable<any> {
  //   return this.http.get('http://localhost:3000/collections/getCollections');
  // }

  public getProductbyId(productId: any): Observable<any> {
    return this.http.get(`http://localhost:3000/products/getProductbyId/` + productId);
  }
  //For general search
  public searchItem(data: string): Observable<any> {
    return this.http.get('http://localhost:3000/products/getSearchList/' + data);

  }

    //For create checkout
    public createCheckout(checkoutInput:any) : Observable<any> {
      return this.http.post('http://localhost:3000/checkout/createcheckout',checkoutInput);
    }

    //For customer details using token
    public customerDetails() : Observable<any> {
      
      return this.http.get('http://localhost:3000/customer/customerDetailswithToken');       
    }



    setProduct(product:any){
      this.selectedProduct = product;
      console.log("selected product is "+JSON.stringify(this.selectedProduct));
    }

    getProduct(): any{
      return this.selectedProduct;
    }

    setCollection(collection:any){
      this.selectedCollection = collection;
      console.log("selected collection is "+JSON.stringify(this.selectedCollection));
    }

    getCollection(): any{
      return this.selectedCollection;
    }
  

}
