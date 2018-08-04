import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../../services/drive-user.service';
import { DriveService } from '../../services/drive.service';
import { ModalService } from '../../services/modal-data-pass.service';
/**
 * Generated class for the PickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'picker',
  templateUrl: 'picker.html'
})
export class PickerComponent {
	  folders:any[];
    actual_folder:any;
  	
    constructor(private userService: UserService, private navCtrl: NavController,
                private driveResource: DriveService, private gapiService: GoogleApiService, public modalService: ModalService) {
      	this.gapiService.onLoad().subscribe();
        if(!this.userService.isUserSignedIn()){
            this.userService.signIn()
        }
  	}

    ionViewCanEnter(): boolean{
       if(this.userService.isUserSignedIn()){
          this.getFolderChildren('root', this.userService.getToken());
          this.actual_folder = {name: 'Mi Unidad', id:'root'};
          return true;
      } else {
          return false;
      }
    }

  	getFolderChildren(folder, token){
        this.driveResource.getFolderChildren(folder, token).subscribe( res => this.setFolders(res));
  	}

    setActualFolder(response){
      this.actual_folder = response
    }

    setFolders(response){
        this.folders = response.files
    }

    setSelectedFolder(folder_data){
        this.modalService.selectedPrefFolder.emit(folder_data)
        this.navCtrl.pop();
    }

    onFolderClicked(item){
        this.actual_folder = item
        this.driveResource.getFolderChildren(item.id, this.userService.getToken()).subscribe( res => this.setFolders(res));
    }

  	isLoggedIn(){
        return this.userService.isUserSignedIn();
    }

    inRoot(){
        return (this.actual_folder.id == 'root')
    }

    onPrevFolderClicked(){
        if(this.actual_folder.id != 'root'){
          this.driveResource.getFolderById(this.actual_folder.parents[0], this.userService.getToken()).subscribe( res => this.setActualFolder(res))
          this.driveResource.getFolderChildren(this.actual_folder.parents[0], this.userService.getToken()).subscribe( res => this.setFolders(res));
        }
    }
}
