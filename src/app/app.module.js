var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DynamicModule } from 'ng-dynamic-component';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuComponent } from '../components/menu/menu';
import { CustomTextComponent } from '../components/custom-text/custom-text';
import { PrincipalMenuComponent } from '../components/principal-menu/principal-menu';
import { CampaignCreatorComponent } from '../components/campaign-creator/campaign-creator';
import { DriveFilePickerComponent } from '../components/drive-file-picker/drive-file-picker';
import { GoogleApiModule, NG_GAPI_CONFIG } from "ng-gapi";
var gapiClientConfig = {
    client_id: "CLIENT_ID",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    scope: [
        "https://www.googleapis.com/auth/analytics.readonly",
        "https://www.googleapis.com/auth/analytics"
    ].join(" ")
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                MenuComponent,
                CustomTextComponent,
                PrincipalMenuComponent,
                CampaignCreatorComponent,
                DriveFilePickerComponent,
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                IonicStorageModule.forRoot(),
                DynamicModule.withComponents([PrincipalMenuComponent]),
                GoogleApiModule.forRoot({
                    provide: NG_GAPI_CONFIG,
                    useValue: gapiClientConfig
                }),
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                MenuComponent,
                CustomTextComponent,
                PrincipalMenuComponent,
                CampaignCreatorComponent,
                DriveFilePickerComponent,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map