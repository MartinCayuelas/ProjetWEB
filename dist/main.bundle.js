webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/***/ (function(module, exports) {

module.exports = "\n.imageAvatar{\n    height: 150px;\n    width: 150px;\n}\n\n.bold{\n    font-weight: bold;\n}\n\n.containerImg{\n    margin: auto;\n}\n\n.cardAccount{\n    \n    margin-bottom: 10px;\n}\n\n.titleStats{\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.btnDashboard{\n    margin: auto;\n    padding: 10px;\n}"

/***/ }),

/***/ "./src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"container\">\n\n    <div class=\"row rowSerie\">\n      <!--Infos-->\n      <div class=\"col-md-6\">\n        <div class=\"card cardAccount bg-dark\">\n          <div class=\"containerImg\">\n            <img class=\"card-img-top img-fluid imageAvatar\" src=\"../../assets/images/fav.png\" alt=\"Image LoginUser\" />\n          </div>\n\n          <div class=\"card-body  table-responsive text-warning\" *ngIf=\"userCurrent !== undefined\">\n            <table class=\"table \">\n              <tbody>\n                <tr>\n                  <th scope=\"row\">Login</th>\n                  <td>{{userCurrent.login}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Prénom</th>\n                  <td>{{userCurrent.prenom}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Nom</th>\n                  <td>{{userCurrent.nom}}</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Email</th>\n                  <td>{{userCurrent.email}}</td>\n\n                </tr>\n                <tr>\n                  <th scope=\"row\">Inscription</th>\n                  <td>{{userCurrent.inscription | date:'yyyy-MM-dd'}}</td>\n                </tr>\n                <tr>\n                  <th>\n                  </th>\n                  <td>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div *ngIf=\"userCurrent !== undefined && userCurrent.role === 1\" class=\"btnDashboard\">\n            <a class=\"btn btn-md btn-warning\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Access Dashboard</a>\n          </div>\n        </div>\n      </div>\n\n\n      <!--Stats-->\n      <div class=\"col-md-6\">\n        <div class=\"card cardAccount bg-warning\">\n          <div class=\"card-body text-dark\">\n            <div class=\"text-center titleStats\">\n              <h4>\n                Statistiques\n                <i class=\"fas fa-chart-bar\"></i>\n              </h4>\n            </div>\n            <div class=\"row\">\n              <p class=\"col-md-6\">\n                <span class=\"bold\">Séries Visionnées</span>\n              </p>\n              <p class=\"col-md-6\">{{nbSeries}}</p>\n            </div>\n            <hr>\n            <div class=\"row\">\n              <p class=\"col-md-6\">\n                <span class=\"bold\"> Episodes Visionnés</span>\n              </p>\n              <p class=\"col-md-6\">{{nbEpisodes}}</p>\n            </div>\n            <hr>\n            <div class=\"row\">\n              <p class=\"col-md-6\">\n                <span class=\"bold\">Minutes Visionnées</span>\n              </p>\n              <p class=\"col-md-6\">21</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountComponent = /** @class */ (function () {
    function AccountComponent(route, authService, router, userService) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        // this.id = parseInt(this.route.snapshot.paramMap.get('idUser'), 0); // Récupération du paramètre dans l'URL
        var _this = this;
        this.userService.getCurrent().subscribe(function (user) {
            _this.userCurrent = user;
            console.log('idUser Get Curennt Account:' + _this.userCurrent.idUser);
            _this.userService.getNbEpisodes(_this.userCurrent.idUser).subscribe(function (stats) {
                _this.nbEpisodes = stats.nbVus;
                console.log('nbepisodes:' + _this.nbEpisodes);
            });
            _this.userService.getNbSeries(_this.userCurrent.idUser).subscribe(function (stats) {
                _this.nbSeries = stats.nbVus;
                console.log('nbepisodes:' + _this.nbSeries);
            });
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.authService.logout();
                    _this.router.navigate(['/signin']);
                }
            }
        });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/account/account.component.html"),
            styles: [__webpack_require__("./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__share_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__share_services_user_service__["a" /* UserService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n.monFooter{\n    margin-top: 50px;\n    padding: 5px;\n}\n\n\n.active{\n\n    border: solid #ffbb33 2px;\n    background-color: #ffbb33;\n    color: rgb(0, 0, 0);\n    border-radius: 5px;\n\n}\n\n\n.logoBrand{\n    width:30px;\n     height:30px;\n}\n\n\n/* Small devices (tablets, 768px and up) */\n\n\n@media (min-width: 768px) {\n    .featurette-heading {\n        font-size: 50px;\n    }\n}\n\n\n/* Medium devices (desktops, 992px and up) */\n\n\n@media (min-width: 992px) {\n    .carousel-caption p {\n        margin-bottom:20px;\n        font-size: 20px;\n        line-height: 1.4;\n    }\n\n    .featurette-heading {\n        margin-top: 7rem;\n    }\n}\n\n\n/* Large devices (large desktops, 1200px and up) */\n\n\n@media (min-width: 1200px) {\n\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n  \n</app-navbar>\n\n<router-outlet>\n  <!-- Ici que ce fait le routage-->\n</router-outlet>\n\n<footer class=\"footer bg-dark monFooter\">\n  <div class=\"container\">\n    <span class=\"text-white\">&copy; WatchMe&Co 2018 <i class=\"fas fa-tablet-alt\"></i></span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.getCurrent = function () {
        var _this = this;
        this.userService.getCurrent().subscribe(function (user) {
            _this.userCurrent = user;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__share_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__share_services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__series_series_component__ = __webpack_require__("./src/app/series/series.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__catalog_catalogue_component__ = __webpack_require__("./src/app/catalog/catalogue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account_component__ = __webpack_require__("./src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inscription_inscription_component__ = __webpack_require__("./src/app/inscription/inscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__connexion_connexion_component__ = __webpack_require__("./src/app/connexion/connexion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__series_serie_update_serie_update_serie_update_component__ = __webpack_require__("./src/app/series/serie-update/serie-update/serie-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__episode_episode_list_episode_list_component__ = __webpack_require__("./src/app/episode/episode-list/episode-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__playlist_playlist_user_playlist_user_component__ = __webpack_require__("./src/app/playlist/playlist-user/playlist-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__critique_critique_component__ = __webpack_require__("./src/app/critique/critique.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__series_serie_serie_serie_component__ = __webpack_require__("./src/app/series/serie/serie/serie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__series_serie_form_serie_form_component__ = __webpack_require__("./src/app/series/serie-form/serie-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__share_services_serie_service__ = __webpack_require__("./src/app/share/services/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__share_services_episode_service__ = __webpack_require__("./src/app/share/services/episode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__share_services_critique_service__ = __webpack_require__("./src/app/share/services/critique.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__share_services_token_interceptor_service__ = __webpack_require__("./src/app/share/services/token-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__share_auth_guard__ = __webpack_require__("./src/app/share/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__share_admin_guard__ = __webpack_require__("./src/app/share/admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components

















// Services









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__series_series_component__["a" /* SeriesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__catalog_catalogue_component__["a" /* CatalogueComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_10__inscription_inscription_component__["a" /* InscriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__connexion_connexion_component__["a" /* ConnexionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_19__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__series_serie_serie_serie_component__["a" /* SerieComponent */],
                __WEBPACK_IMPORTED_MODULE_21__series_serie_form_serie_form_component__["a" /* SerieFormComponent */],
                __WEBPACK_IMPORTED_MODULE_14__series_serie_update_serie_update_serie_update_component__["a" /* SerieUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_15__episode_episode_list_episode_list_component__["a" /* EpisodeListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__playlist_playlist_user_playlist_user_component__["a" /* PlaylistUserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__critique_critique_component__["a" /* CritiqueComponent */],
                __WEBPACK_IMPORTED_MODULE_18__not_found_not_found_component__["a" /* NotFoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__app_routes__["a" /* appRoutes */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__share_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_23__share_services_serie_service__["a" /* SerieService */],
                __WEBPACK_IMPORTED_MODULE_24__share_services_episode_service__["a" /* EpisodeService */],
                __WEBPACK_IMPORTED_MODULE_25__share_services_critique_service__["a" /* CritiqueService */],
                __WEBPACK_IMPORTED_MODULE_26__share_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_29__share_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_30__share_admin_guard__["a" /* AdminGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_27__share_services_token_interceptor_service__["a" /* TokenInterceptorService */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__series_series_component__ = __webpack_require__("./src/app/series/series.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog_catalogue_component__ = __webpack_require__("./src/app/catalog/catalogue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_component__ = __webpack_require__("./src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__ = __webpack_require__("./src/app/inscription/inscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connexion_connexion_component__ = __webpack_require__("./src/app/connexion/connexion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__series_serie_update_serie_update_serie_update_component__ = __webpack_require__("./src/app/series/serie-update/serie-update/serie-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__playlist_playlist_user_playlist_user_component__ = __webpack_require__("./src/app/playlist/playlist-user/playlist-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__series_serie_serie_serie_component__ = __webpack_require__("./src/app/series/serie/serie/serie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__series_serie_form_serie_form_component__ = __webpack_require__("./src/app/series/serie-form/serie-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__share_auth_guard__ = __webpack_require__("./src/app/share/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__share_admin_guard__ = __webpack_require__("./src/app/share/admin.guard.ts");














var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_5__connexion_connexion_component__["a" /* ConnexionComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__["a" /* InscriptionComponent */] },
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_1__catalog_catalogue_component__["a" /* CatalogueComponent */] },
    { path: 'playlist', component: __WEBPACK_IMPORTED_MODULE_8__playlist_playlist_user_playlist_user_component__["a" /* PlaylistUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__share_auth_guard__["a" /* AuthGuard */]] },
    { path: 'series', component: __WEBPACK_IMPORTED_MODULE_0__series_series_component__["a" /* SeriesComponent */] },
    { path: 'series/add', component: __WEBPACK_IMPORTED_MODULE_11__series_serie_form_serie_form_component__["a" /* SerieFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__share_admin_guard__["a" /* AdminGuard */]] },
    { path: 'catalog/:idSerie', component: __WEBPACK_IMPORTED_MODULE_10__series_serie_serie_serie_component__["a" /* SerieComponent */] },
    { path: 'series/:idSerie', component: __WEBPACK_IMPORTED_MODULE_10__series_serie_serie_serie_component__["a" /* SerieComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__share_admin_guard__["a" /* AdminGuard */]] },
    { path: 'dashboard/addSerie', component: __WEBPACK_IMPORTED_MODULE_11__series_serie_form_serie_form_component__["a" /* SerieFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__share_admin_guard__["a" /* AdminGuard */]] },
    { path: 'dashboard/updateSerie/:idSerie', component: __WEBPACK_IMPORTED_MODULE_7__series_serie_update_serie_update_serie_update_component__["a" /* SerieUpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__share_admin_guard__["a" /* AdminGuard */]] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_3__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__share_auth_guard__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: 'playlist/serie/:idSerie', component: __WEBPACK_IMPORTED_MODULE_10__series_serie_serie_serie_component__["a" /* SerieComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__share_auth_guard__["a" /* AuthGuard */]] }
];


/***/ }),

/***/ "./src/app/catalog/catalogue.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n\n/* Small devices (tablets, 768px and up) */\n\n.cardCatalog{\n    width: 18rem;\n    margin-bottom: 25px;\n}\n\n.imageCatalogue{\n    width: 300px;\n    height: 200px;\n}\n\n.description{\n    width: 250px;\n    height: 75px;\n    overflow: hidden;\n    text-overflow: ellipsis; \n}\n\n@media (min-width: 400px) {\n    .rowSerie{\n       \n        padding-left: 90px;\n    }\n    \n}\n\n@media (min-width: 768px) {\n    .rowSerie{\n       \n        padding-left: 25px;\n    }\n    \n    \n}"

/***/ }),

/***/ "./src/app/catalog/catalogue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n  <div class=\"text-center\">\n    <h3 class=\"text-dark\">\n      Catalog of Series\n    </h3>\n    <hr>\n  </div>\n</div>\n\n<div class=\"album py-5\">\n  <div class=\"container\">\n    <div class=\"row rowSerie\">\n\n      <div class=\"col-md-4\" *ngFor=\"let serie of series\">\n        <div class=\"card cardCatalog\" *ngIf=\"serie !== undefined\">\n          <img  class=\"card-img-top img-fluid imageCatalogue\" src=\"../../assets/images/{{serie.imageSerie}}\" alt=\"Image Affiche Série\" />\n\n          <div class=\"card-body bg-dark text-warning\">\n            <h5 class=\"card-title\">{{serie.titre}}</h5>\n            <p class=\"card-text description\"> {{serie.description}}</p>\n            <a class=\"btn btn-sm btn-outline-warning\" routerLink=\"/catalog/{{serie.idSerie}}\" routerLinkActive=\"active\">See</a>\n            <div class=\"d-flex justify-content-between align-items-center\">\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <hr class=\"featurette-divider\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/catalog/catalogue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__ = __webpack_require__("./src/app/share/services/serie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogueComponent = /** @class */ (function () {
    /*series = [
    new Serie(1, 'Game of Thrones' , 'GOT.jpg' , 'Meilleure series ever' , '23/12/09' ),
        new Serie(2, 'Vikings' , 'vikings.jpg' , 'I\'m Raagnnaaaar' , '12/04/13' ),
        new Serie(3, 'Arrow' , 'arrow.jpg' , 'You fell this city' , '06/11/12' ),
        new Serie(4, 'The Walking DEAD' , 'TWD.jpg' , 'Kill them all' , '23/04/12' ),
  
    ];
  */
    function CatalogueComponent(serieService) {
        this.serieService = serieService;
    }
    CatalogueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serieService.getAllSeries().subscribe(function (series) {
            _this.series = series;
        });
    };
    CatalogueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-catalogue',
            template: __webpack_require__("./src/app/catalog/catalogue.component.html"),
            styles: [__webpack_require__("./src/app/catalog/catalogue.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__["a" /* SerieService */]])
    ], CatalogueComponent);
    return CatalogueComponent;
}());



/***/ }),

/***/ "./src/app/connexion/connexion.component.css":
/***/ (function(module, exports) {

module.exports = ".form-signin {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n\n.form-signin .form-control {\n    position: relative;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: auto;\n    padding: 10px;\n    font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n    z-index: 2;\n}\n\n.form-signin input[type=\"text\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.input-connect{\n    background-color: #343a40;\n    color: #ffbb33;\n}\n\n.l-connect{\n    color: #343a40;\n    font-size:20px;\n}\n\n.h-connect{\n    color: #343a40;\n\n}\n\n.btn{\n    color: #ffbb33;\n}"

/***/ }),

/***/ "./src/app/connexion/connexion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid content\">\n\n  <div class=\"text-center\">\n\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && signIn()\" #f=\"ngForm\" novalidate class=\"form-signin\">\n      <fieldset class=\"bg-warning p-5\">\n        <img src=\"../../assets/images/fav.png\" height=\"75px\" width=\"75px\">\n        <div class=\"form-group mt-3\">\n          <label for=\"login\" class=\"l-connect\">Login</label>\n          <input type=\"text\" id=\"login\" class=\"form-control input-connect\" name=\"login\" [(ngModel)]=\"model.login\" #login=\"ngModel\"\n            required autofocus />\n          <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Login is required</div>\n        </div>\n        <div class=\"form-group mt-3\">\n          <label for=\"password\" class=\"l-connect\">Password</label>\n        \n          <input type=\"password\" class=\"form-control input-connect\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        \n        </div>\n        <button class=\"btn btn-lg btn-dark btn-block\" type=\"submit\"  [disabled]=\"!login.valid || !password.valid\">SignIn</button>\n      </fieldset>\n    </form>\n  </div>\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/connexion/connexion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_auth_guard__ = __webpack_require__("./src/app/share/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnexionComponent = /** @class */ (function () {
    function ConnexionComponent(authService, authGuard, router) {
        this.authService = authService;
        this.authGuard = authGuard;
        this.router = router;
        this.model = {};
    }
    ConnexionComponent.prototype.ngOnInit = function () {
        this.model.login = '';
        this.model.password = '';
        // reset login status
        //  this.authService.logout();
    };
    ConnexionComponent.prototype.signIn = function () {
        var _this = this;
        console.log('Je vais appeler le serviceAuth pour SignIn');
        this.authService.signIn(this.model).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/home']);
            //  window.location.reload();
        }, function (err) {
            alert('Invalid Login or Password');
        });
    };
    ConnexionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-connexion',
            template: __webpack_require__("./src/app/connexion/connexion.component.html"),
            styles: [__webpack_require__("./src/app/connexion/connexion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__share_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__share_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ConnexionComponent);
    return ConnexionComponent;
}());



/***/ }),

/***/ "./src/app/critique/critique.component.css":
/***/ (function(module, exports) {

module.exports = ".buttonCom{\n    margin-top: 15px;\n    \n}\n\n.hRewiev{\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n\n.rewiev{\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 5px;\n}\n\n@media (max-width: 767px) {\n    \n    .inputCrit{\n        width: 70px;\n    }\n    \n    \n}\n"

/***/ }),

/***/ "./src/app/critique/critique.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n   \n    <div class=\"card bg-dark \">\n            <div class=\"text-center text-white hRewiev\">\n                    <h4> Reviews </h4>\n                </div>\n        <div class=\"card bg-light text-dark rewiev\" *ngFor=\"let crit of critiques\">\n            <div class=\"card-body col-10\">\n                {{crit.note}} <i class=\"fas fa-star\"></i> | {{crit.commentaire}}\n                <hr>\n                <p>\n                   \n                    <small>By {{crit.login}}</small>\n                </p>\n            </div>\n        </div>\n        <div *ngIf=\"authService.loggedIn()\" class=\"card bg-light text-dark text-center rewiev\">\n\n            <form class=\"card-body\" [formGroup]=\"form\">\n\n                <label class=\"\">Mark</label>\n                <select (change)=\"onChangeNote($event)\" formControlName=\"note\">\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                    <option>5</option>\n                </select>\n                <input type=\"text\" class=\"inputCrit\" formControlName=\"commentaire\" id=\"commentaire\" placeholder=\"Your comments\" (change)=\"onChangeDescription($event)\">\n                <div class=\"buttonCom\">\n                <a class=\"btn btn-success text-white\" (click)=\"saveCritique()\">Send\n                    <i class=\"fas fa-location-arrow\"></i>\n                </a>\n            </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/critique/critique.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CritiqueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_services_critique_service__ = __webpack_require__("./src/app/share/services/critique.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CritiqueComponent = /** @class */ (function () {
    function CritiqueComponent(authService, fb, route, router, critiqueService) {
        this.authService = authService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.critiqueService = critiqueService;
    }
    CritiqueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL
        this.critiqueService.getCritiques(this.id).subscribe(function (critiques) {
            _this.critiques = critiques;
            _this.form = _this.fb.group({
                idCommentaire: [null],
                note: [1, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
                commentaire: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
                idSerie: [_this.id],
            });
        });
    };
    CritiqueComponent.prototype.onChangeNote = function (event) {
        this.note = event.target.value;
        this.form.get('note').setValue(this.note);
    };
    CritiqueComponent.prototype.onChangeDescription = function (event) {
        this.commentaire = event.target.value;
        this.form.get('commentaire').setValue(this.commentaire);
    };
    CritiqueComponent.prototype.saveCritique = function () {
        var _this = this;
        this.critiqueService.createCritique(this.form.value).subscribe(function (res) {
            _this.getCritiques();
        });
        this.form.get('note').setValue(1);
        this.form.get('commentaire').setValue(' ');
    };
    CritiqueComponent.prototype.getCritiques = function () {
        var _this = this;
        this.critiqueService.getCritiques(this.id).subscribe(function (critiques) {
            _this.critiques = critiques;
        });
    };
    CritiqueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-critique',
            template: __webpack_require__("./src/app/critique/critique.component.html"),
            styles: [__webpack_require__("./src/app/critique/critique.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__share_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__share_services_critique_service__["a" /* CritiqueService */]])
    ], CritiqueComponent);
    return CritiqueComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n    <div class=\"\">\n\n        <div class=\"text-center\">\n            <h3>\n                <i class=\"fas fa-columns\"></i> Dashboard</h3>\n        </div>\n\n        \n\n        <app-user></app-user>\n\n\n\n        <app-series>\n            \n\n        </app-series>\n\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, authService, userService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrent().subscribe(function (user) {
            _this.current = user;
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.authService.logout();
                    _this.router.navigate(['/signin']);
                }
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__share_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__share_services_user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/episode/episode-list/episode-list.component.css":
/***/ (function(module, exports) {

module.exports = ".switch {\n    display: inline-block;\n    height: 34px;\n    position: relative;\n    width: 60px;\n  }\n  \n  .switch input {\n    display:none;\n  }\n  \n  .slider {\n    background-color: #ccc;\n    bottom: 0;\n    cursor: pointer;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    background-color: #fff;\n    bottom: 4px;\n    content: \"\";\n    height: 26px;\n    left: 4px;\n    position: absolute;\n    -webkit-transition: .4s;\n    transition: .4s;\n    width: 26px;\n  }\n  \n  input:checked + .slider {\n    background-color: #ffbb33;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n            transform: translateX(26px);\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  \n  .hRewiev{\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n  \n  .progressBar{\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n  \n  .formEp{\n  height: 100px;\n  width: 100px;\n  margin-bottom: 10px;\n}\n  \n  .rewiev{\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}"

/***/ }),

/***/ "./src/app/episode/episode-list/episode-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content \" *ngIf=\"current !== undefined\">\n\n  <div class=\"card bg-dark\">\n    <div class=\"text-center text-white hRewiev\">\n      <h4> Episodes </h4>\n      <span *ngIf=\"current.role === 1\">\n        <a class=\"text-warning\" (click)=\"showForm()\">\n          <i class=\"fas fa-plus-circle\"></i>\n        </a>\n      </span>\n    </div>\n\n    <div *ngIf=\"showFormEp\" class=\"card bg-light text-dark text-center rewiev\">\n\n      <form class=\"card-body\">\n\n        <div class=\"form-group\">\n          <input id=\"nameEp\" [(ngModel)]=\"nomEpisode\" name=\"nomEpisode\" placeholder=\"EpisodeName\" />\n          <input id=\"season\" [(ngModel)]=\"saison\" name=\"saison\" placeholder=\"Season\" />\n        </div>\n        <a class=\"btn btn-sm btn-success pt-2\" (click)=\"addEpisode()\">Add</a>\n      </form>\n  </div>\n\n    <div class=\"progress progressBar\">\n      <div class=\"progress-bar  bg-warning text-center text-dark\" role=\"progressbar\" [style.width]=\"Mypercent + '%'\" attr.aria-valuenow=\"{{nbEpisodesVu}}\"\n        aria-valuemin=\"0\" attr.aria-valuemax=\"{{nbEpisodes}}\">\n        <span *ngIf=\"!completed\">{{nbEpisodesVu}} of {{nbEpisodes}}</span>\n        <span *ngIf=\"completed\">Completed!</span>\n      </div>\n    </div>\n    <ul class=\"text-white\">\n        <li *ngFor=\"let episode of episodesSeen\">\n            <p class=\"text-warning\"> {{episode.numeroEpisode}}: {{episode.nomEpisode}} (Season: {{episode.saison}})</p>\n    \n  \n            <label  class=\"switch\" for=\"checkbox{{episode.idEpisode}}\">\n                <input checked type=\"checkbox\" (click)=\"changeVision($event,episode.idEpisode)\" id=\"checkbox{{episode.idEpisode}}\" />\n                <div class=\"slider round\"></div>\n              </label>\n          </li>\n\n      <li *ngFor=\"let episode of episodesNotSeen\">\n        <p class=\"text-warning\"> {{episode.numeroEpisode}}: {{episode.nomEpisode}} (Season: {{episode.saison}})</p>\n\n        <label  class=\"switch\" for=\"checkbox{{episode.idEpisode}}\">\n          <input type=\"checkbox\" (click)=\"changeVision($event,episode.idEpisode)\" id=\"checkbox{{episode.idEpisode}}\" />\n          <div class=\"slider round\"></div>\n        </label>\n\n       \n      </li>\n\n      \n\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/episode/episode-list/episode-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_episode_service__ = __webpack_require__("./src/app/share/services/episode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_services_serie_service__ = __webpack_require__("./src/app/share/services/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EpisodeListComponent = /** @class */ (function () {
    function EpisodeListComponent(route, serieService, userService, episodeService) {
        this.route = route;
        this.serieService = serieService;
        this.userService = userService;
        this.episodeService = episodeService;
        this.showFormEp = false;
        this.req = {};
    }
    EpisodeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL
        // this.idUser = parseInt(this.route.snapshot.paramMap.get('idUser'), 0);
        console.log('episodes en demande');
        this.episodeService.getAllEpisodesBySerie(this.id).subscribe(function (eps) {
            _this.episodes = eps;
        });
        this.getNbEpisodeLeftToSee(this.id);
        this.getEpisodeSeen(this.id);
        this.getEpisodeNotSeen(this.id);
        this.userService.getCurrent().subscribe(function (user) {
            _this.current = user;
            console.log('current roel: ' + _this.current.role);
        });
    };
    EpisodeListComponent.prototype.changeVision = function (event, id) {
        var _this = this;
        this.req.idUser = this.idUser;
        this.req.idE = id;
        if (event.target.checked) {
            console.log('idU:' + this.idUser);
            console.log('idE:' + id);
            this.episodeService.addVision(this.req).subscribe(function (res) {
                _this.getNbEpisodeLeftToSee(_this.id);
            });
        }
        else {
            console.log('idE:' + this.req.idE);
            this.episodeService.removeVision(this.req).subscribe(function (res) {
                _this.getNbEpisodeLeftToSee(_this.id);
            });
        }
    };
    EpisodeListComponent.prototype.getEpisodeSeen = function (idSerie) {
        var _this = this;
        this.serieService.getEpisodesSeen(idSerie).subscribe(function (episodes) {
            _this.episodesSeen = episodes;
        });
    };
    EpisodeListComponent.prototype.getEpisodeNotSeen = function (idSerie) {
        var _this = this;
        this.serieService.getEpisodesNotSeen(idSerie).subscribe(function (episodes) {
            _this.episodesNotSeen = episodes;
        });
    };
    EpisodeListComponent.prototype.getNbEpisodeLeftToSee = function (idSerie) {
        var _this = this;
        this.serieService.getNbEpisodesBySerie(idSerie).subscribe(function (episodes) {
            _this.nbEpisodes = episodes.nbEpisodes;
            console.log('nbEpisodes: ' + _this.nbEpisodes);
        });
        this.userService.getNbEpisodesBySerieSeen(idSerie).subscribe(function (nb) {
            _this.nbEpisodesVu = nb.vu;
            console.log('nbEpisodesVu: ' + _this.nbEpisodesVu);
            _this.Mypercent = 100 * _this.nbEpisodesVu / _this.nbEpisodes;
            console.log('MyPercent: ' + _this.Mypercent);
            _this.nbEpisodesToSee = (_this.nbEpisodes - _this.nbEpisodesVu);
            if (_this.nbEpisodesToSee === 0) {
                _this.completed = true;
            }
            else {
                _this.completed = false;
            }
            console.log('nbEpisodesToSee: ' + _this.nbEpisodesToSee);
        });
    };
    /*
  
    compareSeen(id: number) {
      this.episodesSeen.forEach(element => {
        if (element.idEpisode === id) {
          return true;
        } else {
          return false;
        }
      });
    }*/
    EpisodeListComponent.prototype.showForm = function () {
        if (this.showFormEp === true) {
            this.showFormEp = false;
        }
        else {
            this.showFormEp = true;
        }
    };
    EpisodeListComponent.prototype.addEpisode = function () {
        var episode = {};
        episode.nomEpisode = this.nomEpisode;
        episode.saison = this.saison;
        episode.idSerie = this.id;
        console.log('Name Ep: ' + episode.nomEpisode);
        console.log('saison Ep: ' + episode.saison);
        console.log('idSerie Ep: ' + episode.idSerie);
        this.episodeService.insertEpisode(episode).subscribe();
    };
    EpisodeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-episode-list',
            template: __webpack_require__("./src/app/episode/episode-list/episode-list.component.html"),
            styles: [__webpack_require__("./src/app/episode/episode-list/episode-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__share_services_serie_service__["a" /* SerieService */],
            __WEBPACK_IMPORTED_MODULE_4__share_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__share_services_episode_service__["a" /* EpisodeService */]])
    ], EpisodeListComponent);
    return EpisodeListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".imgTop{\n    width: 300px;\n    height: 200px;\n}\n\n\n\n.contentHome{\n    background-color: #343a40!important;\n    opacity: 0.9;\n    border-radius: 10px;\n}\n\n\n\n.rowSerie{\n    padding-bottom: 50px;\n    padding-left: 25px;\n}\n\n\n\n@media (min-width: 400px) {\n    .rowSerie{\n        padding-bottom: 50px;\n        padding-left: 75px;\n    }\n    \n}\n\n\n\n@media (min-width: 768px) {\n    .rowSerie{\n        padding-bottom: 50px;\n        padding-left: 25px;\n    }\n    \n    \n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container contentHome\">\n        <div class=\"text-center pt-3\">\n            <h3 class=\"text-warning\">Discover\n                <i class=\"far fa-calendar-check\"></i>\n            </h3>\n        </div>\n        <div>\n            <hr>\n            <div class=\"row rowSerie\">\n                <div class=\"col-xs-6 col-md-4 thumbnail thumbHome\" *ngFor=\"let serie of series\">\n                    <a routerLink=\"/catalog/{{serie.idSerie}}\" routerLinkActive=\"active\" >\n                        <img src=\"../../assets/images/{{serie.imageSerie}}\" alt=\"{{serie.titre}}\" class=\"imgTop img-fluid thumbnail\">\n                    </a>\n                </div>\n            </div>\n        </div>\n        <hr>\n    </div>\n</section>\n\n\n<section>\n    <div class=\"container contentHome\">\n        <div class=\"text-center pt-3\">\n            <h3 class=\"text-warning\">Top Series\n                <i class=\"fas fa-chart-line\"></i>\n            </h3>\n        </div>\n        <hr>\n        <div class=\"row rowSerie\">\n                <div class=\"col-xs-6 col-md-4 thumbnail thumbHome\" *ngFor=\"let top of topSeries\">\n                    <a routerLink=\"/catalog/{{top.idSerie}}\" routerLinkActive=\"active\" >\n                        <img src=\"../../assets/images/{{top.imageSerie}}\" alt=\"{{top.titre}}\" class=\"imgTop img-fluid thumbnail\">\n                    </a>\n                </div>\n            </div>\n        <hr>\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__ = __webpack_require__("./src/app/share/services/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(serieService, userService) {
        this.serieService = serieService;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serieService.getNewSeries().subscribe(function (series) {
            _this.series = series;
        });
        this.serieService.getTopSeries().subscribe(function (series) {
            console.log('La route GetAllTop');
            _this.topSeries = series;
        });
    };
    HomeComponent.prototype.getCurrent = function () {
        var _this = this;
        this.userService.getCurrent().subscribe(function (user) {
            _this.user = user;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__["a" /* SerieService */], __WEBPACK_IMPORTED_MODULE_2__share_services_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inscription/inscription.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.form-signup {\n    width: 100%;\n    max-width: 500px;\n    padding: 15px;\n    margin: 0 auto;\n    color: #ffbb33;\n    background-color:#343a40 ;\n    border-radius: 5px;\n}\n\n\n.form-signup .form-control:focus {\n    z-index: 2;\n}\n\n\n.ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n}\n\n\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}\n\n\n.input-connect{\n    background-color: #ffbb33;\n    color: #343a40;\n}\n\n\n.l-connect{\n    color: #ffbb33;\n    font-size:20px;\n}\n\n\n.btn{\n    color: #343a40;\n}\n\n"

/***/ }),

/***/ "./src/app/inscription/inscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n  <form class=\"form-signup text-center\" [formGroup]=\"form\" novalidate>\n    <fieldset class=\"p-5\">\n      <div class=\"form-group\">\n        <label for=\"login\" class=\"l-connect\" >Login</label>\n        <input type=\"text\" formControlName=\"login\" (click)=\"clearMessage()\" class=\"form-control input-connect\" id=\"login\">\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col\">\n          <label for=\"prenom\" class=\"l-connect\">FirstName</label>\n          <input type=\"text\" formControlName=\"prenom\" class=\"form-control input-connect\" id=\"prenom\">\n        </div>\n        <div class=\"col\">\n          <label for=\"nom\" class=\"l-connect\">Name</label>\n          <input type=\"text\" class=\"form-control input-connect\" id=\"nom\" formControlName=\"nom\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col\">\n          <label for=\"pwd\" class=\"l-connect\">Password</label>\n          <input type=\"password\" formControlName=\"password\" class=\"form-control input-connect\" id=\"pwd\">\n        </div>\n        <div class=\"col\">\n          <label for=\"pwdVerif\" class=\"l-connect\">Confirmation</label>\n\n          <input type=\"password\" class=\"form-control input-connect\" id=\"pwdVerif\" (keyup)=\"onKey($event)\">\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\" class=\"l-connect\">email</label>\n        <input type=\"email\" (click)=\"clearMessage()\" class=\"form-control input-connect\" id=\"email\" formControlName=\"email\">\n      </div>\n\n\n      \n      <div *ngIf=\"this.form.get('login').value === this.form.get('password').value\" class=\"alert alert-danger\">\n        Login and Password must be different!\n      </div>\n      <div *ngIf=\"this.form.get('password').value !== this.valuesConf\" class=\"alert alert-danger\">passwords do not match</div>\n      <div *ngIf=\"!errorSignUp.submitted\" class=\"alert alert-danger\" >Error : {{errorSignUp.message}}</div>\n      \n      <button type=\"submit\" class=\"btn btn-warning\" [disabled]=\"this.form.get('login').invalid || this.form.get('prenom').invalid || this.form.get('nom').invalid\n      || this.form.get('password').invalid || this.form.get('email').invalid || this.form.get('login').value === this.form.get('password').value\n      || this.form.get('password').value !== this.valuesConf \" (click)=\"onSubmit()\">SignUp</button>\n\n\n    </fieldset>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/inscription/inscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InscriptionComponent = /** @class */ (function () {
    function InscriptionComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.valid = false;
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.valuesConf = '';
        this.errorSignUp = { 'submitted': true, 'message': '' };
    }
    InscriptionComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            idUser: [],
            login: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            prenom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            nom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(this.emailPattern)]],
            inscription: [''],
            avatar: [null],
            role: [0],
        });
    };
    InscriptionComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files; // FileList object
        // files is a FileList of File objects. List some properties.
        for (var i = 0, f = void 0; f = files[i]; i++) {
            console.log('files: ' + f.name);
            this.form.get('avatar').setValue(f.name);
        }
    };
    InscriptionComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Je vais appeler le service');
        this.authService.signUp(this.form.value).subscribe(function (res) {
            alert('You are registered!');
            _this.router.navigate(['/signin']);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpErrorResponse */]) {
                _this.errorSignUp = error.error;
                _this.errorSignUp.message = error.error.message;
                _this.errorSignUp.submitted = error.error.submitted;
                _this.form = _this.fb.group({
                    idUser: [],
                    login: [_this.form.get('login').value, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                    prenom: [_this.form.get('prenom').value, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                    nom: [_this.form.get('nom').value, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                    password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                    email: [_this.form.get('email').value, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(_this.emailPattern)]],
                    inscription: [_this.form.get('avatar').value],
                    avatar: [null],
                    role: [0],
                });
                _this.valuesConf = null;
            }
        });
    };
    InscriptionComponent.prototype.onKey = function (event) {
        this.valuesConf = '';
        this.valuesConf += event.target.value;
    };
    InscriptionComponent.prototype.clearMessage = function () {
        this.errorSignUp.submitted = true;
    };
    InscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inscription',
            template: __webpack_require__("./src/app/inscription/inscription.component.html"),
            styles: [__webpack_require__("./src/app/inscription/inscription.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__share_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], InscriptionComponent);
    return InscriptionComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.active{\n\n    border: solid #ffbb33 2px;\n    background-color: #ffbb33;\n    color: rgb(0, 0, 0);\n    border-radius: 5px;\n\n}\n\n\n\n\n.logoBrand{\n    width:30px;\n     height:30px;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"../assets/images/fav.png\" class=\"logoBrand\" alt=\"Logo\">\n    </a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link \" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link \" routerLink=\"/catalog\" routerLinkActive=\"active\">Catalog</a>\n        </li>\n\n        <!-- Il faut être connecté pour voir ça -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link \" *ngIf=\"authService.loggedIn()\" routerLink=\"/playlist\" routerLinkActive=\"active\">Playlist</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link \" *ngIf=\"authService.loggedIn()\" routerLink=\"/account\" routerLinkActive=\"active\">Account</a>\n        </li>\n       \n        \n        <li class=\"nav-item\">\n          <a class=\"nav-link \" *ngIf=\"!authService.loggedIn()\" routerLink=\"/signin\" routerLinkActive=\"active\">SignIn</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" *ngIf=\"!authService.loggedIn()\" routerLink=\"/signup\" routerLinkActive=\"active\">SignUp</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link text-warning\" *ngIf=\"authService.loggedIn()\" (click)=\"authService.logout()\" routerLinkActive=\"active\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_auth_guard__ = __webpack_require__("./src/app/share/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, authGuard, authService) {
        this.userService = userService;
        this.authGuard = authGuard;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__share_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_2__share_services_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      404 \n    </div>\n    <div class=\"card-body\">\n      PAGE NOT FOUND\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/playlist/playlist-user/playlist-user.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.cardCatalog{\n    width: 18rem;\n    margin-bottom: 25px;\n}\n.imageCatalogue{\n    width: 300px;\n    height: 200px;\n}\n@media (min-width: 400px) {\n    .rowSerie{\n       \n        padding-left: 90px;\n    }\n    \n}\n@media (min-width: 768px) {\n    .rowSerie{\n       \n        padding-left: 25px;\n    }\n    \n    \n}"

/***/ }),

/***/ "./src/app/playlist/playlist-user/playlist-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n  <div class=\"text-center\">\n    <h3 class=\"text-dark\">\n      My Playlist\n    </h3>\n    <hr>\n  </div>\n\n\n  <div class=\"container\">\n    <div class=\"row rowSerie\">\n      <div class=\"col-md-4\" *ngFor=\"let play of playlist\">\n        <div class=\"card cardCatalog\" *ngIf=\"play !== undefined\">\n          <img  class=\"card-img-top img-fluid imageCatalogue\" src=\"../../assets/images/{{play.imageSerie}}\" alt=\"Image Affiche Série\" />\n\n          <div class=\"card-body bg-dark text-warning\">\n            <h5 class=\"card-title\">{{play.titre}}</h5>\n            <a class=\"btn btn-sm btn-outline-warning\" routerLink=\"/playlist/serie/{{play.idSerie}}\" routerLinkActive=\"active\">See</a>\n            <div class=\"d-flex justify-content-between align-items-center\">\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <hr class=\"featurette-divider\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/playlist/playlist-user/playlist-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_services_serie_service__ = __webpack_require__("./src/app/share/services/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_services_episode_service__ = __webpack_require__("./src/app/share/services/episode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlaylistUserComponent = /** @class */ (function () {
    function PlaylistUserComponent(route, router, authService, userService, episodeService, serieService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.episodeService = episodeService;
        this.serieService = serieService;
    }
    PlaylistUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Je suis NgInit de Playlist');
        this.id = parseInt(this.route.snapshot.paramMap.get('idUser'), 0); // Récupération du paramètre dans l'URL
        this.userService.getPlayList(this.id).subscribe(function (playList) {
            _this.playlist = playList;
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.authService.logout();
                    _this.router.navigate(['/signin']);
                }
            }
        });
        this.show = false;
    };
    PlaylistUserComponent.prototype.loadEpisodes = function (idSerie) {
        var _this = this;
        this.episodeService.getAllEpisodesBySerie(idSerie).subscribe(function (eps) {
            _this.episodes = eps;
        });
        this.show = true;
    };
    PlaylistUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-playlist-user',
            template: __webpack_require__("./src/app/playlist/playlist-user/playlist-user.component.html"),
            styles: [__webpack_require__("./src/app/playlist/playlist-user/playlist-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__share_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__share_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__share_services_episode_service__["a" /* EpisodeService */], __WEBPACK_IMPORTED_MODULE_3__share_services_serie_service__["a" /* SerieService */]])
    ], PlaylistUserComponent);
    return PlaylistUserComponent;
}());



