webpackJsonp([0,4],{

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(438);


/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-about]',
            template: __webpack_require__(750),
            styles: [__webpack_require__(736)],
            host: {
                class: 'content'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/about.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* unused harmony export Contact */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
var FormComponent = (function () {
    function FormComponent(http) {
        this.http = http;
    }
    FormComponent.prototype.onSubmit = function (contact) {
        var body = JSON.stringify(contact);
        this.process = true;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        this.http.post('mail.php', contact, { headers: headers }).subscribe(function (data) {
            console.log(data.json());
        });
    };
    FormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(752),
            styles: [__webpack_require__(738)],
            host: {
                class: 'content'
            },
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])("form", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])("normal", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])("* => void", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], FormComponent);
    return FormComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/form.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.partners = [
            "assets/images/gnamlogo.jpeg",
            "assets/images/Yale_som.png",
            "assets/images/haas.png",
            "assets/images/INSEAD Logo.png",
            "assets/images/HEC.jpg",
            "assets/images/Oxford.gif",
            "assets/images/LSE.jpg",
            "assets/images/NUS.jpg",
            "assets/images/HKUST.jpg",
            "assets/images/IE.png",
            "assets/images/IMD.png",
            "assets/images/ICS.png",
            "assets/images/EGADE.jpeg",
            "assets/images/UBC_Sauder.jpg",
            "assets/images/IIM Bangalore - logo.jpeg",
            "assets/images/GSB.png",
            "assets/images/ESMT.png",
            "assets/images/INCAE.jpg",
            "assets/images/FGV.png",
            "assets/images/UCD.jpg",
            "assets/images/SNU.gif",
            "assets/images/fudan logo.png",
            "assets/images/Renmin.png",
            "assets/images/Lagos BS.png",
            "assets/images/AIM.jpg",
            "assets/images/UGBS.jpg",
            "assets/images/Pontificia.jpg",
            "assets/images/Technion_logo.jpg",
            "assets/images/Koc.jpg",
            "assets/images/Indonesia logo.png",
        ];
        this.circles = [
            { opacity: 0.8, radius: 120, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.7, radius: 180, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.6, radius: 240, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.4, radius: 310, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.3, radius: 400, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" }
        ];
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.getPartners();
    };
    HomeComponent.prototype.onResize = function () {
        this.getPartners();
    };
    HomeComponent.prototype.getPartners = function () {
        var width = document.querySelector('[app-root]').clientWidth;
        var pageSize = width > 1024 ? 10 : (width > 768 ? 6 : 4);
        var partners = JSON.parse(JSON.stringify(this.partners));
        this.pages = [];
        while (partners.length) {
            this.pages.push(partners.splice(0, pageSize));
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-home]',
            template: __webpack_require__(753),
            styles: [__webpack_require__(739)],
            host: {
                class: 'content'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/home.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = (function () {
    function PricingComponent() {
    }
    PricingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-pricing]',
            template: __webpack_require__(754),
            styles: [__webpack_require__(740)],
            host: {
                class: 'content'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], PricingComponent);
    return PricingComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/pricing.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = (function () {
    function ProductComponent() {
        this.center = [0, 375];
        this.height = 800;
        this.productIndex = 0;
        this.circles_large = [
            { opacity: 0.9, radius: 80, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.8, radius: 145, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.7, radius: 210, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.6, radius: 275, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.5, radius: 350, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" }
        ];
        this.circles_small = [
            { opacity: 0.9, radius: 50, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.8, radius: 100, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.7, radius: 150, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.6, radius: 200, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" },
            { opacity: 0.5, radius: 240, shadow: "-5px 5px 40px 0px rgba(0,0,0,0.06)" }
        ];
    }
    ProductComponent.prototype.onResize = function () {
        var width = document.querySelector('[app-root]').clientWidth;
        this.circles = width >= 1023 ? this.circles_large : this.circles_small;
        this.height = width >= 1023 ? 800 : 600;
        this.center = [width / 2, this.height / 2];
    };
    ProductComponent.prototype.changeProductNumber = function (index) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.productIndex = index >= 0 ? index : (this.productIndex + 1) % 4;
        this.timeout = setTimeout(this.changeProductNumber.bind(this), 10000);
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.onResize();
        this.timeout = setTimeout(this.changeProductNumber.bind(this), 10000);
    };
    ProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-product]',
            template: __webpack_require__(755),
            styles: [__webpack_require__(741)],
            host: {
                class: 'content'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/product.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 437;


/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(560);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/main.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angulartics2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(angulartics2GoogleAnalytics, router) {
        this.angulartics2GoogleAnalytics = angulartics2GoogleAnalytics;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"])) {
                return;
            }
            document.body.scrollTop = 0;
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-root]',
            template: __webpack_require__(751),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2GoogleAnalytics"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2GoogleAnalytics"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/app.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_planetarium_planetarium_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_carousel_carousel_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_dropdown_dropdown_directive__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pricing_pricing_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_h2_h2_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_wave_wave_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_devices_devices_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_product_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_fade_in_fade_in_directive__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form_form_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_hammerjs__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_hammerjs__);
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        _super.apply(this, arguments);
        this.overrides = {
            'swipe': { velocity: 0.4, threshold: 20 } // override default settings
        };
    }
    MyHammerConfig.prototype.buildHammer = function (element) {
        var mc = new __WEBPACK_IMPORTED_MODULE_20_hammerjs__(element, {
            recognizers: [
                [__WEBPACK_IMPORTED_MODULE_20_hammerjs__["Swipe"], { direction: __WEBPACK_IMPORTED_MODULE_20_hammerjs__["DIRECTION_HORIZONTAL"] }]
            ]
        });
        return mc;
    };
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["HammerGestureConfig"]));
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_planetarium_planetarium_component__["a" /* PlanetariumComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_carousel_carousel_component__["b" /* CarouselPage */],
                __WEBPACK_IMPORTED_MODULE_11__shared_dropdown_dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_12__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_h2_h2_component__["a" /* H2Component */],
                __WEBPACK_IMPORTED_MODULE_14__shared_wave_wave_component__["a" /* WaveComponent */],
                __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_devices_devices_component__["a" /* DevicesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_devices_devices_component__["b" /* WindowComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_fade_in_fade_in_directive__["a" /* FadeInDirective */],
                __WEBPACK_IMPORTED_MODULE_19__form_form_component__["a" /* FormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* AnalyticsRouting */]
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["HAMMER_GESTURE_CONFIG"],
                    useClass: MyHammerConfig
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/app.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pricing_pricing_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_form_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angulartics2__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angulartics2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnalyticsRouting; });







