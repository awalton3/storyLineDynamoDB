(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-content/app-content.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-content/app-content.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>app-content works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-toolbar (onOpenSideNav)=\"sidenav.open()\"></app-toolbar>\n\n<mat-drawer-container>\n\n  <mat-drawer #sidenav [mode]=\"Over\" class=\"sidenav-drawer\">\n    <div>\n      <mat-nav-list>\n        <a mat-list-item [routerLink]=\"['/home']\"><p class=\"sidenav-text\">FEED</p></a>\n        <a mat-list-item [routerLink]=\"['/my-stories']\"><p class=\"sidenav-text\">STORIES</p></a>\n        <a mat-list-item [routerLink]=\"['/profile']\"><p class=\"sidenav-text\">PROFILE</p></a>\n        <a mat-list-item [routerLink]=\"['/bookmarks']\"><p class=\"sidenav-text\">BOOKMARKS</p></a>\n      </mat-nav-list>\n    </div>\n  </mat-drawer>\n\n  <mat-drawer-content> -->\n\n  <router-outlet style=\"height: 100%\"></router-outlet>\n\n  <!-- </mat-drawer-content>\n\n</mat-drawer-container> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bookmarks/bookmarks.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bookmarks/bookmarks.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar (onOpenSideNav)= \"sidenav.toggle()\"></app-toolbar>\n\n<mat-drawer-container>\n  <mat-drawer #sidenav mode=\"over\" class=\"sidenav-drawer\">\n    <div>\n      <mat-nav-list>\n        <a mat-list-item [routerLink]=\"['/home']\"><p class=\"sidenav-text\">FEED</p></a>\n        <a mat-list-item [routerLink]=\"['/my-stories']\"><p class=\"sidenav-text\">STORIES</p></a>\n        <a mat-list-item [routerLink]=\"['/profile']\"><p class=\"sidenav-text\">PROFILE</p></a>\n        <a mat-list-item [routerLink]=\"['/bookmarks']\"><p class=\"sidenav-text\">BOOKMARKS</p></a>\n        <a mat-list-item [routerLink]=\"['/friend-feed']\"><p class=\"sidenav-text\">FRIEND FEED</p></a>\n      </mat-nav-list>\n    </div>\n  </mat-drawer>\n\n  <mat-drawer-content style=\"background-color: #800322\">\n    <div *ngIf=\"selectedStories.length\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"stories-list\">\n        <app-stories *ngFor=\"let story of selectedStories\" [story]=story></app-stories>\n    </div>\n    <div *ngIf=\"!selectedStories.length\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"weird-message\">\n      <p class=\"no-stories\">The world is your napkin!<br></p>\n      <p class=\"no-stories\">So get out there and start writing.</p>\n    </div>\n  </mat-drawer-content>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/friend-feed/friend-feed.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/friend-feed/friend-feed.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar (onOpenSideNav)= \"sidenav.toggle()\"></app-toolbar>\n\n<mat-drawer-container>\n  <mat-drawer #sidenav [mode]=\"'Over'\" class=\"sidenav-drawer\">\n    <div>\n      <mat-nav-list>\n        <a mat-list-item [routerLink]=\"['/home']\"><p class=\"sidenav-text\">FEED</p></a>\n        <a mat-list-item [routerLink]=\"['/my-stories']\"><p class=\"sidenav-text\">STORIES</p></a>\n        <a mat-list-item [routerLink]=\"['/profile']\"><p class=\"sidenav-text\">PROFILE</p></a>\n        <a mat-list-item [routerLink]=\"['/bookmarks']\"><p class=\"sidenav-text\">BOOKMARKS</p></a>\n        <a mat-list-item [routerLink]=\"['/friend-feed']\"><p class=\"sidenav-text\">FRIEND FEED</p></a>\n      </mat-nav-list>\n    </div>\n  </mat-drawer>\n\n  <mat-drawer-content class=\"content\" *ngIf=\"selectedStories.length\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"stories-list\">\n          <app-stories *ngFor=\"let story of selectedStories\" [story]=story></app-stories>\n      </div>\n  </mat-drawer-content>\n  <mat-drawer-content class=\"container--empty\" *ngIf=\"!selectedStories.length\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"weird-message\">\n        <p class=\"no-stories\">Friendship is like a marshmallow sandwich... it sounds good at first, but gets sticky later.<br></p>\n        <p class=\"no-stories\">Make some friends!</p>\n      </div>\n  </mat-drawer-content>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar (onOpenSideNav)=\"sidenav.toggle()\"></app-toolbar>\n\n<mat-drawer-container>\n  <mat-drawer #sidenav mode=\"over\" class=\"sidenav-drawer\">\n    <div>\n      <mat-nav-list>\n        <a mat-list-item [routerLink]=\"['/home']\">\n          <p class=\"sidenav-text\">FEED</p>\n        </a>\n        <a mat-list-item [routerLink]=\"['/my-stories']\">\n          <p class=\"sidenav-text\">STORIES</p>\n        </a>\n        <a mat-list-item [routerLink]=\"['/profile']\">\n          <p class=\"sidenav-text\">PROFILE</p>\n        </a>\n        <a mat-list-item [routerLink]=\"['/bookmarks']\">\n          <p class=\"sidenav-text\">BOOKMARKS</p>\n        </a>\n        <a mat-list-item [routerLink]=\"['/friend-feed']\">\n          <p class=\"sidenav-text\">FRIEND FEED</p>\n        </a>\n      </mat-nav-list>\n    </div>\n  </mat-drawer>\n\n  <mat-drawer-content>\n\n\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center start\" class=\"container\">\n\n      <app-oneliner-card *ngFor=\"let oneLinerEl of oneLiners\" (onSelect)=\"fetchStories(oneLinerEl);\" [oneLiner]=oneLinerEl (onUpdateLike)=\"updateLike($event, oneLinerEl.oneLiner)\"\n        (onDeleteOneLiner)=\"deleteOneLiner(oneLinerEl.oneLiner)\"></app-oneliner-card>\n\n      <div class=\"bottom-right-fab\" (click)=\"onSubmitOneliner()\">\n        <button mat-fab color=\"accent\">\n          <i class=\"material-icons\" fxLayoutAlign=\"center center\" style=\"color: white\">add</i>\n        </button>\n      </div>\n    </div>\n\n\n</mat-drawer-content>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/oneliner-card/oneliner-card.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/oneliner-card/oneliner-card.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxFlex class=\"one-liner-card\">\n\n  <mat-card-content>\n\n    <div (click)=\"onSelect.next()\">\n      <p class=\"one-liner-card-content\">\n        {{oneLiner.oneLiner}}\n      </p>\n    </div>\n\n    <div class=\"votes-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"onLike()\">\n      <i *ngIf=\"liked\" class=\"material-icons votes-container-icon\" fxLayoutAlign=\"center center\">favorite</i>\n      <i *ngIf=\"!liked\" class=\"material-icons votes-container-icon\" fxLayoutAlign=\"center center\">favorite_outline</i>\n      {{ oneLiner.numUpVotes}}\n    </div>\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/stories-ss/stories-ss.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/stories-ss/stories-ss.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar [content]=\"toolbarContent\" (onDismissDrawer)=\"toolbarContent = null; dialogRef.close()\"></app-toolbar>\n\n<mat-drawer-container>\n  <mat-drawer #sidenav mode=\"over\" class=\"sidenav-drawer\">\n    <div>\n      <mat-nav-list>\n        <a mat-list-item [routerLink]=\"['/home']\">\n          <p class=\"sidenav-text\">FEED</p>\n        </a>\n        <a mat-list-item [routerLink]=\"['/my-stories']\">\n          <p class=\"sidenav-text\">STORIES</p>\n        </a>\n        <a mat-list-item [routerLink]=\"['/profile']\">\n          <p class=\"sidenav-text\">PROFILE</p>\n        </a>\n        <a mat-list-item [routerLink]=\"['/bookmarks']\">\n          <p class=\"sidenav-text\">BOOKMARKS</p>\n        </a>\n        <a mat-list-item [routerLink]=\"['/friend-feed']\">\n          <p class=\"sidenav-text\">FRIEND FEED</p>\n        </a>\n      </mat-nav-list>\n    </div>\n  </mat-drawer>\n\n  <mat-drawer-content class=\"container\" *ngIf=\"storiesExist\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <app-stories *ngFor=\"let story of data.stories\" [story]=story></app-stories>\n      </div>\n      <!-- <div *ngIf=\"!storiesExist\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"weird-message\">\n        <p class=\"no-stories\">Ah, a blank slate.<br></p>\n        <p class=\"no-stories\">Be the first to make history.</p>\n      </div> -->\n      <div class=\"bottom-right-fab\" (click)=\"onAddStory()\">\n        <button mat-fab color=\"accent\">\n          <i class=\"material-icons\" fxLayoutAlign=\"center center\" style=\"color: white\">edit</i>\n        </button>\n      </div>\n    </div>\n  </mat-drawer-content>\n  <mat-drawer-content class=\"container--empty\" *ngIf=\"!storiesExist\" fxLayoutAlign=\"center center\">\n    <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center start\"> -->\n      <!-- <div *ngIf=\"storiesExist\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <app-stories *ngFor=\"let story of data.stories\" [story]=story></app-stories>\n      </div> -->\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"weird-message\">\n        <p class=\"no-stories\">Ah, a blank slate.<br></p>\n        <p class=\"no-stories\">Be the first to make history.</p>\n      </div>\n      <div class=\"bottom-right-fab\" (click)=\"onAddStory()\">\n        <button mat-fab color=\"accent\">\n          <i class=\"material-icons\" fxLayoutAlign=\"center center\" style=\"color: white\">edit</i>\n        </button>\n      </div>\n    <!-- </div> -->\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/stories/stories.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/stories/stories.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxFlex class=\"stories-card\">\n\n  <mat-card-content>\n\n    <div class=\"stories-card-header\"  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div class=\"profile-image\" fxLayoutAlign=\"center center\" >\n          <i fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"material-icons\" style=\"font-size: 80px; color: #ffffff; margin-top: 17px\">person</i>\n        </div>\n        <div class=\"stories-card-header-info\">\n          <p *ngIf=\"!story.writtenAnon\" style=\"font-weight: 800;\">{{ story.authorUsername }}</p>\n          <p *ngIf=\"story.writtenAnon\" style=\"font-weight: 800;\">Anonymous User</p>\n          <p class=\"timestamp\">{{ story.timestamp | date }}</p>\n        </div>\n      </div>\n      <div *ngIf=\"!me && !story.writtenAnon\">\n          <i *ngIf=\"!following\" class=\"material-icons follow\" (click)=\"onFollow()\">person_add</i>\n          <i *ngIf=\"following\" class=\"material-icons follow\" (click)=\"onFollow()\">person_add_disabled</i>\n      </div>\n    </div>\n    <div class=\"bookmark-container\" (click)=\"onBookmark()\">\n      <i *ngIf=\"!bookmarked\" class=\"bookmark-container-icon material-icons\">bookmark_border</i>\n      <i *ngIf=\"bookmarked\" class=\"bookmark-container-icon material-icons\">bookmark</i>\n    </div>\n\n    <p class=\"stories-card-content\">\n      {{story.content}}\n    </p>\n    <div class=\"votes-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\" (click)=\"onLike()\">\n        <i *ngIf=\"liked\" class=\"material-icons votes-container-icon\" fxLayoutAlign=\"center center\">favorite</i>\n        <i *ngIf=\"!liked\" class=\"material-icons votes-container-icon\" fxLayoutAlign=\"center center\">favorite_outline</i>\n    {{ story.numUpVotes  + justLiked }}\n    </div>\n\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/submit-one-liner/submit-one-liner.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/submit-one-liner/submit-one-liner.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"oneLinerForm\" class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\">\n  <mat-form-field floatLabel=\"never\" fxFill>\n    <textarea matInput formControlName=\"content\" type=\"text\" placeholder=\"Alas, dumplings!\" rows=\"10\"></textarea>\n  </mat-form-field>\n  <button (click)=\"onSubmitForm()\" mat-raised-button color=\"accent\" class=\"action-button\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/submit-story/submit-story.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/submit-story/submit-story.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"space-between center\" fxLayout=\"row\" class=\"toolbar\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <p class=\"selectText\">Submit as: </p>\n    <mat-form-field fxLayoutAlign=\"center center\" color=\"accent\">\n      <mat-select matNativeControl style=\"color: white;\" #submitType>\n        <mat-option [value]=\"username\">{{ username }}</mat-option>\n        <mat-option value=\"anonymous\">anonymous</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <button mat-icon-button (click)=\"onSubmitForm()\" color=\"accent\">\n    <i class=\"material-icons\" style=\"font-size: 30px; padding: 5px;\">done</i>\n  </button>\n</div>\n\n<form [formGroup]=\"storySubmitForm\" class=\"form-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\">\n  <mat-form-field floatLabel=\"never\" fxFill>\n    <textarea matInput formControlName=\"content\" type=\"text\" placeholder=\"{{ placeholder }}\" rows=\"20\"></textarea>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/toolbar/toolbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/toolbar/toolbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\">\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"bar-container\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <img class=\"logo-short\" src=\"assets/storyLine-logo-short.png\" (click)=\"onOpen()\">\n      <img *ngIf=\"!content\" class=\"logo--width\" src=\"assets/storyLine-logo-white.png\" fxLayoutAlign=\"center center\">\n      <p *ngIf=\"content\">{{content}}</p>\n    </div>\n\n    <div (click)=\"onDismiss()\" class=\"close\">\n      <i *ngIf=\"content\" class=\"material-icons\">close</i>\n    </div>\n    \n  </div>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"heightFull background-base\">\n\n  <img class=\"logo-short\" src=\"assets/storyLine-logo-short.png\">\n  <img class=\"logo--width\" src=\"assets/storyLine-logo-white.png\">\n\n  <form [formGroup]=\"loginForm\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-form-field floatLabel=\"never\" class=\"auth-input\" fxLayoutAlign=\"start start\">\n      <input matInput formControlName=\"username\" type=\"text\" placeholder=\"Username\" class=\"auth-input-field\" fxLayoutAlign=\"center center\">\n      <span matPrefix><i class=\"material-icons auth-input-field-icon\" fxLayoutAlign=\"center center\">person</i></span>\n    </mat-form-field>\n    <mat-form-field floatLabel=\"never\" class=\"auth-input\" fxLayoutAlign=\"start start\">\n      <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Password\" class=\"auth-input-field\" fxLayoutAlign=\"center center\">\n      <span matPrefix><i class=\"material-icons auth-input-field-icon\" fxLayoutAlign=\"center center\">lock</i></span>\n      <span matSuffix class=\"auth-input-field-forgot\">?</span>\n    </mat-form-field>\n    <button (click)=\"onSubmit()\" mat-raised-button color=\"accent\" class=\"action-button\">LOGIN</button>\n    <br>\n    <p class=\"auth-switch-prompt\" (click)=\"navigateToRegister()\">Don't have an account? Register here!</p>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-stories/my-stories.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-stories/my-stories.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar (onOpenSideNav)= \"sidenav.toggle()\"></app-toolbar>\n\n<mat-drawer-container>\n  <mat-drawer #sidenav mode=\"over\" class=\"sidenav-drawer\">\n    <div>\n      <mat-nav-list>\n        <a mat-list-item [routerLink]=\"['/home']\"><p class=\"sidenav-text\">FEED</p></a>\n        <a mat-list-item [routerLink]=\"['/my-stories']\"><p class=\"sidenav-text\">STORIES</p></a>\n        <a mat-list-item [routerLink]=\"['/profile']\"><p class=\"sidenav-text\">PROFILE</p></a>\n        <a mat-list-item [routerLink]=\"['/bookmarks']\"><p class=\"sidenav-text\">BOOKMARKS</p></a>\n        <a mat-list-item [routerLink]=\"['/friend-feed']\"><p class=\"sidenav-text\">FRIEND FEED</p></a>\n      </mat-nav-list>\n    </div>\n  </mat-drawer>\n\n  <!-- <mat-drawer-content class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div *ngIf=\"selectedStories.length\" class=\"stories-list\">\n        <app-stories *ngFor=\"let story of selectedStories\" [story]=story></app-stories>\n    </div>\n    <div *ngIf=\"!selectedStories.length\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <p class=\"no-stories\">The world is your napkin!<br></p>\n      <p class=\"no-stories\">So get out there and start writing.</p>\n    </div>\n  </mat-drawer-content> -->\n\n  <mat-drawer-content class=\"content\">\n    <div *ngIf=\"selectedStories.length\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"stories-list\">\n        <app-stories *ngFor=\"let story of selectedStories\" [story]=story></app-stories>\n    </div>\n    <div *ngIf=\"!selectedStories.length\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"weird-message\">\n      <p class=\"no-stories\">The world is your napkin!<br></p>\n      <p class=\"no-stories\">So get out there and start writing.</p>\n    </div>\n  </mat-drawer-content>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container>\n\n  <mat-drawer #imageEditor mode=\"over\" position=\"end\" class=\"side-content-drawer\">\n    <mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"toolbar-editor-container\">\n      <i class=\"material-icons toolbar-icon\">close</i>\n      <p class=\"toolbar-text\">Select Image</p>\n      <span></span>\n    </mat-toolbar>\n  </mat-drawer>\n\n  <mat-drawer-content class=\"background-base heightFull\">\n\n    <mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"space-between center\" style=\"background: transparent; padding: 0 30px;\">\n      <i class=\"material-icons home-icon\" (click)=\"navigateToHome()\">home</i>\n      <p class=\"toolbar--title\"> MY PROFILE</p>\n      <i class=\"material-icons home-icon\" (click)=\"logout()\">power_settings_new</i>\n    </mat-toolbar>\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <p class=\"title\">Hi, {{ user.username }}</p>\n      <div class=\"profile-image-container-large profile-image-click\" style=\"background-image: url(https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)\">\n        <!-- <div (click)=\"imageEditor.open()\" class=\"profile-image-add\">\n          <i fxLayoutAlign=\"center center\" class=\"material-icons profile-image-add-icon\">add</i>\n        </div> -->\n      </div>\n      <br>\n      <br>\n      <!-- <p class=\"username\">{{ user.username }}</p>\n        <p class=\"email\">{{ user.email }}</p>  -->\n      <p class=\"forgot\" fxLayout=\"row\" fxLayoutAlign=\"start start\">Update Password</p>\n      <form [formGroup]=\"forgotForm\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <mat-form-field floatLabel=\"never\" class=\"auth-input\" fxLayoutAlign=\"start start\">\n          <input matInput formControlName=\"new\" type=\"password\" placeholder=\"New password\" class=\"auth-input-field\" fxLayoutAlign=\"center center\">\n          <span matPrefix><i class=\"material-icons auth-input-field-icon\" fxLayoutAlign=\"center center\">lock</i></span>\n        </mat-form-field>\n        <mat-form-field floatLabel=\"never\" class=\"auth-input\" fxLayoutAlign=\"start start\">\n          <input matInput formControlName=\"confirm\" type=\"password\" placeholder=\"Confirm\" class=\"auth-input-field\" fxLayoutAlign=\"center center\">\n          <span matPrefix><i class=\"material-icons auth-input-field-icon\" fxLayoutAlign=\"center center\">lock</i></span>\n        </mat-form-field>\n        <button (click)=\"onSubmit()\" mat-raised-button color=\"accent\" class=\"action-button\">UPDATE</button>\n      </form>\n    </div>\n\n  </mat-drawer-content>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"heightFull background-base\">\n\n  <img class=\"logo-short\" src=\"assets/storyLine-logo-short.png\">\n  <img class=\"logo--width\" src=\"assets/storyLine-logo-white.png\">\n\n  <form [formGroup]=\"registerForm\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <mat-form-field floatLabel=\"never\" class=\"auth-input\" fxLayoutAlign=\"start start\">\n      <input matInput formControlName=\"username\" type=\"text\" placeholder=\"Username\" class=\"auth-input-field\" fxLayoutAlign=\"center center\">\n      <span matPrefix><i class=\"material-icons auth-input-field-icon\" fxLayoutAlign=\"center center\">person</i></span>\n    </mat-form-field>\n\n    <mat-form-field floatLabel=\"never\" class=\"auth-input\" fxLayoutAlign=\"start start\">\n      <input matInput formControlName=\"email\" type=\"email\" placeholder=\"Email\" class=\"auth-input-field\" fxLayoutAlign=\"center center\">\n      <span matPrefix><i class=\"material-icons auth-input-field-icon\" fxLayoutAlign=\"center center\">email</i></span>\n    </mat-form-field>\n\n    <mat-form-field floatLabel=\"never\" class=\"auth-input\" fxLayoutAlign=\"start start\">\n      <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Password\" class=\"auth-input-field\" fxLayoutAlign=\"center center\">\n      <span matPrefix><i class=\"material-icons auth-input-field-icon\" fxLayoutAlign=\"center center\">lock</i></span>\n      <span matSuffix class=\"auth-input-field-forgot\">?</span>\n    </mat-form-field>\n\n    <button (click)=\"onSubmit()\" mat-raised-button color=\"accent\" class=\"action-button\" [disabled]=\"registerForm.status === 'INVALID'\">REGISTER</button>\n\n    <br>\n    <p class=\"auth-switch-prompt\" (click)=\"navigateToLogin()\">Already have an account? Login here.</p>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/snack-bar/snack-bar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/snack-bar/snack-bar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"widthFullPer\">\n  <i *ngIf=\"!data.isError\" class=\"material-icons\" style=\"color: #3CFF94; margin-right: 10px;\">check_circle</i>\n  <i *ngIf=\"data.isError\" class=\"material-icons\" style=\"color: #FF284D; margin-right: 10px;\">error</i>\n  <span style=\"font-family: 'Montserrat', sans-serif !important; font-size: 15px\">{{ data.message }}</span>\n  <!-- <button mat-button (click)=\"onSnackBarClose()\">RETRY</button> -->\n</span>\n"

/***/ }),

