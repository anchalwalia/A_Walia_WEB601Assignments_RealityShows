import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newCardContent: any = {};
  @Output() createEvent = new EventEmitter<any>();


  addCardContent(){
    this.createEvent.emit(this.newCardContent);
    this.newCardContent = {};
  }
}
