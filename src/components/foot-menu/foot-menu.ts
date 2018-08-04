import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello FootMenuComponent Component');
    this.text = 'Hello World';
  }

}
