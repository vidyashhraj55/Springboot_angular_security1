import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AppserviceService } from "../app/appservice.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AppserviceService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    let authRight = false;
    if (this._authService.loggedIn()) {
      authRight = true;
    } else {
      console.log(this._authService.token);
      console.log("false");
      this._router.navigate(['/login'])
      authRight = false;
    }

    console.log(authRight);
    return authRight;
  }

  // return true;
}
