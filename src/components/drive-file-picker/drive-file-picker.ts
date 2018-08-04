import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../../services/drive-user.service';
import { DriveService } from '../../services/drive.service';
import { ModalService } from '../../services/modal-data-pass.service';
/**
 * Generated class for the DriveFilePickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'drive-file-picker',
  templateUrl: 'drive-file-picker.html'
})
export class DriveFilePickerComponent {
	rootId:string = '';
	rootName:string = '';
	inRoot:boolean = true;
	
	folders:any[] = [];
	images:any[] = [];
    actual_folder:any = {id:'', name:''};

  	constructor(private userService: UserService, private driveResource: DriveService, private navCtrl:NavController,
  				private gapiService: GoogleApiService, private modalService: ModalService) {
    	this.gapiService.onLoad().subscribe();
        if(!this.userService.isUserSignedIn()){
            this.userService.signIn()
        }
    }

    ionViewCanEnter(): boolean{
   		if(this.userService.isUserSignedIn()){
   			  this.driveResource.getRootId(this.userService.getToken()).subscribe(res => this.setRoot(res));
      		return true;
    	} else {
      		return false;
    	}
  	}

    setActualFolder(response){
      	this.actual_folder = response
      	if(this.actual_folder.id == this.rootId){
      		this.inRoot = true;
      	} else {
      		this.inRoot = false;
      	}
    }

    getFolderChildren(folder, token){
        this.driveResource.getFolderChildren(folder, token).subscribe( res => this.setFolders(res));
        this.driveResource.getFolderImages(folder, token).subscribe(res => this.setImages(res));
  	}

    setRoot(response){
    	this.rootId = response.id
    	this.rootName = response.name
    	this.setActualFolder({id: this.rootId, name: this.rootName});
    	this.getFolderChildren(this.actual_folder.id, this.userService.getToken());
    }

    setFolders(response){
        this.folders = response.files
    }

    setImages(response){
    	this.images = response.files
    }

    onFolderClicked(item){
        this.setActualFolder(item)
        this.driveResource.getFolderChildren(item.id, this.userService.getToken()).subscribe( res => this.setFolders(res));
        this.driveResource.getFolderImages(item.id, this.userService.getToken()).subscribe(res => this.setImages(res));
    }

    onPrevFolderClicked(){
		this.driveResource.getFolderById(this.actual_folder.parents[0], this.userService.getToken()).subscribe( res => this.setActualFolder(res))
		this.driveResource.getFolderChildren(this.actual_folder.parents[0], this.userService.getToken()).subscribe( res => this.setFolders(res));
		this.driveResource.getFolderImages(this.actual_folder.parents[0], this.userService.getToken()).subscribe(res => this.setImages(res));
    }

    setSelectedImage(item){
    	this.modalService.selectedRefImg.emit(item)
        this.navCtrl.pop();
    }
}