/***/ }),

/***/ "./src/app/series/serie-form/serie-form.component.css":
/***/ (function(module, exports) {

module.exports = ".form-addSerie{\n    background-color: #343a40;\n    border-radius: 5px;\n    color: #ffc107!important;\n}\n\n.formAdd{\n    background-color:#ffc107; \n}\n\n.l-connect{\n    font-size: 20px;\n}\n\n.input-connect{\n    background-color: #ffbb33;\n    color: #343a40;\n}\n\n.field{\n    border: 2px solid #ffc107;\n    border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/series/serie-form/serie-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container content text-center\">\n    <form class=\"form-addSerie\" [formGroup]=\"form\" novalidate>\n        <div class=\"text-center\">\n            <h3 class=\"text-warning\">\n                Nouvelle Série\n            </h3>\n        </div>\n\n        <fieldset class=\"p-5 m-4 field\">\n\n            <h3>Informations Générales</h3>\n\n            <div class=\"form-group\">\n                <label for=\"titre\" class=\"l-connect\">Titre</label>\n                <input type=\"text\" formControlName=\"titre\" class=\"form-control input-connect\" id=\"titre\" placeholder=\"Titre\">\n            </div>\n            <div class=\"form-group\">\n\n                <label for=\"imageSerie\" class=\"l-connect\">Affiche</label>\n                <input type=\"file\" formControlName=\"imageSerie\" class=\"form-control-file\" id=\"imageSerie\" (change)=\"handleFileSelect($event)\">\n\n            </div>\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <label for=\"description\" class=\"l-connect\">Description</label>\n                    <textarea class=\"form-control input-connect\" rows=\"8\" formControlName=\"description\" placeholder=\"Décrivez la série...\"></textarea>\n                </div>\n                <div class=\"col\">\n                    <label for=\"dateSortie\" class=\"l-connect\">Date de sortie</label>\n                    <input type=\"text\" class=\"form-control input-connect\" formControlName=\"dateSortie\" placeholder=\"aaaa-mm-jj\">\n                </div>\n            </div>\n\n\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <label for=\"nbSaisons\" class=\"l-connect\">Nombres de Saisons</label>\n                    <input type=\"text\" formControlName=\"nbSaisons\" class=\"form-control input-connect\" placeholder=\"1\">\n                </div>\n                <div class=\"col\">\n                    <label for=\"nbEpisodes\" class=\"l-connect\">Nombres d'Episodes</label>\n                    <input type=\"text\" class=\"form-control input-connect\" formControlName=\"nbEpisodes\" placeholder=\"10\">\n                </div>\n            </div>\n\n        </fieldset>\n        <fieldset class=\"m-4 p-5 field\">\n            <h3>Réalisation</h3>\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <label for=\"prenomRealisateur\" class=\"l-connect\">Prénom</label>\n                    <input type=\"text\" formControlName=\"prenomRealisateur\" class=\"form-control input-connect\" id=\"prenomRealisateur\" placeholder=\"Prenom\">\n                </div>\n                <div class=\"col\">\n                    <label for=\"nomRealisateur\" class=\"l-connect\">Nom</label>\n                    <input type=\"text\" class=\"form-control input-connect\" id=\"nomRealisateur\" formControlName=\"nomRealisateur\" placeholder=\"Nom\">\n                </div>\n            </div>\n        </fieldset>\n\n        <div class=\"m-3\">\n            <a class=\"btn btn-md btn-success text-white \" (click)=\"createSerie()\" routerLink=\"/catalogue\" routerLinkActive=\"active\">Ajouter</a>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/series/serie-form/serie-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__ = __webpack_require__("./src/app/share/services/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SerieFormComponent = /** @class */ (function () {
    function SerieFormComponent(fb, route, serieService) {
        this.fb = fb;
        this.route = route;
        this.serieService = serieService;
    }
    SerieFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            idSerie: [null],
            titre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            dateSortie: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            nomRealisateur: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            prenomRealisateur: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            nbEpisodes: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            nbSaisons: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            imageSerie: ['fav.png', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    SerieFormComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files; // FileList object
        // files is a FileList of File objects. List some properties.
        for (var i = 0, f = void 0; f = files[i]; i++) {
            console.log('files: ' + f.name);
            this.form.get('imageSerie').setValue(f.name);
        }
    };
    SerieFormComponent.prototype.createSerie = function () {
        this.serieService.insertSerie(this.form.value).subscribe();
        this.route.navigate(['/dashboard']);
    };
    SerieFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-serie-form',
            template: __webpack_require__("./src/app/series/serie-form/serie-form.component.html"),
            styles: [__webpack_require__("./src/app/series/serie-form/serie-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__["a" /* SerieService */]])
    ], SerieFormComponent);
    return SerieFormComponent;
}());



/***/ }),

