function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html": (
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_settings_settingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n</ion-content>\n";

    /***/
  }),
  /***/"./src/app/settings/settings-routing.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/settings/settings-routing.module.ts ***!
    \*****************************************************/
  /*! exports provided: SettingsPageRoutingModule */
  /***/
  function _src_app_settings_settingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
      return SettingsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */"./src/app/settings/settings.page.ts");
    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }];
    var SettingsPageRoutingModule = /*#__PURE__*/_createClass(function SettingsPageRoutingModule() {
      _classCallCheck(this, SettingsPageRoutingModule);
    });
    SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingsPageRoutingModule);

    /***/
  }),
  /***/"./src/app/settings/settings.module.ts": (
  /*!*********************************************!*\
    !*** ./src/app/settings/settings.module.ts ***!
    \*********************************************/
  /*! exports provided: SettingsPageModule */
  /***/
  function _src_app_settings_settingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */"./src/app/settings/settings-routing.module.ts");
    /* harmony import */
    var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */"./src/app/settings/settings.page.ts");
    var SettingsPageModule = /*#__PURE__*/_createClass(function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    });
    SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })], SettingsPageModule);

    /***/
  }),
  /***/"./src/app/settings/settings.page.scss": (
  /*!*********************************************!*\
    !*** ./src/app/settings/settings.page.scss ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function _src_app_settings_settingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/settings/settings.page.ts": (
  /*!*******************************************!*\
    !*** ./src/app/settings/settings.page.ts ***!
    \*******************************************/
  /*! exports provided: SettingsPage */
  /***/
  function _src_app_settings_settingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage() {
        _classCallCheck(this, SettingsPage);
      }
      return _createClass(SettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */"./src/app/settings/settings.page.scss"))["default"]]
    })], SettingsPage);

    /***/
  })
}]);
//# sourceMappingURL=settings-settings-module-es5.js.map