import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

declare function require(name:string);
var querystring = require('querystring');

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor() {
  }

  // Initialize API SDK
  initialize() {
    let apigClientFactory = require('aws-api-gateway-client').default;
    return apigClientFactory.newClient({
        apiKey: environment.apiKey,
        invokeUrl: environment.apiInvokeUrl
    })
  }

  //Get http request body
  getRequestBody(method, data) {
    return {
      "async": true,
      "crossDomain": true,
      "url": environment.apiInvokeUrl,
      "method": method.toUpperCase(),
      "headers": { "cache-control": "no-cache" },
      "data": data
    }
  }

}
