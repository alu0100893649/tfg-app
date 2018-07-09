var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NgZone } from "@angular/core";
import * as _ from "lodash";
import { GoogleAuthService } from "ng-gapi/lib/GoogleAuthService";
var UserService = /** @class */ (function () {
    function UserService(googleAuthService, ngZone) {
        this.googleAuthService = googleAuthService;
        this.ngZone = ngZone;
        this.user = undefined;
        this.gapiClientConfig = {
            //client_id creada para la App -> libraries -> DRIVE API
            client_id: "394181648097-l8ssdlpems8isuf3gdlkual2025n4gmv.apps.googleusercontent.com",
            discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
            scope: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/spreadsheets",
                "https://www.googleapis.com/auth/spreadsheets.readonly",
                "https://www.googleapis.com/auth/drive.metadata.readonly",
            ].join(" ")
        };
    }
    UserService_1 = UserService;
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.getCurrentUser = function () {
        return this.user;
    };
    UserService.prototype.getGoogleAuthService = function () {
        return this.googleAuthService;
    };
    UserService.prototype.getToken = function () {
        var token = sessionStorage.getItem(UserService_1.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error("no token set , authentication required");
        }
        return sessionStorage.getItem(UserService_1.SESSION_STORAGE_KEY);
    };
    UserService.prototype.signIn = function () {
        var _this = this;
        this.googleAuthService.getAuth().subscribe(function (auth) {
            auth.signIn().then(function (res) { return _this.signInSuccessHandler(res); }, function (err) { return _this.signInErrorHandler(err); });
        });
    };
    //TODO: Rework
    UserService.prototype.signOut = function () {
        this.googleAuthService.getAuth().subscribe(function (auth) {
            try {
                auth.signOut();
            }
            catch (e) {
                console.error(e);
            }
            sessionStorage.removeItem(UserService_1.SESSION_STORAGE_KEY);
        });
    };
    UserService.prototype.isUserSignedIn = function () {
        return !_.isEmpty(sessionStorage.getItem(UserService_1.SESSION_STORAGE_KEY));
    };
    UserService.prototype.signInSuccessHandler = function (res) {
        var _this = this;
        this.ngZone.run(function () {
            _this.user = res;
            sessionStorage.setItem(UserService_1.SESSION_STORAGE_KEY, res.getAuthResponse().access_token);
            console.log("signInSuccessHandler -> " + res.getAuthResponse().access_token);
        });
    };
    UserService.prototype.signInErrorHandler = function (err) {
        console.warn(err);
    };
    var UserService_1;
    UserService.SESSION_STORAGE_KEY = "accessToken";
    UserService = UserService_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [GoogleAuthService,
            NgZone])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=drive-user.service.js.map