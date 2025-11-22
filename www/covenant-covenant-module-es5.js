function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["covenant-covenant-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/covenant/covenant.page.html": (
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/covenant/covenant.page.html ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_covenant_covenantPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item hidden>\n    <ion-input readonly [(ngModel)]=\"selectedDate\"></ion-input>\n  </ion-item>\n  <img class=\"middlelogo\" src=\"assets/img/hr_of_prayer4.jpg\" alt=\"\">\n\n    <ion-button color=\"light\" expand=\"full\" (click)=\"openDatePicker()\">\n      Select Date\n      <ion-icon name=\"calendar\" class=\"ion-padding\"></ion-icon>\n      {{selectedDate}}\n    </ion-button>\n  <section>\n  </section>\n\n  <!--        <img class=\"middlelogo\" src=\"assets/img/Events.png\" alt=\"\"> {{item.images.imageMedium}}-->\n  <div *ngIf=\"showEvent\">\n    <ion-list class=\"remove-top\" *ngFor=\"let item of itemList\">\n<!--      <div>-->\n<!--        <img src=\"{{item.images.imageMedium}}\" alt=\"{{item.title}}\">-->\n<!--      </div>-->\n      <ion-item class=\"ion-padding\">\n        <ion-label>\n          <ion-text color=\"dark\">\n            <h2 class=\"ion-padding-bottom\"><b>Topic: {{item.title}}</b></h2>\n          </ion-text>\n          <h2 class=\"ion-padding-bottom\">Verse: {{item.bible_verse}}</h2>\n          <h2>{{item.content}}</h2>\n        </ion-label>\n      </ion-item>\n      <section>\n        <ion-button color=\"winners-red\" expand=\"block\" (click)=\"shareUs(item)\">\n          Share\n          <ion-icon name=\"share\" slot=\"end\"></ion-icon></ion-button>\n      </section>\n\n    </ion-list>\n  </div>\n  <ion-item *ngIf=\"!showEvent\"  >\n    <h3 style=\"text-align:center;\">There are no events to show</h3>\n  </ion-item>\n</ion-content>\n";

    /***/
  }),
  /***/"./src/app/covenant/covenant-routing.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/covenant/covenant-routing.module.ts ***!
    \*****************************************************/
  /*! exports provided: CovenantPageRoutingModule */
  /***/
  function _src_app_covenant_covenantRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CovenantPageRoutingModule", function () {
      return CovenantPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _covenant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./covenant.page */"./src/app/covenant/covenant.page.ts");
    var routes = [{
      path: '',
      component: _covenant_page__WEBPACK_IMPORTED_MODULE_3__["CovenantPage"]
    }];
    var CovenantPageRoutingModule = /*#__PURE__*/_createClass(function CovenantPageRoutingModule() {
      _classCallCheck(this, CovenantPageRoutingModule);
    });
    CovenantPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CovenantPageRoutingModule);

    /***/
  }),
  /***/"./src/app/covenant/covenant.module.ts": (
  /*!*********************************************!*\
    !*** ./src/app/covenant/covenant.module.ts ***!
    \*********************************************/
  /*! exports provided: CovenantPageModule */
  /***/
  function _src_app_covenant_covenantModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CovenantPageModule", function () {
      return CovenantPageModule;
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
    var _covenant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./covenant-routing.module */"./src/app/covenant/covenant-routing.module.ts");
    /* harmony import */
    var _covenant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./covenant.page */"./src/app/covenant/covenant.page.ts");
    var CovenantPageModule = /*#__PURE__*/_createClass(function CovenantPageModule() {
      _classCallCheck(this, CovenantPageModule);
    });
    CovenantPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _covenant_routing_module__WEBPACK_IMPORTED_MODULE_5__["CovenantPageRoutingModule"]],
      declarations: [_covenant_page__WEBPACK_IMPORTED_MODULE_6__["CovenantPage"]]
    })], CovenantPageModule);

    /***/
  }),
  /***/"./src/app/covenant/covenant.page.scss": (
  /*!*********************************************!*\
    !*** ./src/app/covenant/covenant.page.scss ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function _src_app_covenant_covenantPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "section {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292ZW5hbnQvRDpcXHdjaW55YXBwMjAyNVxcd2Npbnkvc3JjXFxhcHBcXGNvdmVuYW50XFxjb3ZlbmFudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvdmVuYW50L2NvdmVuYW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBOztFQUVFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvdmVuYW50L2NvdmVuYW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuXG5zZWN0aW9uOm5vdCguZnVsbC13aWR0aCksXG4uZnVsbC13aWR0aCA+IGhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbiIsInNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuXG5zZWN0aW9uOm5vdCguZnVsbC13aWR0aCksXG4uZnVsbC13aWR0aCA+IGhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/covenant/covenant.page.ts": (
  /*!*******************************************!*\
    !*** ./src/app/covenant/covenant.page.ts ***!
    \*******************************************/
  /*! exports provided: CovenantPage */
  /***/
  function _src_app_covenant_covenantPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CovenantPage", function () {
      return CovenantPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */"./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */"./src/app/services/data.service.ts");
    /* harmony import */
    var _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @logisticinfotech/ionic4-datepicker */"./node_modules/@logisticinfotech/ionic4-datepicker/fesm2015/logisticinfotech-ionic4-datepicker.js");
    var CovenantPage = /*#__PURE__*/function () {
      function CovenantPage(modalCtrl, apiCall, socialSharing) {
        _classCallCheck(this, CovenantPage);
        this.modalCtrl = modalCtrl;
        this.apiCall = apiCall;
        this.socialSharing = socialSharing;
        this.datePickerObj = {};
        this.thisDay = new Date();
      }
      return _createClass(CovenantPage, [{
        key: "getItems",
        value: function getItems(a) {
          var _this = this;
          var e = a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate();
          var params = 'cats=3&type=devotion&start=' + e;
          this.apiCall.fetchData('get/k2/items/', params, false).subscribe(function (data) {
            _this.showEvent = !!(Array.isArray(data['items']) && data['items'].length > 0);
            _this.itemList = data['items'];
            console.log(data['items']);
          }, function (err) {
            return console.error(err);
          }, function () {
            return console.log('get Devotions Completed');
          });
        }
      }, {
        key: "getDay",
        value: function getDay(str) {
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          return days[new Date(str).getDay()];
        }
      }, {
        key: "getMonth",
        value: function getMonth(str) {
          var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          return months[new Date(str).getMonth()];
        }
      }, {
        key: "getThumb",
        value: function getThumb(item) {
          var vid = "";
          switch (item.b) {
            case 1:
              vid = "assets/img/play.png";
              break;
            case 2:
              vid = "assets/img/play.png";
              break;
            default:
              vid = "assets/img/play.png"; //item.MediaThumb;
              break;
          }
          return vid;
        }
      }, {
        key: "playVid",
        value: function playVid(item) {
          var vid = "#";
          switch (item.Type) {
            case 1:
              vid = "http://www.youtube.com/embed/" + item.extra_fields[3].value + "?autoplay=1";
              break;
            case 2:
              vid = "http://www.dailymotion.com/video/" + item.extra_fields[3].value;
              break;
            default:
              vid = item.MediaLocation;
              break;
          }
        }
      }, {
        key: "doHTML",
        value: function doHTML(str) {
          return str.replace(/<(?:.|\n)*?>/gm, '');
        }
      }, {
        key: "getContent",
        value: function getContent(obj) {
          return obj.toString();
        }
      }, {
        key: "shareUs",
        value: function shareUs(item) {
          var options = {
            message: 'Verse: \n' + item.bible_verse,
            subject: item.title,
            files: [item.images.imageMedium],
            url: 'https://www.winnerschapelny.org',
            chooserTitle: 'WCINY' // Android only, you can override the default share sheet title
          };
          this.socialSharing.shareWithOptions(options)["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "openDatePicker",
        value: function openDatePicker() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
            var _this2 = this;
            var modalCtrl;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  console.log("Open Date Picker");
                  _context.n = 1;
                  return this.modalCtrl.create({
                    component: _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_5__["Ionic4DatepickerModalComponent"],
                    cssClass: "li-ionic4-datePicker",
                    componentProps: {
                      objConfig: this.datePickerObj
                    }
                  });
                case 1:
                  modalCtrl = _context.v;
                  _context.n = 2;
                  return modalCtrl.present();
                case 2:
                  modalCtrl.onDidDismiss().then(function (data) {
                    // this.isModalOpen = false;
                    console.log(data);
                    var newDate = new Date(data.data.date);
                    _this2.selectedDate = newDate.toISOString().substr(0, 10);
                    _this2.getItems(newDate);
                  });
                case 3:
                  return _context.a(2);
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedDate = this.thisDay.toISOString().substr(0, 10);
          console.log(this.selectedDate);
          this.datePickerObj = {
            inputDate: this.thisDay,
            dateFormat: "DD MMM YYYY",
            closeOnSelect: true,
            setLabel: "OK",
            showTodayButton: false,
            titleLabel: this.selectedDate,
            yearInAscending: true
          };
          this.getItems(this.thisDay);
        }
      }]);
    }();
    CovenantPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"]
      }];
    };
    CovenantPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-covenant',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./covenant.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/covenant/covenant.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./covenant.page.scss */"./src/app/covenant/covenant.page.scss"))["default"]]
    })], CovenantPage);

    /***/
  })
}]);
//# sourceMappingURL=covenant-covenant-module-es5.js.map