/***/ "./src/app/app-content/app-content.component.css":
/*!*******************************************************!*\
  !*** ./src/app/app-content/app-content.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb250ZW50L2FwcC1jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app-content/app-content.component.ts":
/*!******************************************************!*\
  !*** ./src/app/app-content/app-content.component.ts ***!
  \******************************************************/
/*! exports provided: AppContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContentComponent", function() { return AppContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppContentComponent = class AppContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-content',
        template: __webpack_require__(/*! raw-loader!./app-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-content/app-content.component.html"),
        styles: [__webpack_require__(/*! ./app-content.component.css */ "./src/app/app-content/app-content.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppContentComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_stories_stories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/stories/stories.component */ "./src/app/home/stories/stories.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _my_stories_my_stories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-stories/my-stories.component */ "./src/app/my-stories/my-stories.component.ts");
/* harmony import */ var _app_content_app_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-content/app-content.component */ "./src/app/app-content/app-content.component.ts");
/* harmony import */ var _friend_feed_friend_feed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./friend-feed/friend-feed.component */ "./src/app/friend-feed/friend-feed.component.ts");













const routes = [
    {
        path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
            { path: 'app', component: _app_content_app_content_component__WEBPACK_IMPORTED_MODULE_11__["AppContentComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'home/stories', component: _home_stories_stories_component__WEBPACK_IMPORTED_MODULE_6__["StoriesComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
            { path: 'bookmarks', component: _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_9__["BookmarksComponent"] },
            { path: 'my-stories', component: _my_stories_my_stories_component__WEBPACK_IMPORTED_MODULE_10__["MyStoriesComponent"] },
            { path: 'friend-feed', component: _friend_feed_friend_feed_component__WEBPACK_IMPORTED_MODULE_12__["FriendFeedComponent"] },
            { path: '**', redirectTo: 'login', pathMatch: 'full' }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .sidenav-drawer {\n  width: 30VW;\n  background-color: #800322;\n  padding-top: 100px;\n}\n\n.sidenav-text {\n  padding: 30px;\n  font-weight: 500;\n  font-size: 20px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztHQVlHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuc2lkZW5hdi1kcmF3ZXIge1xuICB3aWR0aDogMzBWVztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDMyMjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uc2lkZW5hdi10ZXh0IHtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZjtcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sql.service */ "./src/app/sql.service.ts");
/* harmony import */ var _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/snack-bar/snack-bar.service */ "./src/app/shared/snack-bar/snack-bar.service.ts");
/* harmony import */ var _shared_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/snack-bar/snack-bar.component */ "./src/app/shared/snack-bar/snack-bar.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let AppComponent = class AppComponent {
    constructor(sql, snackBarService, snackBar, authService, router) {
        this.sql = sql;
        this.snackBarService = snackBarService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        if (!this.authService.isAuth())
            this.router.navigate(['./login']);
        this.listenForSnackBarOpen();
        this.listenForSnackBarClose();
    }
    listenForSnackBarOpen() {
        this.subs.add(this.snackBarService.onOpenSnackBar.subscribe(data => this.openSnackbar({ message: data.message, isError: data.isError })));
    }
    listenForSnackBarClose() {
        this.subs.add(this.snackBarService.onCloseSnackBar.subscribe(() => this.snackBar.dismiss()));
    }
    openSnackbar(data) {
        this.snackBar.openFromComponent(_shared_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__["SnackBarComponent"], {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            data: data
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"] },
    { type: _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"],
        _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_forms_material_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/forms-material-components.module */ "./src/app/shared/forms-material-components.module.ts");
/* harmony import */ var _shared_material_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/material-components.module */ "./src/app/shared/material-components.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_oneliner_card_oneliner_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/oneliner-card/oneliner-card.component */ "./src/app/home/oneliner-card/oneliner-card.component.ts");
/* harmony import */ var _home_submit_one_liner_submit_one_liner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/submit-one-liner/submit-one-liner.component */ "./src/app/home/submit-one-liner/submit-one-liner.component.ts");
/* harmony import */ var _home_stories_stories_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/stories/stories.component */ "./src/app/home/stories/stories.component.ts");
/* harmony import */ var _home_submit_story_submit_story_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/submit-story/submit-story.component */ "./src/app/home/submit-story/submit-story.component.ts");
/* harmony import */ var _home_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/toolbar/toolbar.component */ "./src/app/home/toolbar/toolbar.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _shared_snack_bar_snack_bar_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/snack-bar/snack-bar.module */ "./src/app/shared/snack-bar/snack-bar.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _my_stories_my_stories_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./my-stories/my-stories.component */ "./src/app/my-stories/my-stories.component.ts");
/* harmony import */ var _app_content_app_content_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app-content/app-content.component */ "./src/app/app-content/app-content.component.ts");
/* harmony import */ var _friend_feed_friend_feed_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./friend-feed/friend-feed.component */ "./src/app/friend-feed/friend-feed.component.ts");
/* harmony import */ var _home_stories_ss_stories_ss_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./home/stories-ss/stories-ss.component */ "./src/app/home/stories-ss/stories-ss.component.ts");



















