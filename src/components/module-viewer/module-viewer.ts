import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
'https://drive.google.com/file/d/' + this.file.id + '/preview'
 */
@Component({
  selector: 'module-viewer',
  templateUrl: 'module-viewer.html'
})
export class ModuleViewerComponent {
  	url:any = '';
  	@Input ("id") id:string;
    @Input ("name") name:string;

  	constructor(private sanitizer:DomSanitizer) {
        
  	}

    ngOnInit(){
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/' + this.id + '/preview');
    } 

}
