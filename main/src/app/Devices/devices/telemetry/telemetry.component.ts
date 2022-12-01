import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DevicesService } from 'src/app/Devices/device.service';






@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.component.html',
  styleUrls: ['./telemetry.component.scss']
})
export class TelemetryComponent implements OnInit {

  public telems !: any[] ; 
  devices: any ; 
  
  
  routeSub !: Subscription;
  deviceid!: number;
  

  
  constructor(private deviceService : DevicesService ,
    private activatedRoute: ActivatedRoute,
      //@Inject(MAT_DIALOG_DATA) public data : any , 
     // private dialogRef : MatDialogRef<ListDevicesComponent> ,
     ) {
      
  }

  ngOnInit(): void {
   
   this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
    this.deviceid = params['id'];
    this.getDevicesTelem(this.deviceid);



  
   

  
  });
  }



  getDevicesTelem(id : number ){
    this.deviceService.get(id)
    .subscribe({
      next:(res) => {
        this.devices = res ; 
       this.telems = res.telems ; 
        
       
       
       }
    })  

  }

}
