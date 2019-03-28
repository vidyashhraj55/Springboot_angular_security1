import { Component, OnInit } from "@angular/core";
import { AppserviceService } from "./appservice.service";

// import swal from 'sweetalert';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
constructor(private _appService: AppserviceService){}

  ngOnInit() {
    this.getRequestedURL();
  }

  getRequestedURL() {
    let url = window.location.pathname;
    console.log(url)
    this._appService.url = url;
    
  }
}
