import { Component, Input, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../../services/drive-user.service';
import { DriveService } from '../../services/drive.service';
import { ModalService } from '../../services/modal-data-pass.service';

/**
 * Generated class for the FileTypeSearcherComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'file-type-searcher',
    templateUrl: 'file-type-searcher.html'
})
export class FileTypeSearcherComponent {
  	inRoot:boolean = true;
	
    folders:any[] = [];
    files:any[] = [];
    actual_folder:any = {id:'', name:''};
    
    @Input("user") user:any;
    @Input("type") fileType:string;
    @Input("name") rootName:string;
    @Input("id")   rootId:string;

   	constructor(private userService: UserService, private driveResource: DriveService, private modalService: ModalService) {
    
    }

    ngOnInit(){
      this.userService.setUser(this.user)  
      if(!this.userService.isUserSignedIn()){
        this.userService.signIn();
        this.getFolderChildren(this.rootId, this.fileType, this.userService.getToken());
        this.actual_folder = {name: this.rootName, id:this.rootId};
      } else {
        this.getFolderChildren(this.rootId, this.fileType, this.userService.getToken());
        this.actual_folder = {name: this.rootName, id:this.rootId};
      }
    }

  	setActualFolder(response){
      	this.actual_folder = response
      	if(this.actual_folder.id == this.rootId || this.actual_folder.parents == undefined){
      		this.inRoot = true;
      	} else {
      		this.inRoot = false;
      	}
    }

    getFolderChildren(folder, type, token){
        this.driveResource.getFolderChildren(folder, token).subscribe( res => this.setFolders(res));
        this.driveResource.getFolderFilesByType(folder, type, token).subscribe(res => this.setFiles(res));
  	}

    setRoot(response){
    	this.rootId = response.id
    	this.rootName = response.name
    	this.setActualFolder({id: this.rootId, name: this.rootName});
    	this.getFolderChildren(this.actual_folder.id, this.fileType, this.userService.getToken());
    }

    setFolders(response){
        this.folders = response.files
    }

    setFiles(response){
    	  this.files = response.files
    }

    onFolderClicked(item){
        this.setActualFolder(item)
        this.driveResource.getFolderChildren(item.id, this.userService.getToken()).subscribe( res => this.setFolders(res));
        this.driveResource.getFolderFilesByType(item.id, this.fileType, this.userService.getToken()).subscribe(res => this.setFiles(res));
    }

    onPrevFolderClicked(){
    		this.driveResource.getFolderById(this.actual_folder.parents[0], this.userService.getToken()).subscribe( res => this.setActualFolder(res))
    		this.driveResource.getFolderChildren(this.actual_folder.parents[0], this.userService.getToken()).subscribe( res => this.setFolders(res));
    		this.driveResource.getFolderFilesByType(this.actual_folder.parents[0], this.fileType, this.userService.getToken()).subscribe(res => this.setFiles(res));
    }

    //Enviar a campaign-menu para que haga el management de enviarlo a AmbienceList, GalleryList o ComponentList
    selectFile(file){
      this.modalService.selectedFileToAdd.emit(file)
    }
}