/* Child components */















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _home_oneliner_card_oneliner_card_component__WEBPACK_IMPORTED_MODULE_21__["OnelinerCardComponent"],
            _home_submit_one_liner_submit_one_liner_component__WEBPACK_IMPORTED_MODULE_22__["SubmitOneLinerComponent"],
            _home_stories_stories_component__WEBPACK_IMPORTED_MODULE_23__["StoriesComponent"],
            _home_submit_story_submit_story_component__WEBPACK_IMPORTED_MODULE_24__["SubmitStoryComponent"],
            _home_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_25__["ToolbarComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
            _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_29__["BookmarksComponent"],
            _my_stories_my_stories_component__WEBPACK_IMPORTED_MODULE_30__["MyStoriesComponent"],
            _app_content_app_content_component__WEBPACK_IMPORTED_MODULE_31__["AppContentComponent"],
            _friend_feed_friend_feed_component__WEBPACK_IMPORTED_MODULE_32__["FriendFeedComponent"],
            _home_stories_ss_stories_ss_component__WEBPACK_IMPORTED_MODULE_33__["StoriesSsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _shared_forms_material_components_module__WEBPACK_IMPORTED_MODULE_6__["FormsMaterialComponentsModule"],
            _shared_material_components_module__WEBPACK_IMPORTED_MODULE_7__["MaterialComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _shared_snack_bar_snack_bar_module__WEBPACK_IMPORTED_MODULE_27__["SnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_home_submit_one_liner_submit_one_liner_component__WEBPACK_IMPORTED_MODULE_22__["SubmitOneLinerComponent"], _home_submit_story_submit_story_component__WEBPACK_IMPORTED_MODULE_24__["SubmitStoryComponent"], _home_stories_ss_stories_ss_component__WEBPACK_IMPORTED_MODULE_33__["StoriesSsComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = 'http://44.192.52.163:4201';
    }
    isAuth() {
        if (sessionStorage.getItem('username') === null) {
            return false;
        }
        return true;
    }
    getUser() {
        return sessionStorage.getItem('username');
    }
    setUser(username, email) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('email', email);
    }
    clearUser() {
        sessionStorage.clear();
    }
    logout() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
    register(username, email, password) {
        console.log(email);
        return this.http.post(this.baseUrl + "/insertAcct.php", {
            username: username,
            email: email,
            displayName: username,
            password: password
        });
    }
    login(username, password) {
        return this.http.post(this.baseUrl + "/selectAcct.php", {
            username: username,
            plaintextPwd: password
        });
    }
    updatePassword(username, newPassword) {
        return this.http.post(this.baseUrl + "/updateAcctPassword.php", {
            username: username,
            password: newPassword
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.css":
/*!***************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-drawer {\n  width: 300px;\n  background-color: #800322;\n  padding-top: 100px;\n}\n\n.sidenav-text {\n  padding: 30px;\n  font-weight: 500;\n  font-size: 20px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n}\n\n.no-stories {\n  font-weight: 500;\n  font-size: 45px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n}\n\n.stories-list {\n  padding-top: 100px;\n}\n\n.content {\n  height: 100VH;\n  background-color: #800322;\n}\n\n.weird-message {\n  padding-top: 35VH;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmtzL2Jvb2ttYXJrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnREFBZ0Q7RUFDaEQsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnREFBZ0Q7RUFDaEQsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrcy9ib29rbWFya3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWRyYXdlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDMyMjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uc2lkZW5hdi10ZXh0IHtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZjtcbn1cblxuLm5vLXN0b3JpZXMge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmO1xufVxuXG4uc3Rvcmllcy1saXN0IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwVkg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAzMjI7XG59XG5cbi53ZWlyZC1tZXNzYWdlIHtcbiAgcGFkZGluZy10b3A6IDM1Vkg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.ts ***!
  \**************************************************/
/*! exports provided: BookmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksComponent", function() { return BookmarksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sql.service */ "./src/app/sql.service.ts");



let BookmarksComponent = class BookmarksComponent {
    constructor(sql) {
        this.sql = sql;
    }
    ngOnInit() {
        this.selectedStories = [];
        this.loadBookmarkedStories();
    }
    loadBookmarkedStories() {
        this.sql.getBookmarkedStories(sessionStorage.getItem('username'))
            .subscribe(bookmarkedStories => {
            this.selectedStories = bookmarkedStories;
            console.log(this.selectedStories);
        });
    }
};
BookmarksComponent.ctorParameters = () => [
    { type: _sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"] }
];
BookmarksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookmarks',
        template: __webpack_require__(/*! raw-loader!./bookmarks.component.html */ "./node_modules/raw-loader/index.js!./src/app/bookmarks/bookmarks.component.html"),
        styles: [__webpack_require__(/*! ./bookmarks.component.css */ "./src/app/bookmarks/bookmarks.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"]])
], BookmarksComponent);



/***/ }),

