import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset/asset.component';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AssetRoutes } from './asset.routing';
import { AssetdevicesComponent } from './assetdevices/assetdevices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogContentComponent } from './dialog-content/dialog-content.component';


@NgModule({
  declarations: [
    AssetComponent,
    AssetdevicesComponent, DialogContentComponent],
  imports: [
    CommonModule,

    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(AssetRoutes),



    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,

    NgApexchartsModule,
    PerfectScrollbarModule,

    DragDropModule,

  ]
})
export class AssetModule { }
