import { Component } from '@angular/core';
import { CustomTextComponent } from '../../components/custom-text/custom-text';
/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
	title: string = 'My Default Title';
	note: string = "My Default Text";
  	text: string;

  	constructor() {
    	console.log('Hello MenuComponent Component');
    	this.text = 'Hello World';
  	}

}
