import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { CustomTextComponent } from './custom-text/custom-text';
import { PrincipalMenuComponent } from './principal-menu/principal-menu';
import { CampaignCreatorComponent } from './campaign-creator/campaign-creator';
import { DriveFilePickerComponent } from './drive-file-picker/drive-file-picker';
import { CampaignSelectorComponent } from './campaign-selector/campaign-selector';
import { LateralMenuComponent } from './lateral-menu/lateral-menu';
import { CentralMenuComponent } from './central-menu/central-menu';
import { FootMenuComponent } from './foot-menu/foot-menu';
import { FileTypeSearcherComponent } from './file-type-searcher/file-type-searcher';
import { GalleryComponent } from './gallery/gallery';
import { CreatureViewerComponent } from './creature-viewer/creature-viewer';
@NgModule({
	declarations: [MenuComponent,
    CustomTextComponent,
    PrincipalMenuComponent,
    CampaignCreatorComponent,
    DriveFilePickerComponent,
    CampaignSelectorComponent,
    LateralMenuComponent,
    CentralMenuComponent,
    FootMenuComponent,
    FileTypeSearcherComponent,
    GalleryComponent,
    CreatureViewerComponent],
	imports: [],
	exports: [
    MenuComponent,
    CustomTextComponent,
    PrincipalMenuComponent,
    CampaignCreatorComponent,
    DriveFilePickerComponent,
    CampaignSelectorComponent,
    LateralMenuComponent,
    CentralMenuComponent,
    FootMenuComponent,
    FileTypeSearcherComponent,
    GalleryComponent,
    CreatureViewerComponent]
})
export class ComponentsModule {}
