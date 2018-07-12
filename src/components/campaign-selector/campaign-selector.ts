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
      return "https://docs.google.com/uc?export=download&id=" + this.campaigns[key].imgRef['id']
    } else {
      return "assets\\imgs\\default_thumbnail.png"
    }
  }

  deleteCampaign(key){
    delete this.campaigns[key];
    let index = this.keys.indexOf(key);
    if (index > -1) {
      this.keys.splice(index, 1);
    }
    this.storage.set('campaigns', this.campaigns)
  }

}
