import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal-data-pass.service';

@Component({
	selector: 'lateral-menu',
	templateUrl: 'lateral-menu.html'
})
export class LateralMenuComponent implements OnInit {
	@Input("campaign") campaign:any;
	@Input("user") user:any;
	folders:any;
	
	constructor(public modalService:ModalService) {
		;
	}

	ngOnInit(){
		this.modalService.preferencesUpdated.subscribe((campaign) => {
			this.campaign = campaign
			this.setFolders(campaign)
		})
		this.setFolders(this.campaign)
	}

	setFolders(campaign){
		this.folders = [{'name':'search', 'actual': 'root', 'info': {
																'name':'Mi Unidad',
																'id':'root'
															} 
		}];
		for(var key in this.campaign.preferences){
			if(this.campaign.preferences[key]){

				this.folders.push({'name':key, 'actual': this.campaign.preferences[key]['id'], 'info':this.campaign.preferences[key]})
			}
		}
		console.log(this.folders)
	}

}
