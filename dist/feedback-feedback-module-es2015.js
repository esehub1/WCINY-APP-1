(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"winners-red\">\n    <ion-text>\n      <div class=\"ion-text-wrap ion-text-end ion-padding\">\n        WINNERS CHAPEL INT'L <br> NEW YORK\n      </div>\n    </ion-text>\n    <ion-buttons slot=\"start\" style=\"flex-flow: column\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button text=\"Back\" icon=\"caret-back\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"assets/img/logo22.png\" alt=\"\" slot=\"end\" width=\"70vw\" class=\"ion-padding-vertical ion-padding-end\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color=\"light\">\n    <div class=\"ion-text-left\">\n      <h5 style=\"font-weight: bold\">FEEDBACK FORM</h5>\n    </div>\n  </ion-item>\n  <ion-list class=\"remove-top\">\n<!--    <img class=\"middlelogo\" src=\"assets/img/prayer.png\" alt=\"\">-->\n    <form [formGroup]=\"feedbackForm\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\" >First Name:</ion-label>\n            <ion-input formControlName=\"firstname\" type=\"text\" [class.invalid]=\"!feedbackForm.controls.firstname.valid && (feedbackForm.controls.firstname.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"!feedbackForm.controls.firstname.valid  && (feedbackForm.controls.firstname.dirty || submitAttempt)\">\n            <p>Please enter your first name.</p>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\" >Last Name:</ion-label>\n            <ion-input formControlName=\"lastname\" type=\"text\" [class.invalid]=\"!feedbackForm.controls.lastname.valid && (feedbackForm.controls.lastname.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"!feedbackForm.controls.lastname.valid  && (feedbackForm.controls.lastname.dirty || submitAttempt)\">\n            <p>Please enter your last name.</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\">Email:</ion-label>\n            <ion-input formControlName=\"email\" type=\"email\" [class.invalid]=\"!feedbackForm.controls.email.valid && (feedbackForm.controls.email.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"!feedbackForm.controls.email.valid  && (feedbackForm.controls.email.dirty || submitAttempt)\">\n            <p>Please enter a valid email address.</p>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\" >Phone:</ion-label>\n            <ion-input formControlName=\"phone\" [brmasker]=\"{mask: '(000)-000-0000', type:'num', len:14}\" type=\"tel\" [class.invalid]=\"!feedbackForm.controls.phone.valid && (feedbackForm.controls.phone.dirty || submitAttempt)\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"!feedbackForm.controls.phone.valid  && (feedbackForm.controls.phone.dirty || submitAttempt)\">\n            <p>Please enter your phone number.</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-label position=\"stacked\" >Subject:</ion-label>\n        <ion-input formControlName=\"subject\" type=\"text\" [class.invalid]=\"!feedbackForm.controls.lastname.valid && (feedbackForm.controls.lastname.dirty || submitAttempt)\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!feedbackForm.controls.subject.valid  && (feedbackForm.controls.subject.dirty || submitAttempt)\">\n        <p>Please enter subject.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Message:</ion-label>\n        <ion-textarea autoGrow=\"true\" formControlName=\"message\" [class.invalid]=\"!feedbackForm.controls.message.valid && (feedbackForm.controls.message.dirty || submitAttempt)\"></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf=\"!feedbackForm.controls.message.valid  && (feedbackForm.controls.message.dirty || submitAttempt)\">\n        <p>Please enter your feedback message.</p>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"winners-red\" expand=\"block\" slot=\"start\" (click)=\"save()\">\n              Submit\n            </ion-button>\n          </section>\n        </ion-col>\n        <ion-col size=\"6\">\n          <section>\n            <ion-button color=\"light\" expand=\"block\" slot=\"start\" [routerLink]=\"['','tabs','contacts']\" routerDirection=\"back\">\n              Cancel\n            </ion-button>\n          </section>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/feedback/feedback-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/feedback/feedback-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeedbackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageRoutingModule", function() { return FeedbackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.page */ "./src/app/feedback/feedback.page.ts");




const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackPage"]
    }
];
let FeedbackPageRoutingModule = class FeedbackPageRoutingModule {
};
FeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedbackPageRoutingModule);



/***/ }),

/***/ "./src/app/feedback/feedback.module.ts":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback-routing.module */ "./src/app/feedback/feedback-routing.module.ts");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "./src/app/feedback/feedback.page.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");








let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
    })
], FeedbackPageModule);



/***/ }),

/***/ "./src/app/feedback/feedback.page.scss":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 0.8em;\n  color: #ea6153;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-label, .select-text {\n  margin-left: 10px;\n}\n\nion-input, ion-select, ion-textarea {\n  padding: 5px 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svRDpcXHdjaW55YXBwMjAyNVxcd2Npbnkvc3JjXFxhcHBcXGZlZWRiYWNrXFxmZWVkYmFjay5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUVFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZWE2MTUzO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1sYWJlbCwgLnNlbGVjdC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pbnB1dCwgaW9uLXNlbGVjdCwgaW9uLXRleHRhcmVhIHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWE2MTUzO1xufVxuc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5cbnNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbi5mdWxsLXdpZHRoID4gaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuIiwicCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZWE2MTUzO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1sYWJlbCwgLnNlbGVjdC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pbnB1dCwgaW9uLXNlbGVjdCwgaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNjE1Mztcbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5cbnNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbi5mdWxsLXdpZHRoID4gaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/feedback/feedback.page.ts":
/*!*******************************************!*\
  !*** ./src/app/feedback/feedback.page.ts ***!
  \*******************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let FeedbackPage = class FeedbackPage {
    constructor(apiCall, toastCtrl, formBuilder) {
        this.apiCall = apiCall;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
    }
    save() {
        this.submitAttempt = true;
        if (!this.feedbackForm.valid) {
            console.log("INVALID FEEDBACK FORM!");
        }
        else {
            console.log(this.feedbackForm.value);
            let postData = this.feedbackForm.value;
            postData.opt = 'feedback';
            /*      this.presentToast('Prayer request successfully submitted');*/
            // submit form details add addItem(userId)
            this.apiCall.sendData('post/nubia/save', postData, true).subscribe(data => {
                console.log(data);
                if (data['status'] === 'ko') {
                    this.presentToast('There was a problem with your submission: ' + data['error_description']);
                }
                else {
                    this.presentToast('Feedback successfully submitted');
                    this.feedbackForm.reset();
                }
            }, err => this.presentToast('There was an error with your Prayer request submission: ' + err), () => console.log("Feedback submission Completed"));
        }
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            toast.onDidDismiss().then((val) => {
                console.log('Toast Dismissed');
            });
        });
    }
    ngOnInit() {
        let UserId = 0; //localStorage.getItem("ProfileId");
        this.feedbackForm = this.formBuilder.group({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    }
};
FeedbackPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feedback.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feedback.page.scss */ "./src/app/feedback/feedback.page.scss")).default]
    })
], FeedbackPage);



/***/ })

}]);
//# sourceMappingURL=feedback-feedback-module-es2015.js.map