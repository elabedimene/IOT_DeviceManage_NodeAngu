import { Routes } from '@angular/router';
import { TelemetryComponent } from 'src/app/Devices/devices/telemetry/telemetry.component';
import { DevicesComponent } from './devices.component';

export const DeviceRoutes: Routes = [
  {
    path: '',
    component: DevicesComponent,
     data: {
      
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Devices' }
      ]
    } 
  },


  { path: ':id', component: TelemetryComponent,
  data: {
    //title: 'Assets',
    urls: [
      { title: 'Dashboard', url: '/dashboard' },{ title: 'Devices', url: '/devices' },
      { title: 'Telemetry'  }
    ]
  }  
}


];

