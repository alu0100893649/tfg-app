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
import { NavParams, ModalController } from 'ionic-angular';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../../app/UserService';
import { DriveResource } from '../../app/DriveResource';
import { PickerComponent } from '../picker/picker';
/**

 * Generated class for the PreferencesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PreferencesComponent = /** @class */ (function () {
    function PreferencesComponent(navParams, modalCtrl, userService, driveResource, gapiService) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.driveResource = driveResource;
        this.gapiService = gapiService;
        this.gapiService.onLoad().subscribe();
        var data = navParams.get('user');
        if (data != null) {
            this.userService.setUser(navParams.get('user'));
        }
    }
    PreferencesComponent.prototype.presentPickerModal = function (idFolder) {
        console.log("PREFERENCES " + this.isLoggedIn());
        var pickerModal = this.modalCtrl.create(PickerComponent, { user: this.userService.getCurrentUser() });
        pickerModal.present();
        console.log(idFolder);
    };
    PreferencesComponent.prototype.isLoggedIn = function () {
        return this.userService.isUserSignedIn();
    };
    PreferencesComponent = __decorate([
        Component({
            selector: 'preferences',
            templateUrl: 'preferences.html'
        }),
        __metadata("design:paramtypes", [NavParams, ModalController,
            UserService, DriveResource, GoogleApiService])
    ], PreferencesComponent);
    return PreferencesComponent;
}());
export { PreferencesComponent };
//# sourceMappingURL=preferences.js.map