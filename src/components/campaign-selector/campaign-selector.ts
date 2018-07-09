import { Component } from '@angular/core';

/**
 * Generated class for the CampaignSelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'campaign-selector',
  templateUrl: 'campaign-selector.html'
})
export class CampaignSelectorComponent {

  text: string;

  constructor() {
    console.log('Hello CampaignSelectorComponent Component');
    this.text = 'Hello World';
  }
  /*
  Falta:
  	- View
  	- Función para volver a menú principal cambiando el texto de la derecha
  */

}
