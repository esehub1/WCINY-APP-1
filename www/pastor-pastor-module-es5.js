function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pastor-pastor-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pastor/pastor.page.html": (
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pastor/pastor.page.html ***!
    \*******************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_pastor_pastorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color=\"light\">\n    <div class=\"ion-text-left\">\n      <h5 style=\"font-weight: bold\">SCHEDULE APPOINTMENT</h5>\n    </div>\n  </ion-item>\n  <ion-list class=\"remove-top\">\n <!--   <img class=\"middlelogo\" src=\"assets/img/prayer.png\" alt=\"\">-->\n    <form [formGroup]=\"scheduleForm\">\n      <ion-item>\n        <ion-label position=\"stacked\" >First Name:</ion-label>\n        <ion-input formControlName=\"fname\" type=\"text\" [class.invalid]=\"!scheduleForm.controls.fname.valid && (scheduleForm.controls.fname.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.fname.valid  && (scheduleForm.controls.fname.dirty || submitAttempt)\">\n        <p>Please enter your first name.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" >Last Name:</ion-label>\n        <ion-input formControlName=\"lname\" type=\"text\" [class.invalid]=\"!scheduleForm.controls.lname.valid && (scheduleForm.controls.lname.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.lname.valid  && (scheduleForm.controls.lname.dirty || submitAttempt)\">\n        <p>Please enter your last name.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email:</ion-label>\n        <ion-input formControlName=\"email\" type=\"email\" [class.invalid]=\"!scheduleForm.controls.email.valid && (scheduleForm.controls.email.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.email.valid  && (scheduleForm.controls.email.dirty || submitAttempt)\">\n        <p>Please enter a valid email address.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" >Phone:</ion-label>\n        <ion-input formControlName=\"phone\" [brmasker]=\"{mask: '(000)-000-0000', type:'num', len:14}\" type=\"tel\" [class.invalid]=\"!scheduleForm.controls.phone.valid && (scheduleForm.controls.phone.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.phone.valid  && (scheduleForm.controls.phone.dirty || submitAttempt)\">\n        <p>Please enter your phone number.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Purpose / Information:</ion-label>\n        <ion-textarea autoGrow=\"true\" formControlName=\"comment\" [class.invalid]=\"!scheduleForm.controls.comment.valid && (scheduleForm.controls.comment.dirty || submitAttempt)\"></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.comment.valid  && (scheduleForm.controls.comment.dirty || submitAttempt)\">\n        <p>Please enter purpose / information.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Best Contact Date:</ion-label>\n        <ion-datetime formControlName=\"contact_date\" displayFormat=\"DD MMMM YYYY\" [class.invalid]=\"!scheduleForm.controls.contact_date.valid && (scheduleForm.controls.contact_date.dirty || submitAttempt)\"></ion-datetime>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.contact_date.valid  && (scheduleForm.controls.contact_date.dirty || submitAttempt)\">\n        <p>Please enter best contact date.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Best Contact Time:</ion-label>\n        <ion-datetime formControlName=\"contact_time\" displayFormat=\"hh:mm A\" [class.invalid]=\"!scheduleForm.controls.contact_time.valid && (scheduleForm.controls.contact_time.dirty || submitAttempt)\"></ion-datetime>\n      </ion-item>\n      <ion-item *ngIf=\"!scheduleForm.controls.contact_time.valid  && (scheduleForm.controls.contact_time.dirty || submitAttempt)\">\n        <p>Please enter best contact time.</p>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"winners-red\" expand=\"block\" slot=\"start\" (click)=\"save()\">\n              Submit\n            </ion-button>\n          </section>\n        </ion-col>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"light\" expand=\"block\" slot=\"start\" [routerLink]=\"['','socials']\" routerDirection=\"back\">\n              Cancel\n            </ion-button>\n          </section>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-list>\n\n</ion-content>\n\n";

    /***/
  }),
  /***/"./src/app/pastor/pastor-routing.module.ts": (
  /*!*************************************************!*\
    !*** ./src/app/pastor/pastor-routing.module.ts ***!
    \*************************************************/
  /*! exports provided: PastorPageRoutingModule */
  /***/
  function _src_app_pastor_pastorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PastorPageRoutingModule", function () {
      return PastorPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _pastor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pastor.page */"./src/app/pastor/pastor.page.ts");
    var routes = [{
      path: '',
      component: _pastor_page__WEBPACK_IMPORTED_MODULE_3__["PastorPage"]
    }];
    var PastorPageRoutingModule = /*#__PURE__*/_createClass(function PastorPageRoutingModule() {
      _classCallCheck(this, PastorPageRoutingModule);
    });
    PastorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PastorPageRoutingModule);

    /***/
  }),
  /***/"./src/app/pastor/pastor.module.ts": (
  /*!*****************************************!*\
    !*** ./src/app/pastor/pastor.module.ts ***!
    \*****************************************/
  /*! exports provided: PastorPageModule */
  /***/
  function _src_app_pastor_pastorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PastorPageModule", function () {
      return PastorPageModule;
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
    var _pastor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pastor-routing.module */"./src/app/pastor/pastor-routing.module.ts");
    /* harmony import */
    var _pastor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pastor.page */"./src/app/pastor/pastor.page.ts");
    /* harmony import */
    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */"./node_modules/br-mask/dist/index.js");
    var PastorPageModule = /*#__PURE__*/_createClass(function PastorPageModule() {
      _classCallCheck(this, PastorPageModule);
    });
    PastorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pastor_routing_module__WEBPACK_IMPORTED_MODULE_5__["PastorPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]],
      declarations: [_pastor_page__WEBPACK_IMPORTED_MODULE_6__["PastorPage"]]
    })], PastorPageModule);

    /***/
  }),
  /***/"./src/app/pastor/pastor.page.scss": (
  /*!*****************************************!*\
    !*** ./src/app/pastor/pastor.page.scss ***!
    \*****************************************/
  /*! exports provided: default */
  /***/
  function _src_app_pastor_pastorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3Rvci9wYXN0b3IucGFnZS5zY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/pastor/pastor.page.ts": (
  /*!***************************************!*\
    !*** ./src/app/pastor/pastor.page.ts ***!
    \***************************************/
  /*! exports provided: PastorPage */
  /***/
  function _src_app_pastor_pastorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PastorPage", function () {
      return PastorPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */"./src/app/services/data.service.ts");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var PastorPage = /*#__PURE__*/function () {
      function PastorPage(formBuilder, apiCall, toastCtrl) {
        _classCallCheck(this, PastorPage);
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.toastCtrl = toastCtrl;
        this.submitAttempt = false;
      }
      return _createClass(PastorPage, [{
        key: "save",
        value: function save() {
          var _this = this;
          this.submitAttempt = true;
          if (!this.scheduleForm.valid) {
            console.log("INVALID SCHEDULE FORM!");
          } else {
            console.log(this.scheduleForm.value);
            var postData = this.scheduleForm.value;
            postData.opt = 'pastor';
            // submit form details add addItem(userId)
            this.apiCall.sendData('post/nubia/save', postData, true).subscribe(function (data) {
              console.log(data);
              if (data['status'] === 'ko') {
                _this.presentToast('There was a problem with your submission: ' + data['error_description']);
              } else {
                _this.presentToast('Schedule Request successfully submitted');
              }
            }, function (err) {
              return _this.presentToast('There was an error with your Schedule request submission: ' + err);
            }, function () {
              return console.log("Schedule Request submission Completed");
            });
          }
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
            var toast;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.n = 1;
                  return this.toastCtrl.create({
                    message: msg,
                    duration: 3000,
                    position: 'middle'
                  });
                case 1:
                  toast = _context.v;
                  _context.n = 2;
                  return toast.present();
                case 2:
                  toast.onDidDismiss().then(function (val) {
                    console.log('Toast Dismissed: ' + val);
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
          this.scheduleForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            contact_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            contact_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
          });
        }
      }]);
    }();
    PastorPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };
    PastorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pastor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pastor.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pastor/pastor.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pastor.page.scss */"./src/app/pastor/pastor.page.scss"))["default"]]
    })], PastorPage);

    /***/
  })
}]);
//# sourceMappingURL=pastor-pastor-module-es5.js.map