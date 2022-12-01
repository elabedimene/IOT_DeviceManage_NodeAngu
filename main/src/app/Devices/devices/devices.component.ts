import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  displayedColumns: any[] = ['#', 'Name', 'Token', 'assetId', 'action'];
  dataSource !: MatTableDataSource<any>;
  constructor(public dialog: MatDialog,
    public datePipe: DatePipe,
    private assetService: AssetService,
    private activatedRoute: ActivatedRoute,
    private deviceService: DevicesService,
    private router: Router  ) { }



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


  reloadCurrentPage(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    });
  }
}
