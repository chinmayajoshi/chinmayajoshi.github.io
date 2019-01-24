(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_display_data_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-display/data-display.component */ "./src/app/data-display/data-display.component.ts");
/* harmony import */ var _edit_data_edit_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-data/edit-data.component */ "./src/app/edit-data/edit-data.component.ts");





//import { AddNewComponent } from './add-new/add-new.component';
var routes = [{ path: 'data-display', component: _data_display_data_display_component__WEBPACK_IMPORTED_MODULE_3__["DataDisplayComponent"] },
    { path: '', redirectTo: '/data-display', pathMatch: 'full' },
    { path: 'edit/:id', component: _edit_data_edit_data_component__WEBPACK_IMPORTED_MODULE_4__["EditDataComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'demoApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_display_data_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-display/data-display.component */ "./src/app/data-display/data-display.component.ts");
/* harmony import */ var _edit_data_edit_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-data/edit-data.component */ "./src/app/edit-data/edit-data.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _email_validation_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./email-validation.directive */ "./src/app/email-validation.directive.ts");
/* harmony import */ var _name_validation_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./name-validation.directive */ "./src/app/name-validation.directive.ts");
/* harmony import */ var _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee-search/employee-search.component */ "./src/app/employee-search/employee-search.component.ts");





//import { AddNewComponent } from './add-new/add-new.component';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                //    AddNewComponent,
                _data_display_data_display_component__WEBPACK_IMPORTED_MODULE_6__["DataDisplayComponent"],
                _edit_data_edit_data_component__WEBPACK_IMPORTED_MODULE_7__["EditDataComponent"],
                _email_validation_directive__WEBPACK_IMPORTED_MODULE_11__["EmailValidationDirective"],
                _name_validation_directive__WEBPACK_IMPORTED_MODULE_12__["NameValidationDirective"],
                _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_10__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-display/data-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/data-display/data-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headings{\r\n    color: white;\r\n    background-color: darkcyan;\r\n}\r\n\r\nh3{\r\n    padding-bottom: 10px;\r\n}\r\n\r\nth,td{\r\n    text-align: center;\r\n}\r\n\r\n/*\r\n@keyframes slidein {\r\n    0% {position: absolute; top: -100%; height: 0%; width: 100%}\r\n    100% {position: absolute; top: 0%; height: 50%; width: 100%}\r\n}\r\n\r\n.note{\r\n    animation-name: slidein;\r\n    animation-duration: .9s;\r\n    display: block;\r\n}\r\n*/\r\n\r\n/*below */\r\n\r\n/*\r\n.b1{\r\n    border-radius: 50%;\r\n    border:none;\r\n    padding: 20px;\r\n    font-size: 35px;\r\n    background-color: green;\r\n    color: white;\r\n    position: absolute;\r\n    right: 5px;\r\n    bottom: 10px;\r\n}\r\n*/\r\n\r\n.b1{\r\n      width: 70px;\r\n   height: 70px;\r\n   background-color: teal;\r\n   border-radius: 50%;\r\n   box-shadow: 0 6px 10px 0 #666;\r\n   transition: all 0.1s ease-in-out;\r\n \r\n   font-size: 45px;\r\n   color: white;\r\n   text-align: center;\r\n   line-height: 70px;\r\n \r\n   position: fixed;\r\n   right: 5px;\r\n   bottom: 10px;\r\n}\r\n\r\n.b1:hover{\r\n   box-shadow: 0 6px 14px 0 #666;\r\n   -webkit-transform: scale(1.05);\r\n           transform: scale(1.05);\r\n}\r\n\r\n.back{\r\n    background-color: skyblue;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0.8;\r\n}\r\n\r\n.desc{\r\n\r\n    width: 99%;\r\n    height: 80px;\r\n}\r\n\r\n.txtdate{\r\n    padding-right: 7px;\r\n}\r\n\r\n.numid{\r\n    padding-right: 24px;\r\n}\r\n\r\n.inside{\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n    margin-left: 50%;\r\n    -webkit-transform: translate(-50%);\r\n            transform: translate(-50%);\r\n   \r\n}\r\n\r\n.nameinput{\r\n    margin-left: 41px;\r\n}\r\n\r\n.dateinput{\r\n    width: 196px;\r\n    margin-left: 41px;\r\n}\r\n\r\n.alert{\r\n    width: 195px;\r\n    margin-left: 84px;\r\n}\r\n\r\n.b2,.b3{\r\n    margin-bottom: 5px;\r\n}\r\n\r\nh3{\r\n    padding-bottom: 15px;\r\n}\r\n\r\n/* The switch - the box around the slider */\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 24px;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n/* The slider */\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 16px;\r\n  width: 16px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n}\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.toggle{\r\n    font-size: 17px;\r\n}\r\n\r\n.deact{\r\n    background-color: whitesmoke;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1kaXNwbGF5L2RhdGEtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFDRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFHRDs7Ozs7Ozs7Ozs7RUFXRTs7QUFFRixVQUFVOztBQUVWOzs7Ozs7Ozs7Ozs7RUFZRTs7QUFFRjtNQUNNLFlBQVk7R0FDZixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtHQUNuQiw4QkFBOEI7R0FDOUIsaUNBQWlDOztHQUVqQyxnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLG1CQUFtQjtHQUNuQixrQkFBa0I7O0dBRWxCLGdCQUFnQjtHQUNoQixXQUFXO0dBQ1gsYUFBYTtDQUNmOztBQUVEO0dBQ0csOEJBQThCO0dBQzlCLCtCQUF1QjtXQUF2Qix1QkFBdUI7Q0FDekI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUVEOztJQUVJLFdBQVc7SUFDWCxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUdEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUNBQTJCO1lBQTNCLDJCQUEyQjs7Q0FFOUI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRCw0Q0FBNEM7O0FBQzVDO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVELGdDQUFnQzs7QUFDaEM7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7Q0FDWDs7QUFFRCxnQkFBZ0I7O0FBQ2hCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBRXZCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLHdCQUF3QjtFQUV4QixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxvQ0FBb0M7RUFFcEMsNEJBQTRCO0NBQzdCOztBQUVELHFCQUFxQjs7QUFDckI7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBR0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSw2QkFBNkI7Q0FDaEMiLCJmaWxlIjoic3JjL2FwcC9kYXRhLWRpc3BsYXkvZGF0YS1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3N7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcclxufVxyXG5cclxuaDN7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG50aCx0ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qXHJcbkBrZXlmcmFtZXMgc2xpZGVpbiB7XHJcbiAgICAwJSB7cG9zaXRpb246IGFic29sdXRlOyB0b3A6IC0xMDAlOyBoZWlnaHQ6IDAlOyB3aWR0aDogMTAwJX1cclxuICAgIDEwMCUge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwJTsgaGVpZ2h0OiA1MCU7IHdpZHRoOiAxMDAlfVxyXG59XHJcblxyXG4ubm90ZXtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuOXM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4qL1xyXG5cclxuLypiZWxvdyAqL1xyXG5cclxuLypcclxuLmIxe1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG59XHJcbiovXHJcblxyXG4uYjF7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICBoZWlnaHQ6IDcwcHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwICM2NjY7XHJcbiAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gXHJcbiAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gXHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgcmlnaHQ6IDVweDtcclxuICAgYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYjE6aG92ZXJ7XHJcbiAgIGJveC1zaGFkb3c6IDAgNnB4IDE0cHggMCAjNjY2O1xyXG4gICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uYmFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmRlc2N7XHJcblxyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLnR4dGRhdGV7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5udW1pZHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4uaW5zaWRle1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICBcclxufVxyXG5cclxuLm5hbWVpbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MXB4O1xyXG59XHJcblxyXG4uZGF0ZWlucHV0e1xyXG4gICAgd2lkdGg6IDE5NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxcHg7XHJcbn1cclxuXHJcbi5hbGVydHtcclxuICAgIHdpZHRoOiAxOTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NHB4O1xyXG59XHJcblxyXG4uYjIsLmIze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5oM3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIFRoZSBzbGlkZXIgKi9cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xyXG59XHJcblxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHJcbi50b2dnbGV7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5kZWFjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/data-display/data-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/data-display/data-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-add-new></app-add-new>-->\n\n<div class=\"new-data\">\n    <button *ngIf=\"!counter\" (click)=\"switchIt()\" class=\"b1\">+</button>\n<div *ngIf=\"counter\" class=\"note\">\n    <div class=\"back\">\n       <div class=\"inside\">\n            <h3>Enter the following detials:</h3>\n            <form class=\"form-inline\" #addNewForm=\"ngForm\" (ngSubmit)=\"add()\" >\n                <label for=\"name\">Name:</label>\n                <input class=\"form-control nameinput\" type=\"text\" id=\"name\" name=\"name\" appNameValidation [(ngModel)]=\"temp.name\" #name=\"ngModel\"><br>\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"name.errors.cus_required\">{{name.errors.cus_required}}</div>\n                        <div *ngIf=\"name.errors.cus_pattern\">{{name.errors.cus_pattern}}</div>\n                    </div>\n                <label class=\"txtdate\" for=\"date\">Date:</label>\n                <input class=\"form-control dateinput\" type=\"date\" id=\"startingDate\" name=\"startingDate\" required [(ngModel)]=\"temp.startingDate\" #startingDate=\"ngModel\"><br>\n                    <div *ngIf=\"startingDate.invalid && (startingDate.dirty || startingDate.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"startingDate.errors.required\">Starting date is required.</div>\n                    </div>\n                <label class=\"numid\" for=\"id\">Email ID:</label>\n                <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" required  appEmailValidation [(ngModel)]=\"temp.email\" #email=\"ngModel\">\n                  <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"email.errors.cus_required\">{{email.errors.cus_required}}</div>\n                        <div *ngIf=\"email.errors.cus_pattern\">{{email.errors.cus_pattern}}</div>\n                    </div>\n                <br><br>\n                <label for=\"description\">Description: (optional)</label><br>\n                <textarea class=\"desc form-control\" id=\"description\"\n                    name=\"description\" [(ngModel)]=\"temp.description\" #description=\"ngModel\"></textarea><br>\n                <button type=\"submit\" class=\"btn btn-success b2\"  [disabled]=\"!addNewForm.form.valid\">Submit</button>\n                <button type=\"button\" class=\"btn btn-danger b3\" (click)=\"addNewForm.reset();confirmCancel()\">Cancel</button>\n            </form>\n        </div>\n    </div>\n</div>\n</div>\n\n<app-employee-search></app-employee-search>\n\n<h3>Following data is available:</h3>\n<div class=\"toggle\">Show Deactivated\n<label class=\"switch\">\n    <input type=\"checkbox\" [(ngModel)]=\"toggleFlag\">\n    <span class=\"slider round\"></span>\n</label></div>\n<div class=\"outer\">\n    <div class=\"inner\">\n        <table class=\"table table-bordered table-hover\">\n            <thead class=\"headings\">\n                <tr>\n                    <th *ngFor=\"let head of employeeHead\" scope=\"col\">{{head}}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let emp of employees\">\n                        <th *ngIf=\"emp.activated\" scope=\"row\">{{emp.id}}</th>\n                        <td *ngIf=\"emp.activated\">{{emp.name}}</td>\n                        <td *ngIf=\"emp.activated\">{{emp.startingDate | date:dateFormat}}</td>\n                        <td *ngIf=\"emp.activated\">{{emp.email}}</td>\n                        <td *ngIf=\"emp.activated\">{{emp?.description}}</td>\n                        <td *ngIf=\"emp.activated\"><a routerLink=\"/edit/{{emp.id}}\"><span class=\"badge\">Edit</span></a></td>\n                        <td *ngIf=\"emp.activated\"><span class=\"badge\" style=\"background-color: indianred; cursor: pointer\" (click)=\"deactivate(emp)\">Deactivate</span></td>\n                        <td *ngIf=\"emp.activated\"><button class=\"btn btn-danger\" (click)=\"confirmDelete(emp)\">X</button></td>\n                </tr>\n                    <tr [hidden] = \"!toggleFlag\" *ngFor=\"let emp of employees\">\n                        <th *ngIf=\"!emp.activated\" scope=\"row\" class=\"deact\">{{emp.id}}</th>\n                        <td *ngIf=\"!emp.activated\" class=\"deact\">{{emp.name}}</td>\n                        <td *ngIf=\"!emp.activated\" class=\"deact\">{{emp.startingDate | date:dateFormat}}</td>\n                        <td *ngIf=\"!emp.activated\" class=\"deact\">{{emp.email}}</td>\n                        <td *ngIf=\"!emp.activated\" class=\"deact\">{{emp?.description}}</td>\n                        <td *ngIf=\"!emp.activated\" class=\"deact\"><a routerLink=\"/edit/{{emp.id}}\"><span class=\"badge\">Edit</span></a></td>\n                        <td *ngIf=\"!emp.activated\" class=\"deact\"><span class=\"badge\" style=\"background-color: green; cursor: pointer\" (click)=\"activate(emp)\">Activate</span></td>\n                        <td *ngIf=\"!emp.activated\" class=\"deact\"><button class=\"btn btn-danger\" (click)=\"confirmDelete(emp)\">X</button></td>\n                    </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<!--\n<div class=\"exp\">\n    \n    \n\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/data-display/data-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/data-display/data-display.component.ts ***!
  \********************************************************/
/*! exports provided: DataDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDisplayComponent", function() { return DataDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");



//import { EMP } from '../mock-employee';

//import { AddNewComponent } from '../add-new/add-new.component';
var DataDisplayComponent = /** @class */ (function () {
    function DataDisplayComponent(employeeService) {
        this.employeeService = employeeService;
        //new below
        this.counter = false;
        this.temp = new _employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
        this.employeeHead = ['ID', 'NAME', 'Starting Date', 'Email', 'Description', 'Edit', 'Activate/Deactivate', 'Delete'];
        this.toggleFlag = false;
    }
    DataDisplayComponent.prototype.switchIt = function () {
        this.counter = (this.counter == true) ? false : true;
    };
    DataDisplayComponent.prototype.add = function () {
        var _this = this;
        this.temp.activated = true;
        alert("New employee " + this.temp.name + " added!");
        this.employeeService.addEmployee(this.temp).subscribe(function (employee) { _this.employees.push(employee); });
        this.switchIt();
        this.temp = new _employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
    };
    DataDisplayComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (employees) { return _this.employees = employees; });
    };
    DataDisplayComponent.prototype.delete = function (employee) {
        this.employees = this.employees.filter(function (h) { return h != employee; });
        this.employeeService.deleteEmployee(employee).subscribe();
    };
    DataDisplayComponent.prototype.deactivate = function (employee) {
        employee.activated = false;
    };
    DataDisplayComponent.prototype.activate = function (employee) {
        employee.activated = true;
    };
    DataDisplayComponent.prototype.confirmDelete = function (employee) {
        if (confirm("Are you sure to delete the " + employee.name + " data?")) {
            this.delete(employee);
        }
    };
    DataDisplayComponent.prototype.confirmCancel = function () {
        if (confirm("Are you sure you want to cancel.\nAll the data (IF) entered will be lost.")) {
            this.switchIt();
        }
    };
    DataDisplayComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    DataDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-display',
            template: __webpack_require__(/*! ./data-display.component.html */ "./src/app/data-display/data-display.component.html"),
            styles: [__webpack_require__(/*! ./data-display.component.css */ "./src/app/data-display/data-display.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]])
    ], DataDisplayComponent);
    return DataDisplayComponent;
}());



