import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

 
    action: string;
    // tslint:disable-next-line - Disables all
    local_data: any;
    selectedImage: any = '';
    joiningDate: any = '';
  
    constructor(
      public datePipe: DatePipe,
      public dialogRef: MatDialogRef<DialogContentComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
  
      this.local_data = { ...data };
      this.action = this.local_data.action;
  
    }

    
    ngOnInit(): void {
    }
  
    doAction(): void {
      this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog(): void {
      this.dialogRef.close({ event: 'Cancel' });
    }
  
  
  
}