/***/ "./src/app/series/serie-update/serie-update/serie-update.component.css":
/***/ (function(module, exports) {

module.exports = ".field{\n    color: dark;\n    border: solid 2px  #343a40;\n    border-radius: 5px;\n}\n\n.l-connect{\n    font-size: 20px;\n}\n\n.input-connect{\n    background-color: #343a40;\n    color: #ffbb33;\n}"

/***/ }),

/***/ "./src/app/series/serie-update/serie-update/serie-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container content text-center\">\n    <form class=\"form-addSerie  text-dark\">\n        <fieldset class=\"p-5 m-4 bg-warning field\">\n            <div class=\"m-3 container\">\n                <h3>\n                    Mise à jour Série\n                </h3>\n                <h5>Informations Générales</h5>\n                <hr>\n            </div>\n            \n            <h4>Titre: {{serie.titre}}</h4>\n\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <label for=\"imageSerie\" class=\"l-connect\">Affiche</label>\n                    <input type=\"file\" class=\"form-control-file\" id=\"imageSerie\" (change)=\"handleFileSelect($event)\">\n                </div>\n                <div class=\"col\">\n                    <label for=\"description\" class=\"l-connect\">Description</label>\n                    <textarea class=\"form-control input-connect\" rows=\"8\" value=\"{{serie.description}}\" (change)=\"setDescription($event)\"></textarea>\n                </div>\n                <div class=\"col\">\n                    <label for=\"nbSaisons\" class=\"l-connect\">Nombres de Saisons</label>\n                    <input type=\"text\" value=\"{{serie.nbSaisons}}\" class=\"form-control input-connect\" (change)=\"setNbSaisons($event)\">\n\n                </div>\n                <div class=\"col\">\n                    <label for=\"nbEpisodes\" class=\"l-connect\">Nombres d'Episodes</label>\n                    <input type=\"text\" class=\"form-control input-connect\" value=\"{{serie.nbEpisodes}}\" (change)=\"setNbEpisodes($event)\">\n                </div>\n            </div>\n        </fieldset>\n        <div class=\"m2\">\n            <a class=\"btn btn-md btn-success text-white\" (click)=\"updateSerie()\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Modifier</a>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/series/serie-update/serie-update/serie-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__ = __webpack_require__("./src/app/share/services/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SerieUpdateComponent = /** @class */ (function () {
    function SerieUpdateComponent(route, serieService) {
        this.route = route;
        this.serieService = serieService;
    }
    SerieUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL
        this.serieService.getSerie(this.id).subscribe(function (series) {
            _this.serie = series;
            if (_this.serie.imageSerie === null) {
                _this.serie.imageSerie = 'fav.png';
            }
            console.log(_this.serie.titre);
            console.log(_this.serie.imageSerie);
        });
    };
    SerieUpdateComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files; // FileList object
        // files is a FileList of File objects. List some properties.
        for (var i = 0, f = void 0; f = files[i]; i++) {
            console.log('files: ' + f.name);
            this.serie.imageSerie = f.name;
        }
    };
    SerieUpdateComponent.prototype.setNbSaisons = function (evt) {
        this.serie.nbSaisons = evt.target.value;
    };
    SerieUpdateComponent.prototype.setNbEpisodes = function (evt) {
        this.serie.nbEpisodes = evt.target.value;
    };
    SerieUpdateComponent.prototype.setDescription = function (event) {
        this.serie.description = event.target.value;
    };
    SerieUpdateComponent.prototype.updateSerie = function () {
        this.serieService.updateSerie(this.serie).subscribe();
    };
    SerieUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-serie-update',
            template: __webpack_require__("./src/app/series/serie-update/serie-update/serie-update.component.html"),
            styles: [__webpack_require__("./src/app/series/serie-update/serie-update/serie-update.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__["a" /* SerieService */]])
    ], SerieUpdateComponent);
    return SerieUpdateComponent;
}());