/***/ }),

/***/ "./src/app/edit-data/edit-data.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-data/edit-data.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back{\r\n    background-color: skyblue;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0.8;\r\n}\r\n\r\ninput[type=\"date\"]::before {\r\n\tcolor: #666666;\r\n\tcontent: attr(placeholder);\r\n}\r\n\r\ninput[type=\"date\"] {\r\n\tcolor: #ffffff;\r\n}\r\n\r\ninput[type=\"date\"]:focus,\r\ninput[type=\"date\"]:valid {\r\n\tcolor: #666666;\r\n}\r\n\r\ninput[type=\"date\"]:focus::before,\r\ninput[type=\"date\"]:valid::before {\r\n\tcontent: \"\" !important;\r\n}\r\n\r\n.desc{\r\n\r\n    width: 99%;\r\n    height: 80px;\r\n}\r\n\r\n.alert{\r\n    width: 200px;\r\n    margin-left: 80px;\r\n}\r\n\r\n.inname{\r\n    margin-left: 37px;  \r\n    width: 200px;\r\n}\r\n\r\n.indate{\r\n    margin-left: 45px;\r\n    width: 200px;\r\n}\r\n\r\n.inemail{\r\n    margin-left: 20px;\r\n    width: 200px;\r\n}\r\n\r\n.inside{\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n}\r\n\r\n.b2,.b3{\r\n    margin-bottom: 5px;\r\n}\r\n\r\nh3{\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.current-back{\r\n    padding-top: 25px;\r\n}\r\n\r\n.row{\r\n    background-color: grey;\r\n    color: white;\r\n}\r\n\r\n.col-xs-9{\r\n    background-color: whitesmoke;\r\n    color: grey;\r\n}\r\n\r\nh1{\r\n    color: skyblue;\r\n    font-family: monospace;\r\n    font-size: 50px;\r\n    opacity: 0.8;\r\n    text-decoration: underline;\r\n}\r\n\r\n.b3{\r\n    width: fit;\r\n    margin-left: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1kYXRhL2VkaXQtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0I7O0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Y7O0FBQ0Q7O0NBRUMsZUFBZTtDQUNmOztBQUNEOztDQUVDLHVCQUF1QjtDQUN2Qjs7QUFDRDs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUlEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0kscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWRhdGEvZWRpdC1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImRhdGVcIl06OmJlZm9yZSB7XHJcblx0Y29sb3I6ICM2NjY2NjY7XHJcblx0Y29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbn1cclxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTp2YWxpZCB7XHJcblx0Y29sb3I6ICM2NjY2NjY7XHJcbn1cclxuaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXM6OmJlZm9yZSxcclxuaW5wdXRbdHlwZT1cImRhdGVcIl06dmFsaWQ6OmJlZm9yZSB7XHJcblx0Y29udGVudDogXCJcIiAhaW1wb3J0YW50O1xyXG59XHJcbi5kZXNje1xyXG5cclxuICAgIHdpZHRoOiA5OSU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5hbGVydHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uaW5uYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM3cHg7ICBcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmluZGF0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uaW5lbWFpbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uaW5zaWRle1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5iMiwuYjN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jdXJyZW50LWJhY2t7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuLnJvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb2wteHMtOXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBjb2xvcjogc2t5Ymx1ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmIze1xyXG4gICAgd2lkdGg6IGZpdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-data/edit-data.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-data/edit-data.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editing Page</h1>\n\n<div>\n    <div class=\"back\">\n       <div class=\"inside\">\n            <h3>Edit the following detials of {{employee.name}}:</h3>\n            <form class=\"form-inline\" #editData=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n                <label for=\"name\">Name:</label>\n                <input class=\"form-control inname\" type=\"text\" placeholder=\"{{employee.name}}\"\n                 id=\"name\" name=\"name\" appNameValidation [(ngModel)]=\"employee.name\" #name=\"ngModel\"><br>\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"name.errors.cus_required\">{{name.errors.cus_required}}</div>\n                        <div *ngIf=\"name.errors.cus_pattern\">{{name.errors.cus_pattern}}</div>\n                    </div>\n                <label for=\"date\">Date:</label>\n                <input class=\"form-control indate\" type=\"date\" placeholder=\"{{employee.startingDate | date:'dd-MM-yyyy'}}\"\n                 id=\"startingDate\" name=\"startingDate\" required [(ngModel)]=\"employee.startingDate\" #startingDate=\"ngModel\"><br>\n                    <div *ngIf=\"startingDate.invalid && (startingDate.dirty || startingDate.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"startingDate.errors.required\">Starting date is required.</div>\n                    </div>\n                 <label for=\"email\">Email ID:</label>\n                <input class=\"form-control inemail\" type=\"text\" placeholder=\"{{employee.email}}\"\n                 id=\"email\" name=\"email\" required appEmailValidation [(ngModel)]=\"employee.email\" #email=\"ngModel\">\n                     <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"email.errors.cus_required\">{{email.errors.cus_required}}</div>\n\n                        <div *ngIf=\"email.errors.cus_pattern\">{{email.errors.cus_pattern}}</div>\n                    </div><br>\n                <label for=\"description\">Description:</label><br>\n                <textarea  class=\"desc form-control\" placeholder=\"{{employee?.description}}\" id=\"description\"\n                    name=\"description\" [(ngModel)]=\"employee.description\" #description=\"ngModel\"></textarea><br>\n                <button type=\"submit\" class=\"btn btn-default b2\" [disabled]=\"!editData.form.valid\">Edit</button>\n                <button type=\"button\" class=\"btn btn-danger b2\" routerLink=\"/data-display\">{{sub}}</button>\n            </form>\n        </div>\n    </div>\n    \n    <div class=\"current-back\">\n        <div class=\"current-inner\">\n            <h4>The current details of the employee are as follows:</h4>\n            <div class=\"row\">\n                <div class=\"col-xs-3\">ID</div>\n                <div class=\"col-xs-9\">{{employee.id}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-3\">NAME</div>\n                <div class=\"col-xs-9\">{{employee.name}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-3\">StartingDate</div>\n                <div class=\"col-xs-9\">{{employee.startingDate}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-3\">Email ID:</div>\n                <div class=\"col-xs-9\">{{employee.email}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-3\">Description</div>\n                <div class=\"col-xs-9\">{{employee?.description}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n "

