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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n"

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
        this.title = 'angulartvdb';
        // private itemsCollection: AngularFirestoreCollection<Item>;
        // items: Observable<Item[]>;
        // constructor (private readonly afs: AngularFirestore) {
        //   this.itemsCollection = afs.collection<Item>('tvdb');
        //   this.items = this.itemsCollection.valueChanges();
        // }
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/items/items.component */ "./src/app/components/items/items.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dmca_dmca_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dmca/dmca.component */ "./src/app/components/dmca/dmca.component.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");
/* harmony import */ var _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-item/add-item.component */ "./src/app/components/add-item/add-item.component.ts");



















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
    { path: 'dmca', component: _components_dmca_dmca_component__WEBPACK_IMPORTED_MODULE_16__["DmcaComponent"] },
    { path: 'help', component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_17__["HelpComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_items_items_component__WEBPACK_IMPORTED_MODULE_14__["ItemsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_dmca_dmca_component__WEBPACK_IMPORTED_MODULE_16__["DmcaComponent"],
                _components_help_help_component__WEBPACK_IMPORTED_MODULE_17__["HelpComponent"],
                _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_18__["AddItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase, 'angulartvdb'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_12__["ItemService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-item/add-item.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-item/add-item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-dark pt-3 pb-1\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"row form-group\">\n      <div class=\"col-md-2\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"TVID ({{lastTvid + 1}})\" [(ngModel)]=\"item.tvid\" name=\"tvid\">\n      </div>\n      <div class=\"col-md-7\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"TVName\" [(ngModel)]=\"item.tvname\" name=\"tvname\">\n      </div>\n      <div class=\"col-md-3\">\n        <select class=\"form-control\" [(ngModel)]=\"item.showtype\" name=\"showtype\">\n          <option value=\"\" selected disabled>Select ShowType</option>\n          <option value='Completed'>Completed</option>\n          <option value='Airing'>Airing</option>\n          <option value='Break'>Break</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row form-group\">\n      <div class=\"col-md-6\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Wikipedia Link\" [(ngModel)]=\"item.link\" name=\"link\">\n      </div>\n      <div class=\"col-md-2\">\n        <select class=\"form-control\" [(ngModel)]=\"item.pid\" name=\"pid\">\n            <option value=\"\" selected disabled>Select Place</option>\n            <option value='b1'>b1</option>\n            <option value='b2'>b2</option>\n            <option value='b3'>b3</option>\n            <option value='b4'>b4</option>\n            <option value='b5'>b5</option>\n            <option value='l'>l</option>\n            <option value='p'>p</option>\n          </select>\n      </div>\n      <div class=\"col-md-2\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"TVFrom\" [(ngModel)]=\"item.tvfrom\" name=\"tvfrom\">\n      </div>\n      <div class=\"col-md-2\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"TVTo\" [(ngModel)]=\"item.tvto\" name=\"tvto\">\n      </div>\n    </div>\n    <div class=\"row form-group\">\n      <div class=\"col-md-2\">\n          <input type=\"submit\" value=\"Insert New Record\" class=\"btn btn-success\">\n      </div>\n      <div class=\"col-md-6\"></div>\n      <div class=\"col-md-2\"><label class=\"form-control\">Last TVID</label></div>\n      <div class=\"col-md-2\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Last TVID\" value=\"{{lastTvid}}\" name=\"lasttvid\" disabled>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/add-item/add-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.ts ***!
  \***********************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");



var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(itemService) {
        this.itemService = itemService;
        this.item = {
            tvid: null,
            tvname: '',
            showtype: '',
            link: '',
            pid: '',
            tvfrom: '',
            tvto: ''
        };
    }
    AddItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.lastItems().subscribe(function (items) {
            _this.items = items;
            _this.lastTvid = items[0].tvid;
        });
    };
    AddItemComponent.prototype.onSubmit = function () {
        if (this.item.tvid != null && this.item.tvname !== '' && this.item.showtype !== '' && this.item.link !== '' && this.item.pid !== '' && this.item.tvfrom !== '' && this.item.tvto !== '') {
            this.itemService.addItem(this.item);
            this.item.tvid = null;
            this.item.tvname = '';
            this.item.showtype = '';
            this.item.link = '';
            this.item.pid = '';
            this.item.tvfrom = '';
            this.item.tvto = '';
        }
    };
    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/components/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/components/add-item/add-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/components/dmca/dmca.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/dmca/dmca.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG1jYS9kbWNhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dmca/dmca.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/dmca/dmca.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n    <h1 class=\"text-center\" style=\"text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white\">Niweera TVDB DMCA Policy</h1>\n  </div>\n  <div class=\"jumbotron mt-5\" style=\"background-color: #3b3a30;text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white\">\n    <p class=\"font-weight-bold text-center h2\">\n      Niwder.me or/and Niweera TVDB is/are not for commercial use and it is for private use only. No Digital Media Content (here on TV series) is hosted on the server, All the links are affiliated with Wikipedia and only for educational purposes. Niwder.me or Niweera TVDB does not accept any responsibility for TV series hosted on third party sites and does not have any involvement in the downloading/uploading of such TV series. All data, information hosted on this website is only for educational purposes.\n        </p>\n</div>"

/***/ }),