/***/ }),

/***/ "./src/app/series/serie/serie/serie.component.css":
/***/ (function(module, exports) {

module.exports = ".bold{\n    font-weight: bold;\n}\n\n\n\n\n.buttonRetour{\n    margin-top: 15px;\n}\n\n\n\n\n@media (min-width: 768px) {\n    .cardSerie{\n        width: 800px;\n        margin: auto;\n    }\n}\n\n\n\n\n@media (max-width: 767px) {\n    .cardSerie{\n        width: 400px;\n        margin: auto;\n    }\n    \n    \n}\n"

/***/ }),

/***/ "./src/app/series/serie/serie/serie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n  <div class=\"card cardSerie bg-light\" *ngIf=\"serie !== undefined\">\n    <img class=\"card-img-top imageSerie img-responsive\" src=\"../../../../assets/images/{{serie.imageSerie}}\" alt={{serie.titre}}>\n    <div class=\"card-body\">\n      <div class=\"text-center\">\n        <h4 class=\"text-dark\">\n          <span class=\"bold\">{{serie.titre}}</span>\n          <span *ngIf=\"isSeen && authService.loggedIn()\" class=\"badge bg-warning\">Seen</span>\n        </h4>\n      </div>\n     \n      <hr>\n      <p>Created by: {{serie.prenomRealisateur}}\n        <span class=\"bold\">{{serie.nomRealisateur}}</span>\n      </p>\n      <hr>\n      <p>\n        <span class=\"bold\">Description:</span> {{serie.description}}</p>\n      <hr>\n      <p>\n        <span class=\"bold\">Number of seasons:</span> {{serie.nbSaisons}}</p>\n      <hr>\n      <p>\n        <span class=\"bold\">Number of episodes:</span> {{serie.nbEpisodes}}</p>\n      <hr>\n      <p>\n        <span class=\"bold\">Original release:</span> {{serie.dateSortie | date:'yyyy-MM-dd'}}</p>\n      <div class=\"row\">\n        <div>\n          <a *ngIf=\"authService.loggedIn() &&!isSeen\" class=\"btn btn-md btn-success text-white\" (click)=\"addInPlaylist()\"> Add in Playlist</a>\n\n\n        </div>\n        <div>\n          <a *ngIf=\"authService.loggedIn() && isSeen\" class=\"btn btn-md btn-danger text-white\" (click)=\"removeInPlaylist()\"> Remove from Playlist</a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <app-critique>\n            <!--Liste des commentaires-->\n          </app-critique>\n        </div>\n\n        <div class=\"col-6\" *ngIf=\"isSeen\">\n          <app-episode-list>\n            <!--Liste des épisodes de la séries-->\n            <!--Visible uniquement si on visionne la série-->\n          </app-episode-list>\n        </div>\n      </div>\n      <div class=\"text-center buttonRetour\">\n        <a class=\"btn btn-md btn-secondary text-warning\" routerLink=\"/catalog\" routerLinkActive=\"active\">Retour au catalogue</a>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/series/serie/serie/serie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__ = __webpack_require__("./src/app/share/services/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SerieComponent = /** @class */ (function () {
    function SerieComponent(route, serieService, userService, authService) {
        this.route = route;
        this.serieService = serieService;
        this.userService = userService;
        this.authService = authService;
        this.isSeen = false;
        this.req = {};
    }
    SerieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL
        this.serieService.getSerie(this.id).subscribe(function (series) {
            _this.serie = series;
        });
        this.req.idUser = null;
        this.req.idSerie = this.id;
        this.isSeenSerie();
    };
    SerieComponent.prototype.addInPlaylist = function () {
        this.serieService.addRegarder(this.req).subscribe();
        this.isSeen = true;
    };
    SerieComponent.prototype.removeInPlaylist = function () {
        this.serieService.removeRegarder(this.req).subscribe();
        this.isSeen = false;
    };
    SerieComponent.prototype.isSeenSerie = function () {
        var _this = this;
        this.userService.isSeenSerieByUser(this.req).subscribe(function (res) {
            _this.seen = res.vu;
            console.log('seen? 1 ou 0:' + _this.seen);
            if (_this.seen > 0) {
                _this.isSeen = true;
            }
            else {
                _this.isSeen = false;
            }
        });
    };
    SerieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-serie',
            template: __webpack_require__("./src/app/series/serie/serie/serie.component.html"),
            styles: [__webpack_require__("./src/app/series/serie/serie/serie.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__["a" /* SerieService */],
            __WEBPACK_IMPORTED_MODULE_4__share_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__share_services_auth_service__["a" /* AuthService */]])
    ], SerieComponent);
    return SerieComponent;
}());



