import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit{
  accordionExpanded = false;
  @ViewChild("cc") cardContent: any;
 
  @Input("title") title: string;

  icon: string = "arrow-forward"

  constructor(private renderer: Renderer) {
    
  }

  ngOnInit(){
  	this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 250ms, padding 250ms");
  }

  toggleAccordion(){
  	if(this.accordionExpanded){
  		this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
  		this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");  		
  	} else{
  		this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "none");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "min-height", "100%");
  		this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
  	}
  	this.accordionExpanded = !this.accordionExpanded;
  	this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }
}
