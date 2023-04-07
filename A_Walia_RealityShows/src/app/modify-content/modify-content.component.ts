import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  @Output() createEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog){}

  addCardContentDialog(){
    this.dialog.open(AddContentDialogComponent).afterClosed().subscribe(newShow => this.createEvent.emit(newShow));
  }

}