/***/ }),

/***/ "./src/app/series/series.component.css":
/***/ (function(module, exports) {

module.exports = ".table-wrapper{\n    height: 500px;\n    width: 500px;\n    overflow: scroll;\n}\n\n.colorBtn{\n    background-color: rgb(68, 141, 236);\n}"

/***/ }),

/***/ "./src/app/series/series.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" text-center mt-5\" >\n    <h4 *ngIf=\"serie !== undefined\">List of Series: {{serie.nb}} Series</h4>\n</div>\n<div class=\"table-wrapper mx-auto\">\n  <table class=\"table table-responsive-md text-center\">\n    <thead class=\"bg-warning text-dark\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let serie of series\" class=\"bg-dark text-warning\">\n      <tr>\n        <td *ngIf=\"serie !== undefined\">{{serie.idSerie}}</td>\n        <td *ngIf=\"serie !== undefined\">{{serie.titre}}</td>\n        <td *ngIf=\"serie !== undefined\"><a class=\"btn btn-md btn-danger text-white\" (click)=\"deleteSerie(serie.idSerie)\"> <i class=\"fas fa-times-circle\"></i></a>\n          <a class=\"btn btn-md colorBtn text-white\" routerLink=\"/dashboard/updateSerie/{{serie.idSerie}}\" routerLinkActive =\"active\"> <i class=\"fas fa-pen-square\"></i></a></td>\n\n      </tr>\n    </tbody>\n  </table>\n \n\n</div>\n<div class=\"text-center\">\n    <a class=\"btn btn-md btn-success\" routerLink=\"/dashboard/addSerie\" routerLinkActive =\"active\">Add Serie</a>\n  </div>"