/***/ "./src/app/components/dmca/dmca.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/dmca/dmca.component.ts ***!
  \***************************************************/
/*! exports provided: DmcaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmcaComponent", function() { return DmcaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DmcaComponent = /** @class */ (function () {
    function DmcaComponent() {
    }
    DmcaComponent.prototype.ngOnInit = function () {
    };
    DmcaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dmca',
            template: __webpack_require__(/*! ./dmca.component.html */ "./src/app/components/dmca/dmca.component.html"),
            styles: [__webpack_require__(/*! ./dmca.component.css */ "./src/app/components/dmca/dmca.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DmcaComponent);
    return DmcaComponent;
}());



/***/ }),

/***/ "./src/app/components/help/help.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/help/help.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/help/help.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/help/help.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n    <h1 class=\"text-center\" style=\"text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white\">Need Help? Here for You!</h1>\n  </div>\n  <div class=\"jumbotron mt-3 pt-5 pb-5\" style=\"background-color: #3b3a30;text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white\">\n    <p class=\"font-weight-bold text-left h2\">\n      Need to know a particular TV Series is on the Niweera TVDB? Go ahead and search for it using a keyword. For example: to search for Arrow, type \"Arrow\" or \"arrow\" (without quotes) on the search box. If you want to see all the available TV Series in the Niweera TVDB, just scroll...<br><br>\n<span style=\"font-size:38px\">Legend</span><br>\nl = in Laptop | p = in PC<br>\nb1, b2, b3, b4, b5 = in DVDs (in indexed Boxes)<br>\nAiring = Telecasting right now<br>\nBreak = On a break, will return in next year<br>\nCompleted = Show is either completed or cancelled<br>\nRemarks are there to identify the stored places of the shows \n        </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/help/help.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/components/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/components/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items></app-items>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/items/items.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/items/items.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/items/items.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/items/items.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2\">\n  <h1 class=\"text-center\" style=\"text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white\">Search for TV Series using keywords</h1>\n</div>\n<div class=\"container mt-3 text-center\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-lg-4\"></div>\n    <div class=\"col-md-4 col-lg-4\">\n      <input type=\"text\" class=\"form-control\" (keyup)=\"filterNames()\" name=\"filterInput\" id=\"filterInput\" aria-describedby=\"Enter TV Series Name\" autocomplete=\"off\" placeholder=\"Enter TV Series Name\">\n    </div>\n    <div class=\"col-md-4 col-lg-4\"></div>\n  </div>\n</div>\n<div *ngIf=\"items?.length > 0;else noItems\" class=\"mt-3\" style=\"height:338px;overflow-y: scroll;scrollbar-width: none;\">\n  <table class=\"table table-hover table-dark\" id=\"test\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th>TVID</th>\n        <th>TVName</th>\n        <th>ShowType</th>\n        <th>Place</th>\n        <th>TVFrom</th>\n        <th>TVTO</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of items\">\n        <td class=\"collection-item0\">{{item.tvid}}</td>\n        <td class=\"collection-item1\"><a *ngIf=\"item.link; else noLinks\" style=\"background-color:transparent;color:white\" target=\"_blank\" href=\"{{item.link}}\">{{item.tvname}}</a>\n          <ng-template #noLinks>\n            <a style=\"background-color:transparent;color:white\" target=\"_blank\" href=\"https://www.google.com/search?q={{item.tvname}}+TV+Series\">{{item.tvname}}</a>\n          </ng-template>\n        </td>\n        <td class=\"collection-item2\">{{item.showtype}}</td>\n        <td class=\"collection-item3\">{{item.pid}}</td>\n        <td class=\"collection-item4\">{{item.tvfrom}}</td>\n        <td class=\"collection-item5\">{{item.tvto}}&nbsp;&nbsp;&nbsp; <a href=\"#\">\n            <i (click)=\"editItem($event, item)\" class=\"fa fa-pencil\"></i>&nbsp;\n            <i *ngIf=\"editState && itemToEdit.id == item.id\" (click)=\"clearState()\" class=\"fa fa-compress\"></i>  \n          </a>\n\n          <div *ngIf=\"editState && itemToEdit.id == item.id\" class=\"jumbotron bg-dark pt-4 pb-2\">\n              <form (ngSubmit)=\"updateItem(item)\">\n                <div class=\"row form-group\">\n                  <div class=\"col-md-2\">\n                    <input type=\"number\" class=\"form-control\" placeholder=\"TVID\" [(ngModel)]=\"item.tvid\" name=\"tvid\">\n                  </div>\n                  <div class=\"col-md-7\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"TVName\" [(ngModel)]=\"item.tvname\" name=\"tvname\">\n                  </div>\n                  <div class=\"col-md-3\">\n                    <!-- <input type=\"text\" class=\"form-control\" placeholder=\"ShowType\" [(ngModel)]=\"item.showtype\" name=\"showtype\"> -->\n                    <select class=\"form-control\" [(ngModel)]=\"item.showtype\" name=\"showtype\">\n                      <option value=\"\" selected disabled>Select ShowType</option>\n                      <option value='Completed'>Completed</option>\n                      <option value='Airing'>Airing</option>\n                      <option value='Break'>Break</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row form-group\">\n                  <div class=\"col-md-6\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Wikipedia Link\" [(ngModel)]=\"item.link\" name=\"link\">\n                  </div>\n                  <div class=\"col-md-2\">\n                    <select class=\"form-control\" [(ngModel)]=\"item.pid\" name=\"pid\">\n                        <option value=\"\" selected disabled>Select Place</option>\n                        <option value='b1'>b1</option>\n                        <option value='b2'>b2</option>\n                        <option value='b3'>b3</option>\n                        <option value='b4'>b4</option>\n                        <option value='b5'>b5</option>\n                        <option value='l'>l</option>\n                        <option value='p'>p</option>\n                      </select>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"TVFrom\" [(ngModel)]=\"item.tvfrom\" name=\"tvfrom\">\n                  </div>\n                  <div class=\"col-md-2\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"TVTo\" [(ngModel)]=\"item.tvto\" name=\"tvto\">\n                  </div>\n                </div>\n                <div class=\"row form-group\">\n                  <div class=\"col-md-2\">\n                      <input type=\"submit\" value=\"Update\" class=\"btn btn-warning\">\n                  </div>\n                  <div class=\"col-md-2\">\n                      <button (click)=\"deleteItem($event, item)\" class=\"btn btn-danger\" onclick=\"return confirm('Are You Sure?');\">Delete</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-template #noItems>\n  <div class=\"container mt-3\">\n    <h2 style=\"background-color:transparent;color:white\" class=\"text-center\">No Results to Display</h2>\n    <div class=\"row\">\n      <div class=\"col-md-5\"></div>\n      <div class=\"col-md-2 text-center\">\n        <button class=\"btn btn-success\" onclick=\"window.location.reload();\"><i class=\"fa fa-refresh\"aria-hidden=\"true\"></i> Refresh</button>\n      </div>\n    </div>\n    <div class=\"col-md-5\"></div>\n  </div>\n</ng-template>\n<div class=\"jumbotron mt-2 pt-4 pb-4 mb-2\" style=\"background-color: #3b3a30;text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white\">\n    <p class=\"font-weight-bold text-center h2\">\n        \"I must not fear. Fear is the mind-killer. Fear is the little-death that\n        brings total obliteration.\n        I will face my fear. I will permit it to pass over me and through me.\n        And when it has gone past I will turn the inner eye to see its path.\n        Where the fear has gone there will be nothing. Only I will remain.\"\n        </p>\n</div>\n\n<app-add-item></app-add-item>\n\n"

