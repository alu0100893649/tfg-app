import { Component,Input } from '@angular/core';
import { ModalService } from '../../services/modal-data-pass.service';
/**
 * Generated class for the GalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent {
	@Input () images:any[];

	constructor(private modalService:ModalService) {
	
	}

	removeImg(index){
		this.modalService.imgDeleted.emit(index);
	}
}
