import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal-data-pass.service'; // Si no funciona el cambiarlo aquí, tirar de modelService

@Component({
  selector: 'ambience',
  templateUrl: './ambience.html',
})
export class AmbienceComponent implements OnInit {
  @Input("tracks") tracks: any[];

  constructor(private modelService:ModalService) {
    
  }

  ngOnInit() { }

  removeTrack(index){
    this.modelService.trackDeleted.emit(index)
  }
}