/***/ }),

/***/ "./src/app/edit-data/edit-data.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-data/edit-data.component.ts ***!
  \**************************************************/
/*! exports provided: EditDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDataComponent", function() { return EditDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");





var EditDataComponent = /** @class */ (function () {
    function EditDataComponent(route, employeeService, location) {
        this.route = route;
        this.employeeService = employeeService;
        this.location = location;
        this.sub = "Cancel";
    }
    EditDataComponent.prototype.getEmployee = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.employeeService.getEmployee(id).subscribe(function (employee) { return _this.employee = employee; });
    };
    EditDataComponent.prototype.onSubmit = function () {
        this.employeeService.updateEmployee(this.employee).subscribe();
        this.sub = "Go Back";
    };
    EditDataComponent.prototype.ngOnInit = function () {
        this.getEmployee();
    };
    EditDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-data',
            template: __webpack_require__(/*! ./edit-data.component.html */ "./src/app/edit-data/edit-data.component.html"),
            styles: [__webpack_require__(/*! ./edit-data.component.css */ "./src/app/edit-data/edit-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], EditDataComponent);
    return EditDataComponent;
}());



/***/ }),

/***/ "./src/app/email-validation.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/email-validation.directive.ts ***!
  \***********************************************/
/*! exports provided: EmailValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidationDirective", function() { return EmailValidationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var EmailValidationDirective = /** @class */ (function () {
    function EmailValidationDirective() {
    }
    EmailValidationDirective_1 = EmailValidationDirective;
    EmailValidationDirective.prototype.validate = function (control) {
        var elementValue = control.value;
        var reg = new RegExp('^[a-zA-Z0-9.=-]+@[a-z]+\.[a-z]{2,3}$');
        if (elementValue === null || elementValue === undefined || elementValue === '') {
            return { 'cus_required': 'Email ID is required' };
        }
        else if (!reg.test(elementValue)) {
            return { 'cus_pattern': 'Enter a valid email address' };
        }
        return null;
    };
    var EmailValidationDirective_1;
    EmailValidationDirective = EmailValidationDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appEmailValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: EmailValidationDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailValidationDirective);
    return EmailValidationDirective;
}());



