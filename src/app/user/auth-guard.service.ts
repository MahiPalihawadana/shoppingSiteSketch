import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private user: UserService, private router: Router) { }

  canActivate() {
    if (!this.user.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
