
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
    HttpResponse, HttpUserEvent, HttpErrorResponse} from '@angular/common/http';

import { Injectable ,Injector } from "@angular/core";
import {Observable} from 'rxjs'
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import {AppserviceService} from '../app/appservice.service'

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
 
    constructor(private _appService: Injector, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let  service=this._appService.get(AppserviceService);
        console.log(req.headers.keys());
        console.log();
        let tokenreq=req.clone({
            headers:req.headers.set(
                'Authorization','Basic '+service.getToken())

                 
            
        })
   return next.handle(tokenreq);
     
}
}