/***/ }),

/***/ "./src/app/employee-search/employee-search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-search/employee-search.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroSearch private styles */\r\n.search-result li {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width: 195px;\r\n  height: 30px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n  margin-left: 12px;\r\n}\r\n.search-result li:hover {\r\n  background-color: #607D8B;\r\n}\r\n.search-result li a {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.search-result li a:hover {\r\n  color: white;\r\n}\r\n.search-result li a:active {\r\n  color: white;\r\n}\r\n#search-box {\r\n  width: 200px;\r\n  height: 30px;\r\n  margin-left: 10px;\r\n}\r\nul.search-result {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtc2VhcmNoL2VtcGxveWVlLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQjtBQUMvQjtFQUNFLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtDQUN2QjtBQUVEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0NBQ25CO0FBR0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUtc2VhcmNoL2VtcGxveWVlLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb1NlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xyXG4uc2VhcmNoLXJlc3VsdCBsaSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgd2lkdGg6IDE5NXB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3NlYXJjaC1ib3gge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG51bC5zZWFyY2gtcmVzdWx0IHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/employee-search/employee-search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/employee-search/employee-search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n    <h4>Employee Search</h4>\n    \n    <input #searchBox class=\"form-control\" id=\"search-box\" (input)=\"search(searchBox.value)\">\n    \n    <ul class=\"search-result\">\n        <li *ngFor=\"let employee of employee$ | async\">\n            <a routerLink=\"/edit/{{employee.id}}\">{{employee.name}}</a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/employee-search/employee-search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-search/employee-search.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSearchComponent", function() { return EmployeeSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");





var EmployeeSearchComponent = /** @class */ (function () {
    function EmployeeSearchComponent(employeeService) {
        this.employeeService = employeeService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    EmployeeSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    EmployeeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employee$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.employeeService.searchEmployees(term); }));
    };
    EmployeeSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-search',
            template: __webpack_require__(/*! ./employee-search.component.html */ "./src/app/employee-search/employee-search.component.html"),
            styles: [__webpack_require__(/*! ./employee-search.component.css */ "./src/app/employee-search/employee-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]])
    ], EmployeeSearchComponent);
    return EmployeeSearchComponent;
}());



