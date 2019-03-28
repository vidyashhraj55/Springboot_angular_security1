import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormGroupDirective,
  NgForm,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
// import {RegisterService} from '../service/register.service';
import { AppserviceService } from "../appservice.service";
import { ErrorStateMatcher } from "@angular/material/core";
import { LoginModel } from "./login.module";
import { AuthGuard } from "../auth.guard";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  //url = '/home';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AppserviceService,
    private _auth: AuthGuard
  ) {}
  // userName: string;
  // password: string;

  buildToken(): string {
    return btoa(
      this.loginForm.value.userName + ":" + this.loginForm.value.password
    );
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl(null, [Validators.required]),
      password: ["", [Validators.required]]
    });
  }

  loginUser() {
    console.log(JSON.stringify(this.loginForm.value));
    this.service.token = this.buildToken();
    console.log(this.service.token);
    this.service.loginUser().subscribe(data => {
      let url = this.service.url;
      let gotoUrl = "";
      // if(this._auth.canActivate)
      if (url === "/login" || url === '/') {
        gotoUrl = "/home";
      }else{
        gotoUrl =  url;
      }

      this.router.navigate([gotoUrl]);
    });
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
