var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { CustomTextComponent } from './custom-text/custom-text';
import { PrincipalMenuComponent } from './principal-menu/principal-menu';
import { CampaignCreatorComponent } from './campaign-creator/campaign-creator';
import { DriveFilePickerComponent } from './drive-file-picker/drive-file-picker';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: [MenuComponent,
                CustomTextComponent,
                PrincipalMenuComponent,
                CampaignCreatorComponent,
                DriveFilePickerComponent],
            imports: [],
            exports: [MenuComponent,
                CustomTextComponent,
                PrincipalMenuComponent,
                CampaignCreatorComponent,
                DriveFilePickerComponent]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map