/***/ "./src/app/friend-feed/friend-feed.component.css":
/*!*******************************************************!*\
  !*** ./src/app/friend-feed/friend-feed.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  height: 100VH;\n  background-color: #800322;\n}\n\n.stories-list {\n  padding-top: 100px;\n  /* margin-top: 3000px; */\n}\n\n.no-stories {\n  font-weight: 500;\n  font-size: 45px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n}\n\n.weird-message {\n  /* padding-top: 35VH; */\n}\n\n.sidenav-drawer {\n  width: 300px;\n  background-color: #800322;\n  padding-top: 100px;\n}\n\n.sidenav-text {\n  padding: 30px;\n  font-weight: 500;\n  font-size: 20px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n}\n\n.container--empty {\n  padding-top: 100px;\n  background-color: #800322;\n  height: 100vh;\n  width: 100vw;\n  text-align: center;\n  padding: 0 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kLWZlZWQvZnJpZW5kLWZlZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnREFBZ0Q7RUFDaEQsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnREFBZ0Q7RUFDaEQsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mcmllbmQtZmVlZC9mcmllbmQtZmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMFZIO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMzIyO1xufVxuXG4uc3Rvcmllcy1saXN0IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAvKiBtYXJnaW4tdG9wOiAzMDAwcHg7ICovXG59XG5cbi5uby1zdG9yaWVzIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZjtcbn1cblxuLndlaXJkLW1lc3NhZ2Uge1xuICAvKiBwYWRkaW5nLXRvcDogMzVWSDsgKi9cbn1cblxuLnNpZGVuYXYtZHJhd2VyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMzIyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi5zaWRlbmF2LXRleHQge1xuICBwYWRkaW5nOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmO1xufVxuXG4uY29udGFpbmVyLS1lbXB0eSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDMyMjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/friend-feed/friend-feed.component.ts":
/*!******************************************************!*\
  !*** ./src/app/friend-feed/friend-feed.component.ts ***!
  \******************************************************/
/*! exports provided: FriendFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendFeedComponent", function() { return FriendFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sql.service */ "./src/app/sql.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let FriendFeedComponent = class FriendFeedComponent {
    constructor(sql) {
        this.sql = sql;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        this.selectedStories = [];
        this.loadFriendStories();
    }
    loadFriendStories() {
        this.subs.add(this.sql.getFriendStories().subscribe(selectedStories => {
            this.selectedStories = selectedStories;
        }));
    }
};
FriendFeedComponent.ctorParameters = () => [
    { type: _sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"] }
];
FriendFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friend-feed',
        template: __webpack_require__(/*! raw-loader!./friend-feed.component.html */ "./node_modules/raw-loader/index.js!./src/app/friend-feed/friend-feed.component.html"),
        styles: [__webpack_require__(/*! ./friend-feed.component.css */ "./src/app/friend-feed/friend-feed.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"]])
], FriendFeedComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .stories-drawer {\n  width: 100VW;\n  background-color: #800322;\n} */\n\n.sidenav-drawer {\n  width: 300px;\n  background-color: #800322;\n  padding-top: 100px;\n}\n\n.sidenav-text {\n  padding: 30px;\n  font-weight: 500;\n  font-size: 20px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n}\n\n.container {\n  padding-top: 100px;\n  background-color: #800322;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnREFBZ0Q7RUFDaEQsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnN0b3JpZXMtZHJhd2VyIHtcbiAgd2lkdGg6IDEwMFZXO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMzIyO1xufSAqL1xuXG4uc2lkZW5hdi1kcmF3ZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAzMjI7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuLnNpZGVuYXYtdGV4dCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAzMjI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sql.service */ "./src/app/sql.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _submit_one_liner_submit_one_liner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submit-one-liner/submit-one-liner.component */ "./src/app/home/submit-one-liner/submit-one-liner.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _stories_ss_stories_ss_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stories-ss/stories-ss.component */ "./src/app/home/stories-ss/stories-ss.component.ts");








let HomeComponent = class HomeComponent {
    constructor(sql, _bottomSheet, dialog) {
        this.sql = sql;
        this._bottomSheet = _bottomSheet;
        this.dialog = dialog;
        this.storiesExist = 0;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    ngOnInit() {
        this.getOneLiners();
        this.listenForOneLiners();
        this.listenForStories();
    }
    getOneLiners() {
        this.subs.add(this.sql.getOneLiners().subscribe(oneLiners => {
            this.oneLiners = oneLiners;
        }));
    }
    listenForOneLiners() {
        this.subs.add(this.sql.onAddOneliner.subscribe(newOneLinerObj => {
            this.addOneLiner(newOneLinerObj);
        }));
    }
    listenForStories() {
        this.subs.add(this.sql.onInsertStory.subscribe(storyObj => {
            this.sql.dialogueRef.close();
            this.fetchStories(storyObj);
        }));
    }
    updateLike(liked, oneLiner) {
        console.log(liked);
        oneLiner = { "oneLiner": oneLiner, "change": liked };
        this.sql.updateOneLinerNumUpVotes(oneLiner).subscribe(res => {
        }, error => console.log(error));
    }
    onSubmitOneliner() {
        this._bottomSheet.open(_submit_one_liner_submit_one_liner_component__WEBPACK_IMPORTED_MODULE_4__["SubmitOneLinerComponent"]);
    }
    addOneLiner(newOneLiner) {
        newOneLiner = {
            "oneLiner": newOneLiner.content,
            "numViews": 0,
            "writtenAnon": 0,
            "timestamp": newOneLiner.timestamp,
            "authorUsername": sessionStorage.getItem('username'),
            "numUpVotes": 0
        };
        this.sql.insertOneLiner(newOneLiner).subscribe(res => {
            this.getOneLiners();
        }, error => console.log(error));
    }
    fetchStories(oneLinerObj) {
        sessionStorage.setItem('oneLiner', oneLinerObj.oneLiner);
        this.subs.add(this.sql.selectStoryByOneLiner(oneLinerObj).subscribe(res => {
            this.selectedStories = res;
            let stories = res;
            this.openStoriesView(stories, oneLinerObj.oneLiner);
            if (res[0]['exist'] == 1) {
                this.storiesExist = 1;
            }
            this.selectedOneliner = oneLinerObj.oneLiner;
            this.sql.selectedOneliner = oneLinerObj.oneLiner;
        }));
    }
    openStoriesView(stories, oneLiner) {
        this.dialog.open(_stories_ss_stories_ss_component__WEBPACK_IMPORTED_MODULE_7__["StoriesSsComponent"], {
            width: '100vw',
            maxWidth: '100vw',
            height: '100vh',
            panelClass: 'storiesViewerContainer',
            data: { stories: stories, oneLiner: oneLiner }
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/home/oneliner-card/oneliner-card.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/oneliner-card/oneliner-card.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".one-liner-card {\n  max-width: 300px;\n  min-width: 300px;\n  width: 300px;\n  font-family: 'Montserrat', sans-serif !important;\n  margin: 20px;\n  cursor: pointer;\n}\n\n.one-liner-card-content {\n  font-size: 35px;\n  font-weight: 800;\n  line-height: 65px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #800322;\n  margin: 15px;\n}\n\n.one-liner-quote {\n  font-size: 50px;\n  font-weight: 900;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ab0a4a;\n}\n\n.votes-container {\n  width: 65px;\n  height: 50px;\n  background-color: #F09F23;\n  position: absolute;\n  bottom: 0px;\n  right: 0;\n  color: #fff;\n  border-radius: 50% 0 0 0;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer\n}\n\n.votes-container-icon {\n  font-size: 18px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9vbmVsaW5lci1jYXJkL29uZWxpbmVyLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdEQUFnRDtFQUNoRCxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnREFBZ0Q7RUFDaEQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb25lbGluZXItY2FyZC9vbmVsaW5lci1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub25lLWxpbmVyLWNhcmQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vbmUtbGluZXItY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogNjVweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzgwMDMyMjtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4ub25lLWxpbmVyLXF1b3RlIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYWIwYTRhO1xufVxuXG4udm90ZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwOUYyMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCUgMCAwIDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi52b3Rlcy1jb250YWluZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/oneliner-card/oneliner-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/oneliner-card/oneliner-card.component.ts ***!
  \***************************************************************/
/*! exports provided: OnelinerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnelinerCardComponent", function() { return OnelinerCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sql.service */ "./src/app/sql.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let OnelinerCardComponent = class OnelinerCardComponent {
    constructor(sql) {
        this.sql = sql;
        this.onUpdateLike = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onDeleteOneLiner = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onSelect = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.username = sessionStorage.getItem('username');
        this.liked = 0;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        this.getLiked();
    }
    getLiked() {
        this.subs.add(this.sql.getLikedOneLiner(this.oneLiner.oneLiner).subscribe(result => {
            if (result['liked']) {
                this.liked = 1;
            }
            else {
                this.liked = 0;
            }
        }));
    }
    onLike() {
        this.likeObj = { 'oneLiner': this.oneLiner.oneLiner, 'authorUsername': sessionStorage.getItem('username') };
        if (this.liked == 0) {
            this.oneLiner.numUpVotes++;
            this.liked = 1;
            this.subs.add(this.sql.addLikeOneLiner(this.likeObj).subscribe(result => { }));
        }
        else {
            this.oneLiner.numUpVotes--;
            this.liked = 0;
            this.subs.add(this.sql.removeLikeOneLiner(this.likeObj).subscribe(result => { }));
        }
        this.onUpdateLike.next(this.liked);
    }
};
OnelinerCardComponent.ctorParameters = () => [
    { type: _sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OnelinerCardComponent.prototype, "oneLiner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OnelinerCardComponent.prototype, "onUpdateLike", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OnelinerCardComponent.prototype, "onDeleteOneLiner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OnelinerCardComponent.prototype, "onSelect", void 0);
OnelinerCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oneliner-card',
        template: __webpack_require__(/*! raw-loader!./oneliner-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/oneliner-card/oneliner-card.component.html"),
        styles: [__webpack_require__(/*! ./oneliner-card.component.css */ "./src/app/home/oneliner-card/oneliner-card.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"]])
], OnelinerCardComponent);



/***/ }),

