import { User } from './../user.model';
import { UserService, TokenPayload } from '.././user.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



declare var M: any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {


  alert: boolean = false;
  alertError: boolean = false;
  alertMessage: string;
  AlertSettings = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    duration: 3000
  };


  credentials: TokenPayload = {
    email: "",
    password: ""

  };

  userModel = new User('', '', '', '', '');


  constructor(private _userService: UserService, private router: Router,) { }

  ngOnInit(): void {

  }

  onSubmit() {


    console.log(this.userModel);
    this._userService.registerUser(this.userModel)
      .subscribe(

        data => {
          this.router.navigateByUrl("/login");
          this.alert = true;
          // window.alert('success');
          // this.router.navigateByUrl("/login");

        },
        error => {
          this.alertError = true
          //this.alertMessage = error.status.message;
        })
    this.userModel.reset({});

  }
  closeAlert() {
    this.alert = false
  }



}
