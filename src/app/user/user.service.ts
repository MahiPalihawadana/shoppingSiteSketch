import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
// import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { Address } from './address.model';


const _url = 'http://localhost:3000/customer';
let headers = new HttpHeaders();
headers = headers.set('Authorization', localStorage.getItem('accessToken'));

export interface TokenPayload {
  email: string
  password: string
}


@Injectable({
  providedIn: 'root'

})


export class UserService {
  selectedUser: User;
  users: User[];
  private token: string;
  email: any;
  globalStateChanged: any;
  result: '';


  constructor(private _http: HttpClient, private router: Router) {

  }

  private headers = new HttpHeaders().set('Authorization', this.getToken());

  private setToken(val) {
    // const expiresAt = moment().add(authResult.expiresIn,'second');
    const expiresAt = val.payload.data.customerAccessTokenCreate.customerAccessToken.expiresAt;
    const accessToken = val.payload.data.customerAccessTokenCreate.customerAccessToken.accessToken;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem("expiresAt", JSON.stringify(expiresAt.valueOf()));
    this.token = accessToken
  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expiresAt");
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('accessToken')
    }
    return this.token
  }

  // public getUserDetails(): User {
  //   const token = this.getToken()
  //   let payload
  //   if (token) {
  //     payload = token.split('.')[1]
  //     payload = window.atob(payload)
  //     return JSON.parse(payload)
  //   } else {
  //     return null
  //   }
  // }

  public isLoggedIn(): boolean {
    const user = this.getToken();
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  registerUser(user: User) {

    // delete user.confirmPassword
    const response = this._http.post<any>(`${_url}/createNewCustomer`, user)

    response.subscribe(
      (val) => {
        this.result = val.payload
        console.log('result', this.result)
        this.setToken(val);
      },
      err => {
        console.error(err)
      }
    )
    return response;
  }
  public getClient(id: number): Observable<any> {
    return this._http.get(`${_url}/customerDetailswithToken/`, {});
  }
  public setClient(data): Observable<any> {
    return this._http.post(`${_url}/customerDetailswithToken/`, data, { headers: headers });
  }
  editClient(user: User) {
    return this._http.put<any>(_url + '/${user._id}', user)
  }

  public login(user: TokenPayload): Observable<any> {

    let headers = new HttpHeaders().set('Authorization', this.getToken());
    const response = this._http.post<any>(`${_url}/createCustomerAccessToken`, user, { headers: headers })

    response.subscribe(
      (val) => {
        this.setToken(val);
      },
      err => {
        console.error(err)
      }
    )
    return response;
  }

  saveAddress(address: Address) {
    return this._http.post<any>(`${_url}/createCustomerAddress`, address)
  }


}