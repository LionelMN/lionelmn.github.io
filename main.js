(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\proyectos\portfolioAngular\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 0, consts: [[1, "header"], [1, "header__text"], [1, "header__arrow"], ["href", "#stack"], [1, "arrow"], ["height", "40", "aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "chevron-down", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-chevron-down", "fa-w-14", "arrow"], ["fill", "#eceff1", "d", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lionel Montesdeoca Nuez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I am a fullstack developer. This is my portfolio website to showcase my all works related to web development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    text-align: center;\r\n    display: grid;\r\n    grid-template-rows: 95% 5%;\r\n    background: url('/assets/imgs/bground.jpeg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100vw 100vh;\r\n    background-position: fixed;\r\n}\r\n\r\n.header__text[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    font-family: 'Archivo Black', sans-serif;\r\n}\r\n\r\n.header__arrow[_ngcontent-%COMP%]{\r\n    align-self: start;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n    opacity: 0.8;\r\n    animation: animate 1s alternate infinite;\r\n    cursor: pointer;\r\n}\r\n\r\n@keyframes animate {\r\n    0%{\r\n        transform: translateY(0);\r\n      }\r\n\r\n      100% {\r\n        transform: translateY(10px);\r\n      }\r\n}\r\n\r\n@media only screen and (max-width: 950px){\r\n  .header[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    background-position: center;\r\n    grid-template-rows: 98% 2%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n  .header__text[_ngcontent-%COMP%]{\r\n    margin: 0 1rem;\r\n  }\r\n\r\n  .header__arrow[_ngcontent-%COMP%]{\r\n      align-self: end;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO01BQzFCOztNQUVBO1FBQ0UsMkJBQTJCO01BQzdCO0FBQ047O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7TUFDSSxlQUFlO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTUlIDUlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZ3MvYmdyb3VuZC5qcGVnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dyAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uaGVhZGVyX190ZXh0e1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvIEJsYWNrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhlYWRlcl9fYXJyb3d7XHJcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLmFycm93IHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAxcyBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KXtcclxuICAuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDk4JSAyJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBtYXJnaW46IDAgMXJlbTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX2Fycm93e1xyXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2uF8":
/*!*****************************************************!*\
  !*** ./src/app/components/works/works.component.ts ***!
  \*****************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function WorksComponent_div_6_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front Repository");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", work_r1.repository1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WorksComponent_div_6_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back Repository");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", work_r1.repository2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WorksComponent_div_6_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back Repository");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", work_r1.repository3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WorksComponent_div_6_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Let's see the site");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", work_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WorksComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorksComponent_div_6_a_15_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WorksComponent_div_6_a_16_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorksComponent_div_6_a_17_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WorksComponent_div_6_a_18_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksComponent_div_6_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const work_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSendWork(work_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Click to see more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r1.previewInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", work_r1.repository1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", work_r1.repository2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", work_r1.repository3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", work_r1.url);
} }
class WorksComponent {
    constructor() {
        this.worksList = [
            {
                id: 1,
                title: 'MEAN To do list',
                previewInfo: 'Responsive multiuser to do list built with the MEAN Stack. Designed and developed by me',
                repository1: 'https://github.com/LionelMN/todolist-angular',
                repository2: 'https://github.com/LionelMN/todolist-back',
                info: '<p>A responsive multiuser to do list built with MongoDB, Express, Angular and Node. This project was made by myself.</p>',
                imgs: [
                    'todolist.PNG',
                    'register.PNG',
                    'login.PNG',
                ]
            },
            {
                id: 2,
                title: 'Dev&Des',
                previewInfo: 'An aplication created to connect people of differents roles focused on the development of games, webs, aplications.',
                repository1: 'https://github.com/LionelMN/Dev-DesFrontent',
                repository2: 'https://github.com/LionelMN/De-DeBack',
                info: '<p>The final project of the EOI FullStack bootcamp. This project was made with <a href="https://github.com/amaryan" target="_blank" class="work__text-link">Ágora Martin Muñoz</a>, <a href="https://github.com/LauraMSM" target="_blank" class="work__text-link">Laura Sarmiento Melián</a>, <a href="https://github.com/GiovaMederos" target="_blank" class="work__text-link">Giova Mederos</a> and <a href="https://github.com/yerayjimenezc" target="_blank" class="work__text-link">Yeray Jiménez Carmona</a> in order to to connect people of differents roles focused on the development of games, webs, aplications. I was in charged to operated the backend and the production on Amazon Web Services but I also connect the frontend with the backend. The frontend was developed on Angular 9 and the backend on Node.js, Express and the database on Mongo DB. Also this project has a inner chat with the real time databases od Firebase.</p>',
                imgs: [
                    'dev-des-landing.PNG',
                    'dev-des-create.PNG',
                    'dev-des-login.PNG',
                    'dev-des-home.PNG'
                ]
            },
            {
                id: 3,
                title: 'Rodasorio',
                previewInfo: 'The webpage of Rodasorio S.L. Made it with WordPress.',
                url: 'https://www.rodasorio.com',
                info: '<p>The webpage of Rodasorio S.L. Made it with WordPress.</p>',
                imgs: [
                    'rodasorioHome.PNG',
                    'rodasorioFormacion.PNG',
                    'rodasorioCatering.PNG',
                ]
            }
        ];
        this.workShared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSendWork(work) {
        this.workShared.emit(work);
    }
}
WorksComponent.ɵfac = function WorksComponent_Factory(t) { return new (t || WorksComponent)(); };
WorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksComponent, selectors: [["app-works"]], outputs: { workShared: "workShared" }, decls: 7, vars: 1, consts: [[1, "myWorks"], ["id", "works", 1, "anchor"], [1, "myWorks__title"], [1, "myWorks__list"], ["class", "myWorks__card", 4, "ngFor", "ngForOf"], [1, "myWorks__card"], [1, "border-effect"], [1, "card__content"], [1, "card__title"], [1, "card__description"], [1, "card__links"], ["target", "_blank", 3, "href", 4, "ngIf"], ["action", "Click to see more", 1, "card__container-img"], ["href", "#work", 1, "toFullWork", 3, "click"], ["target", "_blank", 3, "href"]], template: function WorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorksComponent_div_6_Template, 22, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.worksList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".myWorks[_ngcontent-%COMP%]{\r\n  margin: 10px 0 10px 0;\r\n  display: grid;\r\n  grid-template-rows: 1.5rem;\r\n  row-gap: 1rem;\r\n}\r\n\r\n.myWorks__title[_ngcontent-%COMP%] {\r\n  justify-self: center;\r\n}\r\n\r\n.myWorks__list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 300px;\r\n  height: 500px;\r\n  background: var(--terciary-bgColor);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 30px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n}\r\n\r\n.myWorks__list[_ngcontent-%COMP%]   .myWorks__card[_ngcontent-%COMP%]:hover{\r\n  opacity: 1;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]::before{\r\n  content: '';\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  bottom: 2px;\r\n  width: 50%;\r\n  background: var(--before-cardColor);\r\n  z-index: 0;\r\n}\r\n\r\n.card__content[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  text-align: center;\r\n  z-index: 1;\r\n  display: grid;\r\n  grid-template-rows: 4rem 10rem 9rem 8rem;\r\n  align-items: center;\r\n}\r\n\r\n.card__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 0;\r\n  font-size: 4em;\r\n  font-weight: 800;\r\n  color: var(--primary-textColor);\r\n  opacity: 0.1;\r\n  transition: 0.5s;\r\n}\r\n\r\n.card__title[_ngcontent-%COMP%] {\r\n  align-self: end;\r\n}\r\n\r\n.card__title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n}\r\n\r\n.card__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  position: relative;\r\n  transform: scale(0);\r\n  transition: 0.5s;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n  transform: scale(1);\r\n}\r\n\r\n.toFullWork[_ngcontent-%COMP%]{\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.card__img[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: translateY(-50px);\r\n  color: var(--secondary-bgColor);\r\n}\r\n\r\n.card__content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-size: 1.5em;\r\n  color: var(--primary-textColor);\r\n  z-index: 1;\r\n  letter-spacing: 1px;\r\n  opacity: 0.5;\r\n  transition: 0.5s;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .myWorks__card[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n.card__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-size: 1em;\r\n  color: var(--primary-textColor);\r\n  letter-spacing: 1px;\r\n  opacity: 0.5;\r\n  font-weight: 300;\r\n  transition: 0.5s;\r\n}\r\n\r\n.card__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 50%;\r\n  margin: auto;\r\n  margin-top: 15px;\r\n  padding: 8px 15px;\r\n  background: var(--primary-textColor);\r\n  color: #000000;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-weight: 200;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%] {\r\n  transition: 0.5;\r\n  opacity: 0;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]:hover   .border-effect[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(1) {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background: linear-gradient(to right, transparent, var(--primary-textColor));\r\n  animation: animate1 2s linear infinite;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(2) {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 3px;\r\n  height: 100%;\r\n  background: linear-gradient(to bottom, transparent, var(--primary-textColor));\r\n  animation: animate2 2s linear infinite;\r\n  animation-delay: 1s;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(3) {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background: linear-gradient(to left, transparent, var(--primary-textColor));\r\n  animation: animate3 2s linear infinite;\r\n  animation-delay: 2s;\r\n}\r\n\r\n.myWorks__card[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(4) {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 3px;\r\n  height: 100%;\r\n  background: linear-gradient(to top, transparent, var(--primary-textColor));\r\n  animation: animate4 2s linear infinite;\r\n  animation-delay: 3s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.column[_ngcontent-%COMP%] {\r\n      float: left;\r\n      width: 25%;\r\n      cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n      display: none;\r\n      position: fixed;\r\n      z-index: 3;\r\n      padding-top: 100px;\r\n      left: 0;\r\n      top: 0;\r\n      width: 100vw;\r\n      height: 100vh;\r\n      overflow: auto;\r\n      background: rgba(0, 0, 0, 0.8);\r\n      transition: 3s;\r\n  }\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n      position: relative;\r\n      margin: auto;\r\n      padding: 0;\r\n      width: 90%;\r\n      max-width: 1200px;\r\n      opacity: 1;\r\n  }\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n      color: var(--primary-textColor);\r\n      position: absolute;\r\n      top: 10px;\r\n      right: 25px;\r\n      font-size: 35px;\r\n      font-weight: bold;\r\n  }\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n      color: #999;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n.mySlides[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      display: none;\r\n      background: var(--primary-bgColor);\r\n      border: 1px solid var(--primary-textColor);\r\n  }\r\n\r\n\r\n\r\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\r\n      cursor: pointer;\r\n      position: absolute;\r\n      top: 50%;\r\n      width: auto;\r\n      padding: 16px;\r\n      margin-top: -50px;\r\n      color: var(--primary-textColor);\r\n      font-weight: bold;\r\n      font-size: 20px;\r\n      transition: 0.6s ease;\r\n      border-radius: 0 3px 3px 0;\r\n      user-select: none;\r\n      -webkit-user-select: none;\r\n  }\r\n\r\n\r\n\r\n.next[_ngcontent-%COMP%] {\r\n      right: 0;\r\n      border-radius: 3px 0 0 3px;\r\n  }\r\n\r\n\r\n\r\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\r\n      background-color: rgba(0, 0, 0, 0.8);\r\n  }\r\n\r\n\r\n\r\n.numbertext[_ngcontent-%COMP%] {\r\n      color: var(--primary-textColor);\r\n      font-size: 12px;\r\n      padding: 8px 12px;\r\n      position: absolute;\r\n      top: 0;\r\n  }\r\n\r\n\r\n\r\n.caption-container[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: var(--secondary-bgColor);\r\n      padding: 2px 16px;\r\n      color: var(--primary-textColor);\r\n  }\r\n\r\n.modal__img[_ngcontent-%COMP%]{\r\n      width:100%\r\n  }\r\n\r\nimg.demo[_ngcontent-%COMP%] {\r\n      opacity: 0.6;\r\n      width: 50%;\r\n  }\r\n\r\n.active[_ngcontent-%COMP%], .demo[_ngcontent-%COMP%]:hover {\r\n      opacity: 1;\r\n  }\r\n\r\nimg.hover-shadow[_ngcontent-%COMP%] {\r\n      transition: 0.3s;\r\n  }\r\n\r\n.hover-shadow[_ngcontent-%COMP%]:hover {\r\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n.thumbnail-image-controls[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n  }\r\n\r\n@media only screen and (max-width: 950px){\r\n      .myWorks__card[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        height: 550px;\r\n    }\r\n\r\n    .card__content[_ngcontent-%COMP%] {\r\n        grid-template-rows: 4rem 8rem 9rem 8rem;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3Jrcy93b3Jrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLDRFQUE0RTtFQUM1RSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLDZFQUE2RTtFQUM3RSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCwyRUFBMkU7RUFDM0Usc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFVBQVU7RUFDVixZQUFZO0VBQ1osMEVBQTBFO0VBQzFFLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUEsc0dBQXNHOztBQUNsRyw0REFBNEQ7O0FBQzVEO01BQ0UsV0FBVztNQUNYLFVBQVU7TUFDVixlQUFlO0VBQ25COztBQUVBLDJCQUEyQjs7QUFDM0I7TUFDSSxhQUFhO01BQ2IsZUFBZTtNQUNmLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsT0FBTztNQUNQLE1BQU07TUFDTixZQUFZO01BQ1osYUFBYTtNQUNiLGNBQWM7TUFDZCw4QkFBOEI7TUFDOUIsY0FBYztFQUNsQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO01BQ0ksa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixVQUFVO01BQ1YsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixVQUFVO0VBQ2Q7O0FBRUEscUJBQXFCOztBQUNyQjtNQUNJLCtCQUErQjtNQUMvQixrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCOztBQUVBOztNQUVJLFdBQVc7TUFDWCxxQkFBcUI7TUFDckIsZUFBZTtFQUNuQjs7QUFFQSwrQkFBK0I7O0FBQy9CO01BQ0ksa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixrQ0FBa0M7TUFDbEMsMENBQTBDO0VBQzlDOztBQUVBLDRCQUE0Qjs7QUFDNUI7O01BRUksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsV0FBVztNQUNYLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsK0JBQStCO01BQy9CLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YscUJBQXFCO01BQ3JCLDBCQUEwQjtNQUMxQixpQkFBaUI7TUFDakIseUJBQXlCO0VBQzdCOztBQUVBLDRDQUE0Qzs7QUFDNUM7TUFDSSxRQUFRO01BQ1IsMEJBQTBCO0VBQzlCOztBQUVBLHlFQUF5RTs7QUFDekU7O01BRUksb0NBQW9DO0VBQ3hDOztBQUVBLDBCQUEwQjs7QUFDMUI7TUFDSSwrQkFBK0I7TUFDL0IsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsTUFBTTtFQUNWOztBQUVBLGlCQUFpQjs7QUFDakI7TUFDSSxrQkFBa0I7TUFDbEIsMENBQTBDO01BQzFDLGlCQUFpQjtNQUNqQiwrQkFBK0I7RUFDbkM7O0FBRUE7TUFDSTtFQUNKOztBQUVBO01BQ0ksWUFBWTtNQUNaLFVBQVU7RUFDZDs7QUFFQTs7TUFFSSxVQUFVO0VBQ2Q7O0FBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0FBRUE7TUFDSSw0RUFBNEU7RUFDaEY7O0FBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUE7TUFDSTtRQUNFLFVBQVU7UUFDVixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksdUNBQXVDO0lBQzNDO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmtzL3dvcmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlXb3Jrc3tcclxuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNXJlbTtcclxuICByb3ctZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubXlXb3Jrc19fdGl0bGUge1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ubXlXb3Jrc19fbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm15V29ya3NfX2NhcmR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5teVdvcmtzX19saXN0IC5teVdvcmtzX19jYXJkOmhvdmVye1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5teVdvcmtzX19jYXJkOjpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDJweDtcclxuICBib3R0b206IDJweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJlZm9yZS1jYXJkQ29sb3IpO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5jYXJkX19jb250ZW50IHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDEwcmVtIDlyZW0gOHJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZF9fY29udGVudCBoMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHRvcDogMDtcclxuICBmb250LXNpemU6IDRlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHRDb2xvcik7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5jYXJkX190aXRsZSB7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG59XHJcblxyXG4uY2FyZF9fdGl0bGUgaDR7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2FyZF9fY29udGVudCBpbWcge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLm15V29ya3NfX2NhcmQ6aG92ZXIgaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4udG9GdWxsV29ya3tcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmRfX2ltZyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5teVdvcmtzX19jYXJkOmhvdmVyIGgyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZ0NvbG9yKTtcclxufVxyXG5cclxuLmNhcmRfX2NvbnRlbnQgaDQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHRDb2xvcik7XHJcbiAgei1pbmRleDogMTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4ubXlXb3Jrc19fY2FyZDpob3ZlciBwLFxyXG4ubXlXb3Jrc19fY2FyZDpob3ZlciBoNCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNhcmRfX2NvbnRlbnQgcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHRDb2xvcik7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uY2FyZF9fY29udGVudCBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktdGV4dENvbG9yKTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4ubXlXb3Jrc19fY2FyZCAuYm9yZGVyLWVmZmVjdCB7XHJcbiAgdHJhbnNpdGlvbjogMC41O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5teVdvcmtzX19jYXJkOmhvdmVyIC5ib3JkZXItZWZmZWN0IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubXlXb3Jrc19fY2FyZCAuYm9yZGVyLWVmZmVjdDpudGgtY2hpbGQoMSkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCB2YXIoLS1wcmltYXJ5LXRleHRDb2xvcikpO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZTEgMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4ubXlXb3Jrc19fY2FyZCAuYm9yZGVyLWVmZmVjdDpudGgtY2hpbGQoMikge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDNweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHZhcigtLXByaW1hcnktdGV4dENvbG9yKSk7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlMiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLm15V29ya3NfX2NhcmQgLmJvcmRlci1lZmZlY3Q6bnRoLWNoaWxkKDMpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCwgdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpKTtcclxuICBhbmltYXRpb246IGFuaW1hdGUzIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG4ubXlXb3Jrc19fY2FyZCAuYm9yZGVyLWVmZmVjdDpudGgtY2hpbGQoNCkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCwgdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpKTtcclxuICBhbmltYXRpb246IGFuaW1hdGU0IDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqTElHSFRCT1gqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKiBDcmVhdGUgZm91ciBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaG90aGVyICovXHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuICAubW9kYWwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIHRyYW5zaXRpb246IDNzO1xyXG4gIH1cclxuXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gIC5jbG9zZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHRDb2xvcik7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICByaWdodDogMjVweDtcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAvKiBIaWRlIHRoZSBzbGlkZXMgYnkgZGVmYXVsdCAqL1xyXG4gIC5teVNsaWRlcyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1iZ0NvbG9yKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuICAucHJldixcclxuICAubmV4dCB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXHJcbiAgLm5leHQge1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgfVxyXG5cclxuICAvKiBPbiBob3ZlciwgYWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB3aXRoIGEgbGl0dGxlIGJpdCBzZWUtdGhyb3VnaCAqL1xyXG4gIC5wcmV2OmhvdmVyLFxyXG4gIC5uZXh0OmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxuXHJcbiAgLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXHJcbiAgLm51bWJlcnRleHQge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIC8qIENhcHRpb24gdGV4dCAqL1xyXG4gIC5jYXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnQ29sb3IpO1xyXG4gICAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dENvbG9yKTtcclxuICB9XHJcblxyXG4gIC5tb2RhbF9faW1ne1xyXG4gICAgICB3aWR0aDoxMDAlXHJcbiAgfVxyXG5cclxuICBpbWcuZGVtbyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUsXHJcbiAgLmRlbW86aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgaW1nLmhvdmVyLXNoYWRvdyB7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG5cclxuICAuaG92ZXItc2hhZG93OmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB9XHJcblxyXG4gIC50aHVtYm5haWwtaW1hZ2UtY29udHJvbHMge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KXtcclxuICAgICAgLm15V29ya3NfX2NhcmR7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkX19jb250ZW50IHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gOHJlbSA5cmVtIDhyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-works',
                templateUrl: './works.component.html',
                styleUrls: ['./works.component.css']
            }]
    }], function () { return []; }, { workShared: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
    production: false
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

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ContactComponent_li_8_a_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const network_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", network_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](network_r1.socialNetwork);
} }
function ContactComponent_li_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_li_8_a_1_a_2_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const network_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", network_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("social ", network_r1.socialNetwork, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", network_r1.socialNetwork !== "gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](network_r1.socialNetwork);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](network_r1.description);
} }
function ContactComponent_li_8_a_2_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const network_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", network_r1.url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](network_r1.socialNetwork);
} }
function ContactComponent_li_8_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactComponent_li_8_a_2_a_3_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const network_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", network_r1.url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", network_r1.socialNetwork, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("social ", network_r1.socialNetwork, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", network_r1.socialNetwork === "gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](network_r1.socialNetwork);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](network_r1.description);
} }
function ContactComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_li_8_a_1_Template, 8, 7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_li_8_a_2_Template, 9, 8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const network_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", network_r1.socialNetwork !== "gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", network_r1.socialNetwork === "gmail");
} }
class ContactComponent {
    constructor() {
        this.socialLinks = [
            {
                url: "lionelmontesnuez@gmail.com",
                socialNetwork: "gmail",
                description: "Send me an email!"
            },
            {
                url: "https://www.linkedin.com/in/lionel-montesdeoca-nuez/",
                socialNetwork: "linkedin",
                description: "Connect with me on a professional level on Linkedin"
            },
            {
                url: "https://github.com/LionelMN",
                socialNetwork: "github",
                description: "Check out my Github for my personal projects"
            },
            {
                url: "https://twitter.com/NuezLionel",
                socialNetwork: "twitter",
                description: "Connect with me on a personal level on Twitter"
            },
        ];
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 9, vars: 1, consts: [[1, "contact"], ["id", "contact", 1, "anchor"], [1, "contact__title"], [1, "otherContacts"], [1, "otherContacts__links"], [1, "accordion"], ["class", "tab", 4, "ngFor", "ngForOf"], [1, "tab"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "content"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContactComponent_li_8_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socialLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".contact[_ngcontent-%COMP%]{\r\n  margin: 10px 0 10px 0;\r\n  display: grid;\r\n  grid-template-rows: 1.5rem;\r\n  row-gap: 1rem;\r\n}\r\n\r\n.contact__title[_ngcontent-%COMP%] {\r\n  justify-self: center;\r\n}\r\n\r\n\r\n\r\nul[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Genericons';\r\n  src: url('/assets/genericons/genericons-regular-webfont.woff')format('woff'),\r\n      url('/assets/genericons/genericons-regular-webfont.eot')format('truetype')\r\n}\r\n\r\n.otherContacts[_ngcontent-%COMP%] {\r\n  margin: 0px auto;\r\n  width: 100%;\r\n}\r\n\r\n.otherContacts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: var(--primary-textColor);\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.accordion[_ngcontent-%COMP%] {\r\n  background: #333;\r\n  margin: auto;\r\n  width: 80%;\r\n  min-width: 800px;\r\n  display: block;\r\n  overflow: hidden;\r\n  height: 200px;\r\n  font-size: 0;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background: #444;\r\n  border-right: #333 solid 1px;\r\n  width: 80px;\r\n  height: 200px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  margin: 0;\r\n  transition: all 0.5s ease-in-out 0.1s;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tab[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  text-transform: capitalize;\r\n  text-decoration: none;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:hover {\r\n  width: 450px;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:hover   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n  margin-left: -100px;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:hover   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  margin-left: -5px;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  color: black;\r\n  background: var(--primary-textColor);\r\n  width: 360px;\r\n  height: 200px;\r\n  margin-left: 80px;\r\n  position: relative;\r\n  padding: 50px 0 0 15px ;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.85rem;\r\n  line-height: 1.4rem;\r\n  padding-right: 30px;\r\n}\r\n\r\n.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  transition: all 0.4s ease-in-out 0.1s;\r\n  width: 80px;\r\n  height: 200px;\r\n  position: absolute;\r\n  text-indent: 0;\r\n  padding-top: 90px;\r\n  padding-left: 25px;\r\n  display: block;\r\n  font: normal 30px Genericons;\r\n  color: var(--primary-textColor);\r\n}\r\n\r\n.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  font-size: 48px;\r\n  padding-left: 20px;\r\n  padding-top: 80px;\r\n  margin-left: 85px;\r\n}\r\n\r\n\r\n\r\n.linkedin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .linkedin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  content:  '\\f208'\r\n}\r\n\r\n.linkedin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  background: #00a9cd;\r\n}\r\n\r\n.github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  content:  '\\f200'\r\n}\r\n\r\n.github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  background: #6e5494;\r\n}\r\n\r\n.twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  content:  '\\f202'\r\n}\r\n\r\n.twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  background: #6dc5dd;\r\n}\r\n\r\n.gmail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .gmail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  content:  '\\f410'\r\n}\r\n\r\n.gmail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  background: #dd6d6d;\r\n}\r\n\r\n@media only screen and (max-width: 950px){\r\n  .otherContacts[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n\r\n  .tab[_ngcontent-%COMP%] {\r\n      display: block;\r\n      width: 100%;\r\n      border-bottom: 3px #333 solid;\r\n  }\r\n\r\n  .tab[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n  }\r\n\r\n  .tab[_ngcontent-%COMP%]:hover {\r\n      width: 100%;\r\n  }\r\n\r\n  .accordion[_ngcontent-%COMP%] {\r\n      display: block;\r\n      min-width: 450px;\r\n      height: auto;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n  .contact__form[_ngcontent-%COMP%] {\r\n    padding: 0 1rem;\r\n    width: 70%;\r\n}\r\n\r\n.legend[_ngcontent-%COMP%] {\r\n    justify-self: start;\r\n}\r\n\r\n.contact__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n    width: 92%;\r\n    min-width: 92%;\r\n    max-width: 92%;\r\n}\r\n\r\n.contact__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    row-gap: 0;\r\n}\r\n\r\n.contact-form__input[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.contact-form__button[_ngcontent-%COMP%] {\r\n    width: auto;\r\n}\r\n\r\n\r\n\r\n.otherContacts[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    border-bottom: 3px #333 solid;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]:hover {\r\n    width: 100%;\r\n}\r\n\r\n.accordion[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    min-width: 350px;\r\n    margin: auto;\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    padding: 0;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSwrQ0FBK0M7O0FBQy9DO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekI7O0FBRUY7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVOztBQUNWOztFQUVFO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUU7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRTtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtNQUNJLGNBQWM7TUFDZCxXQUFXO01BQ1gsNkJBQTZCO0VBQ2pDOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO01BQ0ksV0FBVztFQUNmOztFQUVBO01BQ0ksY0FBYztNQUNkLGdCQUFnQjtNQUNoQixZQUFZO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBLDhGQUE4RjtBQUM5RjtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0e1xyXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtO1xyXG4gIHJvdy1nYXA6IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWN0X190aXRsZSB7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqU09DSUFMIE1FRElBIEFDQ09SRElPTioqKioqKioqKioqL1xyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0dlbmVyaWNvbnMnO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2dlbmVyaWNvbnMvZ2VuZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZicpZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgIHVybCgnL2Fzc2V0cy9nZW5lcmljb25zL2dlbmVyaWNvbnMtcmVndWxhci13ZWJmb250LmVvdCcpZm9ybWF0KCd0cnVldHlwZScpXHJcbn1cclxuXHJcbi5vdGhlckNvbnRhY3RzIHtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub3RoZXJDb250YWN0cyBoNCB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dENvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjY29yZGlvbiB7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbi50YWIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG4gIGJvcmRlci1yaWdodDogIzMzMyBzb2xpZCAxcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgMC4xcztcclxufVxyXG5cclxuLnRhYiBhLCAudGFiIC5jb250ZW50IGgxe1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnRhYjpob3ZlciB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG59XHJcblxyXG4udGFiOmhvdmVyIC5zb2NpYWwgYTpiZWZvcmUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbn1cclxuXHJcbi50YWI6aG92ZXIgLnNvY2lhbCBhOmFmdGVyIHtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxufVxyXG5cclxuLnRhYiAuY29udGVudCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktdGV4dENvbG9yKTtcclxuICB3aWR0aDogMzYwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNTBweCAwIDAgMTVweCA7XHJcbn1cclxuXHJcbi50YWIgLmNvbnRlbnQgaDEge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGFiIC5jb250ZW50IHAge1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS40cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgYTpiZWZvcmUsXHJcbi5zb2NpYWwgYTphZnRlciB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMC4xcztcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWluZGVudDogMDtcclxuICBwYWRkaW5nLXRvcDogOTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udDogbm9ybWFsIDMwcHggR2VuZXJpY29ucztcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpO1xyXG59XHJcblxyXG4uc29jaWFsIGE6YWZ0ZXIge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDg1cHg7XHJcbn1cclxuXHJcbi8qIEljb25zICovXHJcbi5saW5rZWRpbiBhOmJlZm9yZSxcclxuLmxpbmtlZGluIGE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICAnXFxmMjA4J1xyXG59XHJcblxyXG4ubGlua2VkaW4gYTphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwYTljZDtcclxufVxyXG5cclxuLmdpdGh1YiBhOmJlZm9yZSxcclxuLmdpdGh1YiBhOmFmdGVyIHtcclxuICBjb250ZW50OiAgJ1xcZjIwMCdcclxufVxyXG5cclxuLmdpdGh1YiBhOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNmU1NDk0O1xyXG59XHJcblxyXG4udHdpdHRlciBhOmJlZm9yZSxcclxuLnR3aXR0ZXIgYTphZnRlciB7XHJcbiAgY29udGVudDogICdcXGYyMDInXHJcbn1cclxuXHJcbi50d2l0dGVyIGE6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2ZGM1ZGQ7XHJcbn1cclxuXHJcbi5nbWFpbCBhOmJlZm9yZSxcclxuLmdtYWlsIGE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICAnXFxmNDEwJ1xyXG59XHJcblxyXG4uZ21haWwgYTphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2RkNmQ2ZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCl7XHJcbiAgLm90aGVyQ29udGFjdHMge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG4gIC50YWIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCAjMzMzIHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgLnRhYiAuY29udGVudCB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxuXHJcbiAgLnRhYjpob3ZlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmFjY29yZGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAuY29udGFjdF9fZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ubGVnZW5kIHtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi5jb250YWN0X19mb3JtIGZvcm0gdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogOTIlO1xyXG4gICAgbWluLXdpZHRoOiA5MiU7XHJcbiAgICBtYXgtd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLmNvbnRhY3RfX2Zvcm0gZm9ybSB7XHJcbiAgICByb3ctZ2FwOiAwO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtX19pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtX19idXR0b24ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkFDQ09SRElPTioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4ub3RoZXJDb250YWN0cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4ICMzMzMgc29saWQ7XHJcbn1cclxuXHJcbi50YWIgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDg1JTtcclxufVxyXG5cclxuLnRhYjpob3ZlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFjY29yZGlvbiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWluLXdpZHRoOiAzNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRhYiAuY29udGVudCBwIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HL2q":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ServicesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Icons made by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " www.flaticon.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/imgs/servicesIcons/", service_r1.serviceImage, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.serviceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.serviceMotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.flaticon.com/authors/", service_r1.imageOwner, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.imageOwner);
} }
class ServicesComponent {
    constructor() {
        this.servicesList = [
            { serviceName: 'Design', serviceMotto: 'I can provide a full design experience', serviceImage: 'sketch', imageOwner: 'Freepik' },
            { serviceName: 'Code', serviceMotto: 'Whatever you think I can make it real', serviceImage: 'data', imageOwner: 'Freepik' },
            { serviceName: 'Launch', serviceMotto: 'Put your site where it belongs. On Internet!', serviceImage: 'startup', imageOwner: 'monkik' },
        ];
    }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 7, vars: 1, consts: [[1, "services"], ["id", "services", 1, "anchor"], [1, "services__title"], [1, "services__container"], ["class", "services__card", 4, "ngFor", "ngForOf"], [1, "services__card"], [1, "face", "face1"], [1, "content"], ["alt", "", 3, "src"], [1, "face", "face2"], [1, "border-effect"], [1, "image-credit"], ["title", "Freepik", "target", "_blank", 3, "href"], ["href", "https://www.flaticon.com/", "title", "Flaticon", "target", "_blank"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ServicesComponent_div_6_Template, 21, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicesList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".services[_ngcontent-%COMP%]{\r\n  margin: 10px 0 10px 0;\r\n  display: grid;\r\n  grid-template-rows: 1.5rem;\r\n  row-gap: 1rem;\r\n}\r\n\r\n.services__title[_ngcontent-%COMP%] {\r\n  justify-self: center;\r\n}\r\n\r\n.services__container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.services__card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 300px;\r\n  height: 200px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.face[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: 0.5s;\r\n  overflow: hidden;\r\n}\r\n\r\n.face.face1[_ngcontent-%COMP%] {\r\n  background: var(--secondary-bgColor);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1;\r\n  transform-origin: bottom;\r\n}\r\n\r\n.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  margin: 10px 0 0;\r\n  color: var(--primary-textColor);\r\n  font-size: 1.5em;\r\n}\r\n\r\n.face2[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(1) {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background: linear-gradient(to right, transparent, var(--primary-textColor));\r\n  animation: animate1 2s linear infinite;\r\n}\r\n\r\n.face2[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(2) {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 3px;\r\n  background: linear-gradient(to bottom, transparent, var(--primary-textColor));\r\n  animation: animate2 2s linear infinite;\r\n  animation-delay: 1s;\r\n}\r\n\r\n.face2[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(3) {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background: linear-gradient(to left, transparent, var(--primary-textColor));\r\n  animation: animate3 2s linear infinite;\r\n  animation-delay: 2s;\r\n}\r\n\r\n.face2[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(4) {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 3px;\r\n  background: linear-gradient(to top, transparent, var(--primary-textColor));\r\n  animation: animate4 2s linear infinite;\r\n  animation-delay: 3s;\r\n}\r\n\r\n.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  font-size: 0.7em;\r\n  color: black;\r\n}\r\n\r\n.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.services__card[_ngcontent-%COMP%]:hover   .face1[_ngcontent-%COMP%] {\r\n  transform: translateY(-100%) rotateX(90deg);\r\n  background: var(--terciary-bgColor);\r\n}\r\n\r\n.services__card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]{\r\n  width: 260px;\r\n  height: 160px;\r\n  text-align: center;\r\n  background: var(--terciary-bgColor);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  transform-origin: top;\r\n  transform: translateY(100%) rotateX(90deg);\r\n}\r\n\r\n.services__card[_ngcontent-%COMP%]:hover   .face2[_ngcontent-%COMP%] {\r\n  transform: translateY(0) rotateX(0);\r\n}\r\n\r\n.services__card[_ngcontent-%COMP%]   .face2[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  bottom: 2px;\r\n  width: 50%;\r\n  background: var(--before-cardColor);\r\n  z-index: -1;\r\n}\r\n\r\n.image-credit[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLDRFQUE0RTtFQUM1RSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osVUFBVTtFQUNWLDZFQUE2RTtFQUM3RSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCwyRUFBMkU7RUFDM0Usc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7RUFDWixVQUFVO0VBQ1YsMEVBQTBFO0VBQzFFLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2Vze1xyXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtO1xyXG4gIHJvdy1nYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zZXJ2aWNlc19fdGl0bGUge1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VydmljZXNfX2NvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5zZXJ2aWNlc19fY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uZmFjZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mYWNlLmZhY2UxIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmdDb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG59XHJcblxyXG4uZmFjZTEgLmNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZhY2UxIC5jb250ZW50IGltZ3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5mYWNlMSAuY29udGVudCBoNHtcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHRDb2xvcik7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmZhY2UyIC5ib3JkZXItZWZmZWN0Om50aC1jaGlsZCgxKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsIHZhcigtLXByaW1hcnktdGV4dENvbG9yKSk7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlMSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5mYWNlMiAuYm9yZGVyLWVmZmVjdDpudGgtY2hpbGQoMikge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHZhcigtLXByaW1hcnktdGV4dENvbG9yKSk7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlMiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLmZhY2UyIC5ib3JkZXItZWZmZWN0Om50aC1jaGlsZCgzKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCwgdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpKTtcclxuICBhbmltYXRpb246IGFuaW1hdGUzIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG4uZmFjZTIgLmJvcmRlci1lZmZlY3Q6bnRoLWNoaWxkKDQpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQsIHZhcigtLXByaW1hcnktdGV4dENvbG9yKSk7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlNCAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxufVxyXG5cclxuLmZhY2UyIC5jb250ZW50IHNwYW57XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mYWNlMiAuY29udGVudCBzcGFuIGF7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNlcnZpY2VzX19jYXJkOmhvdmVyIC5mYWNlMSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxufVxyXG5cclxuLnNlcnZpY2VzX19jYXJkIC5mYWNlLmZhY2Uye1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG59XHJcblxyXG4uc2VydmljZXNfX2NhcmQ6aG92ZXIgLmZhY2UyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWCgwKTtcclxufVxyXG5cclxuLnNlcnZpY2VzX19jYXJkIC5mYWNlMjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMnB4O1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmVmb3JlLWNhcmRDb2xvcik7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5pbWFnZS1jcmVkaXR7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Handcrafted by me \u00A92021 Lionel Montesdeoca Nuez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\r\n  background: #000;\r\n  padding: 2rem;\r\n  text-align: center;\r\n}\r\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBQ25DO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKkZPT1RFUioqKioqKioqKioqKiovXHJcbi5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3RlciBwIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_stack_stack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/stack/stack.component */ "Tnwx");
/* harmony import */ var _components_works_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/works/works.component */ "2uF8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/services/services.component */ "HL2q");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_individual_work_individual_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/individual-work/individual-work.component */ "qdnl");











function AppComponent_app_individual_work_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-individual-work", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("workRecived", ctx_r0.work);
} }
class AppComponent {
    constructor() {
        this.title = 'portfolioAngular';
        this.a = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 1, consts: [[3, "workShared"], [3, "workRecived", 4, "ngIf"], [3, "workRecived"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-works", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("workShared", function AppComponent_Template_app_works_workShared_3_listener($event) { return ctx.work = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_individual_work_4_Template, 1, 1, "app-individual-work", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.work);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_stack_stack_component__WEBPACK_IMPORTED_MODULE_3__["StackComponent"], _components_works_works_component__WEBPACK_IMPORTED_MODULE_4__["WorksComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_individual_work_individual_work_component__WEBPACK_IMPORTED_MODULE_9__["IndividualWorkComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Tnwx":
/*!*****************************************************!*\
  !*** ./src/app/components/stack/stack.component.ts ***!
  \*****************************************************/
/*! exports provided: StackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackComponent", function() { return StackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function StackComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stackItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stackItem_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/imgs/stackIcons/", stackItem_r1.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", stackItem_r1.name);
} }
class StackComponent {
    constructor() {
        this.stackList = [
            { name: "HTML5", img: "html5.svg" },
            { name: "CSS3", img: "css3.svg" },
            { name: "EC6", img: "logo-javascript.svg" },
            { name: "TypeScript", img: "typescript.svg" },
            { name: "Angular 9", img: "angular-icon-1.svg" },
            { name: "Node.js", img: "nodejs-1.svg" },
            { name: "Express", img: "express-109.svg" },
            { name: "PHP", img: "php-1.svg" },
            { name: "Laravel", img: "laravel-2.svg" },
            { name: "MariaDB", img: "mariadb.svg" },
            { name: "PostgreSQL", img: "postgresql.svg" },
            { name: "MongoDB", img: "mongodb-icon-1.svg" },
            { name: "AWS", img: "aws-2.svg" },
            { name: "Firebase", img: "firebase-1.svg" },
            { name: "Scrum", img: "scrumorg-1.svg" },
            { name: "Bash", img: "bash-1.svg" },
            { name: "Git", img: "git-icon.svg" },
            { name: "Docker", img: "docker.svg" },
            { name: "Wordpress", img: "wordpress-icon.svg" },
        ];
        this.test = "test";
    }
    ngOnInit() {
    }
}
StackComponent.ɵfac = function StackComponent_Factory(t) { return new (t || StackComponent)(); };
StackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StackComponent, selectors: [["app-stack"]], decls: 11, vars: 1, consts: [[1, "myStack"], ["id", "stack", 1, "anchor"], [1, "myStack__title"], [1, "myStack__list"], [1, "border-effect"], ["class", "myStack-list__item", 4, "ngFor", "ngForOf"], [1, "myStack-list__item"], [1, "myStack-list__item__caption"], [1, "stackIcon", 3, "src", "alt"]], template: function StackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StackComponent_div_10_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stackList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".myStack[_ngcontent-%COMP%]{\r\n    margin: 10px 0 10px 0;\r\n    display: grid;\r\n    grid-template-rows: 1.5rem;\r\n    row-gap: 1rem;\r\n}\r\n\r\n.myStack__title[_ngcontent-%COMP%] {\r\n    justify-self: center;\r\n}\r\n\r\n.myStack__list[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: repeat(3, 25%);\r\n    grid-template-columns: repeat(5, 20%);\r\n    justify-items: center;\r\n    position: relative;\r\n    background: var(--terciary-bgColor);\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.myStack__list[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 2px;\r\n    bottom: 2px;\r\n    width: 50%;\r\n    background: var(--before-cardColor);\r\n    z-index: 0;\r\n}\r\n\r\n.myStack-list__item[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: .5rem auto;\r\n    width: 90%;\r\n    transition: 1s;\r\n    z-index: 1;\r\n}\r\n\r\n.stackIcon[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.myStack-list__item[_ngcontent-%COMP%]:hover {\r\n    background: var(--primary-textColor);\r\n    border-radius: 5px;\r\n}\r\n\r\n.myStack-list__item__caption[_ngcontent-%COMP%]{\r\n    content: attr(item);\r\n    opacity: 0;\r\n    display: block;\r\n    position: relative;\r\n    bottom: 5%;\r\n    transition: 0.47s;\r\n}\r\n\r\n.myStack-list__item[_ngcontent-%COMP%]:hover   .myStack-list__item__caption[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    background: var(--secondary-bgColor);\r\n    color: var(--primary-bgColor);\r\n}\r\n\r\n.myStack[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%] {\r\n    transition: 0.5;\r\n    opacity: 0;\r\n}\r\n\r\n.myStack__list[_ngcontent-%COMP%]:hover   .border-effect[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n}\r\n\r\n.myStack[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(1) {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 3px;\r\n    background: linear-gradient(to right, transparent, var(--primary-textColor));\r\n    animation: animate1 2s linear infinite;\r\n}\r\n\r\n.myStack[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(2) {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 3px;\r\n    background: linear-gradient(to bottom, transparent, var(--primary-textColor));\r\n    animation: animate2 2s linear infinite;\r\n    animation-delay: 1s;\r\n}\r\n\r\n.myStack[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(3) {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 3px;\r\n    background: linear-gradient(to left, transparent, var(--primary-textColor));\r\n    animation: animate3 2s linear infinite;\r\n    animation-delay: 2s;\r\n}\r\n\r\n.myStack[_ngcontent-%COMP%]   .border-effect[_ngcontent-%COMP%]:nth-child(4) {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 3px;\r\n    background: linear-gradient(to top, transparent, var(--primary-textColor));\r\n    animation: animate4 2s linear infinite;\r\n    animation-delay: 3s;\r\n}\r\n\r\n@media only screen and (max-width: 480px){\r\n  .myStack-list__item__caption[_ngcontent-%COMP%]{\r\n    font-size: 60%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFjay9zdGFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNEVBQTRFO0lBQzVFLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFlBQVk7SUFDWixVQUFVO0lBQ1YsNkVBQTZFO0lBQzdFLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLDJFQUEyRTtJQUMzRSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLFVBQVU7SUFDViwwRUFBMEU7SUFDMUUsc0NBQXNDO0lBQ3RDLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGFjay9zdGFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15U3RhY2t7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVyZW07XHJcbiAgICByb3ctZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubXlTdGFja19fdGl0bGUge1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teVN0YWNrX19saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyNSUpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMjAlKTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm15U3RhY2tfX2xpc3Q6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbGVmdDogMnB4O1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmVmb3JlLWNhcmRDb2xvcik7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ubXlTdGFjay1saXN0X19pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogLjVyZW0gYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zdGFja0ljb24ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5teVN0YWNrLWxpc3RfX2l0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubXlTdGFjay1saXN0X19pdGVtX19jYXB0aW9ue1xyXG4gICAgY29udGVudDogYXR0cihpdGVtKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjQ3cztcclxufVxyXG5cclxuLm15U3RhY2stbGlzdF9faXRlbTpob3ZlciAubXlTdGFjay1saXN0X19pdGVtX19jYXB0aW9uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmdDb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iZ0NvbG9yKTtcclxufVxyXG5cclxuLm15U3RhY2sgLmJvcmRlci1lZmZlY3Qge1xyXG4gICAgdHJhbnNpdGlvbjogMC41O1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm15U3RhY2tfX2xpc3Q6aG92ZXIgLmJvcmRlci1lZmZlY3Qge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm15U3RhY2sgLmJvcmRlci1lZmZlY3Q6bnRoLWNoaWxkKDEpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpKTtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZTEgMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4ubXlTdGFjayAuYm9yZGVyLWVmZmVjdDpudGgtY2hpbGQoMikge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHZhcigtLXByaW1hcnktdGV4dENvbG9yKSk7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUyIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi5teVN0YWNrIC5ib3JkZXItZWZmZWN0Om50aC1jaGlsZCgzKSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCwgdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpKTtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZTMgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxufVxyXG5cclxuLm15U3RhY2sgLmJvcmRlci1lZmZlY3Q6bnRoLWNoaWxkKDQpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQsIHZhcigtLXByaW1hcnktdGV4dENvbG9yKSk7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGU0IDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogM3M7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xyXG4gIC5teVN0YWNrLWxpc3RfX2l0ZW1fX2NhcHRpb257XHJcbiAgICBmb250LXNpemU6IDYwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stack',
                templateUrl: './stack.component.html',
                styleUrls: ['./stack.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "sticky": a0 }; };
class NavbarComponent {
    constructor() {
        this.isScrolled = false;
    }
    onScroll(event) {
        if (window.pageYOffset > 100) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 16, vars: 3, consts: [[1, "navbar", 3, "ngClass"], ["href", "#", 1, "logo"], [1, "navbar__list"], [1, "navbar-list__item"], ["href", "#stack", 1, "navbar__link"], ["href", "#works", 1, "navbar__link"], ["href", "#services", 1, "navbar__link"], ["href", "#contact", 1, "navbar__link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lionel MN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isScrolled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    transition: 0.5s;\r\n    padding: 40px 0;\r\n    z-index: 2;\r\n}\r\n\r\n.navbar.sticky[_ngcontent-%COMP%]{\r\n    padding: 5px 0;\r\n    background: var(--secondary-bgColor);\r\n    opacity: 0.9;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    font-family: 'Archivo Black', sans-serif;\r\n    position: relative;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    color: var(--primary-textColor);\r\n    font-size: 2em;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    transition: 0.6s;\r\n}\r\n\r\n.navbar__list[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.navbar-list__item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.navbar__link[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin: 0 15px;\r\n    text-decoration: none;\r\n    color: var(--primary-textColor);\r\n    letter-spacing: 2px;\r\n    font-weight: 500px;\r\n    transition: 0.6s\r\n}\r\n\r\n.navbar__link[_ngcontent-%COMP%]:hover{\r\n    transform: scale(2);\r\n    font-weight: 800px;\r\n    color: black;\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n  .logo[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n  .navbar[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      height: 5rem;\r\n      grid-template-columns: 100%;\r\n      position: fixed;\r\n      top: 0;\r\n      z-index: 3;\r\n  }\r\n\r\n  .navbar__list[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0FBQ2pCOztFQUVFO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWiwyQkFBMkI7TUFDM0IsZUFBZTtNQUNmLE1BQU07TUFDTixVQUFVO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5uYXZiYXIuc3RpY2t5e1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmdDb2xvcik7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5uYXZiYXIgLmxvZ297XHJcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdm8gQmxhY2snLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHRDb2xvcik7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxufVxyXG5cclxuLm5hdmJhcl9fbGlzdHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm5hdmJhci1saXN0X19pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hdmJhcl9fbGlua3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dENvbG9yKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzXHJcbn1cclxuXHJcbi5uYXZiYXJfX2xpbms6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4gIC5uYXZiYXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyX19saXN0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "2MiI");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _stack_stack_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stack/stack.component */ "Tnwx");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./works/works.component */ "2uF8");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "HL2q");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "G2Gn");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _individual_work_individual_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./individual-work/individual-work.component */ "qdnl");













class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _stack_stack_component__WEBPACK_IMPORTED_MODULE_4__["StackComponent"],
        _works_works_component__WEBPACK_IMPORTED_MODULE_5__["WorksComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _individual_work_individual_work_component__WEBPACK_IMPORTED_MODULE_11__["IndividualWorkComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _stack_stack_component__WEBPACK_IMPORTED_MODULE_4__["StackComponent"],
        _works_works_component__WEBPACK_IMPORTED_MODULE_5__["WorksComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _individual_work_individual_work_component__WEBPACK_IMPORTED_MODULE_11__["IndividualWorkComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                    _stack_stack_component__WEBPACK_IMPORTED_MODULE_4__["StackComponent"],
                    _works_works_component__WEBPACK_IMPORTED_MODULE_5__["WorksComponent"],
                    _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _individual_work_individual_work_component__WEBPACK_IMPORTED_MODULE_11__["IndividualWorkComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                    _stack_stack_component__WEBPACK_IMPORTED_MODULE_4__["StackComponent"],
                    _works_works_component__WEBPACK_IMPORTED_MODULE_5__["WorksComponent"],
                    _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _individual_work_individual_work_component__WEBPACK_IMPORTED_MODULE_11__["IndividualWorkComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qdnl":
/*!*************************************************************************!*\
  !*** ./src/app/components/individual-work/individual-work.component.ts ***!
  \*************************************************************************/
/*! exports provided: IndividualWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualWorkComponent", function() { return IndividualWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function IndividualWorkComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndividualWorkComponent_img_13_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const img_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectImg(img_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/imgs/", img_r2, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", img_r2);
} }
function IndividualWorkComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndividualWorkComponent_div_16_Template_h5_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.desSelectImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/imgs/", ctx_r1.selectedImg, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx_r1.selectedImg);
} }
class IndividualWorkComponent {
    constructor() { }
    ngOnInit() {
    }
    selectImg(img) {
        this.selectedImg = img;
    }
    desSelectImg() {
        this.selectedImg = "";
    }
}
IndividualWorkComponent.ɵfac = function IndividualWorkComponent_Factory(t) { return new (t || IndividualWorkComponent)(); };
IndividualWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndividualWorkComponent, selectors: [["app-individual-work"]], inputs: { workRecived: "workRecived" }, decls: 17, vars: 4, consts: [[1, "work"], ["id", "work", 1, "anchor"], [1, "work__title"], [1, "work__container"], [1, "border-effect"], [1, "work__content"], [1, "work__description", 3, "innerHTML"], [1, "work__imgs"], ["class", "img", 3, "src", "alt", "click", 4, "ngFor", "ngForOf"], ["class", "fullView", 4, "ngIf"], [1, "img", 3, "src", "alt", "click"], [1, "fullView"], [3, "click"], [1, "img-fullView", 3, "src", "alt"]], template: function IndividualWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IndividualWorkComponent_img_13_Template, 1, 2, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Click on an image to see it better");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IndividualWorkComponent_div_16_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.workRecived.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.workRecived.info, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workRecived.imgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".work{\r\n  margin: 10px 0 10px 0;\r\n  display: grid;\r\n  grid-template-rows: 1.5rem;\r\n  row-gap: 1rem;\r\n}\r\n\r\n.work__title {\r\n  justify-self: center;\r\n}\r\n\r\n.work__container{\r\n  position: relative;\r\n  width: 90%;\r\n  height: 350px;\r\n  background: var(--terciary-bgColor);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n  padding: 1rem;\r\n  z-index: 0;\r\n}\r\n\r\n.work__container::before{\r\n  content: '';\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  bottom: 2px;\r\n  width: 50%;\r\n  background: var(--before-cardColor);\r\n  z-index: -1;\r\n}\r\n\r\n.work__container .border-effect {\r\n  transition: 0.5;\r\n  opacity: 0;\r\n}\r\n\r\n.work__container:hover .border-effect {\r\n  opacity: 1;\r\n}\r\n\r\n.work__container .border-effect:nth-child(1) {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background: linear-gradient(to right, transparent, var(--primary-textColor));\r\n  animation: animate1 2s linear infinite;\r\n}\r\n\r\n.work__container .border-effect:nth-child(2) {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 3px;\r\n  height: 100%;\r\n  background: linear-gradient(to bottom, transparent, var(--primary-textColor));\r\n  animation: animate2 2s linear infinite;\r\n  animation-delay: 1s;\r\n}\r\n\r\n.work__container .border-effect:nth-child(3) {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background: linear-gradient(to left, transparent, var(--primary-textColor));\r\n  animation: animate3 2s linear infinite;\r\n  animation-delay: 2s;\r\n}\r\n\r\n.work__container .border-effect:nth-child(4) {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 3px;\r\n  height: 100%;\r\n  background: linear-gradient(to top, transparent, var(--primary-textColor));\r\n  animation: animate4 2s linear infinite;\r\n  animation-delay: 3s;\r\n}\r\n\r\n.work__content p{\r\n  text-align: center;\r\n}\r\n\r\n.work__imgs{\r\n  text-align: center;\r\n}\r\n\r\n.img{\r\n  width: 24%;\r\n  margin: 0.5%;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  transition: 1s;\r\n}\r\n\r\n.img:hover{\r\n  transform: scale(1.05);\r\n}\r\n\r\n.fullView{\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n}\r\n\r\n.fullView h5{\r\n  cursor: pointer;\r\n  color: var(--primary-bgColor);\r\n  font-size: 3rem;\r\n  margin: 0 1rem;\r\n  position: absolute;\r\n  transition: 1s;\r\n  -webkit-text-stroke: 2px var(--secondary-bgColor);\r\n  animation: hue-rotate 5s linear infinite;\r\n}\r\n\r\n.fullView h5:hover{\r\n  transform: scale(1.5);\r\n}\r\n\r\n.img-fullView{\r\n  width: 100%;\r\n}\r\n\r\n.work__description a:hover {\r\n  color: var(--primary-textColor);\r\n  font-weight: 600;\r\n}\r\n\r\n.work__description a{\r\n  color: var(--primary-bgColor);\r\n  text-decoration: none;\r\n}\r\n\r\n@keyframes hue-rotate {\r\n  0%{\r\n    filter: hue-rotate();\r\n  }\r\n  100%{\r\n    filter: hue-rotate(360deg);\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n  .work__container{\r\n    width: 70%;\r\n    height: 600px;\r\n  }\r\n\r\n  .work__description{\r\n    overflow: auto;\r\n    margin: 2rem 0\r\n  }\r\n\r\n  .work__imgs{\r\n    display: grid;\r\n    grid-template-columns:  47.5% 47.5%;\r\n    justify-items: center;\r\n    gap: 1rem 5%;\r\n  }\r\n\r\n  .fullView h5{\r\n    font-size: 2rem;\r\n  }\r\n\r\n\r\n  .img{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 480px){\r\n  .work__container{\r\n    height: 475px;\r\n  }\r\n\r\n  .work__description{\r\n    height: 250px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmRpdmlkdWFsLXdvcmsvaW5kaXZpZHVhbC13b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCw0RUFBNEU7RUFDNUUsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWiw2RUFBNkU7RUFDN0Usc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMkVBQTJFO0VBQzNFLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDBFQUEwRTtFQUMxRSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlEQUFpRDtFQUNqRCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZDtFQUNGOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7O0VBR0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luZGl2aWR1YWwtd29yay9pbmRpdmlkdWFsLXdvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3Jre1xyXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtO1xyXG4gIHJvdy1nYXA6IDFyZW07XHJcbn1cclxuXHJcbi53b3JrX190aXRsZSB7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53b3JrX19jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ud29ya19fY29udGFpbmVyOjpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDJweDtcclxuICBib3R0b206IDJweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJlZm9yZS1jYXJkQ29sb3IpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ud29ya19fY29udGFpbmVyIC5ib3JkZXItZWZmZWN0IHtcclxuICB0cmFuc2l0aW9uOiAwLjU7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLndvcmtfX2NvbnRhaW5lcjpob3ZlciAuYm9yZGVyLWVmZmVjdCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLndvcmtfX2NvbnRhaW5lciAuYm9yZGVyLWVmZmVjdDpudGgtY2hpbGQoMSkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCB2YXIoLS1wcmltYXJ5LXRleHRDb2xvcikpO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZTEgMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4ud29ya19fY29udGFpbmVyIC5ib3JkZXItZWZmZWN0Om50aC1jaGlsZCgyKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpKTtcclxuICBhbmltYXRpb246IGFuaW1hdGUyIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG4ud29ya19fY29udGFpbmVyIC5ib3JkZXItZWZmZWN0Om50aC1jaGlsZCgzKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdHJhbnNwYXJlbnQsIHZhcigtLXByaW1hcnktdGV4dENvbG9yKSk7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlMyAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxufVxyXG5cclxuLndvcmtfX2NvbnRhaW5lciAuYm9yZGVyLWVmZmVjdDpudGgtY2hpbGQoNCkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCwgdmFyKC0tcHJpbWFyeS10ZXh0Q29sb3IpKTtcclxuICBhbmltYXRpb246IGFuaW1hdGU0IDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG59XHJcblxyXG4ud29ya19fY29udGVudCBwe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndvcmtfX2ltZ3N7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1ne1xyXG4gIHdpZHRoOiAyNCU7XHJcbiAgbWFyZ2luOiAwLjUlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG4uaW1nOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5mdWxsVmlld3tcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZnVsbFZpZXcgaDV7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnQ29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBtYXJnaW46IDAgMXJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IHZhcigtLXNlY29uZGFyeS1iZ0NvbG9yKTtcclxuICBhbmltYXRpb246IGh1ZS1yb3RhdGUgNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uZnVsbFZpZXcgaDU6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG4uaW1nLWZ1bGxWaWV3e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud29ya19fZGVzY3JpcHRpb24gYTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dENvbG9yKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ud29ya19fZGVzY3JpcHRpb24gYXtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iZ0NvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaHVlLXJvdGF0ZSB7XHJcbiAgMCV7XHJcbiAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoKTtcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgLndvcmtfX2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gIH1cclxuXHJcbiAgLndvcmtfX2Rlc2NyaXB0aW9ue1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW46IDJyZW0gMFxyXG4gIH1cclxuXHJcbiAgLndvcmtfX2ltZ3N7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgNDcuNSUgNDcuNSU7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW0gNSU7XHJcbiAgfVxyXG5cclxuICAuZnVsbFZpZXcgaDV7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuXHJcbiAgLmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgLndvcmtfX2NvbnRhaW5lcntcclxuICAgIGhlaWdodDogNDc1cHg7XHJcbiAgfVxyXG5cclxuICAud29ya19fZGVzY3JpcHRpb257XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndividualWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-individual-work',
                templateUrl: './individual-work.component.html',
                styleUrls: ['./individual-work.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, { workRecived: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_individual_work_individual_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/individual-work/individual-work.component */ "qdnl");





const routes = [
    { path: 'works/:title', component: _components_individual_work_individual_work_component__WEBPACK_IMPORTED_MODULE_2__["IndividualWorkComponent"] },
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

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map