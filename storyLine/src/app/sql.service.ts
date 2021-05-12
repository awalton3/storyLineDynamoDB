import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpResponse } from '@angular/common/http';

import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

var shajs = require('sha.js');

@Injectable({
  providedIn: 'root'
})
export class SQLService {

  //SELECTED ONELINER
  selectedOneliner: string;
  dialogueRef: any;

  baseUrl = 'http://44.192.52.163:4201'
  onAddOneliner = new Subject<any>();
  onInsertStory = new Subject<any>();
  apigClient = null;
  // onCloseStoriesDialog = new Subject<any>();

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.apigClient = apiService.initialize();
  }

  getOneLiners(): any {
    // return this.http.get(`${this.baseUrl}/readAllOneLiners.php`);
    let data = {}
    let method = "GET"
    let body = this.apiService.getRequestBody(method, data)
    let params = {}
    let additionalParams = {}
    let path = "/oneliners"
    return this.apigClient.invokeApi(params, path, method, additionalParams, body)
  }

  // getOneLiner() {
  //   // Hash password
  //   var hashedPassword = shajs('sha256').update(password).digest('hex')
  //   let data = { "email": email, "hashedPassword": hashedPassword }
  //   let method = "POST"
  //   let body = this.apiService.getRequestBody(method, data)
  //   let params = { "username": username }
  //   let additionalParams = {}
  //   let path = this.apiBaseResourcePath + "/" + username
  //   return this.apigClient.invokeApi(params, path, method, additionalParams, body)
  //   return
  // }

  insertOneLiner(oneLinerObj): any {
    let data = { "oneLiner": oneLinerObj.oneLiner, "numUpVotes": oneLinerObj.numUpVotes.toString() }
    let method = "POST"
    let body = this.apiService.getRequestBody(method, data)
    let params = {}
    let additionalParams = {}
    let path = "/oneliners"
    return this.apigClient.invokeApi(params, path, method, additionalParams, body)
  }

  insertStory(storyObj): any {
    console.log(storyObj)
    // return this.http.post(`${this.baseUrl}/insertStory.php`, storyObj);
    let data = {
      "storyHashID": shajs('sha256').update(storyObj.content).digest('hex'),
      "oneLiner": storyObj.oneLiner,
      "numUpVotes": storyObj.numUpVotes.toString(),
      "authorUsername": storyObj.authorUsername.toString(),
      "timestamp": storyObj.timestamp
      //TODO: add this back in and fix template (type errors) - "writtenAnon": storyObj.writtenAnon
    }
    let method = "POST"
    let body = this.apiService.getRequestBody(method, data)
    let params = {}
    let additionalParams = {}
    let path = "/stories"
    return this.apigClient.invokeApi(params, path, method, additionalParams, body)
  }

  updateOneLinerNumUpVotes(oneLinerObj): any {
    return this.http.put(`${this.baseUrl}/updateOneLinerNumUpVotes.php`, oneLinerObj);
  }

  selectStoryByOneLiner(oneLinerObj) {
    let data = {}
    let method = "GET"
    let body = this.apiService.getRequestBody(method, data)
    let params = {"oneLiner": oneLinerObj.oneLiner}
    let additionalParams = {}
    let path = "/oneliners"
    return this.apigClient.invokeApi(params, path, method, additionalParams, body)
    //return this.http.put(`${this.baseUrl}/selectStoryByOneLiner.php`, oneLinerObj)
  }

  getMyStories() {
    return this.http.put(`${this.baseUrl}/selectStoryByUsername.php`, {'username':sessionStorage.getItem('username')})
  }

  getFriendStories() {
     return this.http.put(`${this.baseUrl}/selectFollowedStories.php`, {'username':sessionStorage.getItem('username')})
  }
  getBookmarked(storyHashID) {
    console.log('in getBookmarked');
    return this.http.put(`${this.baseUrl}/selectAcctsBookmarkStoriesByAcctAndHashID.php`, {'storyHashID':storyHashID, 'username':sessionStorage.getItem('username')})
  }

  removeBookmark(bookmarkObj) {
    console.log('in removebookmark');
    // return this.http.delete(`${this.baseUrl}/deleteAcctsBookmarkStories.php/?storyHashID=${bookmarkObj['storyHashID']}${bookmarkObj['authorUsername']}`);
    return this.http.delete(`${this.baseUrl}/deleteAcctsBookmarkStories.php/?storyHashID=${bookmarkObj['storyHashID']}&authorUsername=${bookmarkObj['authorUsername']}`);
  }

  addBookmark(bookmarkObj) {
    console.log('in addbookmark');
    return this.http.post(`${this.baseUrl}/insertAcctsBookmarkStories.php`, bookmarkObj);
  }

  getBookmarkedStories(username: string) {
    let body = { username: username }
    return this.http.post(this.baseUrl + "/selectAcctsBookmarkStoriesByAcct.php", body)
  }

  updateStoriesNumUpVotes(storyObj): any {
    return this.http.put(`${this.baseUrl}/updateStoriesNumUpVotes.php`, storyObj);
  }

  getLikedOneLiner(oneLiner) {
     return this.http.put(`${this.baseUrl}/selectAcctsLikeOneLinersByAcctAndOneLiner.php`, {'oneliner':oneLiner, 'username':sessionStorage.getItem('username')})
  }

  removeLikeOneLiner(likeObj) {
      return this.http.delete(`${this.baseUrl}/deleteAcctsLikeOneLiners.php/?oneliner=${likeObj['oneLiner']}&authorUsername=${likeObj['authorUsername']}`);
  }

  addLikeOneLiner(likeObj) {
      console.log(likeObj)
      return this.http.post(`${this.baseUrl}/insertAcctsLikeOneLiners.php`, likeObj);
  }

  getLiked(storyHashID) {
      return this.http.put(`${this.baseUrl}/selectAcctsLikeStoriesByAcctAndHashID.php`, {'storyHashID':storyHashID, 'username':sessionStorage.getItem('username')})
  }

  removeLike(likeObj) {
      return this.http.delete(`${this.baseUrl}/deleteAcctsLikeStories.php/?storyHashID=${likeObj['storyHashID']}&authorUsername=${likeObj['authorUsername']}`);
  }

  addLike(likeObj) {
      return this.http.post(`${this.baseUrl}/insertAcctsLikeStories.php`, likeObj);
  }

  getFollowing(authorUsername) {
      return this.http.put(`${this.baseUrl}/verifyFollower.php`, {'followed':authorUsername, 'follower': sessionStorage.getItem('username')})
  }

  removeFollower(followObj) {
      return this.http.delete(`${this.baseUrl}/deleteFollowers.php/?followed=${followObj['followed']}&follower=${followObj['follower']}`);
  }

  addFollower(followObj) {
      return this.http.post(`${this.baseUrl}/insertFollowers.php`, followObj);
  }

}
