import { Component } from '@angular/core';
import { ModalService } from '../../services/modal-data-pass.service'
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
	@ViewChild(Slides) slides: Slides;
	keys:string[]
	campaigns:any

  	constructor(private storage: Storage, private modalService:ModalService) {
    	this.storage.get('campaigns').then((campaigns) => {
    		this.setCampaigns(campaigns)
    	})
  	}

  	onBackClicked(){
		this.modalService.viewChanged.emit(0)
	}

	setCampaigns(campaigns){
		console.log(campaigns)
		this.keys = Object.keys(campaigns)
		this.campaigns = campaigns
	}

  getThumbnail(key){
    if("id" in this.campaigns[key].imgRef){
      return "https://docs.google.com/uc?export=download&id=1XCK4k0FVQh7ViBYkCoLjThmjST62Z0H7"
    } else {
      return "https://docs.google.com/uc?export=download&id=1XCK4k0FVQh7ViBYkCoLjThmjST62Z0H7"
    }
  }

  /*
  Falta:
  	- mostrar imagen seguida del nombre -> get image from key, if key = "", key redirects to default image via getThumbnail
  */

}
