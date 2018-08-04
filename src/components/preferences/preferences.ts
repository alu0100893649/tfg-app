import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ViewController } from 'ionic-angular';
import { PickerComponent } from '../picker/picker';
import { ModalService } from '../../services/modal-data-pass.service'

/**

 * Generated class for the PreferencesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'preferences',
  templateUrl: 'preferences.html'
})
export class PreferencesComponent implements OnInit{
	folder_types:string[] = ['chars','legends','ambience', 'modules', 'gallery', 'roster', 'generators']
    folders_dict:any = {};
    folder_selected:string;
    icon:string = "cloud"
    
  	constructor(public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, private modalService: ModalService) {
        let prefs = navParams.get('prefs')
        if (prefs != null){
            this.folders_dict = prefs
        } else {
            for(let folder of this.folder_types){
                this.folders_dict[folder] = ''
            }
        }
    }

    ngOnInit(){
        this.modalService.selectedPrefFolder.subscribe((folder_id) => {
            if (this.folder_selected == 'legends'){
                this.folders_dict['legends'] = folder_id
            } /*else if (this.folder_selected == 'chars') {
                this.folders_dict['chars'] = folder_id
            } */ else if (this.folder_selected == 'ambience') {
                this.folders_dict['ambience'] = folder_id
            } else if (this.folder_selected == 'modules') {
                this.folders_dict['modules'] = folder_id
            } else if (this.folder_selected == 'gallery') {
                this.folders_dict['gallery'] = folder_id
            } /*else if (this.folder_selected == 'roster'){
                this.folders_dict['roster'] = folder_id
            } else if (this.folder_selected == 'generators'){
                this.folders_dict['generators'] = folder_id
            } */
        })
    }

    presentPickerModal(folder) {
        this.folder_selected = folder
        let pickerModal = this.modalCtrl.create(PickerComponent);
        pickerModal.present();
        if(this.icon == 'cloud'){
            this.icon = 'folder';
        }
    }

    dismiss() {
       var folders = this.folders_dict
       let data = { 'folders_dict': folders };
       this.viewCtrl.dismiss(data);
    }

}