/***/ "./src/app/home/stories-ss/stories-ss.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/stories-ss/stories-ss.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stories-drawer {\n  width: 100VW;\n  background-color: #800322;\n}\n/*\n.container {\n  padding-top: 100px;\n  background-color: #800322;\n} */\n.no-stories {\n  font-weight: 500;\n  font-size: 45px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n}\n.weird-message {\n  /* padding-top: 35VH; */\n}\n.sidenav-drawer {\n  width: 300px;\n  background-color: #800322;\n  padding-top: 100px;\n}\n.sidenav-text {\n  padding: 30px;\n  font-weight: 500;\n  font-size: 20px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n}\n.container {\n  padding-top: 100px;\n  background-color: #800322;\n  height: 88vh;\n  width: 100vw;\n}\n.container--empty {\n  padding-top: 100px;\n  background-color: #800322;\n  height: 100vh;\n  width: 100vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zdG9yaWVzLXNzL3N0b3JpZXMtc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTs7OztHQUlHO0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdEQUFnRDtFQUNoRCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdEQUFnRDtFQUNoRCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zdG9yaWVzLXNzL3N0b3JpZXMtc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yaWVzLWRyYXdlciB7XG4gIHdpZHRoOiAxMDBWVztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDMyMjtcbn1cbi8qXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMzIyO1xufSAqL1xuXG4ubm8tc3RvcmllcyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmY7XG59XG5cbi53ZWlyZC1tZXNzYWdlIHtcbiAgLyogcGFkZGluZy10b3A6IDM1Vkg7ICovXG59XG5cbi5zaWRlbmF2LWRyYXdlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDMyMjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uc2lkZW5hdi10ZXh0IHtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDMyMjtcbiAgaGVpZ2h0OiA4OHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5jb250YWluZXItLWVtcHR5IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMzIyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/stories-ss/stories-ss.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/stories-ss/stories-ss.component.ts ***!
  \*********************************************************/
/*! exports provided: StoriesSsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesSsComponent", function() { return StoriesSsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _submit_story_submit_story_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../submit-story/submit-story.component */ "./src/app/home/submit-story/submit-story.component.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var src_app_sql_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sql.service */ "./src/app/sql.service.ts");






let StoriesSsComponent = class StoriesSsComponent {
    constructor(dialogRef, data, _bottomSheet, sql) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._bottomSheet = _bottomSheet;
        this.sql = sql;
    }
    ngOnInit() {
        this.sql.dialogueRef = this.dialogRef;
        this.storiesExist = this.data.stories.length ? true : false;
        this.toolbarContent = this.data.oneLiner;
    }
    onAddStory() {
        this._bottomSheet.open(_submit_story_submit_story_component__WEBPACK_IMPORTED_MODULE_3__["SubmitStoryComponent"]);
    }
};
StoriesSsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"] },
    { type: src_app_sql_service__WEBPACK_IMPORTED_MODULE_5__["SQLService"] }
];
StoriesSsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stories-ss',
        template: __webpack_require__(/*! raw-loader!./stories-ss.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/stories-ss/stories-ss.component.html"),
        styles: [__webpack_require__(/*! ./stories-ss.component.css */ "./src/app/home/stories-ss/stories-ss.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"],
        src_app_sql_service__WEBPACK_IMPORTED_MODULE_5__["SQLService"]])
], StoriesSsComponent);



/***/ }),

/***/ "./src/app/home/stories/stories.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/stories/stories.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stories-card {\n  max-width: 850px;\n  min-width: 850px;\n  width: 300px;\n  font-family: 'PT Serif', serif;\n  margin: 20px;\n  padding: 75px;\n}\n\n.stories-card-header {\n  width: 40%;\n}\n\n.profile-image {\n  background-color: #800322;\n  width: 70px;\n  height: 70px;\n  border-radius: 50% 50%;\n  margin-right: 35px;\n}\n\n.stories-card-content {\n  font-size: 18px;\n  line-height: 30px;\n  /* font-family: 'PT Serif', serif; */\n  font-family: 'Noto Serif KR', serif;\n  color: black;\n  white-space: pre-wrap;\n}\n\n.stories-card-header-info {\n  font-family: 'Noto Serif KR', serif;\n  font-size: 16px;\n}\n\n.timestamp {\n  margin-top: -10px;\n}\n\n.votes-container {\n  width: 65px;\n  height: 50px;\n  background-color: #F09F23;\n  position: absolute;\n  bottom: 0px;\n  right: 0;\n  color: #fff;\n  border-radius: 50% 0 0 0;\n  font-family: 'Montserrat', sans-serif !important;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer\n}\n\n.votes-container-icon {\n  font-size: 18px\n}\n\n.bookmark-container {\n  position: absolute;\n  top: -10px;\n  right: 0;\n}\n\n.bookmark-container-icon {\n  font-size: 60px;\n  color: #800322;\n}\n\n.follow {\n    font-size: 28px;\n    color: #800322;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zdG9yaWVzL3N0b3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGdEQUFnRDtFQUNoRCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3Rvcmllcy9zdG9yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rvcmllcy1jYXJkIHtcbiAgbWF4LXdpZHRoOiA4NTBweDtcbiAgbWluLXdpZHRoOiA4NTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBmb250LWZhbWlseTogJ1BUIFNlcmlmJywgc2VyaWY7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogNzVweDtcbn1cblxuLnN0b3JpZXMtY2FyZC1oZWFkZXIge1xuICB3aWR0aDogNDAlO1xufVxuXG4ucHJvZmlsZS1pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAzMjI7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCU7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cblxuLnN0b3JpZXMtY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgLyogZm9udC1mYW1pbHk6ICdQVCBTZXJpZicsIHNlcmlmOyAqL1xuICBmb250LWZhbWlseTogJ05vdG8gU2VyaWYgS1InLCBzZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5zdG9yaWVzLWNhcmQtaGVhZGVyLWluZm8ge1xuICBmb250LWZhbWlseTogJ05vdG8gU2VyaWYgS1InLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGltZXN0YW1wIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi52b3Rlcy1jb250YWluZXIge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA5RjIzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAwIDAgMDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlclxufVxuXG4udm90ZXMtY29udGFpbmVyLWljb24ge1xuICBmb250LXNpemU6IDE4cHhcbn1cblxuLmJvb2ttYXJrLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5ib29rbWFyay1jb250YWluZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6ICM4MDAzMjI7XG59XG5cbi5mb2xsb3cge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogIzgwMDMyMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/stories/stories.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/stories/stories.component.ts ***!
  \***************************************************/
/*! exports provided: StoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesComponent", function() { return StoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sql.service */ "./src/app/sql.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let StoriesComponent = class StoriesComponent {
    constructor(sql) {
        this.sql = sql;
        this.justLiked = 0;
        this.me = 0;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        this.getBookmarked();
        this.getLiked();
        this.getFollowing();
    }
    getBookmarked() {
        //console.log(this.sql.getBookmarked(this.story.storyHashID));
        this.subs.add(this.sql.getBookmarked(this.story.storyHashID).subscribe(result => {
            if (result['bookmarked']) {
                this.bookmarked = 1;
            }
            else {
                this.bookmarked = 0;
            }
        }));
    }
    onBookmark() {
        this.bookmarkObj = { 'storyHashID': this.story.storyHashID, 'authorUsername': sessionStorage.getItem('username') };
        //console.log(this.bookmarked);
        if (this.bookmarked) {
            this.bookmarked = 0;
            //console.log('just unbookmarked');
            this.subs.add(this.sql.removeBookmark(this.bookmarkObj).subscribe(result => { }));
        }
        else {
            //console.log('just bookmarked');
            this.bookmarked = 1;
            this.subs.add(this.sql.addBookmark(this.bookmarkObj).subscribe(result => { }));
        }
    }
    getLiked() {
        console.log('in get liked');
        console.log(this.sql.getLiked(this.story.storyHashID));
        this.subs.add(this.sql.getLiked(this.story.storyHashID).subscribe(result => {
            if (result['liked']) {
                //console.log("I am liked!\n")
                this.liked = 1;
            }
            else {
                //console.log("I am not liked!\n")
                this.liked = 0;
            }
        }));
    }
    onLike() {
        this.likeObj = { 'storyHashID': this.story.storyHashID, 'authorUsername': sessionStorage.getItem('username') };
        console.log(this.liked);
        if (this.liked) {
            this.liked = 0;
            this.justLiked = 0;
            this.subs.add(this.sql.removeLike(this.likeObj).subscribe(result => { }));
            this.story['change'] = 0;
            this.subs.add(this.sql.updateStoriesNumUpVotes(this.story).subscribe(result => { }));
        }
        else {
            this.liked = 1;
            this.justLiked = 1; // Keeps track of if the user just added a like
            this.subs.add(this.sql.addLike(this.likeObj).subscribe(result => { }));
            this.story['change'] = 1;
            this.subs.add(this.sql.updateStoriesNumUpVotes(this.story).subscribe(result => { }));
        }
    }
    getFollowing() {
        if (this.story.authorUsername == sessionStorage.getItem('username')) {
            this.me = 1;
        }
        this.subs.add(this.sql.getFollowing(this.story.authorUsername).subscribe(result => {
            // console.log(result['following'])
            if (result['following']) {
                this.following = 1;
            }
            else {
                this.following = 0;
            }
        }));
    }
    onFollow() {
        this.followObj = { 'followed': this.story.authorUsername, 'follower': sessionStorage.getItem('username') };
        if (this.following) {
            this.following = 0;
            this.subs.add(this.sql.removeFollower(this.followObj).subscribe(result => { }));
        }
        else {
            this.following = 1;
            this.subs.add(this.sql.addFollower(this.followObj).subscribe(result => { }));
        }
    }
};
StoriesComponent.ctorParameters = () => [
    { type: _sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StoriesComponent.prototype, "story", void 0);
StoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stories',
        template: __webpack_require__(/*! raw-loader!./stories.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/stories/stories.component.html"),
        styles: [__webpack_require__(/*! ./stories.component.css */ "./src/app/home/stories/stories.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sql_service__WEBPACK_IMPORTED_MODULE_2__["SQLService"]])
], StoriesComponent);



