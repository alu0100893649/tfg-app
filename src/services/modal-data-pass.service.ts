import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalService {
  	public selectedRefImg = new EventEmitter()
  	public selectedPrefFolder = new EventEmitter()
  	public viewChanged = new EventEmitter()
  	public preferencesUpdated = new EventEmitter()
  	public selectedFileToAdd = new EventEmitter()
  	public trackDeleted = new EventEmitter()
  	public imgDeleted = new EventEmitter()
}