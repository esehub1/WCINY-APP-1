function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html": (
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html ***!
    \*****************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_event_eventPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"card remove-top\">\n    <img class=\"middlelogo\" src=\"{{headerImage}}\" alt=\"\">\n    <div class=\"ion-padding-horizontal\">\n      <h2>{{ item.introtext}}</h2>\n      <h4>{{doHTML(item.content,item.introtext)}}</h4>\n      <p>Date: {{doDate(item.event_date, item.event_time) | date:'short' }}</p>\n<!--      <p>Ends: {{doDate(item.event_date, item.event_time) | date:'short' }}</p>-->\n      <p>Venue: {{ item.event_venue }}</p>\n    </div>\n\n    <ion-row>\n      <ion-col size=\"5\">\n        <section>\n          <ion-button color=\"winners-red\" expand=\"block\" (click)=\"shareUs(item)\">\n            Share\n            <ion-icon name=\"share\" slot=\"end\"></ion-icon>\n          </ion-button>\n        </section>\n      </ion-col>\n      <ion-col size=\"7\">\n        <section>\n          <ion-button color=\"light\" expand=\"block\" (click)=\"createEvent(item)\">\n            Save the Date\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\n          </ion-button>\n        </section>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n</ion-content>\n";

    /***/
  }),
  /***/"./src/app/event/event-routing.module.ts": (
  /*!***********************************************!*\
    !*** ./src/app/event/event-routing.module.ts ***!
    \***********************************************/
  /*! exports provided: EventPageRoutingModule */
  /***/
  function _src_app_event_eventRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EventPageRoutingModule", function () {
      return EventPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.page */"./src/app/event/event.page.ts");
    var routes = [{
      path: '',
      component: _event_page__WEBPACK_IMPORTED_MODULE_3__["EventPage"]
    }];
    var EventPageRoutingModule = /*#__PURE__*/_createClass(function EventPageRoutingModule() {
      _classCallCheck(this, EventPageRoutingModule);
    });
    EventPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventPageRoutingModule);

    /***/
  }),
  /***/"./src/app/event/event.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/event/event.module.ts ***!
    \***************************************/
  /*! exports provided: EventPageModule */
  /***/
  function _src_app_event_eventModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EventPageModule", function () {
      return EventPageModule;
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
    var _event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-routing.module */"./src/app/event/event-routing.module.ts");
    /* harmony import */
    var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.page */"./src/app/event/event.page.ts");
    var EventPageModule = /*#__PURE__*/_createClass(function EventPageModule() {
      _classCallCheck(this, EventPageModule);
    });
    EventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _event_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventPageRoutingModule"]],
      declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]]
    })], EventPageModule);

    /***/
  }),
  /***/"./src/app/event/event.page.scss": (
  /*!***************************************!*\
    !*** ./src/app/event/event.page.scss ***!
    \***************************************/
  /*! exports provided: default */
  /***/
  function _src_app_event_eventPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".middlelogo {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvRDpcXHdjaW55YXBwMjAyNVxcd2Npbnkvc3JjXFxhcHBcXGV2ZW50XFxldmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2V2ZW50L2V2ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTs7RUFFRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ldmVudC9ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlbG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cblxuc2VjdGlvbjpub3QoLmZ1bGwtd2lkdGgpLFxuLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbiIsIi5taWRkbGVsb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuXG5zZWN0aW9uOm5vdCguZnVsbC13aWR0aCksXG4uZnVsbC13aWR0aCA+IGhlYWRlciB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/event/event.page.ts": (
  /*!*************************************!*\
    !*** ./src/app/event/event.page.ts ***!
    \*************************************/
  /*! exports provided: EventPage */
  /***/
  function _src_app_event_eventPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EventPage", function () {
      return EventPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */"./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */
    var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/calendar/ngx */"./node_modules/@ionic-native/calendar/ngx/index.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");

    //import { SocialSharing, Calendar } from '@ionic-native/social-sharing';

    var EventPage = /*#__PURE__*/function () {
      function EventPage(socialSharing, calendar, route, router, alertCtrl) {
        _classCallCheck(this, EventPage);
        this.socialSharing = socialSharing;
        this.calendar = calendar;
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
      }
      // shareMe(msg, subject, image, link) {
      //   console.log(msg + ' , ' + subject + ' , ' + image + ' , ' + link);
      //   this.socialSharing.share(msg, subject, 'file:///'+image, link);
      // }
      return _createClass(EventPage, [{
        key: "shareUs",
        value: function shareUs(item) {
          var options = {
            message: 'Event: \n' + item.title,
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
        key: "doHTML",
        value: function doHTML(str, rem) {
          console.log(str);
          return str.replace(/<(?:.|\n)*?>/gm, '').replace(rem, '');
        }
      }, {
        key: "doDate",
        value: function doDate(d, t) {
          var str = d.slice(0, 10) + ' ' + t;
          console.log(str);
          return new Date(str);
        }
      }, {
        key: "createEvent",
        value: function createEvent(item) {
          var _this = this;
          var start = this.doDate(item.event_date, item.event_time);
          var end = this.doDate(item.event_date, item.event_time);
          this.calendar.createEventInteractively(item.introtext, item.event_venue, this.doHTML(item.content, item.introtext), new Date(start), new Date(end)).then(function (msg) {
            _this.presentAlert('Event Calendar', item.introtext + " has been added to your calendar.");
            console.log(msg);
          }, function (err) {
            console.log("Calendar fail " + err);
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title, msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
            var alert;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.n = 1;
                  return this.alertCtrl.create({
                    //cssClass: 'my-custom-class',
                    header: title,
                    //subHeader: 'Subtitle',
                    message: msg,
                    buttons: ['OK']
                  });
                case 1:
                  alert = _context.v;
                  _context.n = 2;
                  return alert.present();
                case 2:
                  return _context.a(2);
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.route.snapshot.data['special']) {
            this.item = this.route.snapshot.data['special'];
            this.headerImage = this.item.images.imageLarge ? this.item.images.imageLarge : 'assets/img/events_side.jpg';
          }
        }
      }]);
    }();
    EventPage.ctorParameters = function () {
      return [{
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"]
      }, {
        type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__["Calendar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };
    EventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event.page.scss */"./src/app/event/event.page.scss"))["default"]]
    })], EventPage);

    /***/
  })
}]);
//# sourceMappingURL=event-event-module-es5.js.map