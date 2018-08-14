import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'creature-viewer',
  templateUrl: 'creature-viewer.html'
})
export class CreatureViewerComponent {
  	@Input ("name") name:string;
  	@Input ("category") category:string;
  	@Input ("quickness") quickness:number;
  	@Input ("health") health:number;
  	@Input ("defense") defense:number;
  	@Input ("lore") lore:number;
  	@Input ("actions") actions:number;
  	@Input ("number") number:number;

  	constructor() {
        
  	}

    ngOnInit(){

    }
}
