import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment'
import { ApiService } from './api.service';

declare function require(name:string);
var querystring = require('querystring');
var shajs = require('sha.js')

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
  apiBaseResourcePath = '/accounts'
  //crypto = require('crypto');

  constructor(private http: HttpClient, private router: Router, private apiService: ApiService) {
    this.apigClient = apiService.initialize();
    //console.log(this.apigClient)
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
    // Hash password
    var hashedPassword = shajs('sha256').update(password).digest('hex')
    let data = { "email": email, "hashedPassword": hashedPassword }
    let method = "POST"
    let body = this.apiService.getRequestBody(method, data)
    let params = { "username": username }
    let additionalParams = {}
    let path = this.apiBaseResourcePath + "/" + username
    return this.apigClient.invokeApi(params, path, method, additionalParams, body)
  }

  login(username: string, password: string) {
    // Hash input password
    var hash = shajs('sha256').update(password).digest('hex')

    // Get user from Dynamo
    return this.getUserFromDb(username)
      .then(user => {
        // Compare passwords
        console.log(user.data)
        console.log(user.data.Item.hashedPassword.S)
        console.log(hash)
        let enteredPass = user.data.Item.hashedPassword.S
        let name = user.data.Item.username.S
        let email = user.data.Item.email.S
        console.log(name)

        if (enteredPass) {
          if (enteredPass == hash) {
            console.log('success')
            let userObj = {"username": name, "email": email}
            return Promise.resolve(userObj)
          }
          else {
            console.log('fail!!')
            return Promise.reject()
          }
        }
      })
      .catch(error => console.log(error))
  }

  getUserFromDb(username: string) {
    let data = {"username": username}
    let method = "GET"
    let body = this.apiService.getRequestBody(method, data)
    let params = { "username": username }
    let additionalParams = {}
    let path =this.apiBaseResourcePath + "/" + username
    return this.apigClient.invokeApi(params, path, method, additionalParams, body)
  }

  updatePassword(username: string, newPassword: string) {
    return this.http.post(this.baseUrl + "/updateAcctPassword.php", {
      username: username,
      password: newPassword
    })
  }

}
