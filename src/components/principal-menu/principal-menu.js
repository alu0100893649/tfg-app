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
import { ModalController } from 'ionic-angular';
import { CampaignCreatorComponent } from '../../components/campaign-creator/campaign-creator';
/**
 * Generated class for the PrincipalMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PrincipalMenuComponent = /** @class */ (function () {
    function PrincipalMenuComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    PrincipalMenuComponent.prototype.presentCampaignCreator = function () {
        var modalOptions = {
            enableBackdropDismiss: false,
            cssClass: 'newCampaignCss'
        };
        var modalData = {};
        var modal = this.modalCtrl.create(CampaignCreatorComponent, { data: modalData }, modalOptions);
        modal.present();
    };
    PrincipalMenuComponent = __decorate([
        Component({
            selector: 'principal-menu',
            templateUrl: 'principal-menu.html'
        }),
        __metadata("design:paramtypes", [ModalController])
    ], PrincipalMenuComponent);
    return PrincipalMenuComponent;
}());
export { PrincipalMenuComponent };
//# sourceMappingURL=principal-menu.js.map