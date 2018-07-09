import { Component } from '@angular/core';
import { ModalService } from '../../services/modal-data-pass.service'

/**
 * Generated class for the CampaignSelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'campaign-selector',
  templateUrl: 'campaign-selector.html'
})
export class CampaignSelectorComponent {

  	constructor(private modalService:ModalService) {
    	
  	}

  	onBackClicked(){
		this.modalService.viewChanged.emit(0)
	}

  /*
  Falta:
  	- View
  */

}
