import { DatePipe } from '@angular/common';
import { Component, OnInit , Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog-asset-content',
  templateUrl: './dialog-asset-content.component.html',
  styleUrls: ['./dialog-asset-content.component.scss']
})
export class DialogAssetContentComponent implements OnInit {

  action: string;
    local_data: any;
    selectedImage: any = '';
    joiningDate: any = '';
    
      constructor(
      public datePipe: DatePipe,
      public dialogRef: MatDialogRef<DialogContentComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any 
      ) {
  
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
