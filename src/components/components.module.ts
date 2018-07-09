import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { CustomTextComponent } from './custom-text/custom-text';
import { PrincipalMenuComponent } from './principal-menu/principal-menu';
import { CampaignCreatorComponent } from './campaign-creator/campaign-creator';
import { DriveFilePickerComponent } from './drive-file-picker/drive-file-picker';
import { CampaignSelectorComponent } from './campaign-selector/campaign-selector';
@NgModule({
	declarations: [MenuComponent,
    CustomTextComponent,
    PrincipalMenuComponent,
    CampaignCreatorComponent,
    DriveFilePickerComponent,
    CampaignSelectorComponent],
	imports: [],
	exports: [MenuComponent,
    CustomTextComponent,
    PrincipalMenuComponent,
    CampaignCreatorComponent,
    DriveFilePickerComponent,
    CampaignSelectorComponent]
})
export class ComponentsModule {}
