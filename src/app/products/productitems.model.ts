export class Productitems {
  
    constructor(
      public product_id: string,
      public title: string,
      public imgUrl: string,
      public size:Array<string>,
      public variants:Array<any>,
      public images:Array<any>,
      public description:any
      
    ) { } 
   
  
  }   