import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../user.model';
import { UserService } from '../../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {
  userModel = new User('First name here', 'Last name here', 'Email here', '', '');

  message = '';
  clientid: number;
  details: any[];


  constructor(private _userService: UserService, private route: ActivatedRoute,) {
    this.fetchData()
  }

  ngOnInit(): void {
    this.message = '';
  }

  fetchData(): void {
    this._userService.getClient(this.clientid).subscribe(
      (data) => {
        const { firstName, lastName, phone } = data.payload.data.customer.defaultAddress
        this.userModel.firstName = firstName
        this.userModel.lastName = lastName
        this.userModel.email = data.payload.data.customer.email
        // this.clientid = data.payload.data.customer.id
      },
      err => {
        console.log(err)
      }
    )
  }

  onSubmit(): void {

    //user details update
    this._userService.setClient(this.userModel).subscribe(
      (data) => {
        console.log(data)
      },
      err => {
        console.log(err);
      }
    )
  }
}
