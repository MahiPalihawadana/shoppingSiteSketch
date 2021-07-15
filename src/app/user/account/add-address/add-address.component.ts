import { Component, OnInit } from '@angular/core';
import { Address } from '../../address.model';
import { UserService } from '../../user.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
  providers: [UserService]
})
export class AddAddressComponent implements OnInit {

  addressModel = new Address('', '', '', '', '', '', '');
  public addresses: any[] = [{
    id: 1,
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  }];
  arr = [];

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  // onSubmit() {
  //   console.log(this.addressModel);
  //   this._userService.saveAddress(this.addressModel)
  //     .subscribe(

  //       data => { console.log("success", data) },
  //       error => console.log("Error!", error)

  //     )
  //   alert('SUCCESS!! :-)');
 // }
  onSubmit() {
    this.addresses = [];
    // for (let i = 0; i < this.addresses.length; i++) { 
    //   this.addresses.push(this.addressModel);
    // };
    this.addresses.push(this.addressModel);
    this.arr.push(this.addresses);
   
    console.log('Success', this.arr );
  }

}
