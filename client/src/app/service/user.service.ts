import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authenticated = false;

  userUrl: string;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/user';
  }

  authenticate(credentials: any, callback: any) {

    this.headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + window.btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get(this.userUrl, { headers: this.headers }).subscribe(response => {
      // if /user is reachable, it returns the currently authenticated user with 'name'
      if (Object(response)['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      
      return callback && callback();
    });
  }

}
