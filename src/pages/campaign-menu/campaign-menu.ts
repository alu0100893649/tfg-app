import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, NavParams } from 'ionic-angular';
import { PreferencesComponent } from '../../components/preferences/preferences';
import { Storage } from '@ionic/storage';

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
	campaignName:string
	combatants:any // roster + monster selected
	showedComponents:any // components in showerMenu
	folders:any = [{'name':'search','info':'INFO IN SEARCH COMPONENT'}]
	constructor(private storage: Storage, private alertCtrl: AlertController,
				public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
		this.campaign = navParams.get('campaign');
		this.campaignName = navParams.get('name');
		if(this.campaign.preferences === undefined){
			this.campaign.preferences = {
				'ambience':{},
				'modules':{},
				'gallery':{},
				'roster':{},
				'chars':{},
				'legends':{},
				'generators':{}
			}
		}
		for(var key in this.campaign.preferences){
			if(this.campaign.preferences[key]){
				this.folders.push({'name':key, 'actual': this.campaign.preferences[key]['id'], 'info':this.campaign.preferences[key]})
			}
		}
		console.log(this.folders)
	}

	openPreferences(){
		let preferencesModal = this.modalCtrl.create(PreferencesComponent, { 'prefs': this.campaign.preferences } , {enableBackdropDismiss: false});
        preferencesModal.onDidDismiss(data => {
            this.campaign.preferences = data.folders_dict
            for (let key in this.campaign.preferences){
				if(this.campaign.preferences[key] != {}){

				}
			}
        });
        preferencesModal.present();
	}

	async ionViewCanLeave(){
		const shouldLeave = await this.confirmLeave();
		//Usar también para guardar las cosas abiertas de la campaña
		this.storage.get('campaigns').then((campaigns) => {
	        let name = this.campaign.name
	        let data = {
	            desc: this.campaign.desc,
	            date: this.campaign.date,
	            imgRef: this.campaign.imgRef,
	            preferences: this.campaign.preferences
	        }
	        let campns = {}
	        if(campaigns == null){
                campns[this.campaignName] = this.campaign
            } else {
                let campns = campaigns
                campns[this.campaignName] = this.campaign
            }
            campns[this.campaignName] = this.campaign
            this.storage.set('campaigns', campns).then(() => {
                this.storage.get('campaigns').then((campaigns)=>{
                	console.log(campaigns)
                })
            })	        
	    });
    	return shouldLeave;
	}

	confirmLeave(): Promise<Boolean> {
	    let resolveLeaving;
	    const canLeave = new Promise<Boolean>(resolve => resolveLeaving = resolve);
	    const alert = this.alertCtrl.create({
			title: 'Confirm leave',
			message: 'Do you want to leave the page?',
			buttons: [
				{
					text: 'No',
					role: 'cancel',
					handler: () => resolveLeaving(false)
				},
				{
					text: 'Yes',
					handler: () => resolveLeaving(true)
				}
			]
	    });
	    alert.present();
	    return canLeave
  	}

}
