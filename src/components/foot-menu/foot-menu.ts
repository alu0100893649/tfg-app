import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the FootMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'foot-menu',
	templateUrl: 'foot-menu.html'
})
export class FootMenuComponent {
	@Input("ambienceMusicSelected") ambienceMusicSelected:any[];
	@Input("imagesSelected") imagesSelected:any[];
	@Input("user") user:any;
	actual_tab:number;

	constructor() {
		this.actual_tab = 0
	}

	onTab(index){
		this.actual_tab = index
	}
}
