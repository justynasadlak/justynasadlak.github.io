(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    // {
    //   path: 'add-dish',
    //   loadChildren: () => import('./dishes/dishes-routing.module').then(m => m.DishesRoutingModule)
    // },
    {
        path: 'dashboard',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./meals/meals-routing.module */ "./src/app/meals/meals-routing.module.ts")).then(m => m.MealsRoutingModule)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'food-front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _meals_meals_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meals/meals.module */ "./src/app/meals/meals.module.ts");




// import { DishesModule } from './dishes/dishes.module';






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _meals_meals_module__WEBPACK_IMPORTED_MODULE_8__["MealsModule"],
            // DishesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _meals_meals_module__WEBPACK_IMPORTED_MODULE_8__["MealsModule"],
        // DishesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _meals_meals_module__WEBPACK_IMPORTED_MODULE_8__["MealsModule"],
                    // DishesModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/meals-overview/meals-overview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/meals-overview/meals-overview.component.ts ***!
  \************************************************************/
/*! exports provided: MealsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsOverviewComponent", function() { return MealsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _meals_meals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meals/meals.service */ "./src/app/meals/meals.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MealsOverviewComponent_div_16_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function MealsOverviewComponent_div_16_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function MealsOverviewComponent_div_16_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function MealsOverviewComponent_div_16_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function MealsOverviewComponent_div_16_ng_container_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_div_16_ng_container_1_ng_template_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const mealType_r20 = ctx.mealType; const meal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onShowHideDishesList(meal_r5, mealType_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r5.breakfast);
} }
function MealsOverviewComponent_div_16_ng_container_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_div_16_ng_container_1_ng_template_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const mealType_r25 = ctx.mealType; const meal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onShowHideDishesList(meal_r5, mealType_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r5.lunch);
} }
function MealsOverviewComponent_div_16_ng_container_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_div_16_ng_container_1_ng_template_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const mealType_r30 = ctx.mealType; const meal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.onShowHideDishesList(meal_r5, mealType_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r5.dinner);
} }
function MealsOverviewComponent_div_16_ng_container_1_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_div_16_ng_container_1_ng_template_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const mealType_r35 = ctx.mealType; const meal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.onShowHideDishesList(meal_r5, mealType_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r5.snacks);
} }
function MealsOverviewComponent_div_16_ng_container_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_div_16_ng_container_1_ng_template_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const mealType_r40 = ctx.mealType; const meal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.onShowHideDishesList(meal_r5, mealType_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { meal: a0, mealType: "breakfast" }; };
const _c1 = function (a0) { return { meal: a0, mealType: "lunch" }; };
const _c2 = function (a0) { return { meal: a0, mealType: "dinner" }; };
const _c3 = function (a0) { return { meal: a0, mealType: "snacks" }; };
function MealsOverviewComponent_div_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MealsOverviewComponent_div_16_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MealsOverviewComponent_div_16_ng_container_1_ng_container_5_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MealsOverviewComponent_div_16_ng_container_1_ng_container_6_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MealsOverviewComponent_div_16_ng_container_1_ng_container_7_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MealsOverviewComponent_div_16_ng_container_1_ng_template_8_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MealsOverviewComponent_div_16_ng_container_1_ng_template_10_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MealsOverviewComponent_div_16_ng_container_1_ng_template_12_Template, 2, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MealsOverviewComponent_div_16_ng_container_1_ng_template_14_Template, 2, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MealsOverviewComponent_div_16_ng_container_1_ng_template_16_Template, 2, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const meal_r5 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r5.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", meal_r5.breakfast ? _r10 : _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, meal_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", meal_r5.lunch ? _r12 : _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, meal_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", meal_r5.dinner ? _r14 : _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, meal_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", meal_r5.snacks ? _r16 : _r18)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, meal_r5));
} }
function MealsOverviewComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MealsOverviewComponent_div_16_ng_container_1_Template, 18, 17, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mealsList);
} }
function MealsOverviewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Ingredients(oddzielone przecinkiem) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_div_17_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.onShowHideAddDishForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Powr\u00F3t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_div_17_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onDishSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Dodaj danie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.addDishForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.addDishForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.responseMessage);
} }
function MealsOverviewComponent_div_18_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_div_18_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const dish_r48 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.onSelectDish(dish_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dish_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dish_r48.name);
} }
function MealsOverviewComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_div_18_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.onShowHideDishesList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wybierz danie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MealsOverviewComponent_div_18_div_6_Template, 3, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dishesList);
} }
function MealsOverviewComponent_ng_container_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ingredient_r54.value, "x ", ingredient_r54.key, " ");
} }
function MealsOverviewComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MealsOverviewComponent_ng_container_25_div_1_Template, 2, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.ingredientsList));
} }
class MealsOverviewComponent {
    constructor(mealsService, fb
    // private dishesService: DishesService
    ) {
        this.mealsService = mealsService;
        this.fb = fb;
        this.mealsList = [];
        this.dishesList = {};
        this.isDishesListOpen = false;
        this.isIngredientListOpen = false;
        this.isAddDishFormOpen = false;
    }
    ngOnInit() {
        this.initForm();
        this.getAllMeals();
    }
    onShowHideDishesList(meal, mealType) {
        if (meal && mealType) {
            this.selectedDailyMealsId = meal._id;
            this.selectedMealType = mealType;
            this.mealsService.getAllDishes().subscribe(data => {
                this.dishesList = data;
            });
        }
        this.isDishesListOpen = !this.isDishesListOpen;
    }
    onSelectDish(dish) {
        this.saveOrUpdateDailyMeals(dish.name);
    }
    onDishSave() {
        if (this.addDishForm.valid) {
            const newDish = {
                name: this.addDishForm.controls['name'].value,
                ingredients: (this.addDishForm.controls['ingredients'].value).split(',')
            };
            console.log(newDish);
            this.mealsService.addDish(newDish).subscribe(response => {
                this.responseMessage = response.body;
                console.log(response.body);
                this.addDishForm.reset();
                setTimeout(() => this.responseMessage = '', 3000);
            });
        }
    }
    onOpenCloseIngredientList() {
        this.isIngredientListOpen = !this.isIngredientListOpen;
    }
    onShowHideAddDishForm() {
        this.isAddDishFormOpen = !this.isAddDishFormOpen;
    }
    initForm() {
        this.addDishForm = this.fb.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]*$')
                ]],
            ingredients: [[], [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]]
        });
    }
    getAllMeals() {
        this.mealsService.getAllMeals().subscribe(data => {
            this.mealsList = data;
        });
        this.getAllIngredients();
    }
    saveOrUpdateDailyMeals(dish) {
        const dailyMeals = {
            id: this.selectedDailyMealsId,
            [this.selectedMealType]: dish
        };
        console.log(dailyMeals);
        this.mealsService.saveMealsOrUpdate(dailyMeals).subscribe();
        this.getAllMeals();
        this.isDishesListOpen = false;
    }
    getAllIngredients() {
        this.mealsService.getIngredientList().subscribe(data => {
            this.ingredientsList = data;
        });
    }
}
MealsOverviewComponent.ɵfac = function MealsOverviewComponent_Factory(t) { return new (t || MealsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_meals_meals_service__WEBPACK_IMPORTED_MODULE_2__["MealsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
MealsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealsOverviewComponent, selectors: [["app-meals-overview"]], decls: 26, vars: 4, consts: [[1, "header-container", "margin-top", "margin-bottom"], [1, "btn-action", 3, "click"], [1, "meals-overview-container"], [1, "table-header"], [1, "table-row"], [1, "col-date"], [1, "col-breakfast"], [1, "col-lunch"], [1, "col-dinner"], [1, "col-snacks"], ["class", "table-data", 4, "ngIf"], ["class", "main-container popup", 4, "ngIf"], [1, "ingredient-list", "margin-top", "box-shadow", "cursor-pointer", 3, "click"], [1, "list-header"], ["src", "../../assets/icon-toggler-list.png"], [4, "ngIf"], [1, "table-data"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["breakfast", ""], ["lunch", ""], ["dinner", ""], ["snacks", ""], ["noMeal", ""], [1, "col-breakfast", "pointer", 3, "click"], [1, "col-lunch", "pointer", 3, "click"], [1, "col-dinner", "pointer", 3, "click"], [1, "col-snacks", "pointer", 3, "click"], [1, "pointer", 3, "click"], [1, "main-container", "popup"], [1, "box-shadow", "margin-bottom", "add-dish-container"], [3, "formGroup"], [1, "form-group", "margin-bottom"], ["for", "name"], ["formControlName", "name", 1, "form-control"], ["for", "ingredients"], ["formControlName", "ingredients", 1, "form-control", "ingredients-input"], [1, "add-dish-footer"], [1, "btn-action", "btn-close", 3, "click"], [1, "btn-action", 3, "disabled", "click"], [1, "response-text"], [1, "dishes-list"], ["class", "list-data", 4, "ngFor", "ngForOf"], [1, "list-data"], [1, "cursor-pointer", 3, "click"]], template: function MealsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_Template_button_click_1_listener() { return ctx.onShowHideAddDishForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dodaj nowe danie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u015Bniadanie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "obiad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "kolacja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "podjadanie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MealsOverviewComponent_div_16_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MealsOverviewComponent_div_17_Template, 18, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MealsOverviewComponent_div_18_Template, 7, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealsOverviewComponent_Template_div_click_19_listener() { return ctx.onOpenCloseIngredientList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lista sk\u0142adnik\u00F3w");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MealsOverviewComponent_ng_container_25_Template, 3, 3, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mealsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddDishFormOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDishesListOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIngredientListOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: [".header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  background-color: #363e47;\n  border-color: #363e47;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: 38px;\n  width: 150px;\n  color: #fff;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.1s all;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  height: 100%;\n  position: absolute;\n}\n\n.main-container.popup[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.main-container[_ngcontent-%COMP%]   .add-dish-container[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .dishes-list[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 36%;\n}\n\n.main-container[_ngcontent-%COMP%]   .add-dish-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .dishes-list[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.main-container[_ngcontent-%COMP%]   .add-dish-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .dishes-list[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  color: #98908b;\n}\n\n.main-container[_ngcontent-%COMP%]   .add-dish-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .dishes-list[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  height: 42px;\n  background-color: #fff;\n  color: #2c1301;\n  font-size: 14px;\n  padding: 0 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border: 1px solid #ddd6d1;\n  border-radius: 3px;\n}\n\n.main-container[_ngcontent-%COMP%]   .add-dish-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .ingredients-input[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .dishes-list[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .ingredients-input[_ngcontent-%COMP%] {\n  min-height: 78px;\n}\n\n.main-container[_ngcontent-%COMP%]   .add-dish-container[_ngcontent-%COMP%]   .add-dish-footer[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .dishes-list[_ngcontent-%COMP%]   .add-dish-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.main-container[_ngcontent-%COMP%]   .add-dish-container[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .dishes-list[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background-color: #9aabc0;\n  border-color: #9aabc0;\n}\n\n.main-container[_ngcontent-%COMP%]   .add-dish-container[_ngcontent-%COMP%]   .response-text[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   .dishes-list[_ngcontent-%COMP%]   .response-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.meals-overview-container[_ngcontent-%COMP%], .box-shadow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  background-color: #fff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  text-transform: uppercase;\n  color: #98908b;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 50px;\n  padding: 0 14px;\n  border-bottom: 1px solid #e2dfde;\n}\n\n.table-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 0;\n  width: 16%;\n}\n\n.dishes-list[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n  color: #939393;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n}\n\n.dishes-list[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  width: 50px;\n  align-self: flex-end;\n}\n\n.dishes-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  text-transform: uppercase;\n  font-size: 22px;\n  border-bottom: 1px solid #e2dfde;\n  padding: 20px;\n  color: #98908b;\n}\n\n.list-data[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 8px 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbHMtb3ZlcnZpZXcvbWVhbHMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtBQUFSOztBQUdJOztFQUVJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFEUjs7QUFHUTs7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFBWjs7QUFFWTs7RUFDSSxjQUFBO0FBQ2hCOztBQUVZOztFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDaEI7O0FBRVk7O0VBQ0ksZ0JBQUE7QUFDaEI7O0FBR1E7O0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBWjs7QUFJUTs7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBRFo7O0FBSVE7O0VBQ0ksa0JBQUE7QUFEWjs7QUFPQTs7RUFFSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFKSjs7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBSlI7O0FBUUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBTEo7O0FBT0k7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUFMUjs7QUFRSTtFQUNJLGNBQUE7QUFOUjs7QUFVQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFQSjs7QUFXQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVJKIiwiZmlsZSI6InNyYy9hcHAvbWVhbHMtb3ZlcnZpZXcvbWVhbHMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuXHJcbi5idG4tYWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjNlNDc7XHJcbiAgICBib3JkZXItY29sb3I6ICMzNjNlNDc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuMXMgYWxsO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgJi5wb3B1cCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZC1kaXNoLWNvbnRhaW5lcixcclxuICAgIC5kaXNoZXMtbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgIHdpZHRoOiAzNiU7XHJcbiAgICBcclxuICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgICAgICAgICAgPiBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk4OTA4YjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgID4gaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMmMxMzAxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ2ZDE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuaW5ncmVkaWVudHMtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNzhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5hZGQtZGlzaC1mb290ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgICAgIC5idG4tY2xvc2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFhYmMwO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM5YWFiYzA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVzcG9uc2UtdGV4dCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubWVhbHMtb3ZlcnZpZXctY29udGFpbmVyLFxyXG4uYm94LXNoYWRvdyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsLjA0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjOTg5MDhiO1xyXG59XHJcblxyXG4udGFibGUtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZGZkZTtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgIHdpZHRoOiAxNiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXNoZXMtbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgY29sb3I6ICM5MzkzOTM7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwuMDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIC5idG4tYWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlzdC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZGZkZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjb2xvcjogIzk4OTA4YjtcclxuXHJcbn1cclxuXHJcbi5saXN0LWRhdGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meals-overview',
                templateUrl: './meals-overview.component.html',
                styleUrls: ['./meals-overview.component.scss']
            }]
    }], function () { return [{ type: _meals_meals_service__WEBPACK_IMPORTED_MODULE_2__["MealsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/meals/meals-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/meals/meals-routing.module.ts ***!
  \***********************************************/
/*! exports provided: MealsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsRoutingModule", function() { return MealsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _meals_overview_meals_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meals-overview/meals-overview.component */ "./src/app/meals-overview/meals-overview.component.ts");





const mealsRoutes = [{
        path: '',
        component: _meals_overview_meals_overview_component__WEBPACK_IMPORTED_MODULE_2__["MealsOverviewComponent"]
    }];
class MealsRoutingModule {
}
MealsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MealsRoutingModule });
MealsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MealsRoutingModule_Factory(t) { return new (t || MealsRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(mealsRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MealsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(mealsRoutes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/meals/meals.module.ts":
/*!***************************************!*\
  !*** ./src/app/meals/meals.module.ts ***!
  \***************************************/
/*! exports provided: MealsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsModule", function() { return MealsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _meals_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meals-routing.module */ "./src/app/meals/meals-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _meals_overview_meals_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../meals-overview/meals-overview.component */ "./src/app/meals-overview/meals-overview.component.ts");






class MealsModule {
}
MealsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MealsModule });
MealsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MealsModule_Factory(t) { return new (t || MealsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _meals_routing_module__WEBPACK_IMPORTED_MODULE_2__["MealsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MealsModule, { declarations: [_meals_overview_meals_overview_component__WEBPACK_IMPORTED_MODULE_4__["MealsOverviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _meals_routing_module__WEBPACK_IMPORTED_MODULE_2__["MealsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_meals_overview_meals_overview_component__WEBPACK_IMPORTED_MODULE_4__["MealsOverviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_meals_overview_meals_overview_component__WEBPACK_IMPORTED_MODULE_4__["MealsOverviewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _meals_routing_module__WEBPACK_IMPORTED_MODULE_2__["MealsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                exports: [_meals_overview_meals_overview_component__WEBPACK_IMPORTED_MODULE_4__["MealsOverviewComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/meals/meals.service.ts":
/*!****************************************!*\
  !*** ./src/app/meals/meals.service.ts ***!
  \****************************************/
/*! exports provided: MealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsService", function() { return MealsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MealsService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getAllMeals() {
        return this.http.get(`${this.apiUrl}/get-meals`);
    }
    saveMealsOrUpdate(dailyMeals) {
        return this.http.post(`${this.apiUrl}/save-meals-or-update`, dailyMeals, { observe: 'response' });
    }
    getIngredientList() {
        return this.http.get(`${this.apiUrl}/ingredients`);
    }
    // do poprawy do dishes service
    getAllDishes() {
        return this.http.get(`${this.apiUrl}/get-dishes`);
    }
    addDish(dish) {
        return this.http.post(`${this.apiUrl}/save-dish`, dish, { observe: 'response' });
    }
}
MealsService.ɵfac = function MealsService_Factory(t) { return new (t || MealsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MealsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MealsService, factory: MealsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
const environment = {
    production: false,
    apiUrl: 'https://192.168.0.76:10000'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\apricot\Projects\food-planner\food-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map