var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */] },
    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_2__pricing_pricing_component__["a" /* PricingComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(APP_ROUTES);
var AnalyticsRouting = __WEBPACK_IMPORTED_MODULE_6_angulartics2__["Angulartics2Module"].forRoot([__WEBPACK_IMPORTED_MODULE_6_angulartics2__["Angulartics2GoogleAnalytics"]]);
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/app.routing.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CarouselPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselPage = (function () {
    function CarouselPage() {
    }
    Object.defineProperty(CarouselPage.prototype, "isHide", {
        get: function () {
            return this.shown === false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.shown'), 
        __metadata('design:type', Boolean)
    ], CarouselPage.prototype, "shown", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.hide'), 
        __metadata('design:type', Object)
    ], CarouselPage.prototype, "isHide", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.previous'), 
        __metadata('design:type', Boolean)
    ], CarouselPage.prototype, "previous", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.from-right'), 
        __metadata('design:type', Boolean)
    ], CarouselPage.prototype, "fromRight", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.to-left'), 
        __metadata('design:type', Boolean)
    ], CarouselPage.prototype, "toLeft", void 0);
    CarouselPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[carousel-page]'
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselPage);
    return CarouselPage;
}());
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.currentPage = 0;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    }
    CarouselComponent.prototype.refreshPageShown = function (from, to, toLeft) {
        if (toLeft === void 0) { toLeft = true; }
        this.pages.forEach(function (page, index) {
            page.shown = to === index;
            page.previous = from === index;
            page.toLeft = toLeft;
            page.fromRight = toLeft;
        }.bind(this));
    };
    CarouselComponent.prototype.getTime = function (page) {
        return this.time[page < this.time.length ? page : this.time.length - 1];
    };
    CarouselComponent.prototype.changePage = function (page, toLeft) {
        if (toLeft === void 0) { toLeft = true; }
        var now = new Date().getTime() + 1000;
        var delay = Math.max(0, (now - (this.lastChange || now)));
        if (delay > 1000) {
            delay = 0;
        }
        this.lastChange = now;
        var previousPage = this.currentPage;
        this.currentPage = page;
        setTimeout(function () {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.refreshPageShown(previousPage, page, toLeft);
            this.timeout = setTimeout(function () {
                this.autoChangePage();
            }.bind(this), this.getTime(this.currentPage));
        }.bind(this), delay);
    };
    CarouselComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        var nextPage;
        if (action === this.SWIPE_ACTION.RIGHT) {
            nextPage = (this.currentPage - 1 + this.pages.length) % this.pages.length;
            this.changePage(nextPage, false);
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            nextPage = (this.currentPage + 1) % this.pages.length;
            this.changePage(nextPage);
        }
    };
    CarouselComponent.prototype.autoChangePage = function () {
        this.lastChange = new Date().getTime() + 1000;
        var nextPage = (this.currentPage + 1) % this.pages.length;
        this.refreshPageShown(this.currentPage, nextPage);
        this.currentPage = nextPage;
        this.timeout = setTimeout(function () {
            this.autoChangePage();
        }.bind(this), this.getTime(this.currentPage));
    };
    CarouselComponent.prototype.ngAfterContentInit = function () {
        this.time = Array.isArray(this.time) ? this.time : (Number.isInteger(this.time) ? [this.time] : [5000]);
        this.timeout = setTimeout(function () {
            this.autoChangePage();
        }.bind(this), this.getTime(0));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(CarouselPage), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _a) || Object)
    ], CarouselComponent.prototype, "pages", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CarouselComponent.prototype, "time", void 0);
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-carousel]',
            inputs: ['nbPages', 'currentPage', 'time'],
            template: __webpack_require__(756),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/carousel.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowComponent = (function () {
    function WindowComponent() {
        this.delay = this.delay === null ? 0 : this.delay;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], WindowComponent.prototype, "delay", void 0);
    WindowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-window]',
            template: __webpack_require__(758),
            styles: [__webpack_require__(744)],
            inputs: ['delay'],
        }), 
        __metadata('design:paramtypes', [])
    ], WindowComponent);
    return WindowComponent;
}());
var DevicesComponent = (function () {
    function DevicesComponent() {
    }
    DevicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-devices]',
            template: __webpack_require__(757),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [])
    ], DevicesComponent);
    return DevicesComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/devices.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    Object.defineProperty(DropdownDirective.prototype, "opened", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.open = function () {
        this.isOpen = !this.isOpen;
    };
    DropdownDirective.prototype.close = function () {
        this.isOpen = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'), 
        __metadata('design:type', Object)
    ], DropdownDirective.prototype, "opened", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "open", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "close", null);
    DropdownDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[app-dropdown]',
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownDirective);
    return DropdownDirective;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/dropdown.directive.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeInDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FadeInDirective = (function () {
    function FadeInDirective(_el, renderer) {
        var _this = this;
        this._el = _el;
        this.renderer = renderer;
        this.show = false;
        this.scroll = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'scroll').debounceTime(100).subscribe(function (event) {
            _this.onScroll(false);
        });
    }
    FadeInDirective.prototype.onScroll = function (first) {
        var el = this._el.nativeElement;
        var rec = el.getBoundingClientRect();
        if (!this.show && rec.top < window.innerHeight * this.ratio) {
            this.scroll.unsubscribe();
            setTimeout(function () { this.show = true; }.bind(this), first ? this.delay : 0);
        }
    };
    FadeInDirective.prototype.ngAfterViewInit = function () {
        if (this.ratio === undefined) {
            this.ratio = 0.9;
        }
        this.onScroll(true);
    };
    Object.defineProperty(FadeInDirective.prototype, "isShown", {
        get: function () {
            return this.show;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], FadeInDirective.prototype, "delay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], FadeInDirective.prototype, "ratio", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.show'), 
        __metadata('design:type', Object)
    ], FadeInDirective.prototype, "isShown", null);
    FadeInDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[app-fade-in]',
            inputs: ['delay', 'ratio'],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _b) || Object])
    ], FadeInDirective);
    return FadeInDirective;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/fade-in.directive.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.isActive = function (url) {
        return this.router.url === url;
    };
    FooterComponent.prototype.reload = function () {
        location.href = location.href;
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-footer]',
            template: __webpack_require__(759),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/footer.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var H2Component = (function () {
    function H2Component() {
    }
    H2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-h2]',
            template: __webpack_require__(760),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [])
    ], H2Component);
    return H2Component;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/h2.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.isActive = function (url) {
        return this.router.url === url;
    };
    HeaderComponent.prototype.reload = function () {
        location.href = location.href;
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-header]',
            template: __webpack_require__(761),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/header.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* unused harmony export Circle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetariumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Circle = (function () {
    function Circle() {
    }
    return Circle;
}());
var PlanetariumComponent = (function () {
    function PlanetariumComponent() {
        this.particles = [];
    }
    PlanetariumComponent.prototype.top = function () {
        return [Math.floor(this.size[0] * Math.random()), -100];
    };
    PlanetariumComponent.prototype.right = function () {
        return [-100, Math.floor(this.size[1] * Math.random())];
    };
    PlanetariumComponent.prototype.bottom = function () {
        return [Math.floor(2000 * Math.random()), this.size[1] + 100];
    };
    PlanetariumComponent.prototype.left = function () {
        return [this.size[0] + 100, Math.floor(this.size[1] * Math.random())];
    };
    PlanetariumComponent.prototype.orbit = function () {
        var radius = this.radius[Math.floor(Math.random() * this.radius.length)];
        return [radius, 0];
    };
    PlanetariumComponent.prototype.distance = function (a, b) {
        return Math.round(Math.sqrt(Math.pow(b[0] - b[1], 2) + Math.pow(a[0] - a[1], 2)));
    };
    PlanetariumComponent.prototype.destroyParticle = function (particle) {
        this.particles.splice(this.particles.indexOf(particle), 1);
        this.particles.push(this.generateParticle(0));
    };
    PlanetariumComponent.prototype.onResize = function () {
        if (this.autoResize) {
            this.size[0] = document.querySelector('[app-root]').clientWidth;
        }
    };
    PlanetariumComponent.prototype.generateParticle = function (delay) {
        delay = delay || 0;
        var keys = Object.keys(this.positions);
        var source = keys.filter(function (p) { return p !== "orbit"; })[Math.floor(Math.random() * (keys.length - 1))];
        var destination = keys.filter(function (p) { return p !== source; })[Math.floor(Math.random() * (keys.length - 1))];
        var rotation = Math.floor((Math.random() - 0.5) * 40);
        var size = Math.floor(Math.random() * 6 + 10);
        size -= size % 2;
        var borderWidth = Math.min(16 - size, size / 2, Math.floor(Math.random() * 6 + 1));
        var particle = {
            orbit: destination === "orbit",
            source: this.positions[source](),
            destination: this.positions[destination](),
            color: Math.random() > 0.5 ? "blue" : "gray",
            opacity: Math.random() * 0.75 + 0.2,
            width: size,
            borderWidth: [borderWidth, 0, 0],
            duration: Math.floor(Math.random() * 5000 + 20000),
            rotation: 0,
            delay: delay
        };
        setTimeout(function () {
            particle.source[0] = particle.destination[0];
            particle.source[1] = particle.destination[1];
            particle.rotation = rotation;
        }, particle.delay);
        if (!particle.orbit) {
            setTimeout(function () {
                this.destroyParticle(particle);
            }.bind(this), particle.delay + particle.duration - 500);
        }
        else {
            setTimeout(function () {
                particle.rotation = particle.rotation + (particle.rotation < 0 ? -1 : 1) * 720;
                particle.duration *= 2;
                particle.width *= 1.5;
                particle.borderWidth[1] = particle.width * 0.5 * Math.random();
                particle.borderWidth[2] = (particle.width - particle.borderWidth[1] * 2) * (0.3 * Math.random() + 0.2);
                particle.borderWidth[0] = 1;
                setTimeout(function () {
                    this.destroyParticle(particle);
                }.bind(this), particle.duration - 500);
            }.bind(this), particle.delay + particle.duration);
        }
        return particle;
    };
    PlanetariumComponent.prototype.ngAfterViewInit = function () {
        this.autoResize = !this.size[0];
        this.size[0] |= document.querySelector('[app-root]').clientWidth;
        this.radius = this.circles.map(function (circle) { return circle.radius; });
        this.positions = {
            top: this.top.bind(this),
            right: this.right.bind(this),
            bottom: this.bottom.bind(this),
            left: this.left.bind(this),
            orbit: this.orbit.bind(this)
        };
        for (var i = 0; i < this.nbParticles; i++) {
            this.particles.push(this.generateParticle(Math.random() * 4000 + 1000));
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], PlanetariumComponent.prototype, "circles", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PlanetariumComponent.prototype, "nbParticles", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], PlanetariumComponent.prototype, "center", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], PlanetariumComponent.prototype, "size", void 0);
    PlanetariumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            inputs: ['circles', 'center', 'size', 'nbParticles'],
            selector: '[app-planetarium]',
            template: __webpack_require__(762),
            styles: [__webpack_require__(748)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])("particle", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])("normal", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])("void => *", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: 0, height: 0 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500)]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])("* => void", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PlanetariumComponent);
    return PlanetariumComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/planetarium.component.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WaveComponent = (function () {
    function WaveComponent() {
    }
    WaveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-wave]',
            template: __webpack_require__(763),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [])
    ], WaveComponent);
    return WaveComponent;
}());
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/wave.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/var/www/html/corpowebsite/src/src/environment.prod.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/var/www/html/corpowebsite/src/src/polyfills.js.map

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@media (max-width: 1023px) {\n  :host {\n    padding: 0 1rem;\n  }\n}\n#first-block {\n  -webkit-animation: title-in 250ms linear;\n          animation: title-in 250ms linear;\n  -webkit-animation-delay: 1200ms;\n          animation-delay: 1200ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  position: relative;\n  top: -4rem;\n}\n#first-paragraph {\n  margin: 22rem 0 8rem;\n}\n#first-paragraph p {\n  margin: 3rem 0;\n}\n@media (max-width: 1023px) {\n  #first-paragraph {\n    margin-top: 14rem;\n  }\n}\n@media (max-width: 479px) {\n  #first-paragraph {\n    margin-top: 8rem;\n  }\n}\n#adress {\n  font-size: 1.4rem;\n}\n#adress .twic-logo {\n  margin-top: 4rem;\n  height: 4rem;\n}\n#adress .by {\n  margin: 2rem 0;\n  font-weight: 300;\n  line-height: 3.2rem;\n}\n#adress div:not(.by) {\n  line-height: 2.6rem;\n}\n#adress .studnet-logo {\n  height: 2rem;\n  margin-bottom: 0.5rem;\n}\n#adress .monaco-logo {\n  margin: 3rem 0 0;\n}\n#adress .monaco-sentence {\n  margin-bottom: 12rem;\n  font-weight: 300;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n#monaco-background {\n  position: absolute;\n  bottom: 32rem;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: -2;\n}\n#monaco-background #background {\n  background-image: url(\"assets/images/monaco-ville.jpg\");\n  background-position: 50% 0%;\n  background-size: cover;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 60rem;\n}\n@media (max-width: 1023px) {\n  #monaco-background {\n    bottom: 22rem;\n  }\n}\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  overflow-x: hidden;\n}\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes sign-up-in {\n  0% {\n    opacity: 0;\n    padding-top: 10rem;\n  }\n  100% {\n    opacity: 1;\n    padding-top: 8rem;\n  }\n}\n@keyframes sign-up-in {\n  0% {\n    opacity: 0;\n    padding-top: 10rem;\n  }\n  100% {\n    opacity: 1;\n    padding-top: 8rem;\n  }\n}\n#first-block {\n  -webkit-animation: title-in 250ms linear;\n          animation: title-in 250ms linear;\n  -webkit-animation-delay: 1200ms;\n          animation-delay: 1200ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  position: relative;\n  top: -4rem;\n}\n#sign-up-now {\n  padding-top: 17rem;\n}\n@media (max-width: 479px) {\n  #sign-up-now {\n    margin: 0;\n  }\n}\nform {\n  width: 100%;\n}\n.form-block {\n  text-align: left;\n  max-width: 50rem;\n}\n.form-block label {\n  font-size: 1.4rem;\n  font-weight: 600;\n  line-height: 1.9rem;\n  color: #3C3F48;\n  display: block;\n  margin: 2rem 0 1.5rem;\n}\n.form-block input,\n.form-block input:required,\n.form-block input:invalid,\n.form-block input:valid {\n  border-radius: 2px;\n  height: 5rem;\n  width: 100%;\n  background-color: #F7F7F7 !important;\n  border: 1px solid #D7D7D7;\n  font-size: 1.5rem;\n  padding: 1.5rem 2rem;\n  outline: none;\n}\n.form-block input:focus,\n.form-block input:required:focus,\n.form-block input:invalid:focus,\n.form-block input:valid:focus {\n  background-color: #FFF !important;\n  border: 1px solid #C3C3C3;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.22);\n}\n.form-block input[type=password],\n.form-block input:required[type=password],\n.form-block input:invalid[type=password],\n.form-block input:valid[type=password] {\n  color: #8A8A8A;\n  padding: 0.5rem 2rem;\n  font-size: 3rem;\n}\n.form-block input:-webkit-autofill {\n  border-radius: 2px;\n  height: 5rem;\n  width: 100%;\n  background-color: #F7F7F7 !important;\n  border: 1px solid #D7D7D7;\n  font-size: 1.5rem;\n  padding: 1.5rem 2rem;\n  outline: none;\n}\n.form-block input:-webkit-autofill:focus {\n  background-color: #FFF !important;\n  border: 1px solid #C3C3C3;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.22);\n}\n.form-block input:-webkit-autofill[type=password] {\n  color: #8A8A8A;\n  padding: 0.5rem 2rem;\n  font-size: 3rem;\n}\nbutton {\n  margin: 5rem 0 25rem;\n  width: 100%;\n  max-width: 50rem;\n}\n.processed-block {\n  height: 768px;\n  padding-top: 2rem;\n  -webkit-animation: sign-up-in 2500ms ease-in-out forwards;\n          animation: sign-up-in 2500ms ease-in-out forwards;\n  opacity: 0;\n}\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes circle {\n  0% {\n    opacity: 0;\n    margin-right: -40rem;\n    margin-top: -40rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: 2rem;\n    margin-top: 2rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: -1rem;\n    margin-top: -1rem;\n  }\n  95% {\n    opacity: 1;\n    margin-right: .5rem;\n    margin-top: .5rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n  }\n}\n@keyframes circle {\n  0% {\n    opacity: 0;\n    margin-right: -40rem;\n    margin-top: -40rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: 2rem;\n    margin-top: 2rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: -1rem;\n    margin-top: -1rem;\n  }\n  95% {\n    opacity: 1;\n    margin-right: .5rem;\n    margin-top: .5rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n  }\n}\n:host >>> [app-planetarium] > #animation-layout {\n  background-image: -webkit-radial-gradient(circle farthest-side at 100% 0, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 350px, rgba(255, 255, 255, 0.2) 450px, rgba(255, 255, 255, 0.4) 95%, #ffffff 100%);\n  background-image: radial-gradient(circle farthest-side at 100% 0, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 350px, rgba(255, 255, 255, 0.2) 450px, rgba(255, 255, 255, 0.4) 95%, #ffffff 100%);\n}\n[app-planetarium] {\n  top: 0rem;\n  right: 0;\n  left: 0;\n  height: 85rem;\n}\n[app-planetarium] >>> .circle {\n  margin-right: -40rem;\n  margin-top: -40rem;\n  -webkit-animation: circle 6s 500ms ease-in-out forwards;\n          animation: circle 6s 500ms ease-in-out forwards;\n}\n[app-planetarium] >>> .circle#circle-1 {\n  -webkit-animation-delay: 600ms;\n          animation-delay: 600ms;\n}\n[app-planetarium] >>> .circle#circle-2 {\n  -webkit-animation-delay: 700ms;\n          animation-delay: 700ms;\n}\n[app-planetarium] >>> .circle#circle-3 {\n  -webkit-animation-delay: 800ms;\n          animation-delay: 800ms;\n}\n[app-planetarium] >>> .circle#circle-4 {\n  -webkit-animation-delay: 900ms;\n          animation-delay: 900ms;\n}\np {\n  text-align: center;\n  display: block;\n  width: 100%;\n  max-width: 80rem;\n  margin-bottom: 5rem;\n  color: #3C3F48;\n}\n@media (max-width: 1099px) {\n  p {\n    margin-top: 0rem;\n    margin-bottom: 3.3rem;\n  }\n}\n.citation-block {\n  margin-top: 15rem;\n  margin-bottom: 10rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (max-width: 1099px) {\n  .citation-block {\n    display: block;\n    margin-top: 8.5rem;\n    margin-bottom: 6.5rem;\n  }\n}\n.citation-block .portrait {\n  background: url(\"assets/images/home.png\") no-repeat center;\n  background-position: 50% -300%;\n  background-size: cover;\n  background-color: #FFF;\n  height: 38rem;\n  width: 54rem;\n  max-width: calc(100% - 12rem);\n  border: solid 1px #ececec;\n  border-radius: 4px;\n  z-index: 1;\n}\n@media (max-width: 1099px) {\n  .citation-block .portrait {\n    height: 24rem;\n    position: absolute;\n    left: calc(50% - 27rem);\n    background-position: 50% 25%;\n  }\n}\n@media (max-width: 660px) {\n  .citation-block .portrait {\n    left: 6rem;\n  }\n}\n.citation-block .citation {\n  margin-top: 4rem;\n  position: relative;\n  background: -webkit-linear-gradient(246.63deg, #EEEEEE 0%, #FFFFFF 60%);\n  background: linear-gradient(203.37deg, #EEEEEE 0%, #FFFFFF 60%);\n  padding: 8rem 2rem 2rem 6rem;\n  border-radius: 4px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #3C3F48;\n}\n@media (max-width: 1099px) {\n  .citation-block .citation {\n    padding: 24rem 2rem 0;\n  }\n}\n.citation-block .citation p {\n  font-size: 1.8rem;\n  line-height: 3.4rem;\n  font-weight: 300;\n  text-align: left;\n  position: relative;\n  margin: 2rem 0 1rem;\n}\n@media (max-width: 1099px) {\n  .citation-block .citation p {\n    text-align: center;\n  }\n}\n.citation-block .citation-content {\n  font-size: 4.6rem;\n  font-weight: 300;\n  line-height: 6rem;\n  text-align: left;\n  letter-spacing: 0.5rem;\n}\n@media (max-width: 1099px) {\n  .citation-block .citation-content {\n    text-align: center;\n  }\n}\n@media (max-width: 479px) {\n  .citation-block .citation-content {\n    font-size: 2.6rem;\n    line-height: 3rem;\n  }\n}\n.poets {\n  display: inline-block;\n  height: 3.5rem;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n}\n.quote {\n  font-family: Merriweather;\n  font-size: 8rem;\n  font-weight: 900;\n  line-height: 101px;\n  opacity: 0.5;\n  position: absolute;\n  left: 3rem;\n  top: -3rem;\n}\n@media (max-width: 1099px) {\n  .quote {\n    left: 6rem;\n    top: 20rem;\n  }\n}\n@media (max-width: 479px) {\n  .quote {\n    left: 2rem;\n    font-size: 6rem;\n  }\n}\n:host >>> .schools {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 28rem;\n}\n:host >>> .schools .school {\n  width: 20%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin: 4rem auto;\n}\n@media (max-width: 1099px) {\n  :host >>> .schools .school {\n    width: 33%;\n  }\n}\n@media (max-width: 768px) {\n  :host >>> .schools .school {\n    width: 50%;\n  }\n}\n:host >>> .schools .school img {\n  height: 6rem;\n  margin: 0 auto;\n  max-width: 100%;\n  opacity: 0.55;\n}\n@media (max-width: 479px) {\n  :host >>> .schools .school img {\n    height: 4rem;\n  }\n}\n#gnam {\n  background: url(\"assets/images/GNAM_logo.png\") no-repeat center;\n  background-size: contain;\n  height: 4rem;\n  width: 100%;\n  margin: 6rem auto 8rem ;\n}\n@media (max-width: 600px) {\n  #gnam {\n    height: 3rem;\n  }\n}\n#gnam-desc {\n  line-height: 2.5rem;\n  padding: 0 4rem;\n  margin-bottom: 8rem;\n  font-size: 1.6rem;\n}\n#gnam-desc b {\n  margin-bottom: 0.5rem;\n  display: inline-block;\n}\n#gnam-desc p {\n  margin-bottom: 1rem;\n  max-width: 100%;\n  text-align: left;\n}\n@media (max-width: 600px) {\n  #gnam-desc {\n    padding: 0 2rem;\n  }\n}\n:host >>> .carousel-pagination {\n  margin: 7.5rem auto 13rem auto !important;\n}\n@media (max-width: 1099px) {\n  :host >>> .carousel-pagination {\n    margin: 7.5rem auto !important;\n  }\n}\n@media (max-width: 479px) {\n  :host >>> .carousel-pagination {\n    margin: 0rem auto !important 7.5rem;\n  }\n}\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n#first-block {\n  -webkit-animation: title-in 250ms linear;\n          animation: title-in 250ms linear;\n  -webkit-animation-delay: 1200ms;\n          animation-delay: 1200ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  position: relative;\n  top: -4rem;\n}\n#choose-you-plan {\n  padding-top: 13rem;\n}\n@media (max-width: 479px) {\n  #choose-you-plan {\n    margin: 0;\n  }\n}\n.table-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  padding-bottom: 3rem;\n}\n.table-block .anotation {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  font-size: 1.2rem;\n}\n.table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 1rem auto;\n}\n.table .column {\n  width: 30rem;\n  height: 30rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  box-shadow: 0 1px 12px 0 rgba(222, 222, 222, 0.5);\n  color: #3C3F48;\n  border-radius: 0 2px 2px 0;\n}\n@media (max-width: 1023px) {\n  .table .column {\n    width: 50%;\n  }\n  .table .column .lines {\n    padding: 0 0.5rem;\n  }\n}\n@media (max-width: 479px) {\n  .table .column {\n    height: auto;\n  }\n}\n.table .column .title {\n  font-size: 2.2rem;\n  line-height: 2.6rem;\n  margin: 4rem 0;\n  font-weight: bold;\n  height: 4rem;\n}\n.table .column .price {\n  padding: 3rem;\n}\n@media (max-width: 479px) {\n  .table .column .price {\n    padding: 2rem;\n  }\n}\n.table .column .price .euro {\n  font-size: 3rem;\n  font-weight: bold;\n  padding-right: 1rem;\n}\n@media (max-width: 479px) {\n  .table .column .price .euro {\n    font-size: 2rem;\n    padding-right: 0;\n  }\n}\n.table .column.white {\n  border: 1px solid #DEDEDE;\n}\n.table .column.white:first-of-type {\n  border-right: none;\n  border-radius: 2px 0 0 2px;\n}\n.table .column.gray {\n  margin-top: 1.5rem;\n  background: #3C3F48;\n  height: 28.5rem;\n  color: #FFF;\n}\n.table .column.gray a,\n.table .column.gray a:visited,\n.table .column.gray a:hover {\n  color: #FFF;\n}\n.table .column.gray .title {\n  margin: 2.5rem 0 4rem;\n}\n.table .column.gray .price {\n  background: #313339;\n}\n@media (max-width: 1023px) {\n  .table .column.gray {\n    box-shadow: inset 0px 8px 5px 0px rgba(217, 217, 217, 0.15);\n    width: 100%;\n    margin-top: 0;\n  }\n}\n.table .column .price {\n  height: 10rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #F6F8F8;\n}\n.table .column .price .title {\n  margin: auto 0;\n}\n.table .column .lines {\n  margin: auto 0;\n}\n.table .column .lines .line {\n  font-size: 1.6rem;\n  font-weight: 300;\n  text-align: center;\n  line-height: 4rem;\n}\n#our-pricing {\n  font-weight: 300;\n  line-height: 1.6rem;\n  font-size: 1.6rem;\n}\n#our-pricing a,\n#our-pricing a:visited {\n  color: #3C3F48;\n}\n@media (max-width: 479px) {\n  #our-pricing {\n    margin-bottom: 4rem;\n  }\n}\n#try-our-product {\n  height: 13rem;\n  border-radius: 4px;\n  font-size: 1.8rem;\n  font-weight: 300;\n  line-height: 2.4rem;\n  text-align: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 4rem;\n  margin-bottom: 8rem;\n  width: 100%;\n  background-image: url(\"assets/images/try-our-product.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media (max-width: 1023px) {\n  #try-our-product {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center;\n    padding: 4rem 2rem;\n    height: 21rem;\n    line-height: 2.6rem;\n  }\n}\n@media (max-width: 479px) {\n  #try-our-product {\n    margin-bottom: 1rem;\n    height: 23rem;\n  }\n}\n#try-our-product p {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: auto 0;\n  color: #FFF;\n}\n#try-our-product button {\n  margin: auto 0;\n  font-size: 1.4rem;\n  padding: 0 5rem;\n}\n#features {\n  margin-bottom: 6rem;\n}\n#features >>> h2 {\n  margin: 0 0 0 2rem !important;\n}\n#features li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  list-style: none;\n  padding: 0 2.6rem;\n}\n@media (max-width: 479px) {\n  #features li {\n    padding: 0;\n  }\n}\n#features li ul {\n  width: calc(33% - 4rem);\n  margin: 0 2rem;\n  padding: 0;\n  text-align: left;\n  font-size: 1.6rem;\n  font-weight: bold;\n  line-height: 2.4rem;\n  margin-bottom: 4rem;\n}\n@media (max-width: 1023px) {\n  #features li ul {\n    text-align: center;\n    width: calc(50% - 4rem);\n  }\n}\n@media (max-width: 479px) {\n  #features li ul {\n    width: calc(50% - 1rem);\n    margin: 0 0.5rem 4rem;\n  }\n}\n#features li .icon {\n  margin-right: 1rem;\n  border-radius: 50%;\n  background: #3C3F48;\n  color: #FFF;\n  font-size: 0.8rem;\n  height: 1.6rem;\n  line-height: 1.7rem;\n  width: 1.6rem;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n}\n@media (max-width: 1023px) {\n  #features li .icon {\n    display: block;\n    margin: 0 auto 1rem;\n  }\n}\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes circle-0 {\n  0% {\n    opacity: 0;\n    margin-right: 2rem;\n    margin-top: 2rem;\n    height: 12rem;\n    width: 12rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 17rem;\n    width: 17rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 15.6rem;\n    width: 15.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 16rem;\n    width: 16rem;\n  }\n}\n@keyframes circle-0 {\n  0% {\n    opacity: 0;\n    margin-right: 2rem;\n    margin-top: 2rem;\n    height: 12rem;\n    width: 12rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 17rem;\n    width: 17rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 15.6rem;\n    width: 15.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 16rem;\n    width: 16rem;\n  }\n}\n@-webkit-keyframes small-circle-0 {\n  0% {\n    opacity: 0;\n    margin-right: 1.5rem;\n    margin-top: 1.5rem;\n    height: 7rem;\n    width: 7rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 11rem;\n    width: 11rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 9.6rem;\n    width: 9.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 10rem;\n    width: 10rem;\n  }\n}\n@keyframes small-circle-0 {\n  0% {\n    opacity: 0;\n    margin-right: 1.5rem;\n    margin-top: 1.5rem;\n    height: 7rem;\n    width: 7rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 11rem;\n    width: 11rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 9.6rem;\n    width: 9.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 10rem;\n    width: 10rem;\n  }\n}\n@-webkit-keyframes circle-1 {\n  0% {\n    opacity: 0;\n    margin-right: 3.5rem;\n    margin-top: 3.5rem;\n    height: 22rem;\n    width: 22rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 30rem;\n    width: 30rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 28.6rem;\n    width: 28.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 29rem;\n    width: 29rem;\n  }\n}\n@keyframes circle-1 {\n  0% {\n    opacity: 0;\n    margin-right: 3.5rem;\n    margin-top: 3.5rem;\n    height: 22rem;\n    width: 22rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 30rem;\n    width: 30rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 28.6rem;\n    width: 28.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 29rem;\n    width: 29rem;\n  }\n}\n@-webkit-keyframes small-circle-1 {\n  0% {\n    opacity: 0;\n    margin-right: 3rem;\n    margin-top: 3rem;\n    height: 14rem;\n    width: 14rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 21rem;\n    width: 21rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 19.6rem;\n    width: 19.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 20rem;\n    width: 20rem;\n  }\n}\n@keyframes small-circle-1 {\n  0% {\n    opacity: 0;\n    margin-right: 3rem;\n    margin-top: 3rem;\n    height: 14rem;\n    width: 14rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 21rem;\n    width: 21rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 19.6rem;\n    width: 19.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 20rem;\n    width: 20rem;\n  }\n}\n@-webkit-keyframes circle-2 {\n  0% {\n    opacity: 0;\n    margin-right: 5rem;\n    margin-top: 5rem;\n    height: 32rem;\n    width: 32rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 43rem;\n    width: 43rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 41.6rem;\n    width: 41.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 42rem;\n    width: 42rem;\n  }\n}\n@keyframes circle-2 {\n  0% {\n    opacity: 0;\n    margin-right: 5rem;\n    margin-top: 5rem;\n    height: 32rem;\n    width: 32rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 43rem;\n    width: 43rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 41.6rem;\n    width: 41.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 42rem;\n    width: 42rem;\n  }\n}\n@-webkit-keyframes small-circle-2 {\n  0% {\n    opacity: 0;\n    margin-right: 4rem;\n    margin-top: 4rem;\n    height: 22rem;\n    width: 22rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 31rem;\n    width: 31rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 29.6rem;\n    width: 29.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 30rem;\n    width: 30rem;\n  }\n}\n@keyframes small-circle-2 {\n  0% {\n    opacity: 0;\n    margin-right: 4rem;\n    margin-top: 4rem;\n    height: 22rem;\n    width: 22rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 31rem;\n    width: 31rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 29.6rem;\n    width: 29.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 30rem;\n    width: 30rem;\n  }\n}\n@-webkit-keyframes circle-3 {\n  0% {\n    opacity: 0;\n    margin-right: 7rem;\n    margin-top: 7rem;\n    height: 41rem;\n    width: 41rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 56rem;\n    width: 56rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 54.6rem;\n    width: 54.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 55rem;\n    width: 55rem;\n  }\n}\n@keyframes circle-3 {\n  0% {\n    opacity: 0;\n    margin-right: 7rem;\n    margin-top: 7rem;\n    height: 41rem;\n    width: 41rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 56rem;\n    width: 56rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 54.6rem;\n    width: 54.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 55rem;\n    width: 55rem;\n  }\n}\n@-webkit-keyframes small-circle-3 {\n  0% {\n    opacity: 0;\n    margin-right: 5rem;\n    margin-top: 5rem;\n    height: 30rem;\n    width: 30rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 41rem;\n    width: 41rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 39.6rem;\n    width: 39.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 40rem;\n    width: 40rem;\n  }\n}\n@keyframes small-circle-3 {\n  0% {\n    opacity: 0;\n    margin-right: 5rem;\n    margin-top: 5rem;\n    height: 30rem;\n    width: 30rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 41rem;\n    width: 41rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 39.6rem;\n    width: 39.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 40rem;\n    width: 40rem;\n  }\n}\n@-webkit-keyframes circle-4 {\n  0% {\n    opacity: 0;\n    margin-right: 9rem;\n    margin-top: 9rem;\n    height: 52rem;\n    width: 52rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 71rem;\n    width: 71rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 69.6rem;\n    width: 69.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 70rem;\n    width: 70rem;\n  }\n}\n@keyframes circle-4 {\n  0% {\n    opacity: 0;\n    margin-right: 9rem;\n    margin-top: 9rem;\n    height: 52rem;\n    width: 52rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 71rem;\n    width: 71rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 69.6rem;\n    width: 69.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 70rem;\n    width: 70rem;\n  }\n}\n@-webkit-keyframes small-circle-4 {\n  0% {\n    opacity: 0;\n    margin-right: 6rem;\n    margin-top: 6rem;\n    height: 36rem;\n    width: 36rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 49rem;\n    width: 49rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 47.6rem;\n    width: 47.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 48rem;\n    width: 48rem;\n  }\n}\n@keyframes small-circle-4 {\n  0% {\n    opacity: 0;\n    margin-right: 6rem;\n    margin-top: 6rem;\n    height: 36rem;\n    width: 36rem;\n  }\n  80% {\n    opacity: 1;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    height: 49rem;\n    width: 49rem;\n  }\n  90% {\n    opacity: 1;\n    margin-right: 0.2rem;\n    margin-top: 0.2rem;\n    height: 47.6rem;\n    width: 47.6rem;\n  }\n  100% {\n    opacity: 1;\n    margin-right: 0;\n    margin-top: 0;\n    height: 48rem;\n    width: 48rem;\n  }\n}\n@-webkit-keyframes planetarium-block {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes planetarium-block {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes product-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2rem);\n            transform: translateY(2rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes product-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2rem);\n            transform: translateY(2rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@-webkit-keyframes background-product-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes background-product-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes chat-in {\n  0% {\n    opacity: 0;\n    bottom: -100%;\n  }\n  100% {\n    opacity: 1;\n    bottom: -1rem;\n  }\n}\n@keyframes chat-in {\n  0% {\n    opacity: 0;\n    bottom: -100%;\n  }\n  100% {\n    opacity: 1;\n    bottom: -1rem;\n  }\n}\n@-webkit-keyframes message-in {\n  0% {\n    opacity: 0;\n    margin-bottom: -1rem;\n  }\n  80% {\n    opacity: 1;\n    margin-bottom: 0.2rem;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n@keyframes message-in {\n  0% {\n    opacity: 0;\n    margin-bottom: -1rem;\n  }\n  80% {\n    opacity: 1;\n    margin-bottom: 0.2rem;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n#first-block {\n  -webkit-animation: title-in 250ms linear;\n          animation: title-in 250ms linear;\n  -webkit-animation-delay: 1200ms;\n          animation-delay: 1200ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  opacity: 0;\n  position: relative;\n  top: -4rem;\n}\n.columns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (max-width: 1023px) {\n  .columns {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .columns [app-devices] {\n    width: 100%;\n    max-width: 48rem;\n    margin: 3rem auto 0;\n  }\n}\n.columns .column {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n@media (min-width: 1024px) {\n  .columns .column:first-of-type {\n    padding-right: 4rem;\n  }\n  .columns .column:last-of-type {\n    position: relative;\n    overflow: hidden;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 60.9rem;\n            flex: 0 0 60.9rem;\n  }\n}\n#all-in-one {\n  margin-top: 17rem;\n}\n@media (max-width: 1023px) {\n  #all-in-one {\n    margin-top: 8rem;\n  }\n}\n@media (max-width: 479px) {\n  #all-in-one {\n    margin-top: 0rem;\n  }\n}\n#all-in-one [app-h2] {\n  margin: 5rem 0 3rem;\n  text-align: left;\n}\n#all-in-one [app-h2] >>> h2 {\n  margin: 0 ;\n}\n@media (max-width: 1023px) {\n  #all-in-one [app-h2] >>> h2 {\n    margin: 0 auto;\n  }\n}\n.product {\n  position: absolute;\n  top: 7rem;\n  left: 0;\n  right: 0;\n  height: 71rem;\n  border-radius: 4px;\n  background-repeat: no-repeat !important;\n}\n.product#product-1 {\n  background-image: url(\"assets/images/lms_screen.jpg\");\n}\n.product#product-2 {\n  background-image: url(\"assets/images/lms_social.jpg\");\n  background-size: contain;\n  border: solid 1rem #EEE;\n}\n.product#product-3 {\n  background-image: url(\"assets/images/lms_screen_visio.jpg\");\n}\n.product#product-4 {\n  background-image: url(\"assets/images/lms_screen_data.jpg\");\n}\n>>> .carousel-content p {\n  height: 16rem;\n}\n.carousel-image {\n  top: 0;\n  position: relative;\n  overflow: hidden;\n}\n.carousel-image .product {\n  position: initial;\n  max-width: 100%;\n  height: 60rem;\n}\n@media (max-width: 520px) {\n  .carousel-image .product {\n    height: 40rem;\n  }\n}\n.column-block {\n  padding: 2rem 1rem;\n  cursor: pointer;\n}\n@media (max-width: 1023px) {\n  .column-block {\n    text-align: center;\n  }\n}\n.column-block.gray {\n  background: #F6F8F8;\n}\n.column-block b {\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n}\n.column-block b .icon {\n  display: inline-block;\n  margin-right: 1rem;\n}\n@media (max-width: 1023px) {\n  .column-block b .icon {\n    display: block;\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n}\n.column-block p {\n  font-size: 1.4rem;\n  line-height: 2.6rem;\n  margin-bottom: 0;\n}\n#planetarium {\n  height: 75rem;\n  width: 100%;\n  max-width: 110rem;\n  margin: 8rem 0;\n}\n@media (min-width: 1024px) {\n  #planetarium [app-h2] {\n    margin: 17rem 0 10rem;\n  }\n}\n@media (max-width: 1023px) {\n  #planetarium {\n    height: 60rem;\n    margin: 0 0 4rem;\n  }\n  #planetarium [app-h2] {\n    margin: 2rem 0 4rem;\n  }\n}\n#planetarium >>> [app-planetarium] .circle {\n  opacity: 0;\n}\n#planetarium >>> [app-planetarium] #circle-0 {\n  -webkit-animation: circle-0 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n          animation: circle-0 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n}\n@media (max-width: 1023px) {\n  #planetarium >>> [app-planetarium] #circle-0 {\n    -webkit-animation: small-circle-0 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n            animation: small-circle-0 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n  }\n}\n#planetarium >>> [app-planetarium] #circle-1 {\n  -webkit-animation: circle-1 2.1s cubic-bezier(0.6, 0.4, 0.6, 1.35) forwards;\n          animation: circle-1 2.1s cubic-bezier(0.6, 0.4, 0.6, 1.35) forwards;\n}\n@media (max-width: 1023px) {\n  #planetarium >>> [app-planetarium] #circle-1 {\n    -webkit-animation: small-circle-1 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n            animation: small-circle-1 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n  }\n}\n#planetarium >>> [app-planetarium] #circle-2 {\n  -webkit-animation: circle-2 2.2s cubic-bezier(0.6, 0.4, 0.6, 1.4) forwards;\n          animation: circle-2 2.2s cubic-bezier(0.6, 0.4, 0.6, 1.4) forwards;\n}\n@media (max-width: 1023px) {\n  #planetarium >>> [app-planetarium] #circle-2 {\n    -webkit-animation: small-circle-2 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n            animation: small-circle-2 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n  }\n}\n#planetarium >>> [app-planetarium] #circle-3 {\n  -webkit-animation: circle-3 2.3s cubic-bezier(0.6, 0.4, 0.6, 1.45) forwards;\n          animation: circle-3 2.3s cubic-bezier(0.6, 0.4, 0.6, 1.45) forwards;\n}\n@media (max-width: 1023px) {\n  #planetarium >>> [app-planetarium] #circle-3 {\n    -webkit-animation: small-circle-3 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n            animation: small-circle-3 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n  }\n}\n#planetarium >>> [app-planetarium] #circle-4 {\n  -webkit-animation: circle-4 2.4s cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n          animation: circle-4 2.4s cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n}\n@media (max-width: 1023px) {\n  #planetarium >>> [app-planetarium] #circle-4 {\n    -webkit-animation: small-circle-4 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n            animation: small-circle-4 2s cubic-bezier(0.6, 0.4, 0.6, 1.3) forwards;\n  }\n}\n#planetarium .planetarium-blocks {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (max-width: 1023px) {\n  #planetarium .planetarium-blocks {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0 1rem;\n  }\n}\n#planetarium .planetarium-block {\n  width: 100%;\n  max-width: 47rem;\n  min-height: 19rem;\n  padding: 2rem;\n  opacity: 0;\n  -webkit-animation: planetarium-block 2s forwards;\n          animation: planetarium-block 2s forwards;\n  background: -webkit-linear-gradient(top, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%);\n  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%);\n  box-shadow: 0 1px 12px 0 rgba(222, 222, 222, 0.5);\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  margin: auto;\n}\n@media (min-width: 1024px) {\n  #planetarium .planetarium-block#share-collaborate {\n    margin-right: 4rem;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n  }\n  #planetarium .planetarium-block#network {\n    margin-left: 4rem;\n    -webkit-animation-delay: 2.5s;\n            animation-delay: 2.5s;\n  }\n}\n@media (max-width: 1023px) {\n  #planetarium .planetarium-block {\n    padding: 2rem 1rem 1rem;\n    text-align: center;\n  }\n  #planetarium .planetarium-block#share-collaborate {\n    margin-bottom: 2rem;\n  }\n}\n#planetarium .planetarium-block b {\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n}\n#planetarium .planetarium-block p {\n  font-size: 1.4rem;\n  line-height: 2.6rem;\n}\n@media (min-width: 1024px) {\n  #everywhere {\n    margin-left: 0;\n    margin-right: 0;\n    text-align: left;\n  }\n  #everywhere >>> h2 {\n    margin: 0;\n  }\n}\n@media (max-width: 1023px) {\n  #everywhere {\n    margin-top: 0;\n  }\n  [app-devices] {\n    margin: 4rem 0 !important;\n  }\n}\n@media (max-width: 479px) {\n  #everywhere {\n    margin: 4rem 0 2rem;\n  }\n}\n#ready {\n  margin-bottom: 12rem;\n}\n#ready [app-h2] {\n  margin: 12rem 0 2rem;\n}\n@media (max-width: 1023px) {\n  #ready [app-h2] {\n    margin-top: 2rem;\n  }\n}\n#ready p {\n  font-size: 1.6rem;\n  margin-bottom: 4rem;\n}\n#ready .button {\n  font-size: 1.4rem;\n}\n#ready .button:first-of-type {\n  margin-right: 4rem;\n}\n@media (max-width: 1023px) {\n  #ready {\n    margin-bottom: 8rem;\n  }\n}\nbutton {\n  padding: 0 4rem;\n}\n@media (max-width: 1023px) {\n  button#create-account {\n    margin-bottom: 2rem;\n  }\n}\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes fade-in-from-right {\n  0% {\n    left: 100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes fade-in-from-right {\n  0% {\n    left: 100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes fade-in-from-left {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes fade-in-from-left {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes fade-out-to-left {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@keyframes fade-out-to-left {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@-webkit-keyframes fade-out-to-right {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@keyframes fade-out-to-right {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: 100%;\n  }\n}\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n:host >>> .carousel {\n  width: 100%;\n  overflow: hidden;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n:host >>> .carousel .carousel-content {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n:host >>> .carousel .carousel-content {\n  position: relative;\n}\n:host >>> .carousel [carousel-page] {\n  width: 100%;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n:host >>> .carousel [carousel-page].hide * {\n  -webkit-animation: none !important;\n          animation: none !important;\n}\n:host >>> .carousel [carousel-page].shown.from-right {\n  left: 0;\n  position: relative;\n  -webkit-animation: fade-in-from-right 1000ms ease-in-out;\n          animation: fade-in-from-right 1000ms ease-in-out;\n}\n:host >>> .carousel [carousel-page].shown:not(.from-right) {\n  left: 0;\n  position: relative;\n  -webkit-animation: fade-in-from-left 1000ms ease-in-out;\n          animation: fade-in-from-left 1000ms ease-in-out;\n}\n:host >>> .carousel [carousel-page].previous.to-left {\n  -webkit-animation: fade-out-to-left 1000ms ease-in-out;\n          animation: fade-out-to-left 1000ms ease-in-out;\n}\n:host >>> .carousel [carousel-page].previous:not(.to-left) {\n  -webkit-animation: fade-out-to-right 1000ms ease-in-out;\n          animation: fade-out-to-right 1000ms ease-in-out;\n}\n:host >>> .carousel [carousel-page].hide {\n  left: 100%;\n  position: absolute;\n}\n.carousel-pagination {\n  margin: 4rem auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.carousel-pagination .pagination-point {\n  width: 0.9rem;\n  height: 0.9rem;\n  border-radius: 50%;\n  background: #D7D7E2;\n  margin-right: 3rem;\n  cursor: pointer;\n}\n.carousel-pagination .pagination-point:last-of-type {\n  margin-right: 0;\n}\n.carousel-pagination .pagination-point.selected {\n  background: #0DAFAC;\n}\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes computer-in {\n  0% {\n    bottom: -2rem;\n    opacity: 0;\n  }\n  100% {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n@keyframes computer-in {\n  0% {\n    bottom: -2rem;\n    opacity: 0;\n  }\n  100% {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes browser-in {\n  0% {\n    bottom: 1.5rem;\n    opacity: 0;\n  }\n  100% {\n    bottom: 5.5rem;\n    opacity: 1;\n  }\n}\n@keyframes browser-in {\n  0% {\n    bottom: 1.5rem;\n    opacity: 0;\n  }\n  100% {\n    bottom: 5.5rem;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes tablet-in {\n  0% {\n    top: 4rem;\n    opacity: 0;\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n  80% {\n    top: -0.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  90% {\n    top: 0.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  100% {\n    top: 0rem;\n    opacity: 1;\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n}\n@keyframes tablet-in {\n  0% {\n    top: 4rem;\n    opacity: 0;\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n  80% {\n    top: -0.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  90% {\n    top: 0.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  100% {\n    top: 0rem;\n    opacity: 1;\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n}\n@-webkit-keyframes mobile-in {\n  0% {\n    bottom: 8rem;\n    opacity: 0;\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n  80% {\n    bottom: 12.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  90% {\n    bottom: 11.9rem;\n    opacity: 1;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    bottom: 12rem;\n    opacity: 1;\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n}\n@keyframes mobile-in {\n  0% {\n    bottom: 8rem;\n    opacity: 0;\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n  80% {\n    bottom: 12.1rem;\n    opacity: 1;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  90% {\n    bottom: 11.9rem;\n    opacity: 1;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    bottom: 12rem;\n    opacity: 1;\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n}\n:host {\n  position: relative;\n  height: 45.5rem;\n  width: 56rem;\n}\n@media (max-width: 1023px) {\n  :host {\n    width: 46rem;\n    height: 35rem;\n  }\n}\n@media (max-width: 479px) {\n  :host {\n    width: 30rem;\n    height: 22rem;\n  }\n}\n.computer {\n  position: absolute;\n  width: 56rem;\n  left: calc(50% - 28rem);\n  bottom: 0;\n  z-index: 0;\n  opacity: 0;\n  -webkit-animation: computer-in 250ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n          animation: computer-in 250ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n}\n@media (max-width: 1023px) {\n  .computer {\n    width: 46rem;\n    left: calc(50% - 23rem);\n  }\n}\n@media (max-width: 479px) {\n  .computer {\n    width: 30rem;\n    left: calc(50% - 15rem);\n  }\n}\n.window-computer {\n  position: absolute;\n  z-index: 2;\n  width: 16rem;\n  height: 14rem;\n  bottom: 9rem;\n  right: calc(50% - 8rem);\n}\n@media (max-width: 1023px) {\n  .window-computer {\n    width: 14rem;\n    height: 10rem;\n    bottom: 8rem;\n    right: calc(50% - 7rem);\n  }\n}\n@media (max-width: 479px) {\n  .window-computer {\n    width: 10rem;\n    height: 6rem;\n    bottom: 5.5rem;\n    right: calc(50% - 5rem);\n  }\n  .window-computer >>> .not-desktop {\n    display: none;\n  }\n}\n.browser {\n  position: absolute;\n  width: 35rem;\n  z-index: 1;\n  left: calc(50% - 17.5rem);\n  bottom: 5.5rem;\n  opacity: 0;\n  -webkit-animation: browser-in 250ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n          animation: browser-in 250ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n}\n@media (max-width: 1023px) {\n  .browser {\n    width: 26rem;\n    left: calc(50% - 13rem);\n  }\n}\n@media (max-width: 479px) {\n  .browser {\n    width: 16rem;\n    top: 7.5rem;\n    left: calc(50% - 8rem);\n  }\n}\n.tablet {\n  position: absolute;\n  z-index: 3;\n  width: 27rem;\n  z-index: 2;\n  right: calc(25% - 12.5rem);\n  top: 0;\n  opacity: 0;\n  -webkit-animation: tablet-in 300ms 1s cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n          animation: tablet-in 300ms 1s cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n}\n@media (max-width: 1023px) {\n  .tablet {\n    width: 20rem;\n    right: 5rem;\n    top: 2.5rem;\n  }\n}\n@media (max-width: 479px) {\n  .tablet {\n    width: 12rem;\n    right: 2rem;\n  }\n}\n.window-tablet {\n  position: absolute;\n  z-index: 4;\n  width: 16rem;\n  height: 14rem;\n  top: 11.5rem;\n  right: calc(25% - 7rem);\n  -webkit-transform: rotate(4deg);\n          transform: rotate(4deg);\n}\n@media (max-width: 1023px) {\n  .window-tablet {\n    top: 9rem;\n    height: 10rem;\n    width: 12rem;\n    right: 9rem;\n  }\n}\n@media (max-width: 479px) {\n  .window-tablet {\n    top: 3.5rem;\n    height: 10rem;\n    width: 8rem;\n    right: 4rem;\n  }\n}\n.mobile-phone {\n  position: absolute;\n  z-index: 3;\n  width: 15rem;\n  z-index: 2;\n  left: calc(30% - 10.5rem);\n  bottom: 10rem;\n  -webkit-transform: rotate(-4deg);\n          transform: rotate(-4deg);\n  opacity: 0;\n  -webkit-animation: mobile-in 300ms 500ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n          animation: mobile-in 300ms 500ms cubic-bezier(0.6, 0.4, 0.6, 1.5) forwards;\n}\n@media (max-width: 1023px) {\n  .mobile-phone {\n    width: 12rem;\n    left: 6.5rem;\n    top: 4rem;\n  }\n}\n@media (max-width: 479px) {\n  .mobile-phone {\n    width: 7rem;\n    left: 3.5rem;\n    top: 1rem;\n  }\n}\n.window-mobile {\n  position: absolute;\n  z-index: 4;\n  width: 10rem;\n  height: 13rem;\n  top: 12.5rem;\n  left: calc(30% - 8rem);\n  -webkit-transform: rotate(-4deg);\n          transform: rotate(-4deg);\n}\n@media (max-width: 1023px) {\n  .window-mobile {\n    top: 10rem;\n    height: 10rem;\n    width: 8rem;\n    left: 8.5rem;\n  }\n}\n@media (max-width: 479px) {\n  .window-mobile {\n    top: 4rem;\n    height: 7rem;\n    width: 4rem;\n    left: 5rem;\n  }\n}\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes window-in {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    padding: 2rem 1rem;\n  }\n}\n@keyframes window-in {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    padding: 2rem 1rem;\n  }\n}\n@-webkit-keyframes circle-in {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n    left: 50%;\n  }\n  100% {\n    width: 2.5rem;\n    height: 2.5rem;\n    top: -1.25rem;\n    left: calc(50% - 1.25rem);\n    opacity: 1;\n  }\n}\n@keyframes circle-in {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n    left: 50%;\n  }\n  100% {\n    width: 2.5rem;\n    height: 2.5rem;\n    top: -1.25rem;\n    left: calc(50% - 1.25rem);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes circle-in-mobile {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n    left: 50%;\n  }\n  100% {\n    width: 1.5rem;\n    height: 1.5rem;\n    top: -0.75rem;\n    left: calc(50% - 0.75rem);\n    opacity: 1;\n  }\n}\n@keyframes circle-in-mobile {\n  0% {\n    width: 0;\n    height: 0;\n    top: 0;\n    opacity: 0;\n    left: 50%;\n  }\n  100% {\n    width: 1.5rem;\n    height: 1.5rem;\n    top: -0.75rem;\n    left: calc(50% - 0.75rem);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes gray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 50%;\n  }\n  100% {\n    width: 100%;\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@keyframes gray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 50%;\n  }\n  100% {\n    width: 100%;\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@-webkit-keyframes small-gray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 25%;\n  }\n  100% {\n    width: calc(100% - 8.2rem);\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@keyframes small-gray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 25%;\n  }\n  100% {\n    width: calc(100% - 8.2rem);\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@-webkit-keyframes button-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-right: 2.1rem;\n  }\n  100% {\n    width: 4.2rem;\n    opacity: 1;\n    margin-right: 0;\n  }\n}\n@keyframes button-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-right: 2.1rem;\n  }\n  100% {\n    width: 4.2rem;\n    opacity: 1;\n    margin-right: 0;\n  }\n}\n@-webkit-keyframes button-in-mobile {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-right: 2.1rem;\n  }\n  100% {\n    width: 2rem;\n    opacity: 1;\n    margin-right: 0;\n  }\n}\n@keyframes button-in-mobile {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-right: 2.1rem;\n  }\n  100% {\n    width: 2rem;\n    opacity: 1;\n    margin-right: 0;\n  }\n}\n@-webkit-keyframes darkgray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 25%;\n  }\n  100% {\n    width: 50%;\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n@keyframes darkgray-line-in {\n  0% {\n    width: 0;\n    opacity: 0;\n    margin-left: 25%;\n  }\n  100% {\n    width: 50%;\n    opacity: 1;\n    margin-left: 0;\n  }\n}\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.window-content {\n  width: 0;\n  height: 0;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 4px 0 #CECECE;\n  border-radius: 2px;\n  position: relative;\n  margin: auto;\n  -webkit-animation: window-in 500ms 1500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: window-in 500ms 1500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.circle {\n  background-color: #CBCBCB;\n  border-radius: 50%;\n  height: 2.5rem;\n  width: 2.5rem;\n  left: calc(50% - 1.25rem);\n  top: -1.25rem;\n  position: absolute;\n  -webkit-animation: circle-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: circle-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n  opacity: 0;\n}\n@media (max-width: 1023px) {\n  .circle {\n    height: 1.5rem;\n    width: 1.5rem;\n    left: calc(50% - 0.75rem);\n    top: -0.75rem;\n    -webkit-animation: circle-in-mobile 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n            animation: circle-in-mobile 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n  }\n}\n.gray-line {\n  border-radius: 100px;\n  height: 0.8rem;\n  width: 100%;\n  background-color: #E8E8E8;\n  margin-bottom: 1rem;\n  -webkit-animation: gray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: gray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n  opacity: 0;\n}\n@media (max-width: 1023px) {\n  .gray-line {\n    height: 0.4rem;\n    margin-bottom: 0.5rem;\n  }\n}\n.gray-line.first {\n  margin-bottom: 2rem;\n}\n@media (max-width: 1023px) {\n  .gray-line.first {\n    margin-bottom: 0.5rem;\n  }\n}\n.gray-line.small {\n  margin-right: 4rem;\n  height: 0.4rem;\n  width: calc(100% - 8.2rem);\n  position: absolute;\n  bottom: 0.5rem;\n  left: 1rem;\n  float: left;\n  -webkit-animation: small-gray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: small-gray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.darkgray-line {\n  border-radius: 100px;\n  height: 0.4rem;\n  width: 50%;\n  background-color: #BABABA;\n  margin-bottom: 0.5rem;\n  -webkit-animation: darkgray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: darkgray-line-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n  opacity: 0;\n}\n.button {\n  background-color: #0DAFAC;\n  width: 4.2rem;\n  height: 1.2rem;\n  border-radius: 2px;\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  float: right;\n  opacity: 0;\n  -webkit-animation: button-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: button-in 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n@media (max-width: 1023px) {\n  .button {\n    bottom: 0.5rem;\n    height: 0.8rem;\n    -webkit-animation: button-in-mobile 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n            animation: button-in-mobile 500ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n  }\n}\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n:host {\n  width: 100%;\n  background-color: #3B3E48;\n  color: #FFF;\n  padding: 6rem 8rem;\n  font-size: 1.4rem;\n  font-weight: 300;\n  line-height: 3rem;\n}\n@media (max-width: 1100px) {\n  :host {\n    padding: 5rem 1rem;\n  }\n}\n:host .footer-content {\n  width: 100%;\n  max-width: 110rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n}\n:host .footer-content a,\n:host .footer-content a:hover {\n  color: white;\n  text-decoration: none;\n}\n:host .footer-content .dropdown-toggle {\n  height: 5rem;\n  line-height: 5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0 1rem;\n  border: solid 1px #FFF;\n  border-radius: 2px;\n  padding: 0 1rem;\n  font-size: 1.6rem;\n}\n:host .footer-content .dropdown-toggle .text {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n:host .footer-content .dropdown-toggle .chevron:before {\n  height: 0.5rem;\n  width: 0.5rem;\n  border-width: 0.3rem 0.3rem 0 0;\n  margin: 1.75rem 1rem 0 0;\n}\n:host .footer-content .dropdown-content {\n  position: absolute;\n  bottom: 0rem;\n  right: 0;\n  left: 0;\n  z-index: 5;\n}\n:host .footer-content .dropdown-content > div:last-of-type {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 8rem 0 1rem;\n  text-align: center;\n  font-size: 1.4rem;\n  font-weight: 300;\n  height: 22.5rem;\n}\n:host .footer-content .dropdown-content > div:last-of-type img {\n  margin: -6.1rem auto 1rem;\n}\n:host .footer-content .dropdown-content > div:last-of-type p {\n  margin: 0;\n  height: 4rem;\n  line-height: 4rem;\n}\n@media (max-width: 1023px) {\n  :host .footer-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n:host .footer-content .mobile-footer {\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n:host .footer-content .mobile-footer a {\n  clear: both;\n}\n:host .footer-content .mobile-footer a span {\n  margin-right: 2rem;\n}\n:host .footer-content .mobile-footer a:last-of-type > span {\n  margin-right: 0 !important;\n}\n.footer-column {\n  padding: 0 1rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n.footer-column:first-of-type {\n  border-right: solid 1px #585D6E;\n  width: 46rem;\n  margin-right: 2rem;\n}\n@media (max-width: 1100px) {\n  .footer-column:first-of-type {\n    width: 26rem;\n    padding-right: 4rem;\n  }\n}\n@media (max-width: 1023px) {\n  .footer-column:first-of-type {\n    text-align: center;\n    border-width: 0;\n    padding: 0;\n    width: 100%;\n  }\n}\n.footer-column .footer-title {\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n.footer-column .footer-title a,\n.footer-column .footer-title a:visited {\n  color: #FFF;\n  text-decoration: none;\n}\n.footer-column ul {\n  margin: 0;\n  padding: 0;\n}\n.footer-column ul li {\n  list-style: none;\n  cursor: pointer;\n  font-weight: 300;\n  line-height: 4rem;\n}\n.footer-logo {\n  height: 2rem;\n}\n.social-media {\n  font-size: 1.6rem;\n  cursor: pointer;\n  float: left;\n  margin-right: 2rem;\n}\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes h2-line {\n  0% {\n    width: 6rem;\n  }\n  100% {\n    width: 8rem;\n  }\n}\n@keyframes h2-line {\n  0% {\n    width: 6rem;\n  }\n  100% {\n    width: 8rem;\n  }\n}\n@-webkit-keyframes h2-text {\n  0% {\n    padding-left: 0rem;\n  }\n  100% {\n    padding-left: 2rem;\n  }\n}\n@keyframes h2-text {\n  0% {\n    padding-left: 0rem;\n  }\n  100% {\n    padding-left: 2rem;\n  }\n}\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 5rem 0;\n}\n.blue-line {\n  border-radius: 2px;\n  background-color: #c4f4f4;\n  position: absolute;\n  top: 1.4rem;\n  left: 0;\n  width: 9rem;\n  height: 0.8rem;\n  -webkit-animation: h2-line 2s ease-in;\n          animation: h2-line 2s ease-in;\n  z-index: -1;\n}\nh2 {\n  line-height: 3.4rem;\n  font-size: 2.4rem;\n  font-weight: bold;\n  padding-left: 2rem;\n  -webkit-animation: h2-text 2s;\n          animation: h2-text 2s;\n  margin: 0 auto;\n  position: relative;\n}\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 110rem;\n  margin: 3rem auto 0 auto;\n  padding: 0 1rem;\n}\n:host a,\n:host a:hover {\n  color: #3C3F48;\n  text-decoration: none;\n}\n:host .header-logo {\n  margin-right: auto;\n  margin-left: 1rem;\n  cursor: pointer;\n}\n@media (max-width: 1024px) {\n  :host .header-logo {\n    margin: 0 auto;\n  }\n}\n:host .header-menu {\n  margin: 0;\n}\n:host .header-menu .menu-icon {\n  position: absolute;\n  top: 3rem;\n  left: 2.5rem;\n  cursor: pointer;\n}\n:host .header-menu .dropdown-toggle {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n:host .header-menu .dropdown-content {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n}\n:host .header-menu .dropdown-content .menu-icon {\n  top: 3rem;\n}\n:host .header-menu .dropdown-content > div:first-of-type {\n  padding: 1rem 0;\n  height: 8.5rem;\n}\n:host .header-menu .dropdown-content .menu-logo {\n  height: 3rem;\n  margin-top: 2rem;\n}\n:host .header-menu .dropdown-content .bar {\n  background: #FFF;\n}\n:host .header-menu .bar {\n  height: 0.2rem;\n  width: 4rem;\n  background: #000;\n}\n:host .header-menu .bar:not(:last-of-type) {\n  margin-bottom: 1rem;\n}\n:host .header-menu li {\n  font-size: 1.4rem;\n  line-height: 1.9rem;\n  font-weight: 600;\n  text-align: center;\n  color: #3C3F48;\n  list-style: none;\n  display: inline-block;\n  margin-right: 2.5rem;\n  cursor: pointer;\n}\n:host .header-menu li.current {\n  color: #0DAFAC;\n}\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n:host {\n  position: absolute;\n  z-index: -1;\n  left: 0;\n}\n#animation-layout {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.circle {\n  border-radius: 50%;\n  border: solid 1px #e2e2e2;\n  box-shadow: -5px 5px 30px 0px rgba(0, 0, 0, 0.1);\n  position: absolute;\n  opacity: 1;\n  z-index: -3;\n}\n.particle {\n  border-radius: 50%;\n  border-style: solid;\n  border-color: #0DAFAC;\n  width: 0;\n  right: 0;\n  top: 0;\n  height: 0;\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: -2;\n  overflow: visible;\n  box-sizing: content-box;\n}\n.particle > .particle {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n  border-color: white;\n  box-sizing: border-box;\n}\n.particle .white {\n  border-color: #0DAFAC;\n  background: #FFF;\n}\n.particle.gray {\n  border-color: #5d5e63;\n}\n.particle.gray .white {\n  border-color: #5d5e63;\n  background: #FFF;\n}\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes title-in {\n  0% {\n    opacity: 0;\n    top: -4rem;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@-webkit-keyframes wave-in {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  80% {\n    top: 38rem;\n    opacity: 1;\n  }\n  90% {\n    top: 36.5rem;\n    opacity: 1;\n  }\n  100% {\n    top: 37rem;\n    opacity: 1;\n  }\n}\n@keyframes wave-in {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  80% {\n    top: 38rem;\n    opacity: 1;\n  }\n  90% {\n    top: 36.5rem;\n    opacity: 1;\n  }\n  100% {\n    top: 37rem;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes background-in {\n  0% {\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    height: 50rem;\n    opacity: 1;\n  }\n}\n@keyframes background-in {\n  0% {\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    height: 50rem;\n    opacity: 1;\n  }\n}\n:host {\n  z-index: -3;\n  top: -8rem;\n  right: 0;\n  left: 0;\n  position: absolute;\n  height: 50rem;\n}\n.waves {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.wave {\n  top: 0;\n  opacity: 0;\n  width: 100%;\n  position: absolute;\n  height: 13rem;\n}\n.background {\n  height: 30rem;\n  width: 100%;\n  position: absolute;\n  fill: #faffff;\n  opacity: 0;\n  -webkit-animation: background-in 1000ms 150ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: background-in 1000ms 150ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-1 {\n  fill: #eafbfb;\n  -webkit-animation: wave-in 1250ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in 1250ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-2 {\n  fill: #e0f8f8;\n  -webkit-animation: wave-in 1150ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in 1150ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-3 {\n  fill: #d1f2f2;\n  -webkit-animation: wave-in 1050ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in 1050ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-1-mobile {\n  fill: #eafbfb;\n  -webkit-animation: wave-in 1250ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in 1250ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-2-mobile {\n  fill: #e0f8f8;\n  -webkit-animation: wave-in 1150ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in 1150ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n.wave-3-mobile {\n  fill: #d1f2f2;\n  -webkit-animation: wave-in 1050ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n          animation: wave-in 1050ms 300ms cubic-bezier(0.6, 0.4, 0.6, 1.1) forwards;\n}\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<div app-wave></div>\n<div id=\"monaco-background\" app-fade-in [delay]=\"2500\">\n    <div id=\"background\"></div>\n</div>\n<div class=\"block\" id=\"first-block\">\n    <h1>The world is a campus.</h1>\n    <p>\n        <b>Technology</b> is revolutionizing the way we <b>learn</b> and <b>engage</b> with others.\n    </p>\n    \n</div>\n<div class=\"block\" id=\"first-paragraph\" app-fade-in [delay]=\"2000\">\n    <p>\n        In a more than ever connected world, we believe that innovation drives value creation through platforms, people and technology. <br/>\n        We at <b>Twic</b> believe  that &laquo;the world is a campus&raquo;.\n    </p>\n    <p>\n        <b>Monaco</b> is where our very internationally diverse team happens to be. While home to over <b>130 nationalities</b>, the \n        <b>Principality of Monaco</b> has for many years been working towards and promoting a better world, placing the \n        <b>United Nations Millenium Development Goals</b> at the heart of its foreign policy.\n</div>\n<div class=\"block\" id=\"adress\" app-fade-in  [delay]=\"2000\">\n    <img class=\"twic-logo\"  src=\"assets/images/Logo.svg\"/>\n    <div class=\"by\">by</div>\n    <img class=\"studnet-logo\"  src=\"assets/images/studnet.png\"/>\n    <div>THE STUDNET SAM</div>\n    <div>Gildo Pastor Center</div>\n    <div>7, rue du Gabian, 98000 Monaco</div>\n    <div>contact@thestudnet.com</div>\n    <img class=\"monaco-logo\"  src=\"assets/images/monaco.png\"/>\n    <div class=\"monaco-sentence\">Playing a special role ine the world.</div>\n</div>"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<header app-header></header>\n<router-outlet></router-outlet>\n<footer app-footer></footer>"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<div app-wave></div>\n<div class=\"block\" id=\"first-block\">\n    <h1>Start your free trial.</h1>\n    <p>\n        No <b>credit card</b> required.\n    </p>\n    \n</div>\n<div app-h2 id=\"sign-up-now\" app-fade-in [delay]='2000'>{{ !process ? \"Sign Up Now\" : \"Sign up done!\" }}</div>\n<form id=\"form\" class=\"block\" [@form]=\"normal\"\n      *ngIf=\"!process\" app-fade-in [delay]='2000' (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n    <div class=\"form-block\">\n        <label for=\"firstName\">First Name</label>\n        <input #firstName name=\"firstName\" ngModel required />\n    </div>\n    <div class=\"form-block\">\n        <label for=\"lastName\">Last Name</label>\n        <input #lastName name=\"lastName\" ngModel required />\n    </div>\n    <div class=\"form-block\">\n        <label for=\"institution\">Institution Name</label>\n        <input #institution name=\"institution\" ngModel required />\n    </div>\n    <div class=\"form-block\">\n        <label for=\"email\">Email Address</label>\n        <input #email name=\"email\" type=\"email\" ngModel required/>\n    </div>\n    <button class=\"button\" type=\"submit\">Create your Account</button>\n</form>\n<div class=\"block processed-block\" *ngIf=\"process\" [ngClass]=\"{ animate : process }\">\n    <img src=\"assets/images/tick.svg\"/>\n    <p>\n        Your form was successfully submitted. Our Account Manager will be in touch within the next 12 hours !\n    </p>\n</div>"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<div app-planetarium \n     [circles]=\"circles\" \n     [center]=\"[0, 50]\" [nbParticles]=\"15\" \n     [size]=\"[0,800]\"\n     ></div>\n<h1>The Social Learning Environment<span class=\"blue\"><b>*</b></span> for <span class=\"no-break\">B-Schools.</span></h1>\n<div class=\"block\" app-fade-in>\n    <p>\n        <span class=\"blue\"><b>*</b></span><b>Engagement</b> is <u>the key in a digital environment</u>.<br class='desktop'/> \n        This is why we have designed a technology combining an intuitive <br class='desktop'/>\n        Learning Management System with 21st-Century social networking features.\n    </p>\n    <button class=\"button\" [routerLink]=\"['/product']\">See Our Product<span class=\"chevron right\"></span></button>\n</div>\n<div class=\"block citation-block\" app-fade-in>\n    <div class=\"portrait\"></div>\n    <div class=\"citation\">\n        <div class=\"quote\">“</div>\n        <div class=\"citation-content\">THE POWER OF NETWORKED EDUCATION</div>\n        <p>\n            <b>Edward Snyder</b>, Dean of Yale School of Management\n        </p>\n        <p class=\"poets-paragraph\">\n            ‘Dean of the year 2015’ by <img class=\"poets\" src=\"assets/images/Poets-Quants-logo.jpg\" />\n        </p>\n\n    </div>\n</div>\n<div class=\"block small-text\" app-fade-in>\n    THEY TRUST US\n</div>\n<!--<div app-carousel app-fade-in  (window:resize)=\"onResize($event)\" [ratio]=\"0.8\" [time]=\"[15000, 10000]\" >\n    <div carousel-page *ngFor=\"let page of pages\">\n         <div class=\"schools\">\n            <div class=\"school\" *ngFor=\"let school of page\">\n                <img src=\"{{ school }}\"/>                    \n            </div>\n        </div>\n    </div>\n</div>-->\n<div id=\"gnam\" app-fade-in></div>\n<div id=\"gnam-desc\" app-fade-in>\n    <b>Multiply connections, build global capabilities, exceed boundaries.</b>\n   \n    <p>\n        Founded by Yale School of Management, the Global Network for Advanced Management includes 29 leading business schools from diverse regions, countries, cultures, and\n        economies in different phases of development.\n    </p>\n    <p>\n        Leveraging network efficiencies, utilizing new technologies, building strong institutional and personal relationships, the Global Network is\n        having a transformational effect on students, member schools, management education, and beyond.\n    </p>\n</div>\n       "

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<div app-wave></div>\n<div class=\"block\" id=\"first-block\">\n    <h1>Transparent pricing.</h1>\n    <p>\n        Whatever the plan, <b>Twic</b> is a no-brainer.<br/>\n        An all inclusive approach. No hidden fees.\n    </p>\n    \n</div>\n<div app-h2 id=\"choose-you-plan\" app-fade-in [delay]='1500'>Choose your plan</div>\n<div class=\"block table-block\" app-fade-in [delay]='1500'>\n    <div class=\"table\">\n        <div class=\"white column\">\n            <div class=\"title\">0-200 users*</div>\n            <div class=\"price\">\n                <span class=\"euro\">8&euro;</span> / month / user\n            </div>\n            <div class=\"lines\">\n                <div class=\"line\">\n                    12-month contract\n                </div>\n            </div>\n        </div>\n        <div class=\"white column\">\n            <div class=\"title\">201-500 users*</div>\n            <div class=\"price\">\n                <span class=\"euro\">6&euro;</span> / month / user\n            </div>\n            <div class=\"lines\">\n                <div class=\"line\">\n                   12-month contract\n                </div>\n            </div>\n                \n        </div>\n        <div class=\"gray column\">\n            <div class=\"title\">+ 500 users*</div>\n            <div class=\"price\">\n                <div class=\"title\"><a href=\"mailto:contact@thestudnet.com\">Contact us</a></div>\n            </div>\n            <div class=\"lines\">\n                <div class=\"line\">\n                    3-year contract\n                </div>\n            </div>\n                \n        </div>\n    </div>\n    <i class=\"anotation\">*Faculty, students or staff</i>\n</div>\n<div class=\"block\" id=\"our-pricing\" app-fade-in [delay]='1500'>\n    <p>\n        Our pricing includes all features, unlimited usage.\n    </p>\n</div>\n\n\n<div class='block' id='features' app-fade-in>\n    <div app-h2>\n        All features\n    </div>\n    <li>\n        <ul><span class=\"icon icon-checkmark\"></span>Intuitive Learning Management System</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>Collaborative learning and social networking features</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>Videoconferencing system</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>Data collection and graphic analytics</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>24/7 support (chat and hotline)</ul>\n        <ul><span class=\"icon icon-checkmark\"></span>Custom integration and branding</ul>\n    </li>\n</div>\n\n<div class='block' id='try-our-product' app-fade-in>\n    <p>\n        <b>Try Twic for free</b><br/>\n         No credit card required.\n    </p>\n    <button class='button' [routerLink]=\"['/contact-us']\">\n        Start your free trial\n    </button>\n</div>\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "<div app-wave></div>\n<div class=\"block\" id=\"first-block\">\n    <h1>Higher Education in the 21st-Century.</h1>\n    <p>\n        <b>Twic</b>, the power of <b>networked education</b> on a single Social Learning Environment... Everywhere and anytime.\n    </p>\n    \n</div>\n<div class=\"desktop columns\" id=\"all-in-one\">\n    <div class=\"column\" app-fade-in [delay]='1500'>\n        <div app-h2>All-in-one platform</div>\n        <div  class=\"column-block\" [ngClass]=\"{ gray : productIndex === 0 }\" (click)=\"changeProductNumber(0)\">\n            <b>Learning Management System</b>\n            <p>\n                We are committed to being on the cutting edge of\n                innovation in higher education. Our intuitive\n                L.M.S enables to distribute online, blended courses over the internet as well as \n                to augment on-campus teaching in a brick and mortar environment.</p>\n        </div>\n        <div  class=\"column-block\" [ngClass]=\"{ gray : productIndex === 1 }\" (click)=\"changeProductNumber(1)\">\n            <b>Social networking features</b>\n            <p>\n                Our disruptive technology allows to create a connected, engaged and \n                collaborative learning experience for students and faculty inside and outside the classroom.\n            </p>\n        </div>\n        <div  class=\"column-block\" [ngClass]=\"{ gray : productIndex === 2 }\" (click)=\"changeProductNumber(2)\">\n            <b>Videoconferencing system</b>\n            <p>\n               Our all-in-one platform make it easy to launch one-on- one, group calls or live classes without \n               needing to open another app or share invite links.\n            </p>\n        </div>\n        <div  class=\"column-block\" [ngClass]=\"{ gray : productIndex === 3 }\" (click)=\"changeProductNumber(3)\">\n            <b>Data collection</b>\n            <p>\n               We use the latest forward-looking techniques in human-computer \n               interaction, and sophisticated algorithms to measure online engagement.\n            </p>\n        </div>\n    </div>\n    <div class=\"column\" app-fade-in  [delay]='1500'>\n        <div class=\"product\" id=\"product-1\" *ngIf=\"productIndex === 0\"></div>\n        <div class=\"product\" id=\"product-2\" *ngIf=\"productIndex === 1\"></div>\n        <div class=\"product\" id=\"product-3\" *ngIf=\"productIndex === 2\"></div>\n        <div class=\"product\" id=\"product-4\" *ngIf=\"productIndex === 3\"></div>\n    </div>\n</div>\n\n<div class=\"columns mobile\" id=\"all-in-one\" app-fade-in [delay]='1500'>\n    <div class=\"column\">\n        <div app-h2>All-in-one platform</div>\n        \n        <div app-carousel [time]=\"10000\" >\n            \n            <div  carousel-page class=\"column-block\">\n                <b>Learning Management System</b>\n                <p>\n                    We are committed to being on the cutting edge of\n                    innovation in higher education. Our intuitive\n                    L.M.S enables to distribute online, blended courses over the internet as well as \n                    to augment on-campus teaching in a brick and mortar environment.</p>\n                <div class=\"carousel-image\">\n                    <img src=\"assets/images/lms_screen.jpg\" class=\"product\"/>\n                </div>\n            </div>\n            \n            <div  carousel-page class=\"column-block\">\n                <b>Social networking features</b>\n                <p>\n                    Our disruptive technology allows to create a connected, engaged and \n                    collaborative learning experience for students and faculty inside and outside the classroom.\n                </p>\n                <div class=\"carousel-image\">\n                    <img src=\"assets/images/lms_social.jpg\" id=\"product-2\" class=\"product\"/>\n                </div>\n            </div>\n            <div  carousel-page class=\"column-block\">\n                <b>Videoconferencing system</b>\n                <p>\n                   Our all-in-one platform make it easy to launch one-on- one, group calls or live classes without \n                   needing to open another app or share invite links.\n                </p>\n                <div class=\"carousel-image\">\n                    <img src=\"assets/images/lms_screen_visio.jpg\" class=\"product\"/>\n                </div>\n            </div>\n            <div  carousel-page class=\"column-block\">\n                <b>Data collection</b>\n                <p>\n                  We use the latest forward-looking techniques in \n                  human-computer interaction, and sophisticated algorithms \n                  to measure online engagement.\n                </p>\n                <div class=\"carousel-image\">\n                    <img src=\"assets/images/lms_screen_data.jpg\" class=\"product\"/>\n                </div>\n            </div>\n        </div>\n       \n    </div>\n</div>\n\n<div id=\"planetarium\"  (window:resize)=\"onResize($event)\" app-fade-in [ratio]=\"0.8\">\n    <div app-planetarium \n         \n        [circles]=\"circles\" \n        [nbParticles]=\"15\" \n        [size]=\"[0,height]\"\n        [center]=\"center\">\n        \n    </div>\n    <div app-h2>Networked education</div>\n    <div class=\"planetarium-blocks\">\n        <div class=\"planetarium-block\" id=\"share-collaborate\">\n            <b>Share & Collaborate</b>\n            <p>\n                Our collaborative learning environment based on online interactions, community of interest, group projects, \n                peer relationships and class discussions enables the proven best practices for student and faculty engagement.\n\n\n\n            </p>\n        </div>\n        <div class=\"planetarium-block\" id=\"network\">\n            <b>Network</b>\n            <p>\n                Whether B-Schools have opted for a single, multi-campus or a cross-institutional partnership (dual, joint degrees or alliances) strategy, \n                we believe that networking-based education allows for resources to be \n                distributed more efficiently.\n            </p>\n        </div>\n    </div>\n</div>\n<div class=\"columns\">\n    <div class=\"column\" app-fade-in [ratio]=\"0.8\">\n        <div app-h2 id=\"everywhere\" >Everywhere. Anytime.</div>\n        <div  class=\"column-block\">\n            <b><span class=\"icon icon-loop2\"></span> Responsiveness & Sync</b>\n            <p>\n              Whether Twic is used on a mobile, tablet or desktop, and whatever \n              content is created, all connected devices will stay in synchronization.\n            </p>\n        </div>\n        <div  class=\"column-block\">\n            <b><span class=\"icon icon-bullhorn\"></span>Notifications</b>\n            <p>\n                Students and faculty can receive real-time notifications pop \n                up on their devices to keep them up- to-date.\n            </p>\n        </div>\n    </div>\n    <div class=\"column\" app-fade-in [ratio]=\"0.8\">\n        <div app-devices>\n\n        </div>\n    </div>\n</div>\n<div class=\"block\" id=\"ready\" app-fade-in>\n    <div app-h2>Ready to get started</div>\n    <p>Create your account in seconds and start your free trial.</p>\n    <div class=\"buttons\">\n        <button class=\"button\" id=\"create-account\" [routerLink]=\"['/contact-us']\">\n            Create Account\n        </button>\n        <button class=\"button white\" [routerLink]=\"['/pricing']\">\n            Our Pricing Plan\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n    <div  class=\"carousel-content\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\"  >\n        <ng-content></ng-content>\n        \n    </div> \n</div>\n<div class=\"carousel-pagination\"  *ngIf=\"pages.length > 1\">\n    <div class=\"pagination-point\" \n         *ngFor=\"let page of pages;let i = index; \" \n         (click)=\"changePage(i)\"\n         [ngClass]=\"{ selected : i === currentPage }\"\n         ></div>\n</div>"

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "\n<img class=\"computer\" src=\"../../assets/images/Macbook.svg\"/>\n<img class=\"browser\" src=\"../../assets/images/Browser.svg\"/>\n<div app-window class=\"window-computer\" [delay]=\"1500\"></div>\n<img class=\"mobile-phone\" src=\"../../assets/images/Iphone.svg\"/>\n<div app-window class=\"window-mobile\" [delay]=\"1750\"></div>\n<img class=\"tablet\" src=\"../../assets/images/iPad.svg\"/>\n<div app-window class=\"window-tablet\" [delay]=\"2000\"></div>"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "<div class=\"window-content\"  [ngStyle]=\"{ 'animation-delay' : delay + 'ms' }\">\n    \n    <div class=\"circle\" [ngStyle]=\"{ 'animation-delay' : (1000 + delay) + 'ms' }\"></div>\n    <div class=\"gray-line first\" [ngStyle]=\"{ 'animation-delay' : (1100 + delay) + 'ms' }\"></div>\n    <div class=\"darkgray-line\" [ngStyle]=\"{ 'animation-delay' : (1200 + delay) + 'ms' }\"></div>\n    <div class=\"gray-line not-desktop\" [ngStyle]=\"{ 'animation-delay' : (1300 + delay) + 'ms' }\"></div>\n    <div class=\"darkgray-line not-desktop\" [ngStyle]=\"{ 'animation-delay' : (1400 + delay) + 'ms' }\"></div>\n    <div class=\"gray-line not-desktop\" [ngStyle]=\"{ 'animation-delay' : (1500 + delay) + 'ms' }\"></div>\n    <div class=\"gray-line small not-desktop\" [ngStyle]=\"{ 'animation-delay' : (1600 + delay) + 'ms' }\"></div>\n    <div class=\"button\" [ngStyle]=\"{ 'animation-delay' : (1700 + delay) + 'ms' }\"></div>\n</div>"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-content\">\n    <div class=\"footer-column\">\n        <img class=\"footer-logo\" src=\"assets/images/Logo-white.svg\"  />\n        <p>\n            Copyright © 2017, Twic by THE STUDNET.\n        </p>\n    </div>\n    <div class=\"footer-menu mobile dropdown\" app-dropdown>\n        <div class=\"dropdown-content\">\n            <div [routerLink]=\"['/product']\">Product</div>\n            <div [routerLink]=\"['/pricing']\">Pricing</div>\n            <div *ngIf=\"isActive('/about')\" (click)=\"reload()\">About</div>\n            <div *ngIf=\"!isActive('/about')\" [routerLink]=\"['/about']\">About</div>\n            <a target=\"_blank\" href=\"https://itunes.apple.com/fr/app/twic-the-world-is-a-campus/id1165444530?l=en&mt=8\">Download App IOS</a>\n            <a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.thestudnet.app\">Download App Android</a>\n            <div><a target=\"_blank\" href=\"http://status.thestudnet.com/\">Status</a></div>\n            <div>\n                <img class=\"footer-logo\" src=\"assets/images/Logo-white.svg\"/>\n                <p>\n                    Copyright © 2017, Twic by THE STUDNET.\n                </p>\n                <div class=\"mobile-footer\">\n                    <a href=\"mailto:contact@thestudnet.com\"><span>Contact us</span></a>\n                    <a target=\"_blank\" href=\"https://www.facebook.com/TwicSLE/\"><span class=\"icon icon-facebook social-media\"></span></a>\n                    <a target=\"_blank\" href=\"https://twitter.com/TwicSLE\"><span class=\"icon icon-twitter social-media\"></span></a>\n                    <a target=\"_blank\" href=\"https://fr.linkedin.com/company/the-st-dnet\"><span class=\"icon icon-linkedin2 social-media\"></span></a>\n                </div>\n            </div>\n        </div>\n        <div class=\"dropdown-toggle\">\n            <div class=\"text\">Product</div> <div class=\"chevron bottom\"></div>\n        </div>\n        \n    </div>\n    <div class=\"footer-column desktop\">\n        <div class=\"footer-title\">Using Twic</div>\n        <ul>\n            <li [routerLink]=\"['/product']\">Product</li>\n            <li [routerLink]=\"['/pricing']\">Pricing</li>\n        </ul>\n    </div>\n    <div class=\"footer-column desktop\">\n        <div class=\"footer-title\">Twic</div> \n        <ul>\n            <li *ngIf=\"isActive('/about')\" (click)=\"reload()\">About</li>\n            <li *ngIf=\"!isActive('/about')\"  [routerLink]=\"['/about']\">About</li>\n            <li> <a target=\"_blank\" href=\"https://itunes.apple.com/fr/app/twic-the-world-is-a-campus/id1165444530?l=en&mt=8\">Download App IOS</a></li>\n            <li> <a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.thestudnet.app\">Download App Android</a></li>\n            <li> <a target=\"_blank\" href=\"http://status.thestudnet.com/\">Status</a></li>\n        </ul>\n    </div>\n   \n    <div class=\"footer-column desktop\">\n        <div class=\"footer-title\"><a href=\"mailto:contact@thestudnet.com\">Contact us</a></div>\n        <a target=\"_blank\" href=\"https://www.facebook.com/TwicSLE/\"><span class=\"icon icon-facebook social-media\"></span></a>\n        <a target=\"_blank\" href=\"https://twitter.com/TwicSLE\"><span class=\"icon icon-twitter social-media\"></span></a>\n        <a target=\"_blank\" href=\"https://fr.linkedin.com/company/the-st-dnet\"><span class=\"icon icon-linkedin2 social-media\"></span></a>\n    </div>\n</div>\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "<h2>\n    <div class=\"blue-line\"></div>\n    <ng-content></ng-content>\n</h2>\n\n"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header-menu mobile dropdown\" app-dropdown>\n    <div class=\"dropdown-toggle menu-icon\">\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n        <div class=\"bar\"></div>\n    </div>\n    <div class=\"dropdown-content\">\n        <div>\n             <div class=\"menu-icon\">\n                <div class=\"bar\"></div>\n                <div class=\"bar\"></div>\n                <div class=\"bar\"></div>\n            </div>\n            <img class=\"menu-logo\" *ngIf=\"!isActive('/')\"  [routerLink]=\"['/']\"  src=\"assets/images/Logo-white.svg\"/>\n            <img class=\"menu-logo\" *ngIf=\"isActive('/')\" (click)=\"reload()\"   src=\"assets/images/Logo-white.svg\"/>\n        </div>\n        <div [routerLink]=\"['/product']\">Product</div>\n        <div [routerLink]=\"['/pricing']\">Pricing</div>\n        <div [routerLink]=\"['/about']\">About</div>\n    </div>\n</div>\n<div class=\"header-menu-content\" *ngIf=\"menuOpen\">\n    \n</div>\n<img class=\"header-logo\" *ngIf=\"!isActive('/')\"  [routerLink]=\"['/']\"  src=\"assets/images/Logo.svg\"/>\n<img class=\"header-logo\" *ngIf=\"isActive('/')\" (click)=\"reload()\"   src=\"assets/images/Logo.svg\"/>\n<ul class=\"header-menu desktop\">\n    <li  [routerLink]=\"['/product']\" routerLinkActive=\"current\">Product</li>\n    <li  [routerLink]=\"['/pricing']\" routerLinkActive=\"current\">Pricing</li>\n    <li  [routerLink]=\"['/about']\" routerLinkActive=\"current\">About</li>\n</ul>\n"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "<div id=\"animation-layout\" [ngStyle]=\"{ width : size[0], height : size[1] }\" (window:resize)=\"onResize($event)\">\n    <div class=\"circle\" \n         *ngFor=\"let circle of circles; let i = index\" \n         [ngStyle]=\"{ \n            top : -circle.radius + center[1], \n            right : -circle.radius  + center[0],   \n            'box-shadow' : circle.shadow,\n            'border' :  'solid 1px rgba(226,226,226, ' + circle.opacity + ')',\n            width : circle.radius * 2, \n            height : circle.radius * 2\n        }\" id=\"circle-{{ i }}\" >\n        \n             \n    </div>\n    <div class=\"particle\" \n          [@particle]=\"normal\"\n         *ngFor=\"let particle of particles\" \n         [ngClass]=\"{ gray : particle.color === 'gray' }\"\n         [ngStyle]=\"\n            { \n                opacity : particle.opacity,\n                width : particle.width,\n                height : particle.width,\n                top : -particle.width * 0.5 - particle.borderWidth[0] + center[1],\n                right : -particle.width * 0.5 - particle.borderWidth[0] + center[0],\n                'border-width' : particle.borderWidth[0],\n                transform : 'rotate(' + particle.rotation + 'deg) translate('+(-particle.source[0])+'px,'+particle.source[1]+'px)',\n                'transition' : \n                'opacity 0.5s linear, transform  ' + particle.duration + 'ms cubic-bezier(0.6, 0.4, 0.6, 0.9), \n                width 300ms cubic-bezier(0, 1.5, 1, 1.5), \n                height 300ms cubic-bezier(0, 1.5, 1, 1.5),  \n                top 300ms cubic-bezier(0, 1.5, 1, 1.5),  \n                right 300ms cubic-bezier(0, 1.5, 1, 1.5), \n                border-width 300ms cubic-bezier(0, 1.5, 1, 1.5)'\n            }\"\n        >\n        <div class=\"particle\" \n         *ngIf=\"particle.borderWidth[1]\" \n         [ngStyle]=\"{ \n            'border-width' : particle.borderWidth[1]\n         }\">\n            <div class=\"particle white\" \n                *ngIf=\"particle.borderWidth[2]\" \n                [ngStyle]=\"{ \n                   'border-width' : particle.borderWidth[2]\n                }\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"waves\" app-fade-in>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-1 wave desktop\" >\n        <polygon points=\"0,0 100,100 90,100 50,80 0,100\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-2 wave desktop\" >\n        <polygon points=\"0,0 100,100 90,100 50,80 0,60\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-3 wave desktop\" >\n        <polygon points=\"0,0 50,50 0,25\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"background desktop\">\n        <polygon  points=\"0,0 100,0 100,100 0,76\"/>\n    </svg>\n    \n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-1-mobile wave mobile\" >\n        <polygon points=\"0,0 90,72 0,95\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-2-mobile wave mobile\" >\n        <polygon points=\"0,0 100,0 100,80 0,65\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"wave-3-mobile wave mobile\" >\n        <polygon points=\"0,0 90,34 0,18\"/>\n    </svg>\n    <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" class=\"background mobile\">\n        <polygon  points=\"0,0 100,0 100,85 90,84 0,76\"/>\n    </svg>\n</div>\n    "

/***/ })

},[1031]);
//# sourceMappingURL=main.bundle.map