import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { DeviceRoutes } from './devices.routing';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DialogContentComponent } from 'src/app/Assets/dialog-content/dialog-content.component';
import { AssetModule } from 'src/app/Assets/asset.module';
import { TelemetryComponent } from './telemetry/telemetry.component';

import { NgApexchartsModule } from 'ng-apexcharts';

import { CdkTableModule } from '@angular/cdk/table';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomFormsModule } from 'ngx-custom-validators';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChartjsComponent } from 'src/app/Chart/chartjs/chartjs.component';



@NgModule({
  declarations: [
    DevicesComponent ,TelemetryComponent ,ChartjsComponent,
  ],
  imports: [
    CommonModule, DemoMaterialModule,  
    FlexLayoutModule,
    RouterModule.forChild(DeviceRoutes),
    CustomFormsModule,
    
    NgxPaginationModule,
    Ng2SearchPipeModule,

    NgApexchartsModule,
    PerfectScrollbarModule,

    DragDropModule,
    CdkTableModule,
    ChartistModule,
    ChartsModule,
    NgxChartsModule
  ]
})
export class DevicesModule { }
