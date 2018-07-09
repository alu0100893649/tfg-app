import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal-data-pass.service'
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
	onSelector:number = 0

  	constructor(private modalService:ModalService) {
    	this.component = PrincipalMenuComponent
  	}

  	ngOnInit(){
		this.modalService.viewChanged.subscribe((view) =>{
            this.onSelector = view;
            this.updateComponent()
        })
	}

	updateComponent(){
		if(this.onSelector == 0){
			this.component = PrincipalMenuComponent
		} else if (this.onSelector == 1){
			this.component = CampaignSelectorComponent
		}
	}
}
