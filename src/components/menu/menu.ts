import { Component } from '@angular/core';
import { CustomTextComponent } from '../../components/custom-text/custom-text';
import { PrincipalMenuComponent } from '../../components/principal-menu/principal-menu';
import { CampaignSelectorComponent } from '../../components/campaign-selector/campaign-selector';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
	title: string
	note: string
	component:any

  	constructor() {
    	
  	}

}