/***/ }),

/***/ "./src/app/home/submit-one-liner/submit-one-liner.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/submit-one-liner/submit-one-liner.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 50px;\n  height: 500px;\n}\n\ntextarea {\n  font-size: 40px;\n  line-height: 50px;\n  color: #800322;\n  font-family: 'Montserrat', sans-serif !important;\n}\n\n:host ::ng-deep .mat-form-field-label {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 500 !important;\n  font-size: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zdWJtaXQtb25lLWxpbmVyL3N1Ym1pdC1vbmUtbGluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3N1Ym1pdC1vbmUtbGluZXIvc3VibWl0LW9uZS1saW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICM4MDAzMjI7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/submit-one-liner/submit-one-liner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/submit-one-liner/submit-one-liner.component.ts ***!
  \*********************************************************************/
/*! exports provided: SubmitOneLinerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitOneLinerComponent", function() { return SubmitOneLinerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_sql_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sql.service */ "./src/app/sql.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let SubmitOneLinerComponent = class SubmitOneLinerComponent {
    constructor(_bottomSheetRef, sql, datePipe) {
        this._bottomSheetRef = _bottomSheetRef;
        this.sql = sql;
        this.datePipe = datePipe;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.oneLinerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    }
    onSubmitForm() {
        let oneLinerObj = {
            content: this.oneLinerForm.value.content,
            timestamp: this.datePipe.transform(new Date, 'yyyy-MM-dd HH:mm:ss')
        };
        this._bottomSheetRef.dismiss();
        this.sql.onAddOneliner.next(oneLinerObj);
    }
};
SubmitOneLinerComponent.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] },
    { type: src_app_sql_service__WEBPACK_IMPORTED_MODULE_4__["SQLService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
SubmitOneLinerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submit-one-liner',
        template: __webpack_require__(/*! raw-loader!./submit-one-liner.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/submit-one-liner/submit-one-liner.component.html"),
        styles: [__webpack_require__(/*! ./submit-one-liner.component.css */ "./src/app/home/submit-one-liner/submit-one-liner.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"],
        src_app_sql_service__WEBPACK_IMPORTED_MODULE_4__["SQLService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
], SubmitOneLinerComponent);



/***/ }),

/***/ "./src/app/home/submit-story/submit-story.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/submit-story/submit-story.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  background-color: #800322;\n  height: 60px;\n  padding: 20px 10px;\n}\n\n.selectText {\n  margin: 10px 20px;\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 500;\n  color: #f09f23;\n  font-size: 15px;\n  text-transform: uppercase;\n}\n\n.form-container {\n  padding: 40px;\n}\n\ntextarea {\n  font-size: 25px;\n}\n\n::ng-deep .mat-bottom-sheet-container {\n  max-height: 95vh !important;\n  max-width: 95vw !important;\n  height: 95vh !important;\n  width: 95vw !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n:host ::ng-deep .mat-form-field-label {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 500 !important;\n  font-size: 30px;\n  color: grey;\n}\n\n:host ::ng-deep .mat-select-value {\n  color: #eee;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zdWJtaXQtc3Rvcnkvc3VibWl0LXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zdWJtaXQtc3Rvcnkvc3VibWl0LXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAzMjI7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4uc2VsZWN0VGV4dCB7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZjA5ZjIzO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogOTV2aCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA5NXZoICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6ICNlZWU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/submit-story/submit-story.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/submit-story/submit-story.component.ts ***!
  \*************************************************************/
/*! exports provided: SubmitStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitStoryComponent", function() { return SubmitStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var src_app_sql_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sql.service */ "./src/app/sql.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/snack-bar/snack-bar.service */ "./src/app/shared/snack-bar/snack-bar.service.ts");







let SubmitStoryComponent = class SubmitStoryComponent {
    constructor(_bottomSheetRef, sql, snackBarService, datePipe) {
        this._bottomSheetRef = _bottomSheetRef;
        this.sql = sql;
        this.snackBarService = snackBarService;
        this.datePipe = datePipe;
        this.storySubmitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null)
        });
        this.placeholder = 'Alas, Dumplings!';
        this.username = '';
    }
    ngOnInit() {
        this.initForm();
        this.username = sessionStorage.getItem('username');
    }
    ngAfterViewInit() {
        // this.submitType.selected.value = this.username;
    }
    initForm() {
        this.storySubmitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null)
        });
    }
    // ValidateStory() {
    //   if (!this.storySubmitForm.value.content)
    //     return { validStory: false }
    //
    //   if (this.storySubmitForm.value.content.includes(this.data.oneLiner)) {
    //     return { validStory: true }
    //   } else {
    //     return { validStory: false }
    //   }
    // }
    onSubmitForm() {
        let writtenAnon = this.submitType.selected.value == 'anonymous' ? true : false;
        // if (!this.storySubmitForm.value.content.includes(this.sql.selectedOneliner)) {
        //   this.snackBarService.onOpenSnackBar.next({ message: "You must include the oneliner in your story.", isError: true })
        //   return;
        // }
        let storyObj = {
            content: this.storySubmitForm.value.content,
            oneLiner: sessionStorage.getItem('oneLiner'),
            writtenAnon: writtenAnon,
            estReadTime: (this.storySubmitForm.value.content.length) / 20,
            timestamp: this.datePipe.transform(new Date, 'yyyy-MM-dd HH:mm:ss'),
            authorUsername: sessionStorage.getItem('username'),
            numUpVotes: 0
        };
        this.sql.insertStory(storyObj).subscribe(res => {
            this.snackBarService.onOpenSnackBar.next({ message: "Your story was successfully published", isError: false });
            // setTimeout(function(){ }, 4000);
            this._bottomSheetRef.dismiss();
            this.sql.onInsertStory.next(storyObj);
        }, error => {
            if (error.statusText === 'Created')
                this.snackBarService.onOpenSnackBar.next({ message: "Plagiarism!", isError: true });
        });
    }
};
SubmitStoryComponent.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] },
    { type: src_app_sql_service__WEBPACK_IMPORTED_MODULE_3__["SQLService"] },
    { type: src_app_shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitType', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SubmitStoryComponent.prototype, "submitType", void 0);
SubmitStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submit-story',
        template: __webpack_require__(/*! raw-loader!./submit-story.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/submit-story/submit-story.component.html"),
        styles: [__webpack_require__(/*! ./submit-story.component.css */ "./src/app/home/submit-story/submit-story.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"],
        src_app_sql_service__WEBPACK_IMPORTED_MODULE_3__["SQLService"],
        src_app_shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
], SubmitStoryComponent);



/***/ }),

