import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalService {
  	public selectedRefImg = new EventEmitter()
  	public viewChanged = new EventEmitter()
}