/***/ }),

/***/ "./src/app/series/series.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__ = __webpack_require__("./src/app/share/services/serie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SeriesComponent = /** @class */ (function () {
    function SeriesComponent(router, serieService) {
        this.router = router;
        this.serieService = serieService;
    }
    SeriesComponent.prototype.ngOnInit = function () {
        this.getAllSeriesDashboard();
        this.getNbSeries();
    };
    SeriesComponent.prototype.getNbSeries = function () {
        var _this = this;
        this.serieService.getAllSeriesNb().subscribe(function (stats) {
            _this.serie = stats;
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.router.navigate(['/signin']);
                }
            }
        });
    };
    SeriesComponent.prototype.deleteSerie = function (id) {
        this.serieService.deleteSerie(id).subscribe();
        this.getAllSeriesDashboard();
        this.getNbSeries();
    };
    SeriesComponent.prototype.getAllSeriesDashboard = function () {
        var _this = this;
        this.serieService.getAllSeriesDashboard().subscribe(function (series) {
            _this.series = series;
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.router.navigate(['/signin']);
                }
            }
        });
    };
    SeriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-series',
            template: __webpack_require__("./src/app/series/series.component.html"),
            styles: [__webpack_require__("./src/app/series/series.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__share_services_serie_service__["a" /* SerieService */]])
    ], SeriesComponent);
    return SeriesComponent;
}());



