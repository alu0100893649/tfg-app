import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { PreferencesComponent } from '../../components/preferences/preferences';
/**
 * Generated class for the CampaignMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-campaign-menu',
	templateUrl: 'campaign-menu.html',
})
export class CampaignMenuPage {
	campaign:any
	roster:any
	showedComponents:any

	constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
		this.campaign = navParams.get('campaign');
		if(this.campaign.preferences === undefined){
			this.campaign.preferences = {
				'ambience':'',
				'modules':'',
				'gallery':'',
				'roster':'',
				'chars':'',
				'legends':'',
				'generators':''
			}
		}
		console.log(this.campaign)
	}

	openPreferences(){
		let preferencesModal = this.modalCtrl.create(PreferencesComponent, { 'prefs': this.campaign.preferences } , {enableBackdropDismiss: false});
        preferencesModal.onDidDismiss(data => {
            this.campaign.preferences = data.folders_dict
        });
        preferencesModal.present();
	}

	ionViewDidLoad() {
	    console.log('ionViewDidLoad CampaignMenuPage');
	}

}
