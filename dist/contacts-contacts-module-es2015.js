(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--  <div id=\"mapcanvas\"></div>-->\n  <div class=\"map-wrapper\" (click)=\"navToChurch()\">\n    <div id=\"map_center\">\n      <img src=\"assets/img/location_marker.png\" alt=\"marker\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n  <ion-item color=\"light\">\n    <div class=\"ion-text-left\">\n      <h5 style=\"font-weight: bold\">CONTACTS</h5>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div class=\"ion-padding\">\n      <ion-text style=\"font-weight: bold\"><p>Winners Chapel Int’l New York</p></ion-text>\n      <ion-text>310 Fulton Avenue</ion-text>\n      <p class=\"small-pad-bottom\">Hempstead NY 11550</p>\n      <p>Tel: (646) 944 2999</p>\n      <p class=\"small-pad-bottom\"><span style=\"color: white\">Tel: </span>(718) 464 4585</p>\n      <p>Email: info@winnerschapelNY.org</p>\n      <p>Website : www.winnerschapelNY.org</p>\n    </div>\n  </ion-item>\n  <ion-row>\n    <ion-col size=\"5\">\n      <section>\n        <ion-button color=\"winners-red\" expand=\"block\"  [routerLink]=\"['','feedback']\" routerDirection=\"forward\">\n          FEEDBACK\n        </ion-button>\n      </section>\n    </ion-col>\n    <ion-col size=\"7\">\n      <section>\n        <ion-button color=\"light\" expand=\"block\" [routerLink]=\"['','service']\" routerDirection=\"forward\">\n          SERVICE SCHEDULE\n        </ion-button>\n      </section>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/contacts/contacts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function() { return ContactsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.page */ "./src/app/contacts/contacts.page.ts");




const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
    }
];
let ContactsPageRoutingModule = class ContactsPageRoutingModule {
};
ContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactsPageRoutingModule);



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/contacts/contacts-routing.module.ts");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "./src/app/contacts/contacts.page.ts");







let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"]
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
    })
], ContactsPageModule);



/***/ }),

/***/ "./src/app/contacts/contacts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  width: 100%;\n  height: 30vh;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 5px;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 25vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRDpcXHdjaW55YXBwMjAyNVxcd2Npbnkvc3JjXFxhcHBcXGNvbnRhY3RzXFxjb250YWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzB2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1dmg7XG59XG5cbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAjbWFwX2NlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICAgIG1hcmdpbi10b3A6IC00MXB4O1xuICB9XG59XG4iLCIjbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuI2FkZHJlc3Mge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXZoO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC00MXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/contacts/contacts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/contacts/contacts.page.ts ***!
  \*******************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");




let ContactsPage = class ContactsPage {
    constructor(nativeGeocoder, launchNavigator) {
        this.nativeGeocoder = nativeGeocoder;
        this.launchNavigator = launchNavigator;
        this.address = '310 Fulton Avenue, Hempstead NY, 11550';
    }
    navToChurch() {
        this.launchNavigator.navigate("310 Fulton Avenue, Hempstead NY, 11550");
    }
    ngOnInit() {
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode('310 Fulton Avenue, Hempstead NY, 11550', options)
            .then((result) => {
            console.log(result[0]);
            console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
            this.latitude = result[0].latitude;
            this.longitude = result[0].longitude;
            let latLng = new google.maps.LatLng(result[0].latitude, result[0].longitude);
            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            // this.map.addListener(marker, 'click', function() {
            //     infowindow.open(map,marker);
            // });
            //
            // infowindow.open(map,marker);
            this.map.addListener('dragend', () => {
                this.latitude = this.map.center.lat();
                this.longitude = this.map.center.lng();
                // this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
            });
        })
            .catch((error) => console.log(error));
    }
};
ContactsPage.ctorParameters = () => [
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__["LaunchNavigator"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false })
], ContactsPage.prototype, "mapElement", void 0);
ContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contacts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contacts.page.scss */ "./src/app/contacts/contacts.page.scss")).default]
    })
], ContactsPage);



/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module-es2015.js.map