/***/ "./src/app/home/toolbar/toolbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/toolbar/toolbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  background-color: #eeee;\n  position: fixed;\n  z-index: 1000;\n  width: 100vw;\n\n}\n\n.bar-container {\n  height: 100%;\n  width: 100%;\n  color: #800322;\n}\n\n.close {\n  cursor: pointer;\n  padding-right: 10px;\n  color: #800322;\n  font-size: 20px;\n}\n\n.logo-short {\n  width: 100px;\n}\n\n.logo--width {\n  width: 250px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDB2dztcblxufVxuXG4uYmFyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjODAwMzIyO1xufVxuXG4uY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjODAwMzIyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5sb2dvLXNob3J0IHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4ubG9nby0td2lkdGgge1xuICB3aWR0aDogMjUwcHhcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/toolbar/toolbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/toolbar/toolbar.component.ts ***!
  \***************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ToolbarComponent = class ToolbarComponent {
    constructor() {
        this.onDismissDrawer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onOpenSideNav = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
    }
    onOpen() {
        console.log("in onOpen");
        this.onOpenSideNav.next();
    }
    onDismiss() {
        console.log("time to say goodbye");
        this.onDismissDrawer.next();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ToolbarComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ToolbarComponent.prototype, "onDismissDrawer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ToolbarComponent.prototype, "onOpenSideNav", void 0);
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/toolbar/toolbar.component.html"),
        styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/home/toolbar/toolbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ToolbarComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo--width {\n  width: 300px;\n}\n\n.logo-short {\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  width: 140px;\n}\n\n.auth-input{\n  background-color: #91093f;\n  border-radius: 33.5px;\n  font-size: 14px;\n  width: 320px;\n  height: 38px;\n  margin-bottom: 13px;\n  padding-left: 25px;\n  font-family: 'Montserrat', sans-serif !important;\n}\n\n.auth-input-field {\n  color: #eee;\n  margin-top: -4px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  caret-color: #eee !important;\n}\n\n.auth-input-field-icon {\n  color: #6b062f;\n  font-size: 17px;\n  padding-right: 12px;\n}\n\n.auth-input-field-forgot {\n  color: #6b062f;\n  font-size: 17px;\n  margin-left: 50px;\n  cursor: pointer !important;\n}\n\n.auth-switch-prompt {\n  color: white;\n  font-size: 13px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n@media (max-width: 320px) {\n  .auth-input {\n    width: 250px;\n  }\n  .auth-input-field-forgot{\n    margin-left: -12px;\n  }\n}\n\n:host ::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  height: 0px !important;\n}\n\n:host ::ng-deep .mat-form-field-label {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 500 !important;\n  color: #6B062F !important;\n  top: 12px !important;\n}\n\n:host ::ng-deep .mat-focused .mat-form-field-label {\n  display: none !important;\n}\n\n/* fix chrome autofill styling */\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus\n\n{\n    -webkit-box-shadow: 0 0 0px 1000px #91093f inset !important;\n    -webkit-text-fill-color: #eee !important;\n    transition: background-color 5000s ease-in-out 0s !important;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLGdDQUFnQzs7QUFDaEM7Ozs7O0lBS0ksMkRBQTJEO0lBQzNELHdDQUF3QztJQUN4Qyw0REFBNEQ7RUFDOUQiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tLXdpZHRoIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubG9nby1zaG9ydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogLTEwcHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLmF1dGgtaW5wdXR7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTA5M2Y7XG4gIGJvcmRlci1yYWRpdXM6IDMzLjVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWlucHV0LWZpZWxkIHtcbiAgY29sb3I6ICNlZWU7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNhcmV0LWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWlucHV0LWZpZWxkLWljb24ge1xuICBjb2xvcjogIzZiMDYyZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG4uYXV0aC1pbnB1dC1maWVsZC1mb3Jnb3Qge1xuICBjb2xvcjogIzZiMDYyZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLXN3aXRjaC1wcm9tcHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5hdXRoLWlucHV0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgLmF1dGgtaW5wdXQtZmllbGQtZm9yZ290e1xuICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNkIwNjJGICFpbXBvcnRhbnQ7XG4gIHRvcDogMTJweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogZml4IGNocm9tZSBhdXRvZmlsbCBzdHlsaW5nICovXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXNcblxue1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggIzkxMDkzZiBpbnNldCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcyAhaW1wb3J0YW50O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/snack-bar/snack-bar.service */ "./src/app/shared/snack-bar/snack-bar.service.ts");






let LoginComponent = class LoginComponent {
    constructor(router, authService, snackBarService) {
        this.router = router;
        this.authService = authService;
        this.snackBarService = snackBarService;
    }
    ngOnInit() {
        if (this.authService.isAuth())
            this.router.navigate(['./home']);
        this.initForm();
    }
    initForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onSubmit() {
        if (this.loginForm.status === "INVALID") {
            this.handleError("Invalid username or password");
            return;
        }
        this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(res => {
            if (res && !res[0]['valid']) {
                this.handleError("Invalid username or password");
                return;
            }
            if (res && res[0]['valid']) {
                this.authService.setUser(res[0]['username'], res[0]['email']);
                this.router.navigate(['./home']);
            }
            else {
                this.handleError("Invalid username or password");
            }
        }, error => this.handleError(error));
    }
    handleError(error) {
        this.snackBarService.onOpenSnackBar.next({ message: error, isError: true });
    }
    navigateToRegister() {
        this.router.navigate(['./register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/my-stories/my-stories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-stories/my-stories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-drawer {\n  width: 300px;\n  background-color: #800322;\n  padding-top: 100px;\n}\n\n.sidenav-text {\n  padding: 30px;\n  font-weight: 500;\n  font-size: 20px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n}\n\n.content {\n  height: 100VH;\n  background-color: #800322;\n}\n\n.no-stories {\n  font-weight: 500;\n  font-size: 45px;\n  font-family: 'Montserrat', sans-serif !important;\n  color: #ffff;\n}\n\n.stories-list {\n  padding-top: 100px;\n  /* margin-top: 3000px; */\n}\n\n.weird-message {\n  padding-top: 35VH;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktc3Rvcmllcy9teS1zdG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdEQUFnRDtFQUNoRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnREFBZ0Q7RUFDaEQsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL215LXN0b3JpZXMvbXktc3Rvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtZHJhd2VyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMzIyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi5zaWRlbmF2LXRleHQge1xuICBwYWRkaW5nOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwVkg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAzMjI7XG59XG5cbi5uby1zdG9yaWVzIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZjtcbn1cblxuLnN0b3JpZXMtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgLyogbWFyZ2luLXRvcDogMzAwMHB4OyAqL1xufVxuXG4ud2VpcmQtbWVzc2FnZSB7XG4gIHBhZGRpbmctdG9wOiAzNVZIO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/my-stories/my-stories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-stories/my-stories.component.ts ***!
  \****************************************************/
/*! exports provided: MyStoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStoriesComponent", function() { return MyStoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _sql_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sql.service */ "./src/app/sql.service.ts");




let MyStoriesComponent = class MyStoriesComponent {
    constructor(sql) {
        this.sql = sql;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    ngOnInit() {
        this.loadMyStories();
    }
    loadMyStories() {
        this.subs.add(this.sql.getMyStories().subscribe(selectedStories => {
            this.selectedStories = selectedStories;
        }));
    }
};
MyStoriesComponent.ctorParameters = () => [
    { type: _sql_service__WEBPACK_IMPORTED_MODULE_3__["SQLService"] }
];
MyStoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-stories',
        template: __webpack_require__(/*! raw-loader!./my-stories.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-stories/my-stories.component.html"),
        styles: [__webpack_require__(/*! ./my-stories.component.css */ "./src/app/my-stories/my-stories.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sql_service__WEBPACK_IMPORTED_MODULE_3__["SQLService"]])
], MyStoriesComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 62px;\n  color:  #800322;\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 600;\n}\n\n.toolbar--title {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 500;\n  color:  #eee;\n  font-size: 20px;\n}\n\n.username {\n  font-size: 25px;\n  color:  #eee;\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 400;\n}\n\n.email {\n  font-size: 25px;\n  color:  #eee;\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 400;\n  margin-top: -10px;\n}\n\n.forgot {\n  font-size: 20px;\n  color:  #800322;\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.auth-input{\n  background-color: #91093f;\n  border-radius: 33.5px;\n  font-size: 14px;\n  width: 320px;\n  height: 38px;\n  margin-bottom: 13px;\n  padding-left: 25px;\n  font-family: 'Montserrat', sans-serif !important;\n}\n\n.auth-input-field {\n  color: #eee;\n  margin-top: -4px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  caret-color: #eee !important;\n}\n\n.auth-input-field-icon {\n  color: #6b062f;\n  font-size: 17px;\n  padding-right: 12px;\n}\n\n.auth-input-field-forgot {\n  color: #6b062f;\n  font-size: 17px;\n  margin-left: 50px;\n  cursor: pointer !important;\n}\n\n@media (max-width: 320px) {\n  .auth-input {\n    width: 250px;\n  }\n  .auth-input-field-forgot{\n    margin-left: -12px;\n  }\n}\n\n:host ::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  height: 0px !important;\n}\n\n:host ::ng-deep .mat-form-field-label {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 500 !important;\n  color: #6B062F !important;\n  top: 12px !important;\n}\n\n:host ::ng-deep .mat-focused .mat-form-field-label {\n  display: none !important;\n}\n\n/* fix chrome autofill styling */\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus\n\n{\n    -webkit-box-shadow: 0 0 0px 1000px #91093f inset !important;\n    -webkit-text-fill-color: #eee !important;\n    transition: background-color 5000s ease-in-out 0s !important;\n  }\n\n.imageEditorContainer {\n  width: 300px;\n}\n\n.toolbar-editor-container {\n  background-color: #eee;\n  width: 100%;\n}\n\n.toolbar-text {\n  font-family: 'Montserrat', sans-serif !important;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 600;\n  color: #800322;\n}\n\n.toolbar-icon {\n  color: #800322;\n}\n\n.home-icon {\n  color: #eee;\n  cursor: pointer;\n  font-size: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdEQUFnRDtFQUNoRCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0RBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUdBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLGdDQUFnQzs7QUFDaEM7Ozs7O0lBS0ksMkRBQTJEO0lBQzNELHdDQUF3QztJQUN4Qyw0REFBNEQ7RUFDOUQ7O0FBRUY7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXNpemU6IDYycHg7XG4gIGNvbG9yOiAgIzgwMDMyMjtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG9vbGJhci0tdGl0bGUge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAgI2VlZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udXNlcm5hbWUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAgI2VlZTtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZW1haWwge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAgI2VlZTtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmZvcmdvdCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICAjODAwMzIyO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hdXRoLWlucHV0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTEwOTNmO1xuICBib3JkZXItcmFkaXVzOiAzMy41cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1pbnB1dC1maWVsZCB7XG4gIGNvbG9yOiAjZWVlO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjYXJldC1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1pbnB1dC1maWVsZC1pY29uIHtcbiAgY29sb3I6ICM2YjA2MmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLmF1dGgtaW5wdXQtZmllbGQtZm9yZ290IHtcbiAgY29sb3I6ICM2YjA2MmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuYXV0aC1pbnB1dCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIC5hdXRoLWlucHV0LWZpZWxkLWZvcmdvdHtcbiAgICBtYXJnaW4tbGVmdDogLTEycHg7XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzZCMDYyRiAhaW1wb3J0YW50O1xuICB0b3A6IDEycHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIGZpeCBjaHJvbWUgYXV0b2ZpbGwgc3R5bGluZyAqL1xuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzXG5cbntcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICM5MTA5M2YgaW5zZXQgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHMgIWltcG9ydGFudDtcbiAgfVxuXG4uaW1hZ2VFZGl0b3JDb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi50b29sYmFyLWVkaXRvci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvb2xiYXItdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzgwMDMyMjtcbn1cblxuLnRvb2xiYXItaWNvbiB7XG4gIGNvbG9yOiAjODAwMzIyO1xufVxuXG4uaG9tZS1pY29uIHtcbiAgY29sb3I6ICNlZWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/snack-bar/snack-bar.service */ "./src/app/shared/snack-bar/snack-bar.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ProfileComponent = class ProfileComponent {
    constructor(snackBarService, authService, router) {
        this.snackBarService = snackBarService;
        this.authService = authService;
        this.router = router;
        this.user = {
            username: sessionStorage.getItem('username'),
            email: sessionStorage.getItem('email')
        };
    }
    ngOnInit() {
        this.user = {
            username: sessionStorage.getItem('username'),
            email: sessionStorage.getItem('email')
        };
        this.initForm();
    }
    initForm() {
        this.forgotForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'new': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'confirm': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onSubmit() {
        if (this.forgotForm.value.new !== this.forgotForm.value.confirm)
            this.provideFeedback("Passwords must match", true);
        else {
            this.authService.updatePassword(this.user['username'], this.forgotForm.value.new)
                .subscribe(res => {
                this.provideFeedback("Password Succesfully Updated", false);
            }, error => console.log(error));
        }
    }
    provideFeedback(message, isError) {
        this.snackBarService.onOpenSnackBar.next({ message: message, isError: isError });
    }
    navigateToHome() {
        this.router.navigate(['/home']);
    }
    logout() {
        this.authService.logout();
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"],
        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo--width {\n  width: 300px;\n}\n\n.logo-short {\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  width: 140px;\n}\n\n.auth-input{\n  background-color: #91093f;\n  border-radius: 33.5px;\n  font-size: 14px;\n  width: 320px;\n  height: 38px;\n  margin-bottom: 13px;\n  padding-left: 25px;\n  font-family: 'Montserrat', sans-serif !important;\n}\n\n.auth-input-field {\n  color: #eee;\n  margin-top: -4px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  caret-color: #eee !important;\n}\n\n.auth-input-field-icon {\n  color: #6b062f;\n  font-size: 17px;\n  padding-right: 12px;\n}\n\n.auth-input-field-forgot {\n  color: #6b062f;\n  font-size: 17px;\n  margin-left: 50px;\n  cursor: pointer !important;\n}\n\n.auth-switch-prompt {\n  color: white;\n  font-size: 13px;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n@media (max-width: 320px) {\n  .auth-input {\n    width: 250px;\n  }\n  .auth-input-field-forgot{\n    margin-left: -12px;\n  }\n}\n\n:host ::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  height: 0px !important;\n}\n\n:host ::ng-deep .mat-form-field-label {\n  font-family: 'Montserrat', sans-serif !important;\n  font-weight: 500 !important;\n  color: #6B062F !important;\n  top: 12px !important;\n}\n\n:host ::ng-deep .mat-focused .mat-form-field-label {\n  display: none !important;\n}\n\n/* fix chrome autofill styling */\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus\n\n{\n    -webkit-box-shadow: 0 0 0px 1000px #91093f inset !important;\n    -webkit-text-fill-color: #eee !important;\n    transition: background-color 5000s ease-in-out 0s !important;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLGdDQUFnQzs7QUFDaEM7Ozs7O0lBS0ksMkRBQTJEO0lBQzNELHdDQUF3QztJQUN4Qyw0REFBNEQ7RUFDOUQiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tLXdpZHRoIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubG9nby1zaG9ydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogLTEwcHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLmF1dGgtaW5wdXR7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTA5M2Y7XG4gIGJvcmRlci1yYWRpdXM6IDMzLjVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWlucHV0LWZpZWxkIHtcbiAgY29sb3I6ICNlZWU7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNhcmV0LWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWlucHV0LWZpZWxkLWljb24ge1xuICBjb2xvcjogIzZiMDYyZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG4uYXV0aC1pbnB1dC1maWVsZC1mb3Jnb3Qge1xuICBjb2xvcjogIzZiMDYyZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLXN3aXRjaC1wcm9tcHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5hdXRoLWlucHV0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgLmF1dGgtaW5wdXQtZmllbGQtZm9yZ290e1xuICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNkIwNjJGICFpbXBvcnRhbnQ7XG4gIHRvcDogMTJweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogZml4IGNocm9tZSBhdXRvZmlsbCBzdHlsaW5nICovXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXNcblxue1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggIzkxMDkzZiBpbnNldCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcyAhaW1wb3J0YW50O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/snack-bar/snack-bar.service */ "./src/app/shared/snack-bar/snack-bar.service.ts");






let RegisterComponent = class RegisterComponent {
    constructor(router, authService, snackBarService) {
        this.router = router;
        this.authService = authService;
        this.snackBarService = snackBarService;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onSubmit() {
        this.authService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password)
            .subscribe(res => {
            this.authService.clearUser();
            this.navigateToLogin();
        }, error => {
            if (error.statusText === 'Created')
                this.handleError("An account with this username already exists.");
            else
                console.log(error);
        });
    }
    handleError(error) {
        this.snackBarService.onOpenSnackBar.next({ message: error, isError: true });
    }
    navigateToLogin() {
        this.router.navigate(['./login']);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _shared_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/shared/forms-material-components.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/forms-material-components.module.ts ***!
  \************************************************************/
/*! exports provided: FormsMaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsMaterialComponentsModule", function() { return FormsMaterialComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let FormsMaterialComponentsModule = class FormsMaterialComponentsModule {
};
FormsMaterialComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], FormsMaterialComponentsModule);



/***/ }),

/***/ "./src/app/shared/material-components.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/material-components.module.ts ***!
  \******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");







let MaterialComponentsModule = class MaterialComponentsModule {
};
MaterialComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]
        ],
        exports: [
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]
        ]
    })
], MaterialComponentsModule);



/***/ }),

/***/ "./src/app/shared/snack-bar/snack-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/snack-bar/snack-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zbmFjay1iYXIvc25hY2stYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/snack-bar/snack-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/snack-bar/snack-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _snack_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snack-bar.service */ "./src/app/shared/snack-bar/snack-bar.service.ts");




let SnackBarComponent = class SnackBarComponent {
    constructor(data, snackBarService) {
        this.data = data;
        this.snackBarService = snackBarService;
    }
    ngOnInit() {
    }
    onSnackBarClose() {
        this.snackBarService.onCloseSnackBar.next();
    }
};
SnackBarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] },
    { type: _snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"] }
];
SnackBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-snack-bar',
        template: __webpack_require__(/*! raw-loader!./snack-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/snack-bar/snack-bar.component.html"),
        styles: [__webpack_require__(/*! ./snack-bar.component.css */ "./src/app/shared/snack-bar/snack-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]])
], SnackBarComponent);



