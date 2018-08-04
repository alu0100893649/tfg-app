import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello CentralMenuComponent Component');
    this.text = 'Hello World';
  }

}
