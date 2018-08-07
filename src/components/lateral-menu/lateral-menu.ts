import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'lateral-menu',
	templateUrl: 'lateral-menu.html'
})
export class LateralMenuComponent implements OnInit {
	@Input("campaign") campaign:any;
	@Input("user") user:any;
	folders:any;
	
	constructor() {
		;
	}

	ngOnInit(){
		this.folders = [{'name':'search', 'actual': 'root', 'info':'none'}];
		for(var key in this.campaign.preferences){
			if(this.campaign.preferences[key]){
				this.folders.push({'name':key, 'actual': this.campaign.preferences[key]['id'], 'info':this.campaign.preferences[key]})
			}
		}
		console.log(this.folders)
	}

}
