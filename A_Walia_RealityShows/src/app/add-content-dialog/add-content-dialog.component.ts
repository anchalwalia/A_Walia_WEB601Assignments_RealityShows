import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent {
  newCardContent: any = {};

  constructor(public dialog:MatDialogRef<AddContentDialogComponent>){}

  addCardContent(){
    this.dialog.close(this.newCardContent);
  }
}
