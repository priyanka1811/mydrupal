import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
import { AppConfig } from '../../app.config';
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }
 
    login(name: string, password: string) {
        return this.http.post(this.config.apiUrl + '/user/login?_format=json', { name: name, pass: password})
        //return this.http.post(this.config.apiUrl + '/user/login?_format=json', { "name": "ashkaushik", "pass": "ash@1234"})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    // private helper methods 
    // private requestHeaders() {
    //     // create authorization header token
    //     let headers = new Headers({ 'content-type': 'application/json' });
    //         headers.append('Access-Control-Allow-Origin','http://localhost:4200');
    //         headers.append('Access-Control-Allow-Headers','Content-Type');
    //     return new RequestOptions({ headers: headers });
    // }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}