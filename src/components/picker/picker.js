var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../../app/UserService';
import { DriveResource } from '../../app/DriveResource';
/**
 * Generated class for the PickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PickerComponent = /** @class */ (function () {
    function PickerComponent(navParams, userService, driveResource, gapiService) {
        this.navParams = navParams;
        this.userService = userService;
        this.driveResource = driveResource;
        this.gapiService = gapiService;
        this.title = 'root';
        this.gapiService.onLoad().subscribe();
        var data = navParams.get('user');
        if (data != null) {
            this.userService.setUser(navParams.get('user'));
        }
        this.getFolderChildren('root');
    }
    PickerComponent.prototype.getFolderChildren = function (folder) {
        var _this = this;
        console.log("PICKER " + this.isLoggedIn());
        this.driveResource.getFolderChildren(this.userService.getToken(), folder).subscribe(function (res) { return _this.folders = res; });
        console.log(this.folders);
    };
    PickerComponent.prototype.isLoggedIn = function () {
        return this.userService.isUserSignedIn();
    };
    PickerComponent = __decorate([
        Component({
            selector: 'picker',
            templateUrl: 'picker.html'
        }),
        __metadata("design:paramtypes", [NavParams, UserService, DriveResource, GoogleApiService])
    ], PickerComponent);
    return PickerComponent;
}());
export { PickerComponent };
//# sourceMappingURL=picker.js.map