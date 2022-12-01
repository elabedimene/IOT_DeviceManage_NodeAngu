import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TelemetryComponent } from 'src/app/Devices/devices/telemetry/telemetry.component';
import { Asset } from 'src/app/models/asset';
import { AssetService } from '../asset.service';
import { AssetComponent } from '../asset/asset.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

 
    action: string;
    local_data: any;
    selectedImage: any = '';
    joiningDate: any = '';
    
    assets: Asset[] = [];

    constructor(
      public datePipe: DatePipe,
      public dialogRef: MatDialogRef<DialogContentComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any , private AssetService: AssetService,
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
  
    /*getAllAssets() {
      this.AssetService.getAll().subscribe((data: Asset[]) => {
        this.assets = data;
        console.log(this.assets);
      })
  
    }*/

 /*assControl = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  asset = this.assets ; */
  
}
