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
import { ViewController, ModalController } from 'ionic-angular';
import { DriveFilePickerComponent } from '../../components/drive-file-picker/drive-file-picker';
var CampaignCreatorComponent = /** @class */ (function () {
    function CampaignCreatorComponent(viewCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    CampaignCreatorComponent.prototype.openPicker = function () {
        var pickerModal = this.modalCtrl.create(DriveFilePickerComponent);
        pickerModal.present();
    };
    CampaignCreatorComponent.prototype.createCampaign = function () {
        ;
    };
    CampaignCreatorComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CampaignCreatorComponent = __decorate([
        Component({
            selector: 'campaign-creator',
            templateUrl: 'campaign-creator.html'
        }),
        __metadata("design:paramtypes", [ViewController, ModalController])
    ], CampaignCreatorComponent);
    return CampaignCreatorComponent;
}());
export { CampaignCreatorComponent };
//# sourceMappingURL=campaign-creator.js.map