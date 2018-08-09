import { Component } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the ModuleViewerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'module-viewer',
  templateUrl: 'module-viewer.html'
})
export class ModuleViewerComponent {
	url:any;
	pdf_data:any;
	mimeType:'application/pdf';
	options: DocumentViewerOptions = {
  		title: ''
	}

  	constructor(private document: DocumentViewer, private sanitizer: DomSanitizer) {
  		this.pdf_data = {
  			title:"darker_dungeons_v1_3.pdf",
  			ID:'17zBCc7JWN8TYkIEKX0lDK8TfrWhc1RP7'
  		};
  		this.options = {
  			title: this.pdf_data.title
  		};
  		this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/' + this.pdf_data.ID + '/preview');
  	}

}
