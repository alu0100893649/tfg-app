import { Component } from '@angular/core';
import { ModalService } from '../../services/modal-data-pass.service'
import { ModalController, ModalOptions, Modal } from 'ionic-angular';
import { CampaignCreatorComponent } from '../../components/campaign-creator/campaign-creator';

/**
 * Generated class for the PrincipalMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'principal-menu',
	templateUrl: 'principal-menu.html'
})
export class PrincipalMenuComponent {

	constructor(private modalCtrl:ModalController, private modalService:ModalService) {

	}

	presentCampaignCreator(){
		const modalOptions: ModalOptions = {
	    	enableBackdropDismiss: false,
	    	cssClass : 'newCampaignCss'
	    };

	    const modalData = {
	      
	    };

	    const modal: Modal = this.modalCtrl.create(CampaignCreatorComponent, { data: modalData }, modalOptions);

	    modal.present();
	}

	onCampaignSelectorClicked(){
		this.modalService.viewChanged.emit(1)
	}
	/*
  	Falta:
  		- Función para lanzar preferences
  	*/
}
