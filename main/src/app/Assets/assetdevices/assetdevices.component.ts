import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DevicesService } from 'src/app/Devices/device.service';
import { Asset } from 'src/app/models/asset';
import { TelemetryComponent } from 'src/app/Devices/devices/telemetry/telemetry.component';
import { AssetService } from '../asset.service';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-assetdevices',
  templateUrl: './assetdevices.component.html',
  styleUrls: ['./assetdevices.component.scss']
})
export class AssetdevicesComponent implements OnInit {

  device!: any[];
  assets: any;
  routeSub !: Subscription;
  assetid!: number;
  expandedElement!: Asset | null;



  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  searchText: any;
  displayedColumns: any[] = ['#', 'Name', 'Token', 'assetId', 'action'];
  dataSource !: MatTableDataSource<any>;

  deviceForm !: FormGroup
  constructor(public dialog: MatDialog,
    public datePipe: DatePipe,
    private assetService: AssetService,
    private activatedRoute: ActivatedRoute,
    private deviceService: DevicesService,
    private formBuilder: FormBuilder,private router: Router


  ) { }


  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.assetid = params['id'];
      this.getAssetDevices(this.assetid);

      this.deviceForm = this.formBuilder.group({
        name: [' ', Validators.required],
        Token: [' ', Validators.required],
        assetId: this.assetid,
      });
    });
  }

  openDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addDevice(result.data);
        this.reloadCurrentPage();
      } else if (result.event === 'Update') {
        this.updateDevice(result.data);
        this.reloadCurrentPage();
      } else if (result.event === 'Delete') {
        this.deleteDevice(result.data);
        this.reloadCurrentPage();
      } 
    });
  }

  addDevice(row_obj: any) {
    this.deviceService.add(row_obj)
      .subscribe({
        next: (res) => {
          console.log(res);
          
        },
        error: (e) => console.error(e)
      });
   
  }
  
  updateDevice(row_obj: any) {
    this.deviceService.put(row_obj, row_obj.id)
      .subscribe({
        next: (res) => {
          console.log(res);

        },
        error: (e) => console.error(e)
      });
  }

  deleteDevice(row_obj: any) {
    this.deviceService.delete(row_obj.id)
    .subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (e) => console.error(e)
    });
  }

   ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getAssetDevices(id: number) {
    this.assetService.findOne(id)
      .subscribe({
        next: (res) => {
          this.assets = res;
          console.log("reeeeesss", res);
          this.device = res.devices;
          console.log("res devicess", res.devices);
          this.dataSource = new MatTableDataSource(res.devices);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        }
      })

  }


  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadCurrentPage(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    });
  }

}






