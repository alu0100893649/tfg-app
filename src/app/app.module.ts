import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { UserService } from '../services/drive-user.service';
import { DriveService } from '../services/drive.service';
import { ModalService } from '../services/modal-data-pass.service'

import { DynamicModule } from 'ng-dynamic-component';
import { GridsterModule } from 'angular-gridster2';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CampaignMenuPage } from '../pages/campaign-menu/campaign-menu';

import { MenuComponent } from '../components/menu/menu';
import { CustomTextComponent } from '../components/custom-text/custom-text';
import { PrincipalMenuComponent } from '../components/principal-menu/principal-menu';
import { CampaignCreatorComponent } from '../components/campaign-creator/campaign-creator';
import { CampaignSelectorComponent } from '../components/campaign-selector/campaign-selector';
import { DriveFilePickerComponent } from '../components/drive-file-picker/drive-file-picker';
import { AccordionComponent } from '../components/accordion/accordion';
import { LateralMenuComponent } from '../components/lateral-menu/lateral-menu';
import { CentralMenuComponent } from '../components/central-menu/central-menu';
import { FootMenuComponent } from '../components/foot-menu/foot-menu';

import { PreferencesComponent } from '../components/preferences/preferences';
import { PickerComponent } from '../components/picker/picker';
import { FileTypeSearcherComponent } from '../components/file-type-searcher/file-type-searcher';

import { AmbienceComponent } from '../components/ambience/ambience';
import { GalleryComponent } from '../components/gallery/gallery';
import { ModuleViewerComponent } from '../components/module-viewer/module-viewer';

import { SimplePdfViewerModule } from 'simple-pdf-viewer';

import { HttpClientModule } from '@angular/common/http';
import {
    GoogleApiModule, 
    GoogleApiService, 
    GoogleAuthService, 
    NgGapiClientConfig, 
    NG_GAPI_CONFIG,
    GoogleApiConfig
} from "ng-gapi";
 
let gapiClientConfig: NgGapiClientConfig = {
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampaignMenuPage,
    MenuComponent,
    CustomTextComponent,
    PrincipalMenuComponent,
    CampaignCreatorComponent,
    CampaignSelectorComponent,
    DriveFilePickerComponent,
    PreferencesComponent,
    PickerComponent,
    AccordionComponent,
    LateralMenuComponent,
    CentralMenuComponent,
    FootMenuComponent,
    FileTypeSearcherComponent,
    AmbienceComponent,
    GalleryComponent,
    ModuleViewerComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DynamicModule.withComponents([PrincipalMenuComponent]),
    GridsterModule,
    IonicImageViewerModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    SimplePdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CampaignMenuPage,
    MenuComponent,
    CustomTextComponent,
    PrincipalMenuComponent,
    CampaignCreatorComponent,
    CampaignSelectorComponent,
    DriveFilePickerComponent,
    PreferencesComponent,
    PickerComponent,
    AccordionComponent,
    LateralMenuComponent,
    CentralMenuComponent,
    FootMenuComponent,
    FileTypeSearcherComponent,
    AmbienceComponent,
    GalleryComponent,
    ModuleViewerComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    DriveService,
    ModalService
  ]
})
export class AppModule {}