/***/ }),

/***/ "./src/app/share/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = /** @class */ (function () {
    function AdminGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        return this.userService.getRole().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (role) {
            if (role.role === 0) {
                return false;
            }
            return true;
        }));
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/share/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/signin']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/share/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router, userService, http) {
        this.router = router;
        this.userService = userService;
        this.http = http;
    }
    AuthService.prototype.signUp = function (user) {
        return this.http.post('/api/auth/signUp', user);
    };
    AuthService.prototype.signIn = function (model) {
        return this.http.post('/api/auth/signIn', model);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        // window.location.reload();
        this.router.navigate(['/home']);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/share/services/critique.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CritiqueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CritiqueService = /** @class */ (function () {
    function CritiqueService(http) {
        this.http = http;
    }
    CritiqueService.prototype.getCritiques = function (id) {
        return this.http.get('/api/critiques/getAllCritiques/' + id);
    };
    CritiqueService.prototype.createCritique = function (crit) {
        return this.http.post('/api/critiques/insert', crit);
    };
    CritiqueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CritiqueService);
    return CritiqueService;
}());



/***/ }),

/***/ "./src/app/share/services/episode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EpisodeService = /** @class */ (function () {
    function EpisodeService(http) {
        this.http = http;
    }
    // Getter
    EpisodeService.prototype.getAllEpisodesBySerie = function (idSerie) {
        console.log('episodes en Serivce');
        return this.http.get('/api/episodes/getAllEpisodes/' + idSerie);
    };
    // Visionnning
    EpisodeService.prototype.addVision = function (req) {
        return this.http.post('/api/users/' + req.idUser + '/addEpisodeVisionne/' + req.idE, req);
    };
    EpisodeService.prototype.removeVision = function (req) {
        return this.http.delete('/api/users/' + req.idUser + '/deleteEpisodeVisionne/' + req.idE); // , req
    };
    // CRUD
    EpisodeService.prototype.insertEpisode = function (episode) {
        return this.http.post('/api/episodes/insert', episode);
    };
    EpisodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], EpisodeService);
    return EpisodeService;
}());