/***/ }),

/***/ "./src/app/shared/snack-bar/snack-bar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/snack-bar/snack-bar.module.ts ***!
  \******************************************************/
/*! exports provided: SnackBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarModule", function() { return SnackBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snack-bar.component */ "./src/app/shared/snack-bar/snack-bar.component.ts");
/* harmony import */ var _material_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material-components.module */ "./src/app/shared/material-components.module.ts");





let SnackBarModule = class SnackBarModule {
};
SnackBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["SnackBarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _material_components_module__WEBPACK_IMPORTED_MODULE_4__["MaterialComponentsModule"]
        ],
        entryComponents: [_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["SnackBarComponent"]]
    })
], SnackBarModule);



/***/ }),

/***/ "./src/app/shared/snack-bar/snack-bar.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/snack-bar/snack-bar.service.ts ***!
  \*******************************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SnackBarService = class SnackBarService {
    constructor() {
        this.onOpenSnackBar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onCloseSnackBar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
};
SnackBarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], SnackBarService);



/***/ }),

/***/ "./src/app/sql.service.ts":
/*!********************************!*\
  !*** ./src/app/sql.service.ts ***!
  \********************************/
/*! exports provided: SQLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQLService", function() { return SQLService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let SQLService = class SQLService {
    // onCloseStoriesDialog = new Subject<any>();
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://44.192.52.163:4201';
        this.onAddOneliner = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onInsertStory = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getOneLiners() {
        return this.http.get(`${this.baseUrl}/readAllOneLiners.php`);
    }
    insertOneLiner(oneLinerObj) {
        return this.http.post(`${this.baseUrl}/insertOneLiner.php`, oneLinerObj);
    }
    insertStory(storyObj) {
        return this.http.post(`${this.baseUrl}/insertStory.php`, storyObj);
    }
    updateOneLinerNumUpVotes(oneLinerObj) {
        return this.http.put(`${this.baseUrl}/updateOneLinerNumUpVotes.php`, oneLinerObj);
    }
    selectStoryByOneLiner(oneLinerObj) {
        return this.http.put(`${this.baseUrl}/selectStoryByOneLiner.php`, oneLinerObj);
    }
    getMyStories() {
        return this.http.put(`${this.baseUrl}/selectStoryByUsername.php`, { 'username': sessionStorage.getItem('username') });
    }
    getFriendStories() {
        return this.http.put(`${this.baseUrl}/selectFollowedStories.php`, { 'username': sessionStorage.getItem('username') });
    }
    getBookmarked(storyHashID) {
        console.log('in getBookmarked');
        return this.http.put(`${this.baseUrl}/selectAcctsBookmarkStoriesByAcctAndHashID.php`, { 'storyHashID': storyHashID, 'username': sessionStorage.getItem('username') });
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
    getBookmarkedStories(username) {
        let body = { username: username };
        return this.http.post(this.baseUrl + "/selectAcctsBookmarkStoriesByAcct.php", body);
    }
    updateStoriesNumUpVotes(storyObj) {
        return this.http.put(`${this.baseUrl}/updateStoriesNumUpVotes.php`, storyObj);
    }
    getLikedOneLiner(oneLiner) {
        return this.http.put(`${this.baseUrl}/selectAcctsLikeOneLinersByAcctAndOneLiner.php`, { 'oneliner': oneLiner, 'username': sessionStorage.getItem('username') });
    }
    removeLikeOneLiner(likeObj) {
        return this.http.delete(`${this.baseUrl}/deleteAcctsLikeOneLiners.php/?oneliner=${likeObj['oneLiner']}&authorUsername=${likeObj['authorUsername']}`);
    }
    addLikeOneLiner(likeObj) {
        console.log(likeObj);
        return this.http.post(`${this.baseUrl}/insertAcctsLikeOneLiners.php`, likeObj);
    }
    getLiked(storyHashID) {
        return this.http.put(`${this.baseUrl}/selectAcctsLikeStoriesByAcctAndHashID.php`, { 'storyHashID': storyHashID, 'username': sessionStorage.getItem('username') });
    }
    removeLike(likeObj) {
        return this.http.delete(`${this.baseUrl}/deleteAcctsLikeStories.php/?storyHashID=${likeObj['storyHashID']}&authorUsername=${likeObj['authorUsername']}`);
    }
    addLike(likeObj) {
        return this.http.post(`${this.baseUrl}/insertAcctsLikeStories.php`, likeObj);
    }
    getFollowing(authorUsername) {
        return this.http.put(`${this.baseUrl}/verifyFollower.php`, { 'followed': authorUsername, 'follower': sessionStorage.getItem('username') });
    }
    removeFollower(followObj) {
        return this.http.delete(`${this.baseUrl}/deleteFollowers.php/?followed=${followObj['followed']}&follower=${followObj['follower']}`);
    }
    addFollower(followObj) {
        return this.http.post(`${this.baseUrl}/insertFollowers.php`, followObj);
    }
};
SQLService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SQLService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SQLService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anawalton/Desktop/storyLine-db/storyLine/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map