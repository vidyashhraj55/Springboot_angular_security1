import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
 import 'rxjs';
import { tap, map } from 'rxjs/operators';
import { LoginModel } from './login/login.module';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AppserviceService {
  // baseUrl:string='http://localhost:8080';
  

  
  public token:string;
  url;

  constructor(private http: HttpClient) {
console.log("*********singleton service class******");

  } 

  loginUser() {
    return this.http.get("http://localhost:8080/user",httpOptions
    ).pipe(
      map((data:LoginModel)=>{
        // localStorage.setItem('token', data.token)
        // console.log(data.token);
        return data;
      })
      )
    ;
  }

  // logindata(user:any){
  //   return this.http.post("http://localhost:8080/user",user)
  // }
  loggedIn() {
    return this.getToken()!= null ? true :false;
  }

  getToken(){
    
    return this.token;
   
  }
}

 