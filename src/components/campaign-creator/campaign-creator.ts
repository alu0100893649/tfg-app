import { Component, OnInit } from '@angular/core';
import { ViewController, ModalController, AlertController } from 'ionic-angular';
import { DriveFilePickerComponent } from '../../components/drive-file-picker/drive-file-picker';
import { ModalService } from '../../services/modal-data-pass.service'
import { Storage } from '@ionic/storage';

@Component({
    selector: 'campaign-creator',
    templateUrl: 'campaign-creator.html'
})
export class CampaignCreatorComponent implements OnInit {
    icon:string = "cloud"
    name:string = ""
    desc:string = ""
    date:number;
    imgRef:any = {name:''};

    constructor(private storage: Storage, private viewCtrl: ViewController, private modalCtrl: ModalController, 
                private modalService: ModalService, private alertCtrl: AlertController) {
      
    }

    ngOnInit(){
        this.modalService.selectedRefImg.subscribe((image_data) => {
              this.imgRef = image_data;
        })
    }

    openPicker(){
        let pickerModal = this.modalCtrl.create(DriveFilePickerComponent);
        pickerModal.present();
        if(this.icon == 'cloud'){
        	this.icon = 'folder';
        }
    }

    cleanName(){
        this.name = ''
    }
    cleanDesc(){
        this.desc = ''
    }
    cleanImgRef(){
        this.imgRef = {name:''};
    }

    createCampaign(){
        if(this.name == ''){
            this.presentAlert()
        } else {
            this.date = Date.now();
            this.storage.get('campaigns').then((campaigns) => {
                let name = this.name
                let data = {
                    desc: this.desc,
                    date: this.date,
                    imgRef: this.imgRef,
                }
                if(campaigns == null){
                    let campns = {}
                    campns[name] = data
                    this.storage.set('campaigns', campns).then(() => {
                        this.cleanName()
                        this.cleanDesc()
                        this.cleanImgRef()
                    })
                } else {
                    let campns = campaigns
                    campns[name] = data
                    this.storage.set('campaigns', campns).then(() => {
                        this.cleanName()
                        this.cleanDesc()
                        this.cleanImgRef()
                    })
                }
            });
        }
    }

    dismiss(){
    	this.viewCtrl.dismiss();
    }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Woops! Name It!',
            subTitle: 'You need to give a name in order to create a campaign. If the name already exists, campaign configuration may be deleted',
            buttons: ['Dismiss']
        });
        alert.present();
    }

}
