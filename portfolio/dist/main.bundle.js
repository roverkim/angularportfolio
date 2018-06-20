webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/apicalls.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApicallsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ApicallsService = /** @class */ (function () {
    function ApicallsService(http) {
        this.http = http;
        this.heroesUrl = 'https://api.github.com/users/roverkim/repos?sort=created'; // URL to web api
    }
    /** GET heroes from the server */
    ApicallsService.prototype.getGithubLinks = function () {
        return this.http.get(this.heroesUrl);
    };
    ApicallsService.prototype.submitEmail = function (emailObject) {
        return this.http.post('/email', emailObject);
    };
    ApicallsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApicallsService);
    return ApicallsService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    color: white\n  }\n\n  25% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    color: yellow;\n  }\n\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    color: wheat;\n  }\n\n  75% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n    color: yellow;\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    color: white;\n  }\n\n}\n\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    color: white\n  }\n\n  25% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    color: yellow;\n  }\n\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    color: wheat;\n  }\n\n  75% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n    color: yellow;\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    color: white;\n  }\n\n}\n\n\n.fa-cog {\n  -webkit-animation: rotate 5s infinite ease;\n          animation: rotate 5s infinite ease;\n  margin:0 5px 0 5px;\n  font-size: 1rem;\n}\n\n\n.section_break {\n  position: relative;\n  text-align: center;\n  text-align: center;\n  background-color: #282E34;\n  padding-bottom: 20px;\n  padding-top: 20px;\n}\n\n\n.section_break h2 {\n  font-size: 2.5rem;\n  margin: 10px;\n  color: yellow;\n}\n\n\nh2 + p {\n  font-size: 18px;\n  margin: 20px;\n}\n\n\n.intro {\n  /* color: #777;\n  background-color: white; */\n}\n\n\n.portfolio {\n  /* background-color: #282E34; */\n}\n\n\n.contact {\n  /* color: #777;\n  background-color: white; */\n}\n\n\n.footer {\n  background-color: #282E34;\n}\n\n\n.footer .container {\n  text-align: center;\n  height: 5vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n\n.footer .container .footer_text {\n  font-size: 1rem;\n  color: wheat;\n}\n\n\n@media screen and (max-width: 640px) {\n  .skills_wrapper {\n    padding-top: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-load-screen></app-load-screen>\n<app-introsection></app-introsection>\n\n<span *ngIf=\"showContent\">\n\n  <div class=\"intro section_break\">\n    <h2>Introduction</h2>\n    <p style=\"color:white; line-height: 30px;\">I am a junior fullstack developer who specializes in using technologies such as Mean and Mern stacks to create web applications.\n    </p>\n  </div>\n\n  <app-skills></app-skills>\n\n  <div class=\"section_break portfolio \">\n    <div>\n      <h2 style-=\"color:white;\">Portfolio</h2>\n    </div>\n  </div>\n\n  <app-porfoliosection></app-porfoliosection>\n\n  <div class=\"section_break contact\">\n    <div>\n      <h2>Contact Me</h2>\n    </div>\n  </div>\n\n  <app-contactsection></app-contactsection>\n\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <span class=\"footer_text\">\n        <span style='color: white;'>Angular 5</span>\n        <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n        <span style='color: white;'>Ryan Kim</span>\n      </span>\n</div>\n</footer>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showContent = false;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#loader-wrapper').toggleClass('loaded');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#loader').toggleClass('loaded');
        }, 2000);
        setTimeout(function () { return _this.showContent = true; }, 9500);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__load_screen_load_screen_component__ = __webpack_require__("../../../../../src/app/load-screen/load-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__introsection_introsection_component__ = __webpack_require__("../../../../../src/app/introsection/introsection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__porfoliosection_porfoliosection_component__ = __webpack_require__("../../../../../src/app/porfoliosection/porfoliosection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contactsection_contactsection_component__ = __webpack_require__("../../../../../src/app/contactsection/contactsection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__apicalls_service__ = __webpack_require__("../../../../../src/app/apicalls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__download_button_download_button_component__ = __webpack_require__("../../../../../src/app/download-button/download-button.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { AppRoutingModule }     from './app-routing.module';











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__load_screen_load_screen_component__["a" /* LoadScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_9__introsection_introsection_component__["a" /* IntrosectionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__porfoliosection_porfoliosection_component__["a" /* PorfoliosectionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contactsection_contactsection_component__["a" /* ContactsectionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__download_button_download_button_component__["a" /* DownloadButtonComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                // AppRoutingModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__apicalls_service__["a" /* ApicallsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contactsection/contactsection.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    color: black\n  }\n\n  25% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    color: red;\n  }\n\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    color: darkblue;\n  }\n\n  75% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n    color: maroon;\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    color: black;\n  }\n\n}\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    color: black\n  }\n\n  25% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    color: red;\n  }\n\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    color: darkblue;\n  }\n\n  75% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n    color: maroon;\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    color: black;\n  }\n\n}\n\n.bgimg-3 {\n  position: relative;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  width: 100%\n}\n\n.bgimg-3 {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/connect.jpg")) + ");\n  min-height: 400px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.container {\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* html {\n  background: radial-gradient(ellipse at top, #40485a 0%, #282e3a 60%);\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n} */\n\n.envelope-wrapper {\n  position: relative;\n  display: inline-block;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  top: -10vh;\n}\n\n.envelope {\n  margin: 0;\n  position: relative;\n  z-index: 0;\n  display: inline-block;\n  -webkit-box-shadow: 0 150px 90px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 150px 90px 0 rgba(0, 0, 0, 0.3);\n}\n\n.envelope-top {\n  width: 0;\n  height: 0;\n  z-index: 0;\n  position: relative;\n  -webkit-transform-origin: top;\n  -webkit-transform: translate(0px, 0px) scale(1) rotateX(0deg);\n  -moz-transition: ease-in 0.5s forwards 0.4s, z-index 1s ease-out 0.5s;\n  -o-transition: ease-in 0.5s forwards 0.4s, z-index 1s ease-out 0.5s;\n  -webkit-transition: ease-in 0.5s forwards, z-index 1s ease-out;\n  -webkit-transition-delay: 0.4s, 0.5s;\n  -webkit-transition: ease-in 0.5s forwards 0.4s, z-index 1s ease-out 0.5s;\n  transition: ease-in 0.5s forwards 0.4s, z-index 1s ease-out 0.5s;\n  margin-top: 7em;\n  border-style: solid;\n  z-index: 3;\n  border-width: 7em 10em 0 10em;\n  border-color: #256a98 transparent transparent  transparent;\n}\n\n.active .envelope-top {\n  z-index: 0;\n  -moz-transition: ease-in 0.5s forwards 0s, z-index 1s ease-in-out 0.5s;\n  -o-transition: ease-in 0.5s forwards 0s, z-index 1s ease-in-out 0.5s;\n  -webkit-transition: ease-in 0.5s forwards, z-index 1s ease-in-out;\n  -webkit-transition-delay: 0s, 0.5s;\n  -webkit-transition: ease-in 0.5s forwards 0s, z-index 1s ease-in-out 0.5s;\n  transition: ease-in 0.5s forwards 0s, z-index 1s ease-in-out 0.5s;\n  -webkit-transform-origin: top;\n  -webkit-transform: translate(0px, 0px) scale(1) rotateX(-180deg);\n}\n\n.envelope:after,\n.envelope:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 7em;\n  z-index: 4;\n  border-style: solid;\n}\n\n.envelope:after {\n  width: 0;\n  height: 0;\n  right: 0;\n  border-width: 6.2em 10em 6.2em 0;\n  border-color: transparent #2a7fb5 transparent transparent;\n}\n\n.envelope:before {\n  width: 210px;\n  height: 180px;\n  border-width: 12.4em 0 0 20.1em;\n  border-color: transparent transparent transparent #3596da;\n}\n\n/* .envelope.active:after, .envelope.active:before {\n  z-index: 3;\n} */\n\n.active .card {\n  top: -10px;\n  -moz-transition: top 0.5s ease-in-out 0.5s;\n  -o-transition: top 0.5s ease-in-out 0.5s;\n  -webkit-transition: top 0.5s ease-in-out;\n  -webkit-transition-delay: 0.5s;\n  -webkit-transition: top 0.5s ease-in-out 0.5s;\n  transition: top 0.5s ease-in-out 0.5s;\n}\n\n.active .card.card_click{\n  z-index: 10;\n}\n\n.card {\n  width: 280px;\n  height: 180px;\n  position: absolute;\n  top: 109px;\n  left: 18px;\n  z-index: 2;\n  background: white;\n  padding: 10px;\n  border-radius: 5px;\n  -webkit-transition: top 0.5s ease-in-out;\n  transition: top 0.5s ease-in-out;\n  text-align: center;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #919499;\n}\n\n.submit {\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n\n.submit:hover {\n  background-color: red;\n  border: 1px black solid;\n\n}\n\n.submit.active {\n  z-index: 99999999;\n}\n\n.email-button {\n  background-color: #E74C3C;\n  border: 1px solid #b24c45;\n  color: white;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.5em;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: .75em .5em;\n  line-height: 1em;\n  display: inline-block;\n  cursor: pointer;\n  position: absolute;\n  border-radius: 0px 4px 4px 0;\n  -webkit-box-shadow: 1px 2px #b24c45;\n  box-shadow: 1px 2px #b24c45;\n  -webkit-transition: background-color 200ms;\n  transition: background-color 200ms;\n  bottom: 0em;\n  left: -.5em;\n}\n\n.email-button:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -15px;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  left: 0;\n  border-width: 0 1px 14px 11px;\n  border-color: transparent transparent #a0443e transparent;\n}\n\n.email-button:hover {\n  background-color: #B74C3B;\n}\n\n::-webkit-input-placeholder {\n  color: #a1a1a1;\n}\n\n::-moz-placeholder {\n  color: #a1a1a1;\n}\n\n:-ms-input-placeholder {\n  color: #a1a1a1;\n}\n\n.name-input, textarea {\n  font-size: 1em;\n  width: 100%;\n  display: block;\n  margin-bottom: 4px;\n  border: none;\n  background-color: #dcdcdc;\n  position: relative;\n  display: block;\n  height: 3em;\n  padding: 15px;\n  color: grey;\n  border-radius: 0px;\n}\n\ntextarea {\n  height: 100%;\n  max-height: 60px;\n  overflow: -moz-scrollbars-none;\n}\n\nbody, .email-button {\n  background-image: url(data:image/png;base64,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);\n}\n\n.button {\n  margin :auto;\n  display:block;\n  color: #fff;\n  border:2px solid #fff;\n  border-radius: 20px;\n  padding: 8px 20px;\n  cursor:pointer;\n}\n\nh1 {\n  font-family:sans-serif;\n  color: #fff;\n  text-align:center;\n}\n\n#modal_text {\n  display: inline-block !important;\n}\n\n#modal_icon {\n  display: inline-block !important;\n  -webkit-animation: rotate 4s infinite ease !important;\n          animation: rotate 4s infinite ease !important;\n}\n\n#modal_icon_check {\n  display: inline-block !important;\n}\n\n@media screen and (max-width: 1200px) {\n  .envelope-wrapper {\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .envelope-wrapper {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactsection/contactsection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg-3\" id=\"contact_page\">\n  <!-- <div class=\"caption\">\n  </div> -->\n  <div class=\"contact_container\">\n    <div class=\"envelope-wrapper\">\n      <div class=\"envelope\">\n        <div class=\"envelope-top\"></div>\n        <div class=\"card\">\n          <form>\n            <input [(ngModel)]=\"emailMessage.email\" class=\"name-input\" placeholder=\"Your Email\" name=\"author\" type=\"email\" value=\"emailMessage.email\" #emailId  (click)=\"remove('email');\">\n            <textarea [(ngModel)]=\"emailMessage.message\"  value=\"emailMessage.message\" class=\"comment message-content\" name=\"comment\" placeholder=\"Your Message\" aria-required=\"true\" #messageId (click)=\"remove('message');\"></textarea>\n            <input class=\"button submit\" type=\"submit\" (click)=\"add(emailId.value, messageId.value);\">\n          </form>\n        </div>\n        </div>\n      <span class=\"email-button\">email me </span>\n    </div>\n  </div>\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"statusModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size: 2.5rem;\">Message Status</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p id=\"modal_text\" style=\"margin: 10px; font-size: 2rem;\">\n            {{emailMessage.modal}}\n          </p>\n          <p id=\"modal_icon\" style=\"font-size: 2rem;\">\n          </p>\n          <p id=\"modal_icon_check\" style=\"font-size: 2rem;\">\n          </p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contactsection/contactsection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apicalls_service__ = __webpack_require__("../../../../../src/app/apicalls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
var ContactsectionComponent = /** @class */ (function () {
    function ContactsectionComponent(apicalls) {
        this.apicalls = apicalls;
        this.emailMessage = {
            email: 'Your Email',
            message: 'Your Message',
            modal: ''
        };
    }
    ContactsectionComponent.prototype.ngOnInit = function () {
        $(".email-button").click(function () {
            $(".envelope").toggleClass("active");
            setTimeout(function () { return $('.card').toggleClass('card_click'); }, 1200);
            $('.submit').toggleClass("active");
        });
        $('.submit').on('click', function (e) {
            e.preventDefault();
            // $('.card').toggleClass('card_click')
            // $(".envelope").toggleClass("active");
        });
    };
    ContactsectionComponent.prototype.remove = function (condition) {
        if (condition == "email") {
            this.emailMessage.email = "";
        }
        else if (condition == "message") {
            if (this.emailMessage.message == "A message is required" || this.emailMessage.message == "Your Message") {
                this.emailMessage.message = "";
            }
        }
    };
    ContactsectionComponent.prototype.add = function (email, message) {
        var _this = this;
        if (email && message) {
            //console.log(email);
            var emailValidator = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
            var condition = emailValidator.test(email);
            //console.log(condition);
            if (condition) {
                //console.log('Email Valid');
                this.emailMessage.modal = 'Email Sending ...';
                $('#modal_icon').html('<i class="fa fa-spinner" aria-hidden="true"></i>');
                $('#statusModal').modal('show');
                this.apicalls.submitEmail({ email: email, message: message }).subscribe(function (response) {
                    if (response.status == 'passed') {
                        //console.log('Email Sent');
                        _this.emailMessage.modal = 'Email Sent!';
                        $('#modal_icon').html('');
                        $('#modal_icon_check').html('<i class="fa fa-check" aria-hidden="true"></i>');
                        $('.card').toggleClass('card_click');
                        $(".envelope").toggleClass("active");
                        setTimeout(function () { return $('#statusModal').modal('hide'); }, 1500);
                    }
                    else {
                        _this.emailMessage.modal = "Email Failed to Send. Please click on the submit button once more.";
                        setTimeout(function () { return $('#statusModal').modal('hide'); }, 1500);
                    }
                });
            }
            else {
                //console.log('Invalid Email')
                this.emailMessage.email = "Please Enter a Valid Email";
            }
        }
        if (email == "") {
            this.emailMessage.email = "Please Enter an Email";
        }
        if (message == "") {
            this.emailMessage.message = "A message is required";
        }
    };
    ContactsectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contactsection',
            template: __webpack_require__("../../../../../src/app/contactsection/contactsection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contactsection/contactsection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__apicalls_service__["a" /* ApicallsService */]])
    ], ContactsectionComponent);
    return ContactsectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/download-button/download-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  overflow: hidden;\n  background-color: #313636;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nsvg {\n  margin-bottom: 80px;\n}\n\n.btn {\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.text {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-font-smoothing: subpixel-antialiased;\n  text-rendering: optimizeLegibility;\n}\n\n.subCircle {\n  pointer-events: none;\n}\n\n.strokeW {\n  -webkit-animation: strokeW .6s forwards;\n          animation: strokeW .6s forwards;\n}\n\n@-webkit-keyframes strokeW {\n  to {\n    stroke-width: 1.16;\n  }\n}\n\n@keyframes strokeW {\n  to {\n    stroke-width: 1.16;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/download-button/download-button.component.html":
/***/ (function(module, exports) {

module.exports = "<svg viewBox='0 0 100 50' width='620' height='310' fill='none'>\n  <circle cx='20'cy='35' r='8.5' fill='#00cffc' class='mainCircle'></circle>\n  <circle cx='20' cy='35' r='8.05' stroke='#00cffc' stroke-width='.9' fill='url(#gradient)' class='mainCircleFill'></circle>\n  <rect x='17.5' y='32.5' width='5' height='5' stroke='none' fill='#00cffc' class='rect'></rect>\n  <path d='M20,39 l3.5,-3.5 l0,0 M20,39 l-3.5,-3.5 l0,0 M20,39 l0,-7.5' stroke='#fff' stroke-linecap='round' stroke-width='.8' class='arrow'></path>\n  <text x='55' y='36.5' fill='#fff' text-anchor='middle' font-size='5.5' font-family='Roboto' letter-spacing='.2' class='text'>download</text>\n  <path d='M50,25 h30 a10,10 0 0,1 10,10 a10,10 0 0,1 -10,10 s-30,0 -60,0 a10,10 0 0,1 -10,-10 a10,10 0 0,1 10,-10 h30' stroke='#00cffc' stroke-width='.7' fill='transparent' class='btn'></path>\n  <circle cx='20' cy='35' r='7.9' fill='#fff' fill-opacity='0' stroke='#fff' stroke-width='1.6' stroke-opacity='0' class='subCircle'></circle>\n  <circle cx='50' cy='26' r='0' fill='#fff' class='dot'></circle>\n  <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>\n    <stop offset='98%' class='gradient' stop-color='transparent'/>\n    <stop offset='98%' class='gradient' stop-color='#00afd3'/>\n  </linearGradient>\n</svg>\n"

/***/ }),

/***/ "../../../../../src/app/download-button/download-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__("../../../../gsap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_snapsvg_cjs__ = __webpack_require__("../../../../snapsvg-cjs/dist/snap.svg-cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_snapsvg_cjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_snapsvg_cjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DownloadButtonComponent = /** @class */ (function () {
    function DownloadButtonComponent() {
    }
    DownloadButtonComponent.prototype.ngOnInit = function () {
        //console.log(CustomEase);
        var tl, downloading = false, points = [], btn = document.querySelector('.btn'), dot = document.querySelector('.dot'), text = document.querySelector('.text'), mainCirc = document.querySelector('.mainCircle'), subCirc = document.querySelector('.subCircle'), mainCircFill = document.querySelector('.mainCircleFill'), arrow = document.querySelector('.arrow'), rect = document.querySelector('.rect');
        __WEBPACK_IMPORTED_MODULE_1_gsap__["i" /* TweenLite */].set(rect, { transformOrigin: '50% 50%', rotation: 45 });
        btn.addEventListener('click', animation);
        function animation() {
            //console.log('clicked')
            if (downloading)
                return;
            downloading = !downloading;
            var downloadTime = Math.random() * .5 + .7;
            tl = new __WEBPACK_IMPORTED_MODULE_1_gsap__["h" /* TimelineLite */]({ onComplete: restart });
            tl.restart().play()
                .to(arrow, .35, { y: 2.5, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["b" /* CustomEase */].create('custom', 'M0,0,C0.042,0.14,0.374,1,0.5,1,0.64,1,0.964,0.11,1,0') }, 'click')
                .to(text, .3, { svgOrigin: '55% 35%', scale: .77, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["b" /* CustomEase */].create('custom', 'M0,0,C0.042,0.14,0.374,1,0.5,1,0.64,1,0.964,0.11,1,0') }, 'click+=.05')
                .set(subCirc, { fillOpacity: 1, strokeOpacity: 1 }, 'squeeze-=.3')
                .to(subCirc, .35, { fillOpacity: 0, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["d" /* Power1 */].easeInOut }, 'squeeze-=.3')
                .to(subCirc, .45, { attr: { r: 13 }, strokeOpacity: 0, className: '+=strokeW', ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["c" /* Power0 */].easeNone }, 'squeeze-=.3')
                .to(btn, .7, { attr: { d: 'M50,25 h0 a10,10 0 0,1 10,10 a10,10 0 0,1 -10,10 s0,0 0,0  a10,10 0 0,1 -10,-10 a10,10 0 0,1 10,-10 h0' }, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["f" /* Sine */].easeOut }, 'squeeze')
                .to([mainCirc, mainCircFill, rect, arrow], .7, { x: 30, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["f" /* Sine */].easeOut }, 'squeeze')
                .to(rect, .7, { fill: '#fff', rotation: 270, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["f" /* Sine */].easeOut }, 'squeeze')
                .to(text, .3, { autoAlpha: 0, y: 7, onComplete: changeText }, 'squeeze')
                .to(arrow, .7, { attr: { d: 'M20,39 l3.5,-3.5 l-3.5,-3.5 M20,39 l-3.5,-3.5 l3.5,-3.5 M20,39 l0,0' }, transformOrigin: '50% 50%', rotation: 225, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["f" /* Sine */].easeOut }, 'squeeze')
                .to(dot, .4, { attr: { r: 1.5 }, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["a" /* Back */].easeOut.config(7) })
                .set(subCirc, { drawSVG: 0, strokeOpacity: 1, transformOrigin: '50% 50%', x: 30, rotation: -90, attr: { r: 9.07 } })
                .to(subCirc, downloadTime, { drawSVG: '102%', ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["e" /* Power2 */].easeIn }, 'fill+=.02')
                .to(dot, downloadTime, { bezier: { type: 'cubic', values: points }, attr: { r: 2.7 }, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["e" /* Power2 */].easeIn }, 'fill')
                .to('.gradient', downloadTime, { attr: { offset: '0%' }, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["e" /* Power2 */].easeIn }, 'fill')
                .to(dot, .44, { fill: '#02fc86', y: -22, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["d" /* Power1 */].easeOut }, 'stretch-=.01')
                .to(dot, .27, { transformOrigin: '50% 50%', scaleX: .5, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["g" /* SlowMo */].ease.config(0.1, 2, true) }, 'stretch+=.04')
                .to(dot, .3, { scaleY: .6, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["g" /* SlowMo */].ease.config(0.1, 2, true) }, 'stretch+=.31')
                .to(dot, .44, { scaleX: .4, y: 22, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["e" /* Power2 */].easeIn }, 'stretch+=.45')
                .to([mainCirc, subCirc, arrow, rect, mainCircFill], .33, { opacity: 0, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["e" /* Power2 */].easeOut }, 'stretch+=.2')
                .to(btn, .4, { attr: { d: 'M50,25 h20 a10,10 0 0,1 10,10 a10,10 0 0,1 -10,10 s-20,0 -40,0 a10,10 0 0,1 -10,-10 a10,10 0 0,1 10,-10 h20' }, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["d" /* Power1 */].easeOut }, 'stretch+=.2')
                .set(dot, { opacity: 0 }, 'stretch+=.875')
                .to(btn, .01, { stroke: '#02fc86', ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["e" /* Power2 */].easeIn }, 'stretch+=.87')
                .to(btn, .3, {
                attr: { d: 'M50,25 h20 a10,10 0 0,1 10,10 a12,12 0 0,1 -10,10.5 s-20,6 -40,0 a12,12 0 0,1 -10,-10.5 a10,10 0 0,1 10,-10 h20' },
                ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["b" /* CustomEase */].create('custom', 'M0,0 C0.046,0.062 0.018,1 0.286,1 0.532,1 0.489,-0.206 0.734,-0.206 0.784,-0.206 0.832,-0.174 1,0')
            }, 'stretch+=.869')
                .to(text, .45, { autoAlpha: 1, y: 0, ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["a" /* Back */].easeOut.config(2.5) }, 'stretch+=.855');
        }
        ;
        function restart() {
            // setTimeout(() => {
            //   tl.seek(0).pause();
            //   text.textContent = 'download';
            //   TweenLite.set(text, { x: 0 });
            //   downloading = false;
            // }, 2000);
            var link = document.createElement('a');
            link.setAttribute('href', '../../assets/ryankimresume.pdf');
            link.setAttribute('download', 'Ryan_Kim_Resume.pdf');
            link.setAttribute('target', '_blank');
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        ;
        function changeText() {
            text.textContent = 'Downloaded';
            __WEBPACK_IMPORTED_MODULE_1_gsap__["i" /* TweenLite */].set(text, { x: -5 });
        }
        ;
        (function () {
            var data = Snap.path.toCubic('M0,0 a9,9 0 0,1 0,18 a9,9 0 0,1 0,-18'), dataLen = data.length;
            for (var i = 0; i < dataLen; i++) {
                var seg = data[i];
                if (seg[0] === 'M') {
                    var point = { x: '', y: '' };
                    point.x = seg[1];
                    point.y = seg[2];
                    points.push(point);
                }
                else {
                    for (var i_1 = 1; i_1 < 6; i_1 += 2) {
                        var point = { x: '', y: '' };
                        point.x = seg[i_1];
                        point.y = seg[i_1 + 1];
                        points.push(point);
                    }
                }
            }
        })();
    };
    DownloadButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-download-button',
            template: __webpack_require__("../../../../../src/app/download-button/download-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/download-button/download-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadButtonComponent);
    return DownloadButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/introsection/introsection.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bgimg-1 {\n  position: relative;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  width: 100%\n}\n\n.bgimg-1 {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/intro2.jpg")) + ");\n  min-height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.typist {\n  color: darkslategrey;\n  font-size: 5rem;\n  margin: 10px;\n}\n\n.arrows {\n  width: 60px;\n  height: 72px;\n  position: absolute;\n  display:none;\n  bottom: 20%;\n}\n\n.arrows path {\n  stroke: black;\n  fill: transparent;\n  stroke-width: 2.5px;\n  animation: arrow 2s infinite;\n  -webkit-animation: arrow 2s infinite;\n}\n\n@keyframes arrow {\n  0% {\n    opacity: 0\n  }\n  40% {\n    opacity: 1\n  }\n  80% {\n    opacity: 0\n  }\n  100% {\n    opacity: 0\n  }\n}\n\n@-webkit-keyframes arrow\n/*Safari and Chrome*/\n\n  {\n  0% {\n    opacity: 0\n  }\n  40% {\n    opacity: 1\n  }\n  80% {\n    opacity: 0\n  }\n  100% {\n    opacity: 0\n  }\n}\n\n.arrows path.a1 {\n  animation-delay: -1s;\n  -webkit-animation-delay: -1s;\n  /* Safari 和 Chrome */\n}\n\n.arrows path.a2 {\n  animation-delay: -0.5s;\n  -webkit-animation-delay: -0.5s;\n  /* Safari 和 Chrome */\n}\n\n.arrows path.a3 {\n  animation-delay: 0s;\n  -webkit-animation-delay: 0s;\n  /* Safari 和 Chrome */\n}\n\n@media screen and (max-width: 1200px) {\n  .typist {\n    font-size: 3rem;\n  }\n  .arrows {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .typist {\n    font-size: 2rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/introsection/introsection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg-1\">\n  <app-nav-bar></app-nav-bar>\n    <div class=\"caption\">\n    <span class=\"border\"><p class=\"typist\"></p></span>\n  </div>\n  <svg class=\"arrows\">\n    <path class=\"a1\" d=\"M0 0 L30 32 L60 0\"></path>\n    <path class=\"a2\" d=\"M0 20 L30 52 L60 20\"></path>\n    <path class=\"a3\" d=\"M0 40 L30 72 L60 40\"></path>\n  </svg>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/introsection/introsection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntrosectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntrosectionComponent = /** @class */ (function () {
    function IntrosectionComponent() {
    }
    IntrosectionComponent.prototype.ngOnInit = function () {
    };
    IntrosectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-introsection',
            template: __webpack_require__("../../../../../src/app/introsection/introsection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/introsection/introsection.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntrosectionComponent);
    return IntrosectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/load-screen/load-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    /* Chrome, Opera 15+, Safari 3.1+ */\n    /* IE 9 */\n    transform: rotate(0deg);\n    /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    /* Chrome, Opera 15+, Safari 3.1+ */\n    /* IE 9 */\n    transform: rotate(360deg);\n    /* Firefox 16+, IE 10+, Opera */\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    /* Chrome, Opera 15+, Safari 3.1+ */\n    /* IE 9 */\n    transform: rotate(0deg);\n    /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    /* Chrome, Opera 15+, Safari 3.1+ */\n    /* IE 9 */\n    transform: rotate(360deg);\n    /* Firefox 16+, IE 10+, Opera */\n  }\n}\n\n#loader-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n\n#loader {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 2s linear infinite;\n  /* Chrome, Firefox 16+, IE 10+, Opera */\n  z-index: 1001;\n}\n\n#loader:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #e74c3c;\n  -webkit-animation: spin 3s linear infinite;\n  /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 3s linear infinite;\n  /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n#loader:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #f9c922;\n  -webkit-animation: spin 1.5s linear infinite;\n  /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1.5s linear infinite;\n  /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n#loader-wrapper .loader-section {\n  position: fixed;\n  top: 0;\n  width: 51%;\n  height: 100%;\n  background: #222222;\n  z-index: 1000;\n  -webkit-transform: translateX(0);\n  /* Chrome, Opera 15+, Safari 3.1+ */\n  /* IE 9 */\n  transform: translateX(0);\n  /* Firefox 16+, IE 10+, Opera */\n}\n\n#loader-wrapper .loader-section.section-left {\n  left: 0;\n}\n\n#loader-wrapper .loader-section.section-right {\n  right: 0;\n}\n\n/* Loaded */\n\n#loader-wrapper.loaded .loader-section.section-left {\n  -webkit-transform: translateX(-100%);\n  /* Chrome, Opera 15+, Safari 3.1+ */\n  /* IE 9 */\n  transform: translateX(-100%);\n  /* Firefox 16+, IE 10+, Opera */\n  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n#loader-wrapper.loaded .loader-section.section-right {\n  -webkit-transform: translateX(100%);\n  /* Chrome, Opera 15+, Safari 3.1+ */\n  /* IE 9 */\n  transform: translateX(100%);\n  /* Firefox 16+, IE 10+, Opera */\n  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n#loader.loaded {\n  opacity: 0;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n#loader-wrapper.loaded {\n  visibility: hidden;\n  -webkit-transform: translateY(-100%);\n  /* Chrome, Opera 15+, Safari 3.1+ */\n  /* IE 9 */\n  transform: translateY(-100%);\n  /* Firefox 16+, IE 10+, Opera */\n  -webkit-transition: all 0.3s 1s ease-out;\n  transition: all 0.3s 1s ease-out;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/load-screen/load-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loader-wrapper\">\n  <div id=\"loader\"></div>\n  <div class=\"loader-section section-left\"></div>\n  <div class=\"loader-section section-right\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/load-screen/load-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadScreenComponent = /** @class */ (function () {
    function LoadScreenComponent() {
    }
    LoadScreenComponent.prototype.ngOnInit = function () {
    };
    LoadScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-load-screen',
            template: __webpack_require__("../../../../../src/app/load-screen/load-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/load-screen/load-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadScreenComponent);
    return LoadScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header_menu {\n  position: fixed;\n  top: 5px;\n  right: 0px;\n  color: grey;\n  font-size: 4rem;\n  z-index: 20;\n  width: 100px;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.fa-bars:hover , .fa-bars.menuActive:hover {\n  color: yellow;\n}\n\n.bar_hover:hover {\n  color: yellow;\n}\n\n.fa-bars {\n  -webkit-transition: color 0.5s ease-in-out,\n  -webkit-transform 0.5s ease-in-out;\n  transition: color 0.5s ease-in-out,\n  -webkit-transform 0.5s ease-in-out;\n  transition: color 0.5s ease-in-out,\n  transform 0.5s ease-in-out;\n  transition: color 0.5s ease-in-out,\n  transform 0.5s ease-in-out,\n  -webkit-transform 0.5s ease-in-out;\n}\n\n.fa-bars.menuActive {\n  color: white;\n  -webkit-transform: rotateZ(90deg);\n  transform: rotateZ(90deg);\n}\n\n.nav {\n  z-index: 10;\n  width: calc(100vw/3);\n  height: 100%;\n  position: fixed;\n  top: 0;\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/nav3.jpg")) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  visibility: hidden;\n  /* This trasform moves the drawer off canvas. */\n  -webkit-transform: translate(calc(-100vw/3), 0);\n  transform: translate((-100vw/3), 0);\n  /* Optionally, we animate the drawer. */\n  -webkit-transition: visibility 0.5s ease, -webkit-transform 0.5s ease;\n  transition: visibility 0.5s ease, -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease, visibility 0.5s ease;\n  transition: transform 0.5s ease, visibility 0.5s ease, -webkit-transform 0.5s ease;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  opacity: 0.9;\n}\n\n.nav.open {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n  visibility: visible;\n}\n\n.nav__item {\n  display: list-item;\n  width: 100%;\n  text-align: left;\n  font-size: 2rem;\n  text-align: center;\n  border: none;\n  padding: 0;\n  margin: 40px auto 40px auto;\n  max-width: 30%;\n}\n\n.nav__item:hover a {\n  color: yellow;\n  -webkit-text-decoration-line: none !important;\n          text-decoration-line: none !important;\n}\n\n.nav__item a {\n  color: white;\n  padding: 10px;\n  -webkit-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.nav__list {\n  list-style: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 13;\n  margin: 0;\n  padding: 0;\n}\n\n.logo {\n  display: inline-block;\n  max-width: 50px;\n  padding: 10px;\n  float: left;\n}\n\n.logoText {\n  display: inline-block;\n  clear: both;\n}\n\n#particles-js {\n  width: 100% !important;\n  height: 100% !important;\n  z-index: 11;\n}\n\n.particles-js-canvas-el {\n  height: 100%;\n  width: 100%;\n  z-index: 12;\n}\n\n@media screen and (max-width: 1200px) {\n  .fa-bars {\n    font-size: 2.5rem;\n  }\n  .nav {\n    width: 100vw;\n    -webkit-transform: translate(-100vw);\n    transform: translate(-100vw);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"menu\" class=\"header_menu\">\n  <i class=\"fa fa-bars bar_hover\" aria-hidden=\"true\"></i>\n</a>\n\n<nav id=\"drawer\" class=\"nav\">\n  <div id=\"particles-js\">\n    <ul class=\"nav__list\">\n      <li class=\"nav__item\"><a href=\"https://github.com/roverkim\" target=\"_blank\" ><img class=\"logo\" src=\"assets\\githubLogo.png\" alt=\"Github\" /><span clas=\"logoText\">Github</span></a></li>\n      <li class=\"nav__item\"><a href=\"https://www.linkedin.com/in/roverkim/\" target=\"_blank\"><img class=\"logo\" src=\"assets\\linkdinLogo.png\" alt=\"Linkdin\" /><span clas=\"logoText\">Linkdin</span></a></li>\n      <li class=\"nav__item\"><a id=\"contact\" href=\"#contact_page\"><img class=\"logo\" src=\"assets\\contactLogo.png\" alt=\"Contact\" /><span clas=\"logoText\">Contact</span></a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
        // Toggle Menu
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#menu').on('click', function (e) {
            e.stopPropagation();
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').toggleClass('menuActive');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.nav').toggleClass('open');
        });
        // Scroll to Contact Section
        // Add smooth scrolling to all links
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#contact").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                //console.log(hash);
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                __WEBPACK_IMPORTED_MODULE_1_jquery__('html, body').animate({
                    scrollTop: __WEBPACK_IMPORTED_MODULE_1_jquery__(hash).offset().top
                }, 1000, function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    // window.location.hash = hash;
                });
            } // End if
        });
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/porfoliosection/porfoliosection.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css');\n\n@keyframes color-change {\n  0% {\n    background: #009DDC;\n  }\n  33% {\n    background: #50B949;\n  }\n  66% {\n    background: #EE2D24;\n  }\n  100% {\n    background: #FEB825;\n  }\n}\n\n@-webkit-keyframes color-change {\n  0% {\n    background: #009DDC;\n  }\n  33% {\n    background: #50B949;\n  }\n  66% {\n    background: #EE2D24;\n  }\n  100% {\n    background: #FEB825;\n  }\n}\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes color-bubble {\n  0% {\n    color: #009DDC;\n  }\n  33% {\n    color: #50B949;\n  }\n  66% {\n    color: #EE2D24;\n  }\n  100% {\n    color: #FEB825;\n  }\n}\n\n@keyframes color-bubble {\n  0% {\n    color: #009DDC;\n  }\n  33% {\n    color: #50B949;\n  }\n  66% {\n    color: #EE2D24;\n  }\n  100% {\n    color: #FEB825;\n  }\n}\n\n.bgimg-2 {\n  position: relative;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/portfolio.jpg")) + ");\n  min-height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n/* Portfolio */\n\n.portfolio_wrapper {\n  border: 2px black solid;\n  height: 90%;\n  width: 80vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  background: rgba(0,0,0,0.5);\n}\n\n.portfolio_wrapper .featured_section {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  height: 100%;\n  width: 60%;\n  border-right: 1px black solid;\n}\n\n.portfolio_wrapper .github_section {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  height: 100%;\n  width: 40%;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n}\n\n.portfolio_wrapper .github_section::-webkit-scrollbar {\n  display: none;\n}\n\n.portfolio_wrapper ul {\n  margin: 10px;\n  padding: 0px;\n}\n\n.portfolio_wrapper li {\n  padding: 10px;\n}\n\n.githubItem {\n  height: auto;\n  width: 100%;\n  border-bottom: 1px white solid;\n  margin-bottom: 5px;\n  -webkit-transition: background 1s ease;\n  transition: background 1s ease;\n}\n\n.githubItem:hover {\n  background: rgba(255,255,255, 0.5)\n}\n\n.githubItem a {\n  display: block;\n  height: 100%;\n  widows: 100%;\n  text-decoration: none;\n  color: white;\n  overflow: hidden;\n}\n\n.githubItem .link_header {\n  font-size: 1.8rem;\n  text-align: center;\n  color: yellow;\n}\n\n.githubItem .link_header p{\n  margin-top: 5px;\n}\n\n.githubItem .git_description {\n  font-size: 1.3rem;\n}\n\n.githubItem .git_updated {\n  font-size: 18px;\n}\n\n/* Loader */\n\n.spinner_wrapper {\n  -webkit-transform: scale(3);\n          transform: scale(3);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.spinner {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  margin: auto;\n  margin: auto;\n  border: 1px solid;\n  -webkit-animation: rotate 1.5s linear 0s infinite, color-bubble 5s ease-in-out 0s infinite;\n  animation: rotate 1.5s linear 0s infinite, color-bubble 5s ease-in-out 0s infinite;\n}\n\n.spinner:after {\n  content: '';\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  background: #fff;\n  border-radius: 100%;\n  -webkit-animation: color-change 5s ease-in-out 0s infinite;\n  animation: color-change 5s ease-in-out 0s infinite;\n  left: -5px;\n  top: 18px;\n}\n\n.button {\n  margin: auto;\n  display: block;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 20px;\n  padding: 8px 20px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 640px) {\n  .bgimg-2 {\n    height: 1200px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n\n  .portfolio_wrapper {\n    width: 100vw;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    overflow: hidden;\n  }\n\n  .portfolio_wrapper .featured_section {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    width: 100%;\n    height: 60vh\n  }\n\n  .skills.pdf {\n    padding-top: 50px;\n  }\n\n\n\n\n  .portfolio_wrapper .github_section {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    width: 100%;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: none;\n    overflow: -moz-scrollbars-none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfoliosection/porfoliosection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg-2\">\n  <!-- <div class=\"caption\">\n  </div> -->\n  <!-- Loader -->\n  <span *ngIf=\"loading; else loaded\">\n    <div class=\"spinner_wrapper\">\n      <div class=\"spinner\"></div>\n    </div>\n  </span>\n\n  <ng-template #loaded>\n      <div class=\"portfolio_wrapper\">\n        <section class=\"featured_section\">\n          <carousel style=\"height: 100%;\">\n            <slide style=\"height: 100%;\">\n              <a href=\"http://www.pixperia.com/\" target=\"_blank\">\n                <img src=\"../../assets/pixperia.PNG\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h3>Pixperia</h3>\n                  <p>React, Mongodb, Node and Express</p>\n                </div>\n              </a>\n            </slide>\n            <slide>\n              <a href=\"http://www.pixprience.com/\" target=\"_blank\">\n                <img src=\"../../assets/pixprience.PNG\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h3>Pixprience</h3>\n                  <p>Html, CSS, Node and MySQL</p>\n                </div>\n              </a>\n            </slide>\n            <slide>\n              <a href=\"https://afternoon-mountain-55394.herokuapp.com\" target=\"_blank\">\n                <img src=\"../../assets/scraper.PNG\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h3>NPR Web Scrapper</h3>\n                  <p>Node, Mongodb, Cheerio (Web Scrapper), Handlebars, Materialize </p>\n                </div>\n              </a>\n            </slide>\n          </carousel>\n        </section>\n        <section class=\"github_section\">\n          <ul>\n            <li *ngFor=\"let github of githubObject\" class=\"githubItem\">\n              <a style=\"height=100%; width=100%;\" href={{github.html_url}} target=\"_blank\">\n                <span class=\"link_header\">\n                  <p>{{github.name}}</p>\n                </span>\n                <div class=\"git_description\">\n                  <p>{{github.description}}</p>\n                </div>\n                <div class=\"git_updated\">\n                  <p>Updated At: {{github.updated_at}}</p>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </section>\n      </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/porfoliosection/porfoliosection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorfoliosectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apicalls_service__ = __webpack_require__("../../../../../src/app/apicalls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PorfoliosectionComponent = /** @class */ (function () {
    function PorfoliosectionComponent(apicalls) {
        this.apicalls = apicalls;
        this.loading = true;
        this.video = "https://www.google.com/";
        //console.log(this.apicalls);
    }
    PorfoliosectionComponent.prototype.ngOnInit = function () {
        this.getGithubLinks();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.carousel').css('height', '100%');
    };
    //
    PorfoliosectionComponent.prototype.getGithubLinks = function () {
        var _this = this;
        this.apicalls.getGithubLinks().subscribe(function (response) {
            _this.githubObject = response;
            _this.loading = false;
            //console.log(this.githubObject)
        });
    };
    PorfoliosectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-porfoliosection',
            template: __webpack_require__("../../../../../src/app/porfoliosection/porfoliosection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/porfoliosection/porfoliosection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__apicalls_service__["a" /* ApicallsService */]])
    ], PorfoliosectionComponent);
    return PorfoliosectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul , li {\n  padding: 0;\n  margin: 0;\n}\n\n\n/* Skills Main Structure */\n\n\n#skills_section {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/resume.jpg")) + ");\n  min-height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 10% 80% 10%;\n      grid-template-columns: 10% 80% 10%;\n  -ms-grid-rows: 10% 80% 10%;\n      grid-template-rows: 10% 80% 10%;\n      grid-template-areas: \". nav_skills .\" \". skills .\" \". download_resume .\";\n  position: relative;\n  padding-top: 50px;\n  position: relative;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n\n.cover {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgba(0,0,0,0.8);\n  z-index: 1;\n}\n\n\n.download_resume {\n  -ms-grid-row: 3;\n  -ms-grid-column: 2;\n  grid-area: download_resume;\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n\n#skills_section .nav_skills {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: nav_skills;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 2;\n}\n\n\n.skills_list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  color: white;\n  margin-bottom: 5px;\n}\n\n\n#skills_section .skills {\n  -ms-grid-row: 2;\n  -ms-grid-column: 2;\n  grid-area: skills;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n\n#skills_section .skills.pdf {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 2;\n  padding-top: 50px;\n}\n\n\n#skills_section .skills .skills_wrapper {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n\n\n#left_skills {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  width: 59%;\n  z-index: 2;\n  color: white;\n}\n\n\n#left_skills ul {\n  width: 80%;\n  margin-top: 50px;\n}\n\n\n#right_skills {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  width: 39%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: wrap;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  z-index: 2;\n}\n\n\n/* Right SKills */\n\n\n.certification_top, .certification_bottom {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n\n.certification_top {\n  border-bottom: white 1px solid;\n}\n\n\n.certification_img {\n  height: auto;\n  width: 100%;\n  margin: 10px;\n  border: 1px black solid;\n}\n\n\n/* Toggle Switch */\n\n\n.container {\n  width: 450px;\n  padding: 25px 5px;\n  border-radius: 10px;\n  font-family: \"Oswald\";\n  text-align: center;\n  margin-bottom: 20px;\n  margin: 0 auto !important;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n\n.container .option {\n  display: inline-block;\n  text-decoration: none;\n  vertical-align: top;\n  color: white;\n  font-size: 45px;\n  cursor: pointer;\n  opacity: .5;\n  position: relative;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n\n\n.container .option.on {\n  font-weight: bold;\n  opacity: 1;\n}\n\n\n.container .slide {\n  width: 100px;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  top: 17px;\n  cursor: pointer;\n}\n\n\n.container .slide:before,\n.container .slide:after {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  z-index: 1;\n  left: 0;\n  display: block;\n  width: 100px;\n  height: 40px;\n  background-color: #cb4a4a;\n  border-radius: 100px;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n\n\n.container .slide:after {\n  top: 2px;\n  z-index: 2;\n  left: 60px;\n  width: 33px;\n  height: 33px;\n  background-color: #ffffff;\n  border-radius: 100%;\n}\n\n\n.container .slide.on:after {\n  left: 7px;\n}\n\n\n.container .slide.on:before {\n  background-color: #7dbc7f;\n}\n\n\n/* Skills Layout */\n\n\n.skill {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0 auto;\n}\n\n\n.skill .skill_name {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  width: 60%;\n  font-size: 2rem;\n  text-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n\n.skill .skill_name .skill_name_wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: auto;\n  height: 60%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n\n.skill .skill_name .skill_name_wrapper .skill_name_text {\n  font-size: 3rem;\n  padding-right: 20px;\n}\n\n\n.skill .skill_name .skill_name_wrapper .skill_icon {\n  /* order: 1; */\n  max-height: inherit;\n  max-width: inherit;\n  width: 50%;\n  height: 100px;\n  width: auto;\n}\n\n\n.skill .skill_bar {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  width: 40%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n\n.skill .skill_bar .bar{\n  margin: 20px;\n  width: 200px;\n  height: 200px;\n  position: relative;\n}\n\n\n/* Modal */\n\n\n/* Style the Image Used to Trigger the Modal */\n\n\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n\n\n#myImg:hover {opacity: 0.7;}\n\n\n/* The Modal (background) */\n\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 9999999999; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\n}\n\n\n/* Modal Content (Image) */\n\n\n.modal-content {\n    margin: auto;\n    display: block;\n    width: auto;\n    height: auto;\n    max-height: 100vh;\n    max-width: 1000px;\n}\n\n\n/* Caption of Modal Image (Image Text) - Same Width as the Image */\n\n\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n\n\n/* Add Animation - Zoom in the Modal */\n\n\n.modal-content, #caption {\n    -webkit-animation-name: zoom;\n            animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n            animation-duration: 0.6s;\n}\n\n\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)}\n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n\n\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)}\n    to {-webkit-transform:scale(1);transform:scale(1)}\n}\n\n\n/* The Close Button */\n\n\n.close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n\n\n.close:hover,\n.close:focus {\n    color: red;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 640px) {\n\n  \n  .certification_top, .certification_bottom {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n  \n  .certification_top {\n    padding-bottom: 10px;\n  }\n  \n  .certification_bottom {\n    padding-bottom: 20px;\n  }\n  \n  .skills_wrapper {\n    padding-bottom: 40px;\n    margin-bottom: 0;\n  }\n}\n\n\n/* 100% Image Width on Smaller Screens */\n\n\n@media only screen and (max-width: 1200px){\n        \n    .modal-content {\n        width: 100%;\n    }\n\n    #skills_section {\n      -ms-grid-columns: 100%;\n          grid-template-columns: 100%;\n      -ms-grid-rows: 10% 80% 10%;\n          grid-template-rows: 10% 80% 10%;\n          grid-template-areas: \"nav_skills \" \" skills \" \"download_resume\";\n    }\n\n    #skills_section .skills_slider {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-transform: scale(0.8);\n              transform: scale(0.8);\n      width: 100%;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      justify-content: center;\n    }\n\n    #skills_section .skills_slider .container {\n      padding: 0;\n      margin: 0;\n\n    }\n\n    #left_skills {\n      margin-top: 25px;\n    }\n\n    #left_skills, #right_skills {\n      width: 100%;\n    }\n\n    #left_skills .skill {\n      -webkit-transform: scale(0.9);\n              transform: scale(0.9);\n\n    }\n\n    #left_skills ul {\n      width: 100%;\n      margin: 0;\n    }\n\n    #left_skills .skill_name_text {\n      font-size: 2rem;\n    }\n\n    #left_skills .skill_bar {\n      width: 100%;\n    }\n\n    .close {\n      right: 15px;\n    }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"skills_section\">\n  <div class=\"cover\"></div>\n  <div class=\"nav_skills\">\n    <nav class=\"skills_slider\">\n      <div class=\"container\">\n        <a class=\"on option\">Skills</a>\n        <span href=\"#\" class=\"slide on\"></span>\n        <a class=\"option\">Resume</a>\n      </div>\n    </nav>\n  </div>\n\n  <span class=\"skills\" *ngIf=\"displaySkills; else displayResume\">\n      <div class=\"skills_wrapper\">\n        <div id=\"left_skills\">\n          <ul>\n            <li class=\"skill\" *ngFor=\"let skill of skillsArray\">\n              <div class=\"skill_name\">\n                <div class=\"skill_name_wrapper\">\n                  <div class=\"skill_name_text\">{{skill.name}}</div>\n                  <img src={{skill.img}} class=\"skill_icon\">\n                </div>\n              </div>\n              <div class=\"skill_bar\">\n                <div id=\"{{skill.id}}\" class=\"bar\">\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n\n\n        <div id=\"right_skills\">\n          <div class=\"certification_top\">\n                <img id=\"northwestern\" class=\"certification_img\" src=\"../../assets/northwestern.jpg\"/>\n          </div>\n          <div class=\"certification_bottom\">\n            <img id=\"uwm\" class=\"certification_img\" src=\"../../assets/uwm.jpg\"/>\n          </div>\n        </div>\n      </div>\n\n</span>\n  <ng-template #displayResume>\n    <pdf-viewer [src]=\"pdfSrc\" [render-text]=\"true\" style=\"display: block;\" [stick-to-page]=\"true\" [fit-to-page]=\"true\" class=\"skills pdf\" [autoresize]=\"true\"></pdf-viewer>\n    <!-- Download Button -->\n    <app-download-button class=\"download_resume\"></app-download-button>\n  </ng-template>\n\n</div>\n\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\">\n\n  <!-- The Close Button -->\n  <span class=\"close\">&times;</span>\n\n  <!-- Modal Content (The Image) -->\n  <img class=\"modal-content\" id=\"img01\" alt=\"\" />\n\n  <!-- Modal Caption (Image Text) -->\n  <div id=\"caption\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_progressbar_js__ = __webpack_require__("../../../../progressbar.js/src/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_progressbar_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_progressbar_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var counter = 0;
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.skillsArray = [
            {
                id: 'bar1',
                name: 'Html5',
                rating: 90,
                duration: 2000,
                img: '../../assets/html.png'
            }, {
                id: 'bar2',
                name: 'Css3',
                rating: 85,
                duration: 2500,
                img: '../../assets/css.png'
            }, {
                id: 'bar3',
                name: 'Angular 5',
                rating: 80,
                duration: 3000,
                img: '../../assets/angular.png'
            }, {
                id: 'bar4',
                name: 'React',
                rating: 80,
                duration: 3500,
                img: '../../assets/react.png'
            }, {
                id: 'bar5',
                name: 'Node',
                rating: 85,
                duration: 4000,
                img: '../../assets/node.png'
            }, {
                id: 'bar6',
                name: 'Express',
                rating: 80,
                duration: 4500,
                img: '../../assets/express.png'
            }
        ];
        this.displaySkills = true;
        this.pdfSrc = '../../assets/ryankimresume.pdf';
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.option, .slide').on('click', function () {
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__('.option, .slide').hasClass('option') && !__WEBPACK_IMPORTED_MODULE_1_jquery__('.option, .slide').hasClass('on')) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.option').toggleClass('on');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.slide').toggleClass('on');
            }
            else if (__WEBPACK_IMPORTED_MODULE_1_jquery__('.option, .slide').hasClass('slide')) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.option').toggleClass('on');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.slide').toggleClass('on');
            }
            // this.displaySkills = this.displaySkills.bind(SkillsComponent);
            //console.log(this.displaySkills)
            if (_this.displaySkills == true) {
                _this.displaySkills = false;
                //console.log('display resume')
            }
            else {
                _this.displaySkills = true;
                //console.log('display skills')
                //console.log('this is '+this.skillsArray);
                var checkCondition = function () {
                    if (document.getElementById('bar1')) {
                        clearInterval(checkConditionInterval);
                        reRenderBar_1();
                    }
                };
                var reRenderBar_1 = function () {
                    _this.skillsArray.map(function (skill) {
                        _this.displayRatings(skill.id, skill.name, skill.rating, skill.duration);
                    });
                };
                if (document.getElementById('bar1')) {
                    reRenderBar_1();
                    clearInterval(reRenderBar_1);
                }
                else {
                    var checkConditionInterval = setInterval(checkCondition, 100);
                }
            }
        });
        var div_top = __WEBPACK_IMPORTED_MODULE_1_jquery__('#skills_section').offset().top;
        __WEBPACK_IMPORTED_MODULE_1_jquery__(window).scroll(function () {
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__(window).scrollTop() + 500 > div_top && counter == 0) {
                _this.skillsArray.map(function (skill) {
                    _this.displayRatings(skill.id, skill.name, skill.rating, skill.duration);
                });
                //console.log('scrolling')
                counter++;
            }
            ;
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__(window).scrollTop() + 250 > div_top) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').css('color', 'white');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').hover(function () {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__(this).css('color', 'yellow');
                });
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').mouseleave(function () {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__(this).css('color', 'white');
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').css('color', 'black');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').hover(function () {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__(this).css('color', 'yellow');
                });
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').mouseleave(function () {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__(this).css('color', 'white');
                });
            }
            ;
            //console.log($('#skills_section').offset().top)
            //console.log($( window ).scrollTop())
            //console.log($('#skills_section').height());
            //
            if ((__WEBPACK_IMPORTED_MODULE_1_jquery__(window).scrollTop() - 100 > (__WEBPACK_IMPORTED_MODULE_1_jquery__('#skills_section').offset().top + __WEBPACK_IMPORTED_MODULE_1_jquery__('#skills_section').height()) && __WEBPACK_IMPORTED_MODULE_1_jquery__(window).width() > 1200)) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').css('color', 'black');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').hover(function () {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__(this).css('color', 'yellow');
                });
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.fa-bars').mouseleave(function () {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__(this).css('color', 'black');
                });
            }
            ;
        });
    };
    SkillsComponent.prototype.ngAfterContentInit = function () {
    };
    SkillsComponent.prototype.ngAfterViewInit = function () {
        // Get the modal
        var modal = document.getElementById('myModal');
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#uwm").on('click', function () {
            var img = document.getElementById('uwm');
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#northwestern").on('click', function () {
            var img = document.getElementById('northwestern');
            //console.log(img);
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
    };
    SkillsComponent.prototype.displayRatings = function (id, name, rating, duration) {
        var barID = document.getElementById(id);
        //console.log(barID);
        var bar = new __WEBPACK_IMPORTED_MODULE_2_progressbar_js__["Circle"](barID, {
            color: 'yellow',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: duration,
            text: {
                autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#339900', width: 4 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);
                var value = Math.round(circle.value() * rating);
                if (value === 0) {
                    circle.setText('');
                }
                else {
                    circle.setText('<div style="text-align:center;">Confidence </br>' + value + '% </div>');
                }
            }
        });
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '2rem';
        bar.animate(1.0); // Number from 0.0 to 1.0
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/connect.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "connect.58c62c375d170ee9ac97.jpg";

/***/ }),

/***/ "../../../../../src/assets/intro2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "intro2.8a1251b8dabfd45db5d0.jpg";

/***/ }),

/***/ "../../../../../src/assets/nav3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nav3.52628683c120d28fc552.jpg";

/***/ }),

/***/ "../../../../../src/assets/portfolio.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "portfolio.787519d42b2dbe251c15.jpg";

/***/ }),

/***/ "../../../../../src/assets/resume.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resume.2090a3c1916e9154a2df.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map