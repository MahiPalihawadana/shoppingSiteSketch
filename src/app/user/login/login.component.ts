import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../user.model';
import { UserService, TokenPayload } from '../../user/user.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  }

  constructor(private user: UserService, private router: Router) { }

  login() {

    this.user.login(this.credentials).subscribe(

      (data) => {
        var accessToken = data.payload.data.customerAccessTokenCreate.customerAccessToken.accessToken;
        localStorage.setItem('accessToken', accessToken);
        this.router.navigateByUrl('/')

      },
      err => {
        //console.log(err)   
        window.alert("Invalid user");
        // this.router.navigateByUrl('/login');
      }
    )

  }
}
