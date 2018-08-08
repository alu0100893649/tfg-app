import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { UserService } from '../../services/drive-user.service';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

  	constructor(private userService: UserService, public navCtrl: NavController, public platform:Platform) {
  		platform.pause.subscribe(e => {
			if(this.userService.isUserSignedIn()){
				this.userService.signOut()
			}
		});

		window.addEventListener('beforeunload', () => {
			if(this.userService.isUserSignedIn()){
				this.userService.signOut()
			}
		});
  	}

}
