import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal-data-pass.service';
/**
 * Generated class for the CentralMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'central-menu',
	templateUrl: 'central-menu.html'
})
export class CentralMenuComponent {
	@Input("showedComponents") showedComponents:any[];
	@Input("showedComponentsInputs") showedComponentsInputs:any[];
	@Input("user") user:any;
	
	constructor(private modalService:ModalService) {

	}

	removeSlide(index){
		this.modalService.slideDeleted.emit(index);
	}
}
