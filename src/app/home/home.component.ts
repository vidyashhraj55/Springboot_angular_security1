import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {RegisterService} from '../service/register.service';
import {AppserviceService} from '../appservice.service'
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private service:AppserviceService) { }
  ngOnInit() {
  }
  logindata(){
    this.service.loginUser()
    .subscribe(
      (data) => {
        console.log(data);
      }
    ) 
  }
  }


