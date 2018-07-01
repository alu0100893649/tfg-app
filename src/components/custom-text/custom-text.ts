import { Component, Input  } from '@angular/core';

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
export class CustomTextComponent {
	@Input() title: string;
	@Input() content: string;

	constructor() {
		console.log('Hello CustomTextComponent Component');
	}

}
