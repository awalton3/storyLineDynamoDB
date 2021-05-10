import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment'
import { ApiService } from './api.service';

declare function require(name:string);
var querystring = require('querystring');

//Initiate API SDK
// declare function require(name:string);
// var apigClientFactory = require('aws-api-gateway-client').default;
// var apigClient = apigClientFactory.newClient({
//   apiKey: environment.apiKey,
//   invokeUrl:'https://eu0h5210m1.execute-api.us-east-1.amazonaws.com/test'
// })

// var params = { name: "A Letter to my Software Self" }
// var body = {
//   "async": true,
//   "crossDomain": true,
//   "url": 'https://eu0h5210m1.execute-api.us-east-1.amazonaws.com/test',
//   "method": "GET",
//   "headers": {
//       "cache-control": "no-cache"
//   }
// };
// var additionalParams = {}
// console.log(apigClient);

// apigClient.invokeApi(params, '/test', 'GET', additionalParams, body)
//   .then(res => console.log(res))
//   .catch(error => console.log(error))

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl = environment.serverEndpoint
  apigClient = null;
  // crypto = require('crypto');

  constructor(private http: HttpClient, private router: Router, private apiService: ApiService) {
    this.apigClient = apiService.initialize();
    console.log(this.apigClient)
  }

  isAuth() {
    if (sessionStorage.getItem('username') === null) {
      return false;
    }
    return true;
  }

  getUser() {
    return sessionStorage.getItem('username')
  }

  setUser(username: string, email: string) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
  }

  clearUser() {
    sessionStorage.clear();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }


  // register(username: string, email: string, password: string) {
  //   console.log(email)
  //   return this.http.post(this.baseUrl + "/insertAcct.php", {
  //     username: username,
  //     email: email,
  //     displayName: username,
  //     password: password
  //   })
  // }

  register(username: string, email: string, password: string) {
    let data = { "email": email, "hashedPassword": password }
    let method = "POST"
    let body = this.apiService.getRequestBody(method, data)
    let params = { "username": username }
    let additionalParams = {}
    let path = "/" + username
    return this.apigClient.invokeApi(params, path, method, additionalParams, body)
  }

  // login(username: string, password: string) {
  //   return this.http.post(this.baseUrl + "/selectAcct.php", {
  //     username: username,
  //     plaintextPwd: password
  //   })
  // }

  login(username: string, password: string) {
    let data = {}
    let method = "GET"
    let body = this.apiService.getRequestBody(method, data)
    let params = { "username": username }
    let path = "/" + username
    this.apigClient.invokeApi(params, path, method, {}, body)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  getUserFromDb(username: string) {
    let data = {}
    let method = "GET"
    let body = this.apiService.getRequestBody(method, data)
    let params = { "username": username }
    let additionalParams = {}
    let path = "/" + username
    return this.apigClient.invokeApi(params, path, method, additionalParams, body)
  }

  updatePassword(username: string, newPassword: string) {
    return this.http.post(this.baseUrl + "/updateAcctPassword.php", {
      username: username,
      password: newPassword
    })
  }

}
