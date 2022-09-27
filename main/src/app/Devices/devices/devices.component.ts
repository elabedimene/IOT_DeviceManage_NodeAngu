import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetService } from 'src/app/Assets/asset.service';
import { DialogContentComponent } from 'src/app/Assets/dialog-content/dialog-content.component';
import { DialogComponent } from 'src/app/material-component/dialog/dialog.component';
import { DevicesService } from '../device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  device!: any[];
  assets: any;
  routeSub !: Subscription;
  assetid!: number;


  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  searchText: any;
  displayedColumns: any[] = ['#', 'Name', 'Token', 'action'];
  dataSource !: MatTableDataSource<any>;
  constructor(public dialog: MatDialog,
    public datePipe: DatePipe,
    private assetService: AssetService,
    private activatedRoute: ActivatedRoute,
    private deviceService: DevicesService
  ) { }



  ngOnInit(): void {
    this.getAllDevices()
    

  }

  getAllDevices() {
    this.deviceService.getAll()
      .subscribe({
        next: (res) => {
          console.log("from get all devices " , res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        }
      })

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        //this.addDevice();
      } else if (result.event === 'Update') {
        this.updateDevice(result.data);
      } else if (result.event === 'Delete') {
        this.deleteDevice(result.data);
      } /* else if (result.event === 'info') {
        this.ShowTelemetries(result.data);
      } */
    });
  }

  /* addDevice() {
    this.deviceService.add(this.deviceForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.deviceForm.reset;

        },
        error: (e) => console.error(e)
      });
    //this.dialog.open(AddComponent);
    //this.sort.renderRows();

  } */
  
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
}
