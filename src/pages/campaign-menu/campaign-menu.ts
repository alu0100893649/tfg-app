import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, NavParams } from 'ionic-angular';
import { PreferencesComponent } from '../../components/preferences/preferences';
import { Storage } from '@ionic/storage';
import { GridsterModule, GridsterConfig, GridsterItem, DisplayGrid } from 'angular-gridster2';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../../services/drive-user.service';
import { DriveService } from '../../services/drive.service';
import { ModalService } from '../../services/modal-data-pass.service';
import { Platform } from 'ionic-angular';

import { ModuleViewerComponent } from '../../components/module-viewer/module-viewer';
import { DomSanitizer } from '@angular/platform-browser';

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
export class CampaignMenuPage implements OnInit {
	options: GridsterConfig;
   	dashboard: Array<GridsterItem>;

	campaign:any
	campaignName:string

	combatants:any[] // roster + monster selected
	showedComponents:any[] = [] // components in showerMenu
	showedComponentsInputs:any[] = [] // inputs de los components in showerMenu
	ambienceMusicSelected:any[] = [] // sounds selected and showed in ambience menu
	imagesSelected:any[] = [] // images selected and showed in gallery

	constructor(private userService: UserService, private driveResource: DriveService,
    			private gapiService: GoogleApiService, private modalService: ModalService,
    			private storage: Storage, private alertCtrl: AlertController, public  platform:Platform,
				public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
		
		this.gapiService.onLoad().subscribe();
        if(!this.userService.isUserSignedIn()){
            this.userService.signIn()
        }

		this.campaign = navParams.get('campaign');
		this.campaignName = navParams.get('name');
		if(this.campaign.preferences === undefined){
			this.campaign.preferences = {
				'ambience':{},
				'modules':{},
				'gallery':{},
				/*'roster':{},
				'characters':{},*/
				'legends':{},
				//'generators':{}
			}
		}

		platform.pause.subscribe(e => {
			if(this.userService.isUserSignedIn()){
				this.userService.signOut()
			}
		});

		window.addEventListener('beforeunload', () => {
			if(this.userService.isUserSignedIn()){
				this.userService.signOut()
			}
		});
	}

	ionViewCanEnter(): boolean{
		if(this.userService.isUserSignedIn()){
      		return true;
    	} else {
      		return false;
    	}		
	}

	ngOnInit(){
		this.options = {
			gridType: 'fit',
			margin: 5,
			displayGrid: DisplayGrid.None,
			outerMargin: false,
			draggable: {
			  enabled: false
			},
			resizable: {
			  enabled: false
			},
		};
		this.dashboard = [
			{x: 0, y: 0, rows: 59, cols: 25},
			{x: 0, y: 0, rows: 60, cols: 75},
			{x: 0, y: 0, rows: 40, cols: 100}
		];

		this.modalService.selectedFileToAdd.subscribe((file) =>{
			if(file.mimeType.includes('text/plain') || file.mimeType.includes('document')){
				console.log('document -> función para procesar texto')
			} else if (file.mimeType.includes('mp3') || file.mimeType.includes('wav')){
				this.ambienceMusicSelected.push(file)
			} else if (file.mimeType.includes('pdf')){
				this.showedComponentsInputs.push(file)
				var moduleComponent = ModuleViewerComponent
				this.showedComponents.push(moduleComponent)
			} else if (file.mimeType.includes('jpeg') || file.mimeType.includes('png')){
				this.imagesSelected.push(file)
			}
		})

		this.modalService.trackDeleted.subscribe((index) =>{
			this.ambienceMusicSelected.splice(index, 1)
		})

		this.modalService.imgDeleted.subscribe((index) =>{
			this.imagesSelected.splice(index, 1)
		})
	}

	openPreferences(){
		let preferencesModal = this.modalCtrl.create(PreferencesComponent, { 'prefs': this.campaign.preferences } , {enableBackdropDismiss: false});
        preferencesModal.onDidDismiss(data => {
            this.campaign.preferences = data.folders_dict
			this.modalService.preferencesUpdated.emit(this.campaign)
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
	    this.userService.signOut()
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