/***/ }),

/***/ "./src/app/share/services/serie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SerieService = /** @class */ (function () {
    function SerieService(http) {
        this.http = http;
    }
    SerieService.prototype.getAllSeriesDashboard = function () {
        return this.http.get('/api/series/getAllSeriesDashboard');
    };
    SerieService.prototype.getAllSeries = function () {
        return this.http.get('/api/series/getAllSeries');
    };
    SerieService.prototype.getNbEpisodesBySerie = function (idSerie) {
        return this.http.get('/api/series/' + idSerie + '/getNbEpisodes');
    };
    SerieService.prototype.getEpisodesSeen = function (idSerie) {
        console.log('episodesSeeen');
        return this.http.get('/api/series/' + idSerie + '/episodesSeen');
    };
    SerieService.prototype.getEpisodesNotSeen = function (idSerie) {
        console.log('episodesSeeen');
        return this.http.get('/api/series/' + idSerie + '/episodesNotSeen');
    };
    SerieService.prototype.getAllSeriesNb = function () {
        return this.http.get('/api/series/getAllSeriesNb');
    };
    SerieService.prototype.getSerie = function (id) {
        return this.http.get('/api/series/' + id);
    };
    SerieService.prototype.getNewSeries = function () {
        return this.http.get('/api/series/getAllSeriesNews');
    };
    SerieService.prototype.getTopSeries = function () {
        return this.http.get('/api/series/getAllSeriesTops');
    };
    SerieService.prototype.addRegarder = function (req) {
        return this.http.post('/api/users/' + req.idUser + '/addSerieRegarder/' + req.idSerie, req);
    };
    SerieService.prototype.removeRegarder = function (req) {
        return this.http.delete('/api/users/' + req.idUser + '/deleteSerieRegarder/' + req.idSerie);
    };
    SerieService.prototype.insertSerie = function (serie) {
        return this.http.post('/api/series/insert', serie);
    };
    SerieService.prototype.deleteSerie = function (id) {
        return this.http.delete('/api/series/delete/' + id);
    };
    SerieService.prototype.updateSerie = function (serie) {
        return this.http.put('/api/series/update/' + serie.idSerie, serie);
    };
    SerieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SerieService);
    return SerieService;
}());



/***/ }),

/***/ "./src/app/share/services/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/share/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]);
        var tokenized = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenized);
    };
    TokenInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/share/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get('/api/users/getAllUsers');
    };
    UserService.prototype.getAllUsersNb = function () {
        return this.http.get('/api/users/getAllUsersNb');
    };
    UserService.prototype.getPlayList = function (id) {
        return this.http.get('/api/users/' + id + '/playlist');
    };
    UserService.prototype.isSeenSerieByUser = function (req) {
        return this.http.get('/api/users/' + req.idUser + '/serieSeen/' + req.idSerie);
    };
    UserService.prototype.getNbEpisodesBySerieSeen = function (idSerie) {
        console.log('episodes en Serivce');
        return this.http.get('/api/users/serie/' + idSerie + '/getNbEpisodesSeen/');
    };
    UserService.prototype.getCurrent = function () {
        return this.http.get('/api/users/current');
    };
    UserService.prototype.getRole = function () {
        return this.http.get('/api/users/role');
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get('/api/users/' + id);
    };
    UserService.prototype.getNbSeries = function (id) {
        return this.http.get('/api/users/' + id + '/nbSeries');
    };
    UserService.prototype.getNbEpisodes = function (id) {
        return this.http.get('/api/users/' + id + '/nbEpisodes');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ".table-wrapper{\n    height: 500px;\n    width: 600px;\n    overflow: scroll;\n}\n\n"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" text-center\"  *ngIf=\"user !== undefined\">\n    <h4>List of Users: {{user.nb}} Users</h4>\n</div>\n<div class=\"table-wrapper  mx-auto\"  *ngIf=\"user !== undefined\">\n  <table class=\"table table-responsive-md text-center\">\n    <thead class=\"bg-warning text-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Login</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">FirstName</th>\n      <th scope=\"col\">email</th>\n    </tr>\n    </thead>\n    <tbody *ngFor=\"let user of users\" class=\"bg-dark text-warning\">\n    <tr>\n      <td>{{user.idUser}}</td>\n      <td>{{user.login}}</td>\n      <td>{{user.nom}}</td>\n      <td>{{user.prenom}}</td>\n      <td>{{user.email}}</td>\n\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_services_user_service__ = __webpack_require__("./src/app/share/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (users) {
            _this.users = users;
        });
        this.userService.getAllUsersNb().subscribe(function (stats) {
            _this.user = stats;
        });
    };
    UserComponent.prototype.getNbUsers = function () {
        var _this = this;
        this.userService.getAllUsersNb().subscribe(function (stats) {
            _this.user = stats;
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_services_user_service__["a" /* UserService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map