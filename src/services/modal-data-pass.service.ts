import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalService {
  	public selectedRefImg = new EventEmitter()
  	public selectedPrefFolder = new EventEmitter()
  	public viewChanged = new EventEmitter()
  	public googleUserSubmitted = new EventEmitter()
  	public preferencesUpdated = new EventEmitter()
}