import { Component, OnInit  } from '@angular/core';
import { ModalService } from '../../services/modal-data-pass.service'

/**
 * Generated class for the CustomTextComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-text',
  templateUrl: 'custom-text.html'
})
export class CustomTextComponent implements OnInit{
	title: string = 'Dear Game Master:';
	content: string = "<p>texto de bienvenida</p></br><p>texto de uso</p></br><p>texto de agradecimiento</p></br><p>texto de contacto</p>";
	onSelector:number = 0;

	constructor(private modalService:ModalService) {
		
	}

	ngOnInit(){
		this.modalService.viewChanged.subscribe((view) =>{
            this.onSelector = view;
            this.updateText()
        })
	}
	
	updateText(){
		if(this.onSelector == 0){
			this.title = 'Dear Game Master:';
			this.content = "<p>texto de bienvenida</p></br><p>texto de uso</p></br><p>texto de agradecimiento</p></br><p>texto de contacto</p>";
		} else if (this.onSelector == 1){
			this.title = 'Oh! Adventures!';
			this.content = "<p>texto de inspiración</p></br><p>texto de novelas al uso</p>";
		}
	}

}
