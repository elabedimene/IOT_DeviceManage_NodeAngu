import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit,Input, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Asset } from 'src/app/models/asset';
import { AssetService } from '../asset.service';
import { DialogAssetContentComponent } from '../dialog-asset-content/dialog-asset-content.component';

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


  openDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogAssetContentComponent, {
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addAsset(result.data);
        this.reloadCurrentPage();
      } else if (result.event === 'Delete') {
        this.deleteDevice(result.data);
        this.reloadCurrentPage();
      } 
    });
  }

  addAsset(row_obj: any) {
    this.AssetService.add(row_obj)
      .subscribe({
        next: (res) => {
          console.log(res);
                 },
        error: (e) => console.error(e)
      });
   
  } 
  
 
  deleteDevice(row_obj: any) {
    this.AssetService.delete(row_obj.id)
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