/***/ }),

/***/ "./src/app/components/items/items.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/items/items.component.ts ***!
  \*****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        this.editState = false;
        this.insertState = false;
        this.searchValue = '';
        this.item = {
            tvid: null,
            tvname: '',
            showtype: '',
            link: '',
            pid: '',
            tvfrom: '',
            tvto: ''
        };
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItems(this.searchValue, this.searchValue).subscribe(function (items) {
            _this.items = items;
        });
        console.log(this.searchValue);
    };
    ItemsComponent.prototype.deleteItem = function (event, item) {
        this.clearState();
        this.itemService.deleteItem(item);
    };
    ItemsComponent.prototype.editItem = function (event, item) {
        this.editState = true;
        this.itemToEdit = item;
    };
    ItemsComponent.prototype.insertItem = function (event, item) {
        this.insertState = true;
        this.itemToInsert = item;
    };
    ItemsComponent.prototype.updateItem = function (item) {
        if (item.tvid != null && item.tvname !== '' && item.showtype !== '' && item.link !== '' && item.pid !== '' && item.tvfrom !== '' && item.tvto !== '') {
            this.itemService.updateItem(item);
            this.clearState();
        }
    };
    ItemsComponent.prototype.clearState = function () {
        this.editState = false;
        this.insertState = false;
        this.itemToEdit = null;
    };
    ItemsComponent.prototype.filterNames = function () {
        // Get value of input
        // let filterValue = document.getElementById('filterInput').value.toUpperCase();
        var filterValue = document.getElementById('filterInput').value.toUpperCase();
        // Get names ul
        var ul = document.getElementById('test');
        // Get lis from ul
        var li = ul.querySelectorAll('td.collection-item1');
        var li0 = ul.querySelectorAll('td.collection-item0');
        var li2 = ul.querySelectorAll('td.collection-item2');
        var li3 = ul.querySelectorAll('td.collection-item3');
        var li4 = ul.querySelectorAll('td.collection-item4');
        var li5 = ul.querySelectorAll('td.collection-item5');
        // Loop through collection-item lis
        for (var i = 0; i < li.length; i++) {
            var a = li[i].getElementsByTagName('a')[0];
            // If matched
            if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                li[i].style.display = '';
                li0[i].style.display = '';
                li2[i].style.display = '';
                li3[i].style.display = '';
                li4[i].style.display = '';
                li5[i].style.display = '';
                // li[i].style.display = '';
                // li0[i].style.display = '';
                // li2[i].style.display = '';
                // li3[i].style.display = '';
                // li4[i].style.display = '';
                // li5[i].style.display = '';
            }
            else {
                li[i].style.display = 'none';
                li0[i].style.display = 'none';
                li2[i].style.display = 'none';
                li3[i].style.display = 'none';
                li4[i].style.display = 'none';
                li5[i].style.display = 'none';
                // li[i].style.display = 'none';
                // li0[i].style.display = 'none';
                // li2[i].style.display = 'none';
                // li3[i].style.display = 'none';
                // li4[i].style.display = 'none';
                // li5[i].style.display = 'none';
            }
        }
    };
    ItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/components/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/components/items/items.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark\" style=\"background-color: #3b3a30;text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" style=\"background-color: #3b3a30;text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white; font-size:24px\" href=\"#\" [routerLink]=\"['/']\">Niweera TVDB</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <!-- Left Side Of Navbar -->\n          <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item\">\n              <a style=\"background-color: #3b3a30;text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white; font-size:20px\" class=\"nav-link\" href=\"#\" [routerLink]=\"['/']\">Home</a>\n              </li>\n              <li class=\"nav-item\">\n              <a style=\"background-color: #3b3a30;text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white; font-size:20px\" class=\"nav-link\" href=\"#\" [routerLink]=\"['/dmca']\">DMCA</a>\n              </li>\n              <li class=\"nav-item\">\n              <a style=\"background-color: #3b3a30;text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white; font-size:20px\" class=\"nav-link\" href=\"#\" [routerLink]=\"['/help']\">Help</a>\n              </li>\n              <li class=\"nav-item\">\n              <a style=\"background-color: #3b3a30;text-shadow: 0 1px 3px rgba(0,0,0,.5);color:white; font-size:20px\" class=\"nav-link\" href=\"https://www.niwder.me\">Blog</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ItemService = /** @class */ (function () {
    function ItemService(afs) {
        this.afs = afs;
    }
    ItemService.prototype.getItems = function (startObj, endObj) {
        // this.itemsCollection = this.afs.collection<Item>('tvdb', ref => ref.orderBy('tvname').startAt(startObj).endAt(endObj+'\uf8ff'));
        this.itemsCollection = this.afs.collection('tvdb', function (ref) { return ref.orderBy('tvid'); });
        this.items = this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
        return this.items;
    };
    ItemService.prototype.lastItems = function () {
        this.itemsCollection = this.afs.collection('tvdb', function (ref) { return ref.orderBy('tvid', 'desc').limit(1); });
        this.items = this.itemsCollection.valueChanges();
        return this.items;
    };
    ItemService.prototype.addItem = function (item) {
        this.itemsCollection.add(item);
    };
    ItemService.prototype.deleteItem = function (item) {
        this.itemDoc = this.afs.doc("tvdb/" + item.id);
        this.itemDoc.delete();
    };
    ItemService.prototype.updateItem = function (item) {
        this.itemDoc = this.afs.doc("tvdb/" + item.id);
        this.itemDoc.update(item);
    };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ItemService);
    return ItemService;
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
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// export const environment = {
//   production: false,
//   firebase: {
//     apiKey: "AIzaSyCCJ77nmHv1U42uwovo_vn_7p1tfRmbKUU",
//     authDomain: "testtvdb.firebaseapp.com",
//     databaseURL: "https://testtvdb.firebaseio.com",
//     projectId: "testtvdb",
//     storageBucket: "testtvdb.appspot.com",
//     messagingSenderId: "855344302415"
//   }
// };
// export const environment = {
//   production: false,
//   firebase: {
//     apiKey: "AIzaSyBELJQRAP9yoOmWL088ncWdfvVpHHVm06E",
//     authDomain: "firetvdb.firebaseapp.com",
//     databaseURL: "https://firetvdb.firebaseio.com",
//     projectId: "firetvdb",
//     storageBucket: "firetvdb.appspot.com",
//     messagingSenderId: "90967925422"
//   }
// };
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAL_cvnjbeLD-sWo6NddbB7Af8VwXpG7gM",
        authDomain: "backuptvdb2.firebaseapp.com",
        databaseURL: "https://backuptvdb2.firebaseio.com",
        projectId: "backuptvdb2",
        storageBucket: "backuptvdb2.appspot.com",
        messagingSenderId: "120083981588"
    }
};


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

module.exports = __webpack_require__(/*! C:\xampp\htdocs\angulartvdb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map