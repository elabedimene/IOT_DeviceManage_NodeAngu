import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit,Input, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Asset } from 'src/app/models/asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
 assets: Asset[] = [];
  constructor(private dialog: MatDialog,
    private AssetService: AssetService,
    private router: Router) { }

    
  ngOnInit(): void {
    this.getAllAssets()
  }


  getAllAssets() {
    this.AssetService.getAll().subscribe((data: Asset[]) => {
      this.assets = data;
      console.log(this.assets);
    })

  }

  openDialog(action: string, obj: any): void {
    /* obj.action = action;
    const dialogRef = this.dialog.open(EmployeeDialogContent, {
        data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result.event === 'Add') {
            this.addRowData(result.data);
        } else if (result.event === 'Update') {
            this.updateRowData(result.data);
        } else if (result.event === 'Delete') {
            this.deleteRowData(result.data);
        }
    }); */
}

  applyFilter(event: Event): void {
     const filterValue = (event.target as HTMLInputElement).value;
    this.assets = this.filter(filterValue); 
  }

   filter(v: string): Asset[] {
    return this.assets.filter(x => x.name.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  } 

  ddlChange(ob: any): void {
    const filterValue = ob.value;
    if (filterValue === 'All') {
        this.getAllAssets()
    }
  }
 /*  ShowDevices(id: any): void {
    this.router.navigate(['assets', id]);
  } */










}