/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


//import { EMP } from './mock-employee';



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.empUrl = 'api/employees';
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.empUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getEmployees', [])));
    };
    EmployeeService.prototype.getEmployee = function (id) {
        var url = this.empUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getEmployee id=" + id)));
    };
    EmployeeService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        return this.http.put(this.empUrl, employee, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateHero')));
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post(this.empUrl, employee, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addEmployee')));
    };
    EmployeeService.prototype.deleteEmployee = function (employee) {
        var id = typeof employee === 'number' ? employee : employee.id;
        var url = this.empUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteHero')));
    };
    EmployeeService.prototype.searchEmployees = function (term) {
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(this.empUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchHeroes', [])));
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employee.ts":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var employees = [
            { id: 1, name: "AAA", startingDate: new Date(2009, 2, 15), description: "random a", activated: true, email: "AAA@random.com" },
            { id: 2, name: "BBB", startingDate: new Date(2017, 2, 15), description: "random b", activated: true, email: "BBB@random.com" },
            { id: 3, name: "CCC", startingDate: new Date(2011, 2, 15), description: "random c", activated: true, email: "CCC@random.com" },
            { id: 4, name: "DDD", startingDate: new Date(2014, 2, 15), activated: true, email: "DDD@random.com" },
            { id: 5, name: "EEE", startingDate: new Date(2006, 2, 15), description: "random e", activated: true, email: "EEE@random.com" }
        ];
        return { employees: employees };
    };
    InMemoryDataService.prototype.genId = function (employees) {
        return employees.length > 0 ? Math.max.apply(Math, employees.map(function (employee) { return employee.id; })) + 1 : 1;
    };
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/name-validation.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/name-validation.directive.ts ***!
  \**********************************************/
/*! exports provided: NameValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameValidationDirective", function() { return NameValidationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NameValidationDirective = /** @class */ (function () {
    function NameValidationDirective() {
    }
    NameValidationDirective_1 = NameValidationDirective;
    NameValidationDirective.prototype.validate = function (control) {
        var elementValue = control.value;
        var reg = new RegExp('[a-zA-Z]+\\.?');
        if (elementValue === null || elementValue === undefined || elementValue === '') {
            return { 'cus_required': 'Name is required' };
        }
        else if (!reg.test(elementValue)) {
            return { 'cus_pattern': 'Enter a valid name' };
        }
        return null;
    };
    var NameValidationDirective_1;
    NameValidationDirective = NameValidationDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNameValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: NameValidationDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NameValidationDirective);
    return NameValidationDirective;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ANGULAR\demoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map